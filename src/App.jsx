import { useMemo, useState } from 'react';
import { TopBar } from './components/TopBar';
import { PassBanner } from './components/PassBanner';
import { TournamentCard } from './components/TournamentCard';
import { BottomNav } from './components/BottomNav';

const tournaments = [
  {
    id: 'delhi',
    city: 'DELHI',
    badge: '♛',
    accent: '#f66f52',
    logo: 'delhi',
    prize: '1 000',
    players: 62,
    entry: '500',
    cp: 120,
    cpBonus: 140,
    entryLabel: 'Entry fee: 500',
    rules: 'Rules: 10 min + 5 sec/move',
    building: 'delhi',
    tone: 'violet',
  },
  {
    id: 'new-york',
    city: 'NEW YORK',
    badge: '♛',
    accent: '#d43a3a',
    logo: 'newyork',
    prize: '5 000',
    players: 226,
    entry: '2 600',
    cp: 140,
    cpBonus: 160,
    entryLabel: 'Entry fee: 2 600',
    rules: 'Rules: 10 min + 10 sec/move',
    building: 'newyork',
    tone: 'pink',
  },
  {
    id: 'berlin',
    city: 'BERLIN',
    badge: '♛',
    accent: '#c73a33',
    logo: 'berlin',
    prize: '10 000',
    players: 128,
    entry: '5 500',
    cp: 160,
    cpBonus: 180,
    entryLabel: 'Entry fee: 5 500',
    rules: 'Rules: 10 min + 15 sec/move',
    building: 'berlin',
    tone: 'red',
  },
  {
    id: 'london',
    city: 'LONDON',
    badge: '♛',
    accent: '#c73a33',
    logo: 'london',
    prize: '20 000',
    players: 138,
    entry: '11 000',
    cp: 180,
    cpBonus: 200,
    entryLabel: 'Entry fee: 11 000',
    rules: 'Rules: 10 min + 5 sec/move',
    building: 'london',
    tone: 'crimson',
  },
];

function App() {
  const [selectedId, setSelectedId] = useState('delhi');

  const selectedTournament = useMemo(
    () => tournaments.find((t) => t.id === selectedId) ?? tournaments[0],
    [selectedId],
  );

  return (
    <div className="min-h-screen bg-[#2c110d] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,153,72,0.32),_rgba(0,0,0,0)_30%),linear-gradient(180deg,_#5a1c11_0%,_#2b0f0d_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
        <TopBar />
        <PassBanner />

        <div className="px-3 pb-8">
          <div className="mt-5">
            <TournamentCard
              tournament={selectedTournament}
              onSelect={() => setSelectedId(selectedTournament.id)}
              isActive
            />
          </div>
        </div>

        <div className="px-3 pb-4">
          <div className="grid grid-cols-4 gap-3">
            {tournaments.map((tournament) => (
              <button
                key={tournament.id}
                type="button"
                onClick={() => setSelectedId(tournament.id)}
                className={`relative h-20 overflow-hidden rounded-2xl border-4 transition-all duration-200 ${
                  selectedId === tournament.id
                    ? 'border-[#f4c35d] shadow-[0_0_0_2px_rgba(255,255,255,0.15),0_8px_0_rgba(80,33,8,0.7)]'
                    : 'border-[#cf7d39] opacity-95'
                }`}
                style={{
                  background: selectedId === tournament.id
                    ? 'linear-gradient(180deg, rgba(80, 35, 18, 0.9), rgba(32, 16, 10, 0.95))'
                    : 'linear-gradient(180deg, rgba(128, 63, 32, 0.9), rgba(61, 28, 18, 0.9))',
                }}
              >
                <div className="absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(0,0,0,0.18))]" />
                <div className="absolute inset-0 opacity-60" style={{ background: `radial-gradient(circle at top, ${tournament.accent} 0%, transparent 48%)` }} />
                <div className="relative z-10 flex h-full flex-col items-center justify-center">
                  <div className="text-2xl text-[#f8d88d]">{tournament.badge}</div>
                  <div className="mt-1 font-display text-xs font-black uppercase tracking-[0.08em] text-[#fff4cc]">
                    {tournament.city}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}

export default App;
