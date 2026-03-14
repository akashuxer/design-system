import DocPage, { Section, Preview, CodeBlock, DosAndDonts } from "@/components/DocPage";

const spacingScale = [
  { token: "0", px: "0px", rem: "0", desc: "No space. Used for tightly coupled elements." },
  { token: "1", px: "4px", rem: "0.25rem", desc: "Micro spacing. Icon-to-label gaps, inline elements." },
  { token: "2", px: "8px", rem: "0.5rem", desc: "Tight spacing. Related items within a group." },
  { token: "3", px: "12px", rem: "0.75rem", desc: "Compact spacing. Small card padding, tight lists." },
  { token: "4", px: "16px", rem: "1rem", desc: "Default spacing. Standard card padding, form gaps." },
  { token: "5", px: "20px", rem: "1.25rem", desc: "Comfortable spacing. Between form fields." },
  { token: "6", px: "24px", rem: "1.5rem", desc: "Section padding. Card body, modal content." },
  { token: "8", px: "32px", rem: "2rem", desc: "Large spacing. Between sections on a page." },
  { token: "10", px: "40px", rem: "2.5rem", desc: "XL spacing. Between major page sections." },
  { token: "12", px: "48px", rem: "3rem", desc: "2XL spacing. Page-level vertical rhythm." },
  { token: "16", px: "64px", rem: "4rem", desc: "3XL spacing. Hero sections, major separations." },
  { token: "20", px: "80px", rem: "5rem", desc: "4XL spacing. Page top/bottom padding." },
  { token: "24", px: "96px", rem: "6rem", desc: "5XL spacing. Maximum vertical separation." },
];

const usageGuide = [
  { range: "0-2 (0-8px)", context: "Inline", examples: "Icon + label gaps, badge padding, tight button groups" },
  { range: "3-4 (12-16px)", context: "Component", examples: "Card padding, input padding, list item spacing" },
  { range: "5-6 (20-24px)", context: "Content", examples: "Between form fields, within modal bodies, card sections" },
  { range: "8-12 (32-48px)", context: "Section", examples: "Between page sections, sidebar padding, major groups" },
  { range: "16-24 (64-96px)", context: "Page", examples: "Page margins, hero spacing, header/footer separation" },
];

export default function SpacingPage() {
  return (
    <DocPage
      title="Spacing"
      description="The Spectra spacing system uses a consistent scale based on 4px increments. Predictable spacing creates rhythm, reduces visual noise, and improves scanability in dense enterprise interfaces."
    >
      <Section
        title="Spacing Scale"
        description="Every spacing value in the system is a multiple of 4px. Use these tokens for padding, margins, gaps, and layout spacing."
      >
        <div className="space-y-2">
          {spacingScale.map((s) => (
            <div
              key={s.token}
              className="flex items-center gap-4 py-2 border-b border-neutral-100 last:border-0"
            >
              <div className="w-14 shrink-0">
                <code className="text-xs font-semibold">{s.token}</code>
              </div>
              <div className="w-24 shrink-0 flex items-center">
                <div
                  className="h-4 rounded-sm bg-brand-400"
                  style={{ width: `${Math.max(2, parseInt(s.px))}px` }}
                />
              </div>
              <div className="w-20 shrink-0 text-xs text-neutral-400 font-mono">{s.px}</div>
              <div className="w-20 shrink-0 text-xs text-neutral-400 font-mono">{s.rem}</div>
              <div className="text-sm text-neutral-500">{s.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Visual Reference"
        description="Visual demonstration of spacing values applied as padding to a container."
      >
        <Preview>
          <div className="flex flex-wrap gap-4">
            {spacingScale.filter((s) => parseInt(s.token) > 0 && parseInt(s.px) <= 64).map((s) => (
              <div key={s.token} className="flex flex-col items-center gap-2">
                <div
                  className="bg-brand-100 border border-brand-200 rounded-md flex items-center justify-center"
                  style={{ padding: s.rem + "rem" }}
                >
                  <div className="w-4 h-4 rounded-sm bg-brand-500" />
                </div>
                <span className="text-xs text-neutral-500 font-mono">{s.token}</span>
              </div>
            ))}
          </div>
        </Preview>
      </Section>

      <Section
        title="Usage by Context"
        description="Use spacing tokens appropriate to the scale of the element you are styling."
      >
        <div className="overflow-x-auto border border-neutral-200 rounded-xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Scale Range</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Context</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Examples</th>
              </tr>
            </thead>
            <tbody>
              {usageGuide.map((u) => (
                <tr key={u.range} className="border-b border-neutral-100 last:border-0">
                  <td className="px-4 py-3">
                    <code className="text-xs">{u.range}</code>
                  </td>
                  <td className="px-4 py-3 font-medium text-neutral-700">{u.context}</td>
                  <td className="px-4 py-3 text-neutral-500">{u.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Common Patterns"
        description="Examples of how spacing tokens are applied in practice."
      >
        <Preview>
          <div className="space-y-8">
            {/* Card example */}
            <div>
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Card with spacing-6 padding</div>
              <div className="border border-neutral-200 rounded-xl p-6 max-w-sm">
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">Card Title</h3>
                <p className="text-sm text-neutral-500 mb-4">Body text with spacing-4 bottom margin to the action area.</p>
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 bg-brand-600 text-white text-xs font-medium rounded-lg">Primary</div>
                  <div className="px-3 py-1.5 border border-neutral-200 text-neutral-700 text-xs font-medium rounded-lg">Secondary</div>
                </div>
              </div>
            </div>

            {/* Form example */}
            <div>
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Form fields with spacing-5 gap</div>
              <div className="space-y-5 max-w-sm">
                <div>
                  <label className="text-sm font-medium text-neutral-700 mb-1.5 block">Name</label>
                  <div className="h-10 rounded-lg border border-neutral-300 bg-white px-3 flex items-center text-sm text-neutral-400">
                    Enter your name
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-700 mb-1.5 block">Email</label>
                  <div className="h-10 rounded-lg border border-neutral-300 bg-white px-3 flex items-center text-sm text-neutral-400">
                    Enter your email
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`{/* Card padding */}
<div className="p-6">...</div>

{/* Form field gap */}
<div className="space-y-5">...</div>

{/* Icon + label */}
<div className="flex items-center gap-2">
  <Icon />
  <span>Label</span>
</div>

{/* Page section spacing */}
<div className="space-y-12">
  <section>...</section>
  <section>...</section>
</div>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <DosAndDonts
          dos={[
            "Use spacing tokens from the scale rather than arbitrary pixel values.",
            "Use smaller spacing (1-3) for related elements within a component.",
            "Use larger spacing (8-12) to separate distinct sections or groups.",
            "Be consistent: the same spacing value for the same type of relationship.",
            "Use gap utilities (gap-*) for flexbox and grid layouts instead of margins.",
          ]}
          donts={[
            "Don't use arbitrary values like 7px, 13px, or 18px.",
            "Don't mix spacing contexts (e.g., page-level spacing inside a compact component).",
            "Don't use padding where gap would be more appropriate.",
            "Don't use spacing-0 between unrelated elements; even a small gap improves clarity.",
            "Don't add extra spacing to compensate for alignment issues; fix the alignment instead.",
          ]}
        />
      </Section>
    </DocPage>
  );
}
