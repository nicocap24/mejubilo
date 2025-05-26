import { TimeSeriesDataPoint, EconomicIndicator, FetchEconomicDataParams } from './types';

// Mock Data
const mockSpyData: EconomicIndicator = {
  id: "SPY",
  name: "SPDR S&P 500 ETF",
  type: "assetPrice",
  unit: "USD",
  data: [
    { date: "2023-10-26", value: 413.68 },
    { date: "2023-10-25", value: 418.64 },
    { date: "2023-10-24", value: 421.75 },
  ],
  lastRefreshed: new Date().toISOString(),
  source: "Mock Data",
};

const mockCpiData: EconomicIndicator = {
  id: "CPI",
  name: "Consumer Price Index",
  type: "inflation",
  unit: "%",
  data: [
    { date: "2023-09-01", value: 3.7 },
    { date: "2023-08-01", value: 3.7 },
    { date: "2023-07-01", value: 3.2 },
  ],
  lastRefreshed: new Date().toISOString(),
  source: "Mock Data",
};

const mockTreasuryYieldData: EconomicIndicator = {
  id: "DGS10",
  name: "10-Year Treasury Yield",
  type: "interestRate",
  unit: "%",
  data: [
    { date: "2023-10-01", value: 4.57 },
    { date: "2023-09-01", value: 4.29 },
    { date: "2023-08-01", value: 4.18 },
  ],
  lastRefreshed: new Date().toISOString(),
  source: "Mock Data",
};

const mockGdpData: EconomicIndicator = {
  id: "GDPC1",
  name: "Real Gross Domestic Product",
  type: "gdp",
  unit: "Billions of Dollars",
  data: [
    { date: "2023-07-01", value: 22138.3 }, // Q3 2023
    { date: "2023-04-01", value: 21988.7 }, // Q2 2023
    { date: "2023-01-01", value: 21870.4 }, // Q1 2023
  ],
  lastRefreshed: new Date().toISOString(),
  source: "Mock Data",
};

const mockDataMap = new Map<string, EconomicIndicator>([
  ["SPY", mockSpyData],
  ["CPI", mockCpiData],
  ["DGS10", mockTreasuryYieldData],
  ["GDPC1", mockGdpData],
]);

const ALPHA_VANTAGE_BASE_URL = "https://www.alphavantage.co/query";

// Predefined mappings for EconomicIndicator properties
const indicatorMappings: {
  [key: string]: Omit<EconomicIndicator, "data" | "lastRefreshed" | "source" | "id">;
} = {
  TIME_SERIES_DAILY_ADJUSTED: {
    name: "Stock/ETF Time Series",
    type: "assetPrice",
    unit: "USD",
  },
  CPI: {
    name: "Consumer Price Index",
    type: "inflation",
    unit: "%",
  },
  REAL_GDP: {
    name: "Real Gross Domestic Product",
    type: "gdp",
    unit: "Billions of Dollars",
  },
  TREASURY_YIELD: {
    name: "Treasury Yield",
    type: "interestRate",
    unit: "%",
  },
  // Add more mappings as needed
};

