import DocPage, { Section, DosAndDonts } from "@/components/DocPage";

const brandPalette = [
  { name: "brand-50", hex: "#EEF2FF", textDark: false },
  { name: "brand-100", hex: "#E0E7FF", textDark: false },
  { name: "brand-200", hex: "#C7D2FE", textDark: false },
  { name: "brand-300", hex: "#A5B4FC", textDark: false },
  { name: "brand-400", hex: "#818CF8", textDark: true },
  { name: "brand-500", hex: "#6366F1", textDark: true },
  { name: "brand-600", hex: "#4F46E5", textDark: true },
  { name: "brand-700", hex: "#4338CA", textDark: true },
  { name: "brand-800", hex: "#3730A3", textDark: true },
  { name: "brand-900", hex: "#312E81", textDark: true },
];

const neutralPalette = [
  { name: "neutral-25", hex: "#FCFCFD", textDark: false },
  { name: "neutral-50", hex: "#F9FAFB", textDark: false },
  { name: "neutral-100", hex: "#F3F4F6", textDark: false },
  { name: "neutral-200", hex: "#E5E7EB", textDark: false },
  { name: "neutral-300", hex: "#D1D5DB", textDark: false },
  { name: "neutral-400", hex: "#9CA3AF", textDark: false },
  { name: "neutral-500", hex: "#6B7280", textDark: true },
  { name: "neutral-600", hex: "#4B5563", textDark: true },
  { name: "neutral-700", hex: "#374151", textDark: true },
  { name: "neutral-800", hex: "#1F2937", textDark: true },
  { name: "neutral-900", hex: "#111827", textDark: true },
];

const semanticPalettes = [
  {
    label: "Success",
    colors: [
      { name: "success-50", hex: "#F0FDF4", textDark: false },
      { name: "success-500", hex: "#22C55E", textDark: true },
      { name: "success-700", hex: "#15803D", textDark: true },
    ],
  },
  {
    label: "Warning",
    colors: [
      { name: "warning-50", hex: "#FFFBEB", textDark: false },
      { name: "warning-500", hex: "#F59E0B", textDark: true },
      { name: "warning-700", hex: "#B45309", textDark: true },
    ],
  },
  {
    label: "Error",
    colors: [
      { name: "error-50", hex: "#FEF2F2", textDark: false },
      { name: "error-500", hex: "#EF4444", textDark: true },
      { name: "error-700", hex: "#B91C1C", textDark: true },
    ],
  },
  {
    label: "Info",
    colors: [
      { name: "info-50", hex: "#EFF6FF", textDark: false },
      { name: "info-500", hex: "#3B82F6", textDark: true },
      { name: "info-700", hex: "#1D4ED8", textDark: true },
    ],
  },
];

const semanticTokens = [
  { token: "text-primary", value: "neutral-900", usage: "Headings, primary body text" },
  { token: "text-secondary", value: "neutral-500", usage: "Descriptions, helper text, captions" },
  { token: "text-disabled", value: "neutral-300", usage: "Disabled text and placeholders" },
  { token: "text-inverse", value: "white", usage: "Text on dark backgrounds" },
  { token: "text-brand", value: "brand-600", usage: "Links, active states, accents" },
  { token: "bg-primary", value: "white", usage: "Cards, modals, page background" },
  { token: "bg-secondary", value: "neutral-50", usage: "Page canvas, subtle sections" },
  { token: "bg-tertiary", value: "neutral-100", usage: "Input backgrounds, hover states" },
  { token: "border-default", value: "neutral-200", usage: "Card borders, dividers" },
  { token: "border-strong", value: "neutral-300", usage: "Input borders, emphasized dividers" },
  { token: "border-focus", value: "brand-500", usage: "Focus rings, active input borders" },
];

