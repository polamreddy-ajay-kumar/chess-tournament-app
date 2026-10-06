import React from 'react';

export function TopBar() {
  return (
    <header className="relative overflow-hidden border-b-4 border-[#7d3d17] bg-[linear-gradient(180deg,_#d08742_0%,_#c56d2d_12%,_#8d4923_100%)] shadow-[inset_0_-5px_0_rgba(77,34,8,0.7)]">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative flex h-[52px] w-[70px] items-center justify-center rounded-[18px] border-2 border-[#f6c873] bg-[linear-gradient(180deg,#d59a52,#b96e2f)] shadow-[inset_0_-5px_0_rgba(97,56,19,0.45),0_4px_0_rgba(65,28,6,0.4)]">
            <div className="absolute inset-x-2 bottom-2 h-2 rounded-full bg-[#6d3d17]/40 blur-sm" />
            <div className="relative h-8 w-8 rounded-full border-[3px] border-[#ecb95a] bg-[radial-gradient(circle_at_center,_#f0f0f0_0%,_#d7d7d7_56%,_#b0b0b0_100%)] shadow-[0_0_0_4px_rgba(90,47,20,0.35)]" />
          </div>

          <div className="flex h-[44px] w-[54px] items-center justify-center rounded-xl border-[3px] border-[#d1d1d1] bg-[linear-gradient(180deg,#eef0ec,#a9a9a9)] shadow-[inset_0_-4px_0_rgba(55,50,52,0.2),0_4px_0_rgba(43,32,30,0.45)] text-2xl text-[#303030]">
            ⚙
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ResourceBadge type="gem" value="32" />
          <ResourceBadge type="plus" value="+" />
          <ResourceBadge type="gold" value="4 800" />
          <ResourceBadge type="plus" value="+" />
        </div>
      </div>
    </header>
  );
}

function ResourceBadge({ type, value }: { type: 'gem' | 'gold' | 'plus'; value: string }) {
  const styles: Record<string, string> = {
    gem: 'bg-[linear-gradient(180deg,#4cc0ff_0%,_#2477f3_100%)] border-[#d8ebff]',
    gold: 'bg-[linear-gradient(180deg,#ffe28a_0%,_#f5b62d_100%)] text-[#4f3009] border-[#ffd86f]',
    plus: 'bg-[linear-gradient(180deg,#ffdd7a_0%,_#f9c050_100%)] text-[#4b2908] border-[#f8d770]',
  };

  return (
    <div className={`flex h-[42px] min-w-[74px] items-center justify-center rounded-full border-[3px] px-3 font-black text-base shadow-[inset_0_-5px_0_rgba(0,0,0,0.12),0_4px_0_rgba(50,20,8,0.3)] ${styles[type]}`}>
      {value}
    </div>
  );
}
