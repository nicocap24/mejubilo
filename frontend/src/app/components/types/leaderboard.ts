export interface LeaderboardUser {
  id: string;
  username: string;
  name: string;
  profit: number;
  rank: number;
  score: number;
  change: number;
  avatar?: string;
  afpBalance: number;
  afpName: string;
  afpFundType: string;
}

export interface LeaderboardProps {
  users: LeaderboardUser[];
  title?: string;
  subtitle?: string;
} 