'use client';

import { useState } from 'react';
import type { PromoCode } from '@/lib/types';

export default function CodeCard({ code }: { code: PromoCode }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <li className="code-item">
      <div>
        <strong>{code.code}</strong>
        <p className="muted">{code.reward}</p>
        <p className="muted">Checked: {code.lastChecked}</p>
      </div>
      <div className="right">
        <span className={`status ${code.status}`}>{code.status}</span>
        <button onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
      </div>
    </li>
  );
}
