import React from 'react';

export function PassBanner() {
  return (
    <div className="px-3 pt-4">
      <div className="relative overflow-hidden rounded-[22px] border-[4px] border-[#f3a83e] bg-[linear-gradient(180deg,_#d86f2e_0%,_#a4381d_100%)] shadow-[0_10px_0_rgba(51,21,10,0.75)]">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.22),_transparent_55%)]" />
        <div className="relative flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-xl border-2 border-[#f1d5a5] bg-[linear-gradient(180deg,#f0f3fb,#b4bed4)] text-[#4d5a78] shadow-[inset_0_-3px_0_rgba(44,47,74,0.25)]">
              <span className="text-xl">♛</span>
            </div>
            <div className="font-display text-[1.1rem] font-black tracking-[0.12em] text-[#fffaf1]">CHESS PASS</div>
          </div>

          <div className="flex items-center gap-3 text-[#fdf5d8]">
            <div className="flex items-center gap-2 rounded-full border-2 border-[#f4d98d] bg-[rgba(255,255,255,0.08)] px-2 py-1 text-[0.7rem] font-bold">
              <span>◔</span>
              <span>25d 21h</span>
            </div>
            <div className="flex items-center justify-center rounded-full border-2 border-[#f7d268] bg-[linear-gradient(180deg,#f6d279,#f3b526)] px-2.5 py-1 text-sm font-black text-[#58350a]">
              4
            </div>
          </div>
        </div>

        <div className="relative px-4 pb-4">
          <div className="flex items-center gap-2">
            <div className="h-2 flex-1 rounded-full bg-[rgba(236,230,221,0.16)]">
              <div className="h-full w-[0%] rounded-full bg-[linear-gradient(90deg,#fff4c1,#f7d768)]" />
            </div>
            <div className="text-[0.7rem] font-black uppercase tracking-[0.08em] text-[#fff5de]">0/35</div>
          </div>
        </div>
      </div>
    </div>
  );
}
