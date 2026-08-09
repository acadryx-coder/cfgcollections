import React from 'react'
import { clothingSizes } from '../data/sizeGuide'
import SectionHeading from '../components/SectionHeading'

export default function SizeGuide() {
  return (
    <div className="container-page py-24">
      <SectionHeading
        eyebrow="Find Your Fit"
        title="Size Guide"
        description="All measurements are in centimeters, taken directly on the body. When between sizes, we recommend sizing up."
      />

      <div className="mt-8 overflow-x-auto rounded-xl border border-line bg-surface/50">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="px-4 py-3 font-semibold text-charcoal dark:text-text">Size</th>
              <th className="px-4 py-3 font-semibold text-charcoal dark:text-text">Bust (cm)</th>
              <th className="px-4 py-3 font-semibold text-charcoal dark:text-text">Waist (cm)</th>
              <th className="px-4 py-3 font-semibold text-charcoal dark:text-text">Hip (cm)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {clothingSizes.map((s) => (
              <tr key={s.size}>
                <td className="px-4 py-3 font-medium">{s.size}</td>
                <td className="px-4 py-3 text-muted">{s.bust}</td>
                <td className="px-4 py-3 text-muted">{s.waist}</td>
                <td className="px-4 py-3 text-muted">{s.hip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 space-y-2 text-sm text-muted">
        <p><strong className="text-charcoal dark:text-text">How to measure:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Bust:</strong> Measure around the fullest part of your chest, keeping the tape level.</li>
          <li><strong>Waist:</strong> Measure around your natural waistline, just above the navel.</li>
          <li><strong>Hip:</strong> Measure around the fullest part of your hips.</li>
        </ul>
      </div>
    </div>
  )
}