function Swatch({ name, hex, textDark }: { name: string; hex: string; textDark: boolean }) {
  return (
    <div className="flex flex-col">
      <div
        className="h-16 rounded-lg border border-neutral-200/50 mb-2"
        style={{ backgroundColor: hex }}
      />
      <span className="text-xs font-medium text-neutral-700">{name}</span>
      <span className="text-xs text-neutral-400 font-mono">{hex}</span>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <DocPage
      title="Colors"
      description="The Spectra color system is built on a set of purposeful palettes that create visual hierarchy, communicate meaning, and ensure accessibility across all products."
    >
      <Section
        title="Brand Palette"
        description="The brand palette is rooted in indigo and used for primary actions, interactive elements, and brand expression. Brand-600 is the primary action color."
      >
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
          {brandPalette.map((c) => (
            <Swatch key={c.name} {...c} />
          ))}
        </div>
      </Section>

      <Section
        title="Neutral Palette"
        description="Neutrals provide structure through text, backgrounds, borders, and shadows. They form the foundation of the interface."
      >
        <div className="grid grid-cols-5 md:grid-cols-11 gap-3">
          {neutralPalette.map((c) => (
            <Swatch key={c.name} {...c} />
          ))}
        </div>
      </Section>

      <Section
        title="Semantic Colors"
        description="Semantic colors communicate status, feedback, and intent. Each semantic palette includes a light background, a mid-tone for icons and text, and a dark variant for emphasis."
      >
        <div className="space-y-6">
          {semanticPalettes.map((palette) => (
            <div key={palette.label}>
              <h3 className="text-sm font-medium text-neutral-700 mb-3">{palette.label}</h3>
              <div className="grid grid-cols-3 gap-3 max-w-md">
                {palette.colors.map((c) => (
                  <Swatch key={c.name} {...c} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Semantic Tokens"
        description="Use semantic tokens instead of raw palette values. This enables theming and ensures consistency across the product."
      >
        <div className="overflow-x-auto border border-neutral-200 rounded-xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Token</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Value</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Usage</th>
              </tr>
            </thead>
            <tbody>
              {semanticTokens.map((t) => (
                <tr key={t.token} className="border-b border-neutral-100 last:border-0">
                  <td className="px-4 py-3">
                    <code className="text-xs">{t.token}</code>
                  </td>
                  <td className="px-4 py-3 text-neutral-500">
                    <code className="text-xs">{t.value}</code>
                  </td>
                  <td className="px-4 py-3 text-neutral-600">{t.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Accessibility"
        description="All color pairings in the Spectra system meet WCAG 2.1 AA contrast requirements."
      >
        <div className="space-y-4">
          <div className="border border-neutral-200 rounded-xl overflow-hidden">
            <div className="px-5 py-3 bg-neutral-50 border-b border-neutral-200">
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Contrast Ratios</span>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-28 h-10 rounded-lg bg-brand-600 flex items-center justify-center text-white text-xs font-medium">
                  brand-600
                </div>
                <span className="text-sm text-neutral-600">on white &mdash; <strong className="text-success-700">7.2:1</strong> (AAA)</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-28 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white text-xs font-medium">
                  neutral-900
                </div>
                <span className="text-sm text-neutral-600">on white &mdash; <strong className="text-success-700">15.4:1</strong> (AAA)</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-28 h-10 rounded-lg bg-neutral-500 flex items-center justify-center text-white text-xs font-medium">
                  neutral-500
                </div>
                <span className="text-sm text-neutral-600">on white &mdash; <strong className="text-success-700">4.6:1</strong> (AA)</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-28 h-10 rounded-lg bg-neutral-400 flex items-center justify-center text-white text-xs font-medium">
                  neutral-400
                </div>
                <span className="text-sm text-neutral-600">on white &mdash; <strong className="text-error-500">3.0:1</strong> (Fail for text, OK for large text)</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Usage Guidelines">
        <DosAndDonts
          dos={[
            "Use semantic tokens (text-primary, bg-secondary) rather than raw palette values.",
            "Pair brand-600 with white text for primary actions.",
            "Use semantic colors (success, error, warning) to communicate status.",
            "Test color pairings against WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text).",
            "Provide non-color indicators (icons, text labels) alongside color to support colorblind users.",
          ]}
          donts={[
            "Don't use brand-300 or lighter shades for text on white backgrounds.",
            "Don't rely on color alone to convey information.",
            "Don't mix raw palette values and semantic tokens inconsistently.",
            "Don't introduce custom colors outside the defined palettes.",
            "Don't use error-500 for decorative purposes; reserve it for error states.",
          ]}
        />
      </Section>
    </DocPage>
  );
}
