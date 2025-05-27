def calculate_afp_commissions(monthly_salary):
    # Convert monthly salary to annual
    annual_salary = monthly_salary * 12
    
    # Commission rates for each AFP
    afp_rates = {
        'PROVIDA': 0.0145,
        'CUPRUM': 0.0144,
        'CAPITAL': 0.0144,
        'HABITAT': 0.0127,
        'PLANVITAL': 0.0116,
        'MODELO': 0.0058,
        'UNO': 0.0049
    }
    
    # Calculate annual commission for each AFP
    results = {}
    for afp, rate in afp_rates.items():
        annual_commission = annual_salary * rate
        results[afp] = annual_commission
    
    # Find the current highest commission and potential savings
    current_highest = max(results.values())
    lowest_commission = results['UNO']
    potential_savings = current_highest - lowest_commission
    
    return results, potential_savings

def main():
    # Average male monthly salary
    monthly_salary = 1337722
    
    # Calculate commissions and savings
    commissions, savings = calculate_afp_commissions(monthly_salary)
    
    # Print results
    print("\nAnnual Commission Costs by AFP:")
    print("-" * 40)
    for afp, commission in sorted(commissions.items(), key=lambda x: x[1], reverse=True):
        print(f"{afp}: ${commission:,.2f}")
    
    print("\nPotential Annual Savings by switching to AFP UNO:")
    print(f"${savings:,.2f}")

if __name__ == "__main__":
    main() 