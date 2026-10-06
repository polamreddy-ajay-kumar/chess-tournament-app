import React from 'react';

interface Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: Props) {
  const items = [
    { label: 'Home', icon: '🏠', id: 'home', active: true },
    { label: 'Friends', icon: '👥', id: 'friends', badge: 1 },
    { label: 'Equipment', icon: '♟', id: 'equipment' },
    { label: 'Events', icon: '🎉', id: 'events' },
    { label: 'Shop', icon: '🛒', id: 'shop' },
  ];

  return (
    <div className="mt-6 flex items-end justify-between gap-2 border-t-4 border-[#7d3618] bg-[linear-gradient(180deg,_rgba(144,62,24,0.5),_rgba(58,18,12,0.85))] px-2 pb-5 pt-4">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          type="button"
          className={`relative flex h-[72px] w-[20%] flex-col items-center justify-center rounded-[18px] border-2 border-transparent text-[#f8d485] transition-all ${
            activeTab === item.id ? 'bg-[rgba(255,255,255,0.08)]' : 'bg-transparent'
          }`}
        >
          <div className="text-[1.8rem] leading-none">{item.icon}</div>
          <div className="mt-1 text-[0.78rem] font-bold text-[#fff5e6]">{item.label}</div>
          {item.badge && (
            <div className="absolute right-3 top-2 flex h-6 min-w-6 items-center justify-center rounded-full border-[3px] border-[#f2e7aa] bg-[linear-gradient(180deg,#f7c551,#ef9f26)] px-1 text-[0.68rem] font-black text-white">
              {item.badge}
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
