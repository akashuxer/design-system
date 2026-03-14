import DocPage, { Section, Preview, CodeBlock, DosAndDonts } from "@/components/DocPage";

const typeScale = [
  { name: "text-xs", size: "0.75rem / 12px", lineHeight: "1rem / 16px", sample: "Extra small text" },
  { name: "text-sm", size: "0.875rem / 14px", lineHeight: "1.25rem / 20px", sample: "Small text" },
  { name: "text-base", size: "1rem / 16px", lineHeight: "1.5rem / 24px", sample: "Base text size" },
  { name: "text-lg", size: "1.125rem / 18px", lineHeight: "1.75rem / 28px", sample: "Large text" },
  { name: "text-xl", size: "1.25rem / 20px", lineHeight: "1.75rem / 28px", sample: "Extra large text" },
  { name: "text-2xl", size: "1.5rem / 24px", lineHeight: "2rem / 32px", sample: "Double extra large" },
  { name: "text-3xl", size: "1.875rem / 30px", lineHeight: "2.25rem / 36px", sample: "Triple extra large" },
  { name: "text-4xl", size: "2.25rem / 36px", lineHeight: "2.5rem / 40px", sample: "Quadruple extra large" },
];

const fontWeights = [
  { name: "Regular", weight: 400, class: "font-normal" },
  { name: "Medium", weight: 500, class: "font-medium" },
  { name: "Semibold", weight: 600, class: "font-semibold" },
  { name: "Bold", weight: 700, class: "font-bold" },
];

const headingStyles = [
  { tag: "H1", class: "text-4xl font-bold", size: "36px", weight: "Bold (700)", tracking: "Tight (-0.025em)" },
  { tag: "H2", class: "text-3xl font-bold", size: "30px", weight: "Bold (700)", tracking: "Tight (-0.025em)" },
  { tag: "H3", class: "text-2xl font-semibold", size: "24px", weight: "Semibold (600)", tracking: "Normal" },
  { tag: "H4", class: "text-xl font-semibold", size: "20px", weight: "Semibold (600)", tracking: "Normal" },
  { tag: "H5", class: "text-lg font-semibold", size: "18px", weight: "Semibold (600)", tracking: "Normal" },
  { tag: "H6", class: "text-base font-semibold", size: "16px", weight: "Semibold (600)", tracking: "Normal" },
];

const textStyles = [
  { name: "Body Large", class: "text-base text-neutral-700", desc: "Primary body copy, paragraphs" },
  { name: "Body Small", class: "text-sm text-neutral-600", desc: "Secondary descriptions, list items" },
  { name: "Caption", class: "text-xs text-neutral-500", desc: "Timestamps, metadata, helper text" },
  { name: "Label", class: "text-sm font-medium text-neutral-700", desc: "Form labels, field names" },
  { name: "Overline", class: "text-xs font-semibold text-neutral-500 uppercase tracking-wider", desc: "Section headers, category labels" },
];

