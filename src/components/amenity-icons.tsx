import type { ReactElement } from 'react';

const S = 'w-4 h-4 stroke-current fill-none stroke-[1.5]';

function Snowflake() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
    </svg>
  );
}

function Wifi() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
    </svg>
  );
}

function Pool() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 20c2-1 4-1 6 0s4 1 6 0 4-1 6 0M2 16c2-1 4-1 6 0s4 1 6 0 4-1 6 0M6 12V4m12 8V4" />
    </svg>
  );
}

function Flame() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14 0-5.5 3-7 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.36-2.27 1-3.27.5.93 1.5 1.77 2.5 1.77z" />
    </svg>
  );
}

function Waves() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.4 2 5 2c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.4 2 5 2c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}

function Speaker() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}

function Utensils() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  );
}

function Shirt() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

function Tv() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
      <path d="M17 2l-5 5-5-5" />
    </svg>
  );
}

function Satellite() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 7L9 3 5 7l4 4M7.68 13.32L3 18l6 .01M21 21l-4.34-4.34M16.49 7.51a6 6 0 0 1 0 8.49M9.15 14.85a10 10 0 0 1 0-5.7" />
    </svg>
  );
}

function Bell() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function Lock() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ParkingIcon() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  );
}

function Leaf() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function Sun() {
  return (
    <svg className={S} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

export const AMENITY_ICONS: Record<string, { label: string; icon: () => ReactElement }> = {
  'air-conditioning': { label: 'Air Conditioning', icon: Snowflake },
  'wifi': { label: 'Wi-Fi', icon: Wifi },
  'private-pool': { label: 'Private Pool', icon: Pool },
  'heated-pool': { label: 'Heated Pool', icon: Flame },
  'sea-views': { label: 'Sea Views', icon: Waves },
  'sound-system': { label: 'Sound System', icon: Speaker },
  'bbq': { label: 'BBQ', icon: Flame },
  'dishwasher': { label: 'Dishwasher', icon: Utensils },
  'washing-machine': { label: 'Washing Machine', icon: Shirt },
  'smart-tv': { label: 'Smart TV', icon: Tv },
  'cable-tv': { label: 'Cable TV', icon: Satellite },
  'alarm': { label: 'Alarm System', icon: Bell },
  'safe': { label: 'Safe', icon: Lock },
  'parking': { label: 'Parking', icon: ParkingIcon },
  'garden': { label: 'Garden', icon: Leaf },
  'terrace': { label: 'Terrace', icon: Sun },
};