export async function fetchEconomicData(
  params: FetchEconomicDataParams
): Promise<EconomicIndicator> {
  const {
    alphaVantageFunction,
    symbol,
    interval,
    maturity,
    apiKey,
    useMockData = false,
  } = params;

  let identifier = symbol || alphaVantageFunction;
  if (alphaVantageFunction === "TREASURY_YIELD" && maturity) {
    identifier = `${maturity.toUpperCase()}_TREASURY_YIELD`; // e.g. 10YEAR_TREASURY_YIELD
     // Attempt to map DGS10 for mock data for treasury yield for now
    if (maturity === "10year" && useMockData) identifier = "DGS10";
  }


  if (useMockData) {
    const mock = mockDataMap.get(identifier);
    if (mock) {
      console.log(`Using mock data for ${identifier}`);
      return Promise.resolve(mock);
    } else {
      return Promise.reject(
        new Error(`Mock data not found for ${identifier}`)
      );
    }
  }

  // --- Actual API Call Logic ---
  let url = `${ALPHA_VANTAGE_BASE_URL}?function=${alphaVantageFunction}&apikey=${apiKey}`;

  if (symbol) {
    url += `&symbol=${symbol}`;
  }
  if (interval) {
    // Alpha Vantage uses 'interval' for CPI, but 'outputsize' for time series, etc.
    // This needs to be handled based on the function. For now, a simple approach:
    if (alphaVantageFunction === "CPI" || alphaVantageFunction === "TREASURY_YIELD" || alphaVantageFunction === "REAL_GDP") {
      url += `&interval=${interval}`;
    } else if (alphaVantageFunction.includes("TIME_SERIES")) {
      // For TIME_SERIES_DAILY_ADJUSTED, TIME_SERIES_MONTHLY_ADJUSTED etc.
      // outputsize=compact returns latest 100, full returns all data.
      // interval can be used for intraday.
      if (interval === "daily" || interval === "weekly" || interval === "monthly") {
         // For daily, weekly, monthly time series, AV uses function names like TIME_SERIES_DAILY_ADJUSTED
         // and interval is not directly used in the same way as for CPI.
         // It's more about choosing the right TIME_SERIES_* function.
         // We'll assume 'interval' helps select the right series type if needed,
         // or could map to 'outputsize' or intraday interval later.
      } else {
        url += `&interval=${interval}`; // For intraday
      }
    }
  }
  if (maturity && alphaVantageFunction === "TREASURY_YIELD") {
    url += `&maturity=${maturity}`;
  }
   if (alphaVantageFunction === "REAL_GDP") {
    // GDP is typically quarterly or annual, AlphaVantage uses 'interval' for this
    // if interval is not specified, it might default, or we can set a default
    url += `&interval=${interval || 'quarterly'}`;
  }


  console.log(`Fetching from URL: ${url}`); // For debugging

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const rawData = await response.json();

    if (rawData["Error Message"]) {
      throw new Error(
        `Alpha Vantage API Error: ${rawData["Error Message"]}`
      );
    }
    if (rawData["Information"]) {
        // API rate limit
         throw new Error(
            `Alpha Vantage API Info: ${rawData["Information"]}`
          );
    }


    // --- Data Transformation ---
    const mapping =
      indicatorMappings[alphaVantageFunction] ||
      ({
        name: "Unknown Indicator",
        type: "assetPrice",
        unit: "N/A",
      } as Omit<EconomicIndicator, "data" | "lastRefreshed" | "source" | "id">);

    let timeSeries: TimeSeriesDataPoint[] = [];
    let responseName = mapping.name;
    let responseId = symbol || alphaVantageFunction; // Default ID

    // Determine the actual ID and Name based on the function and symbol
    if (alphaVantageFunction === "TIME_SERIES_DAILY_ADJUSTED" && symbol) {
        responseId = symbol;
        responseName = `${symbol} Daily Adjusted Closing Price`; // More specific name
    } else if (alphaVantageFunction === "CPI") {
        responseId = "CPI"; // Fixed ID for CPI
        responseName = rawData["name"] || mapping.name; // Use name from response if available
    } else if (alphaVantageFunction === "REAL_GDP") {
        responseId = "GDPC1"; // Fixed ID for Real GDP (matching FRED for example)
        responseName = rawData["name"] || mapping.name;
    } else if (alphaVantageFunction === "TREASURY_YIELD" && maturity) {
        responseId = `${maturity.toUpperCase()}_TREASURY_YIELD`;
        responseName = `${maturity} Treasury Yield`;
        if (rawData["name"]) responseName = rawData["name"]; // Use name from AV if present
    }


    // The structure of Alpha Vantage responses varies significantly
    if (alphaVantageFunction.includes("TIME_SERIES") && rawData[`Time Series (${interval || 'Daily'})`]) {
      const seriesData = rawData[`Time Series (${interval || 'Daily'})`];
      timeSeries = Object.entries(seriesData)
        .map(([date, values]: [string, any]) => ({
          date: date,
          value: parseFloat(values["4. close"] || values["5. adjusted close"]), // Prefer adjusted close
        }))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Ensure descending by date
    } else if (alphaVantageFunction === "CPI" && rawData["data"]) {
      timeSeries = rawData["data"]
        .map((point: any) => ({
          date: point.date, // Assuming date is already YYYY-MM-DD
          value: parseFloat(point.value),
        }))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (alphaVantageFunction === "REAL_GDP" && rawData["data"]) {
        timeSeries = rawData["data"]
        .map((point: any) => ({
          date: point.date,
          value: parseFloat(point.value),
        }))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (alphaVantageFunction === "TREASURY_YIELD" && rawData["data"]) {
        timeSeries = rawData["data"]
        .map((point: any) => ({
          date: point.date,
          value: parseFloat(point.value),
        }))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else {
      console.warn("Unrecognized data structure from Alpha Vantage:", rawData);
      // Attempt to find any date/value pairs if possible as a fallback
      if (Array.isArray(rawData.data)) {
        timeSeries = rawData.data.filter((d: any) => d.date && d.value !== undefined).map((d:any) => ({
            date: d.date,
            value: parseFloat(d.value)
        })).sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime());
      }
      if (timeSeries.length === 0) {
        throw new Error("Could not parse time series data from response.");
      }
    }

    return {
      id: responseId,
      name: responseName,
      type: mapping.type,
      unit: mapping.unit,
      data: timeSeries,
      lastRefreshed: new Date().toISOString(), // Or from API if available, e.g., rawData["Meta Data"]["3. Last Refreshed"]
      source: "Alpha Vantage",
    };
  } catch (error) {
    console.error("fetchEconomicData error:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
}

// Example Usage (can be commented out or moved to a test file)
/*
async function testFetch() {
  const apiKey = "YOUR_ALPHA_VANTAGE_API_KEY"; // Replace with your key if testing real calls
  const useMock = true;

  try {
    console.log("--- Fetching SPY (mock) ---");
    const spyData = await fetchEconomicData({
      alphaVantageFunction: "TIME_SERIES_DAILY_ADJUSTED",
      symbol: "SPY",
      interval: "Daily", // AV uses "Daily" in "Time Series (Daily)" key
      apiKey: apiKey,
      useMockData: useMock,
    });
    console.log("SPY Data:", JSON.stringify(spyData, null, 2));

    console.log("\n--- Fetching CPI (mock) ---");
    const cpiData = await fetchEconomicData({
      alphaVantageFunction: "CPI",
      interval: "monthly",
      apiKey: apiKey,
      useMockData: useMock,
    });
    console.log("CPI Data:", JSON.stringify(cpiData, null, 2));

    console.log("\n--- Fetching 10-Year Treasury Yield (mock) ---");
    const treasuryData = await fetchEconomicData({
      alphaVantageFunction: "TREASURY_YIELD",
      interval: "monthly",
      maturity: "10year",
      apiKey: apiKey,
      useMockData: useMock,
    });
    console.log("Treasury Data:", JSON.stringify(treasuryData, null, 2));

    console.log("\n--- Fetching Real GDP (mock) ---");
    const gdpData = await fetchEconomicData({
      alphaVantageFunction: "REAL_GDP",
      interval: "quarterly",
      apiKey: apiKey,
      useMockData: useMock,
    });
    console.log("GDP Data:", JSON.stringify(gdpData, null, 2));

    // Example of a real API call (ensure you have a valid API key and internet)
    // const useMockForRealCall = false;
    // console.log("\n--- Fetching SPY (real API) ---");
    // try {
    //   const realSpyData = await fetchEconomicData({
    //     alphaVantageFunction: "TIME_SERIES_DAILY_ADJUSTED",
    //     symbol: "SPY",
    //     interval: "Daily",
    //     apiKey: apiKey, // Replace with your actual key
    //     useMockData: useMockForRealCall,
    //   });
    //   console.log("Real SPY Data:", JSON.stringify(realSpyData, null, 2));
    // } catch (error) {
    //   console.error("Error fetching real SPY data:", error);
    // }

  } catch (error) {
    console.error("Error in testFetch:", error);
  }
}

// testFetch(); // Uncomment to run tests
*/
