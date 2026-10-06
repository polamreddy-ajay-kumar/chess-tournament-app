import React, { useMemo, useState } from 'react';
import { TournamentCard } from '../components/TournamentCard';
import { BottomNav } from '../components/BottomNav';

const tournaments = [
  {
    id: 'delhi',
    city: 'DELHI',
    prize: '1 000',
    players: 62,
    entry: '500',
    cp: 120,
    cpBonus: 140,
    rules: '10 min + 5 sec/move',
    tone: 'violet' as const,
  },
  {
    id: 'newyork',
    city: 'NEW YORK',
    prize: '5 000',
    players: 226,
    entry: '2 600',
    cp: 140,
    cpBonus: 160,
    rules: '10 min + 10 sec/move',
    tone: 'pink' as const,
  },
  {
    id: 'berlin',
    city: 'BERLIN',
    prize: '10 000',
    players: 128,
    entry: '5 500',
    cp: 160,
    cpBonus: 180,
    rules: '10 min + 15 sec/move',
    tone: 'red' as const,
  },
  {
    id: 'london',
    city: 'LONDON',
    prize: '20 000',
    players: 138,
    entry: '11 000',
    cp: 180,
    cpBonus: 200,
    rules: '10 min + 5 sec/move',
    tone: 'crimson' as const,
  },
];

interface Props {
  onJoinTournament: (tournamentId: string) => void;
}

export function TournamentLobby({ onJoinTournament }: Props) {
  const [selectedId, setSelectedId] = useState('delhi');
  const [activeTab, setActiveTab] = useState('home');

  const selectedTournament = useMemo(() => tournaments.find((t) => t.id === selectedId) ?? tournaments[0], [selectedId]);

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto px-3 pb-8">
        <div className="mt-5">
          <TournamentCard
            tournament={selectedTournament}
            onSelect={() => {
              setSelectedId(selectedTournament.id);
              onJoinTournament(selectedTournament.id);
            }}
            isActive
          />
        </div>

        <div className="mt-8 grid grid-cols-4 gap-3">
          {tournaments.map((tournament) => (
            <button
              key={tournament.id}
              onClick={() => setSelectedId(tournament.id)}
              className={`relative h-20 overflow-hidden rounded-2xl border-4 transition-all duration-200 ${
                selectedId === tournament.id ? 'border-[#f4c35d] shadow-[0_0_0_2px_rgba(255,255,255,0.15),0_8px_0_rgba(80,33,8,0.7)]' : 'border-[#cf7d39] opacity-95'
              }`}
              style={{
                background:
                  selectedId === tournament.id
                    ? 'linear-gradient(180deg, rgba(80, 35, 18, 0.9), rgba(32, 16, 10, 0.95))'
                    : 'linear-gradient(180deg, rgba(128, 63, 32, 0.9), rgba(61, 28, 18, 0.9))',
              }}
            >
              <div className="absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(0,0,0,0.18))]" />
              <div className="absolute inset-0 opacity-60" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center">
                <div className="text-2xl text-[#f8d88d]">♛</div>
                <div className="mt-1 font-display text-xs font-black uppercase tracking-[0.08em] text-[#fff4cc]">
                  {tournament.city}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
