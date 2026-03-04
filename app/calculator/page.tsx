import type { Metadata } from 'next';
import ROICalculator from '@/components/ROICalculator';

export const metadata: Metadata = {
  title: 'ROI Calculator | Garden Horizons Hub',
  description: 'Calculate expected crop profit per minute based on price, growth time, weather and plots.'
};

export default function CalculatorPage() {
  return <ROICalculator />;
}
