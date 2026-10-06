import React from 'react';

interface Tournament {
  id: string;
  city: string;
  prize: string;
  players: number;
  entry: string;
  cp: number;
  cpBonus: number;
  rules: string;
  tone: 'violet' | 'pink' | 'red' | 'crimson';
}

interface Props {
  tournament: Tournament;
  onSelect: () => void;
  isActive: boolean;
}

export function TournamentCard({ tournament, onSelect, isActive }: Props) {
  const colorMap: Record<string, string> = {
    violet: 'bg-[linear-gradient(180deg,#a95ae4,#6d3ccf)]',
    pink: 'bg-[linear-gradient(180deg,#ff819a,#8e49f0)]',
    red: 'bg-[linear-gradient(180deg,#ff5d5d,#be2c2c)]',
    crimson: 'bg-[linear-gradient(180deg,#e84a4a,#8f2a2a)]',
  };

  return (
    <button
      onClick={onSelect}
      className={`relative w-full overflow-hidden rounded-[22px] border-[4px] border-[#d18137] p-0 shadow-[0_10px_0_rgba(59,19,6,0.75)] transition-all ${colorMap[tournament.tone]}`}
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(255,150,100,0.2),_transparent_34%)]" />

      <div className="relative z-10 px-3 pb-4 pt-2">
        {/* City Logo */}
        <div className="relative mx-auto mt-3 flex w-full max-w-[320px] flex-col items-center justify-center">
          <div className="absolute inset-x-2 top-6 h-4 rounded-full bg-[#f7cf6a]/80 blur-xl" />
          <div className="relative mx-auto w-full rounded-[18px] border-[4px] border-[#efb32a] bg-[linear-gradient(180deg,#d7b24d,#f4d366)] px-5 py-4 shadow-[inset_0_-8px_0_rgba(122,71,11,0.3),0_10px_0_rgba(46,25,13,0.35)]">
            <div className="flex justify-center">
              <div className="relative flex h-16 w-24 items-center justify-center rounded-[18px] border-4 border-[#edb941] bg-[linear-gradient(180deg,#f8d46a,#d69b28)] shadow-[inset_0_-8px_0_rgba(120,71,10,0.25)]">
                <div className="absolute -top-6 h-5 w-20 rounded-full bg-[#ffb366] blur-md" />
                <span className="text-4xl">♛</span>
              </div>
            </div>
            <div className="relative mt-3 text-center font-display text-[2.8rem] font-black leading-none tracking-[0.04em] text-[#f7d20d]" style={{ WebkitTextStroke: '2px rgba(50,20,5,0.8)' }}>
              {tournament.city}
            </div>
          </div>
        </div>

        {/* CP Badges */}
        <div className="mt-4 flex items-center justify-between gap-3 px-2">
          <div className="rounded-[12px] border-[3px] border-[#f9d76a] bg-[linear-gradient(180deg,#f7c452,#f29f1f)] px-4 py-1 text-lg font-black text-[#4d2908] shadow-[0_4px_0_rgba(93,49,10,0.55)]">
            +{tournament.cp} CP
          </div>
          <div className="rounded-[12px] border-[3px] border-[#f9d76a] bg-[linear-gradient(180deg,#f7c452,#f29f1f)] px-4 py-1 text-lg font-black text-[#4d2908] shadow-[0_4px_0_rgba(93,49,10,0.55)]">
            +{tournament.cpBonus}
          </div>
        </div>

        {/* Info Panel */}
        <div className="mt-4 rounded-[18px] border-[3px] border-[#f7d36b] bg-[rgba(57,49,88,0.18)] p-3 shadow-[inset_0_-6px_0_rgba(0,0,0,0.12)]">
          {/* Prize */}
          <div className="flex items-center justify-center gap-3 rounded-[16px] border-[3px] border-[#d8c27a] bg-[linear-gradient(180deg,#c89e54,#ae7135)] px-3 py-4 text-2xl font-black text-[#f4ecff] shadow-[0_5px_0_rgba(74,35,10,0.45)]">
            <span>Prize: {tournament.prize}</span>
            <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#f4d169] bg-[linear-gradient(180deg,#f5d972,#f2ae24)] text-sm shadow-[0_3px_0_rgba(84,52,11,0.5)]">
              ◉
            </div>
          </div>

          {/* Players */}
          <div className="mt-3 rounded-[16px] border-[3px] border-[#d9d4ba] bg-[linear-gradient(180deg,#205aa9,#0a428f)] px-4 py-4 text-center font-display text-xl font-black text-[#f8f8ff] shadow-[inset_0_-6px_0_rgba(0,0,0,0.18)]">
            Players online: {tournament.players}
            <span className="ml-2 text-lg align-middle">◔</span>
          </div>

          {/* Entry Fee */}
          <div className="mt-3 rounded-[16px] border-[3px] border-[#d9d4ba] bg-[linear-gradient(180deg,#1f5ca2,#0b4a9a)] px-4 py-4 text-center font-display text-xl font-black text-[#f8f8ff] shadow-[inset_0_-6px_0_rgba(0,0,0,0.18)]">
            Entry fee: {tournament.entry}
            <span className="ml-2 text-base text-[#f6ca44]">◉</span>
          </div>

          {/* Rules */}
          <div className="mt-3 flex items-center justify-between rounded-[16px] border-[3px] border-[#d9d4ba] bg-[linear-gradient(180deg,#1d5a9d,#0c478f)] px-4 py-4 font-display text-lg font-black text-[#f9f9ff] shadow-[inset_0_-6px_0_rgba(0,0,0,0.18)]">
            <span>{tournament.rules}</span>
            <div className="ml-3 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#7ab7ff] bg-[linear-gradient(180deg,#5fcbff,#0f9ce4)] text-base font-black text-white shadow-[0_4px_0_rgba(10,72,110,0.5)]">
              i
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
