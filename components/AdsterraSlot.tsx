'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type SlotKind = 'leaderboard' | 'rectangle';

type SlotConfig = {
  key: string;
  width: number;
  height: number;
};

const DESKTOP_CONFIG: Record<SlotKind, SlotConfig> = {
  leaderboard: {
    key: 'c61f50cca77822b8e9b6716564df1ad4',
    width: 728,
    height: 90
  },
  rectangle: {
    key: 'cada74d765b98d1446e5823b419cb151',
    width: 300,
    height: 250
  }
};

const MOBILE_CONFIG: Record<SlotKind, SlotConfig> = {
  // 320x50 key not provided; use rectangle key as mobile-safe fallback.
  leaderboard: {
    key: 'cada74d765b98d1446e5823b419cb151',
    width: 300,
    height: 250
  },
  rectangle: {
    key: 'cada74d765b98d1446e5823b419cb151',
    width: 300,
    height: 250
  }
};

export default function AdsterraSlot({ kind, id }: { kind: SlotKind; id: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const config = useMemo(() => (isMobile ? MOBILE_CONFIG[kind] : DESKTOP_CONFIG[kind]), [isMobile, kind]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    host.innerHTML = '';

    const inline = document.createElement('script');
    inline.type = 'text/javascript';
    inline.text = `atOptions = {'key':'${config.key}','format':'iframe','height':${config.height},'width':${config.width},'params':{}};`;

    const invoke = document.createElement('script');
    invoke.type = 'text/javascript';
    invoke.async = true;
    invoke.src = `https://www.highperformanceformat.com/${config.key}/invoke.js`;

    host.appendChild(inline);
    host.appendChild(invoke);

    return () => {
      host.innerHTML = '';
    };
  }, [config]);

  return (
    <section className={`adsterra-wrap ad-${kind}`} aria-label="Advertisement" data-slot={id}>
      <p className="ad-label">Sponsored</p>
      <div
        ref={hostRef}
        className="adsterra-host"
        style={{ minHeight: `${config.height}px`, minWidth: `${config.width}px` }}
      />
    </section>
  );
}
