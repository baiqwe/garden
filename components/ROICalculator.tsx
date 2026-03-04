'use client';

import { useMemo, useState } from 'react';

const calculateROI = (
  seedPrice: number,
  sellPrice: number,
  growthTimeMinutes: number,
  weatherMultiplier = 1,
  plots = 1,
  botanistBonus = 1
) => {
  if (growthTimeMinutes <= 0 || plots <= 0) return 0;
  const netProfit = sellPrice * weatherMultiplier - seedPrice;
  return (netProfit * plots * botanistBonus) / growthTimeMinutes;
};

export default function ROICalculator() {
  const [seedPrice, setSeedPrice] = useState(120);
  const [sellPrice, setSellPrice] = useState(450);
  const [growthTime, setGrowthTime] = useState(18);
  const [weatherMultiplier, setWeatherMultiplier] = useState(1);
  const [plots, setPlots] = useState(8);
  const [botanistBonusEnabled, setBotanistBonusEnabled] = useState(false);

  const botanistBonus = botanistBonusEnabled ? 1.1 : 1;

  const roi = useMemo(
    () => calculateROI(seedPrice, sellPrice, growthTime, weatherMultiplier, plots, botanistBonus),
    [seedPrice, sellPrice, growthTime, weatherMultiplier, plots, botanistBonus]
  );

  return (
    <section className="panel">
      <h2>Profit ROI Calculator</h2>
      <p className="muted">Estimate net coins per minute based on your current setup.</p>
      <div className="form-grid">
        <label>Seed Price<input type="number" value={seedPrice} onChange={(e) => setSeedPrice(Number(e.target.value) || 0)} /></label>
        <label>Sell Price<input type="number" value={sellPrice} onChange={(e) => setSellPrice(Number(e.target.value) || 0)} /></label>
        <label>Growth (minutes)<input type="number" value={growthTime} onChange={(e) => setGrowthTime(Number(e.target.value) || 0)} /></label>
        <label>Weather Multiplier<input type="number" step="0.1" value={weatherMultiplier} onChange={(e) => setWeatherMultiplier(Number(e.target.value) || 0)} /></label>
        <label>Available Plots<input type="number" value={plots} onChange={(e) => setPlots(Number(e.target.value) || 0)} /></label>
        <label className="checkbox-row">
          Botanist Bonus (+10%)
          <input type="checkbox" checked={botanistBonusEnabled} onChange={(e) => setBotanistBonusEnabled(e.target.checked)} />
        </label>
      </div>
      <p className="result">Estimated ROI: <strong>{roi.toFixed(2)} coins/min</strong></p>
    </section>
  );
}
