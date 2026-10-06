export type TournamentTone = 'violet' | 'pink' | 'red' | 'crimson';

export interface TournamentCity {
  id: string;
  city: string;
  badge: string;
  accent: string;
  prize: string;
  players: number;
  entry: string;
  cp: number;
  cpBonus: number;
  rules: string;
  building: string;
  tone: TournamentTone;
}