export default function TypographyPage() {
  return (
    <DocPage
      title="Typography"
      description="Typography establishes visual hierarchy, improves readability, and reinforces brand identity. Spectra uses Inter as the primary typeface and JetBrains Mono for code."
    >
      <Section
        title="Typefaces"
        description="Inter is our primary typeface, chosen for its excellent readability at small sizes and its wide range of weights. JetBrains Mono is used for code and technical content."
      >
        <Preview>
          <div className="space-y-6">
            <div>
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Primary &mdash; Inter</div>
              <p className="text-2xl text-neutral-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-sm text-neutral-400 mt-1">
                ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
              </p>
            </div>
            <div className="border-t border-neutral-100 pt-6">
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Monospace &mdash; JetBrains Mono</div>
              <p className="text-2xl text-neutral-900" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-sm text-neutral-400 mt-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
              </p>
            </div>
          </div>
        </Preview>
      </Section>

      <Section
        title="Type Scale"
        description="A consistent type scale provides predictable sizing. Each step is derived from a modular scale for visual harmony."
      >
        <div className="border border-neutral-200 rounded-xl overflow-hidden">
          {typeScale.map((t, i) => (
            <div
              key={t.name}
              className={`flex items-center gap-6 px-5 py-4 ${i < typeScale.length - 1 ? "border-b border-neutral-100" : ""}`}
            >
              <div className="w-20 shrink-0">
                <code className="text-xs">{t.name}</code>
              </div>
              <div className="w-40 shrink-0 text-xs text-neutral-400">{t.size}</div>
              <div className={`${t.name} text-neutral-900 truncate`}>{t.sample}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Font Weights"
        description="Spectra uses four weight levels to create hierarchy within text. Avoid using more than two weights in a single component."
      >
        <Preview>
          <div className="space-y-4">
            {fontWeights.map((w) => (
              <div key={w.name} className="flex items-baseline gap-6">
                <div className="w-32 shrink-0">
                  <span className="text-xs text-neutral-400">{w.weight}</span>
                  <span className="text-xs text-neutral-300 ml-2">{w.class}</span>
                </div>
                <p className={`text-xl text-neutral-900 ${w.class}`}>
                  {w.name} &mdash; The quick brown fox jumps over the lazy dog
                </p>
              </div>
            ))}
          </div>
        </Preview>
      </Section>

      <Section
        title="Heading Styles"
        description="Heading styles define page and section hierarchy. Use headings sequentially without skipping levels."
      >
        <Preview>
          <div className="space-y-5">
            {headingStyles.map((h) => (
              <div key={h.tag} className="flex items-baseline gap-6">
                <div className="w-12 shrink-0">
                  <span className="text-xs font-mono text-neutral-400">{h.tag}</span>
                </div>
                <div className={`${h.class} text-neutral-900 tracking-tight`}>
                  {h.tag === "H1" && "Page title heading"}
                  {h.tag === "H2" && "Section heading"}
                  {h.tag === "H3" && "Subsection heading"}
                  {h.tag === "H4" && "Card or group heading"}
                  {h.tag === "H5" && "Small section heading"}
                  {h.tag === "H6" && "Label-like heading"}
                </div>
              </div>
            ))}
          </div>
        </Preview>
        <div className="mt-4 overflow-x-auto border border-neutral-200 rounded-xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Level</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Size</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Weight</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Tracking</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Class</th>
              </tr>
            </thead>
            <tbody>
              {headingStyles.map((h) => (
                <tr key={h.tag} className="border-b border-neutral-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-neutral-700">{h.tag}</td>
                  <td className="px-4 py-3 text-neutral-500">{h.size}</td>
                  <td className="px-4 py-3 text-neutral-500">{h.weight}</td>
                  <td className="px-4 py-3 text-neutral-500">{h.tracking}</td>
                  <td className="px-4 py-3"><code className="text-xs">{h.class}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Text Styles"
        description="Pre-defined text styles for common UI patterns. These combine size, weight, and color for specific use cases."
      >
        <Preview>
          <div className="space-y-5">
            {textStyles.map((s) => (
              <div key={s.name} className="flex items-start gap-6">
                <div className="w-28 shrink-0">
                  <span className="text-xs font-medium text-neutral-400">{s.name}</span>
                </div>
                <div>
                  <p className={s.class}>
                    {s.name === "Overline" ? "SECTION LABEL" : "The quick brown fox jumps over the lazy dog."}
                  </p>
                  <p className="text-xs text-neutral-300 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Preview>
        <CodeBlock
          code={`{/* Body Large */}
<p className="text-base text-neutral-700">Primary body copy</p>

{/* Label */}
<label className="text-sm font-medium text-neutral-700">Field name</label>

{/* Caption */}
<span className="text-xs text-neutral-500">Last updated 2 hours ago</span>

{/* Overline */}
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">CATEGORY</span>`}
        />
      </Section>

      <Section
        title="Line Height & Letter Spacing"
        description="Appropriate line heights and letter spacing improve readability and visual balance."
      >
        <div className="overflow-x-auto border border-neutral-200 rounded-xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Context</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Line Height</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Letter Spacing</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Class</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3 text-neutral-700">Headings (H1-H2)</td>
                <td className="px-4 py-3 text-neutral-500">1.2 (tight)</td>
                <td className="px-4 py-3 text-neutral-500">-0.025em</td>
                <td className="px-4 py-3"><code className="text-xs">leading-tight tracking-tight</code></td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3 text-neutral-700">Subheadings (H3-H6)</td>
                <td className="px-4 py-3 text-neutral-500">1.4 (snug)</td>
                <td className="px-4 py-3 text-neutral-500">Normal</td>
                <td className="px-4 py-3"><code className="text-xs">leading-snug tracking-normal</code></td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3 text-neutral-700">Body text</td>
                <td className="px-4 py-3 text-neutral-500">1.5 (normal)</td>
                <td className="px-4 py-3 text-neutral-500">Normal</td>
                <td className="px-4 py-3"><code className="text-xs">leading-normal tracking-normal</code></td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3 text-neutral-700">Long-form content</td>
                <td className="px-4 py-3 text-neutral-500">1.625 (relaxed)</td>
                <td className="px-4 py-3 text-neutral-500">Normal</td>
                <td className="px-4 py-3"><code className="text-xs">leading-relaxed tracking-normal</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-neutral-700">Overlines / Labels</td>
                <td className="px-4 py-3 text-neutral-500">1.0 (none)</td>
                <td className="px-4 py-3 text-neutral-500">0.05em (wider)</td>
                <td className="px-4 py-3"><code className="text-xs">leading-none tracking-wider</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Usage Guidelines">
        <DosAndDonts
          dos={[
            "Use heading levels sequentially (H1 then H2, not H1 then H3).",
            "Limit to one H1 per page for SEO and accessibility.",
            "Use text-sm (14px) as the minimum readable size for body text.",
            "Use the monospace font exclusively for code and technical values.",
            "Maintain consistent line lengths (50-75 characters per line for body text).",
          ]}
          donts={[
            "Don't use more than three type sizes within a single component.",
            "Don't use font weights below 400 (Regular); they reduce readability.",
            "Don't center-align long paragraphs of text.",
            "Don't use ALL CAPS for body text. Reserve it for overlines and short labels.",
            "Don't manually override line heights unless you have a specific accessibility need.",
          ]}
        />
      </Section>
    </DocPage>
  );
}
