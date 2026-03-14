import DocPage, { Section, Preview, CodeBlock, DosAndDonts } from "@/components/DocPage";

const shadowScale = [
  {
    name: "shadow-xs",
    value: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    level: 1,
    description: "Subtle depth for default cards, input fields, and static containers. The baseline elevation.",
    usage: "Cards at rest, input fields, dropdowns (closed)",
  },
  {
    name: "shadow-sm",
    value: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
    level: 2,
    description: "Light lift for interactive elements on hover. Provides feedback without visual weight.",
    usage: "Card hover states, button hover, toggles",
  },
  {
    name: "shadow-md",
    value: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
    level: 3,
    description: "Medium elevation for elements that float above the surface. Creates clear separation.",
    usage: "Dropdown menus, popovers, floating toolbars",
  },
  {
    name: "shadow-lg",
    value: "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
    level: 4,
    description: "High elevation for overlays that need strong visual separation from content beneath.",
    usage: "Modals, dialogs, notification toasts",
  },
  {
    name: "shadow-xl",
    value: "0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)",
    level: 5,
    description: "Maximum elevation for the topmost layer of the interface. Use sparingly.",
    usage: "Full-screen overlays, command palettes, spotlight search",
  },
];

export default function ShadowsPage() {
  return (
    <DocPage
      title="Shadows & Elevation"
      description="Shadows establish visual hierarchy by simulating depth. The Spectra elevation system uses five levels to communicate the relationship between overlapping surfaces."
    >
      <Section
        title="Shadow Scale"
        description="Each shadow level corresponds to a distance from the base surface. Higher elevation means more prominent shadow spread."
      >
        <Preview>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {shadowScale.map((s) => (
              <div key={s.name} className="flex flex-col items-center">
                <div
                  className={`w-full h-24 rounded-xl bg-white border border-neutral-100 flex items-center justify-center mb-3 ${s.name}`}
                >
                  <span className="text-xs font-medium text-neutral-500">Level {s.level}</span>
                </div>
                <code className="text-xs font-semibold text-neutral-700">{s.name}</code>
              </div>
            ))}
          </div>
        </Preview>
      </Section>

      <Section
        title="Elevation System"
        description="Think of elevation as layers stacked from the base surface upward. Each layer has a purpose in the interface hierarchy."
      >
        <div className="border border-neutral-200 rounded-xl overflow-hidden">
          <div className="px-5 py-3 bg-neutral-50 border-b border-neutral-200">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Elevation Layers</span>
          </div>
          <div className="p-6">
            <div className="relative space-y-3">
              {shadowScale.map((s, i) => (
                <div key={s.name} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-brand-700">{s.level}</span>
                  </div>
                  <div className="flex-1 pb-3 border-b border-neutral-100 last:border-0">
                    <div className="flex items-center gap-3 mb-1">
                      <code className="text-xs font-semibold text-neutral-800">{s.name}</code>
                      <span className="text-xs text-neutral-300">|</span>
                      <span className="text-xs text-neutral-400">{s.usage}</span>
                    </div>
                    <p className="text-sm text-neutral-500">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Shadow Values"
        description="Raw CSS values for each shadow token. These are defined as CSS custom properties in the theme."
      >
        <div className="overflow-x-auto border border-neutral-200 rounded-xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Token</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">CSS Value</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Usage</th>
              </tr>
            </thead>
            <tbody>
              {shadowScale.map((s) => (
                <tr key={s.name} className="border-b border-neutral-100 last:border-0">
                  <td className="px-4 py-3"><code className="text-xs">{s.name}</code></td>
                  <td className="px-4 py-3 text-neutral-400 font-mono text-xs max-w-xs truncate">{s.value}</td>
                  <td className="px-4 py-3 text-neutral-500">{s.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Interactive Example"
        description="Shadows are commonly paired with hover transitions to provide interactive feedback."
      >
        <Preview>
          <div className="flex flex-wrap gap-6">
            <div className="w-48 p-5 rounded-xl bg-white border border-neutral-200 shadow-xs hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-sm font-medium text-neutral-700 mb-1">Default Card</div>
              <div className="text-xs text-neutral-400">Hover to elevate</div>
            </div>
            <div className="w-48 p-5 rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-sm font-medium text-neutral-700 mb-1">Raised Card</div>
              <div className="text-xs text-neutral-400">Hover to elevate more</div>
            </div>
            <div className="w-48 p-5 rounded-xl bg-white border border-neutral-100 shadow-lg">
              <div className="text-sm font-medium text-neutral-700 mb-1">Modal-level</div>
              <div className="text-xs text-neutral-400">Fixed high elevation</div>
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`{/* Card with hover elevation */}
<div className="shadow-xs hover:shadow-md transition-shadow">
  Card content
</div>

{/* Modal overlay */}
<div className="shadow-lg rounded-xl bg-white p-6">
  Modal content
</div>

{/* Dropdown menu */}
<div className="shadow-md rounded-lg bg-white border border-neutral-200">
  Menu items
</div>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <DosAndDonts
          dos={[
            "Use shadow-xs for default, resting elements like cards and inputs.",
            "Transition shadows on hover and focus for interactive feedback.",
            "Pair shadows with subtle borders for definition at low elevations.",
            "Use shadow-lg and above only for overlaying content (modals, dropdowns).",
            "Keep shadows consistent within a single view; avoid mixed elevation levels for similar elements.",
          ]}
          donts={[
            "Don't use shadow-xl on inline content; reserve it for full overlays.",
            "Don't combine colored shadows with neutral shadows.",
            "Don't add shadows to elements that don't need depth (e.g., inline text, dividers).",
            "Don't skip elevation levels (e.g., going from shadow-xs to shadow-lg on hover).",
            "Don't use box-shadow for borders or outlines; use actual borders instead.",
          ]}
        />
      </Section>
    </DocPage>
  );
}
