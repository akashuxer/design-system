import DocPage, { Section, Preview, CodeBlock, DosAndDonts } from "@/components/DocPage";

const breakpoints = [
  { name: "sm", minWidth: "640px", container: "100%", columns: 4, gutter: "16px", description: "Small phones in landscape, large phones" },
  { name: "md", minWidth: "768px", container: "100%", columns: 8, gutter: "24px", description: "Tablets in portrait" },
  { name: "lg", minWidth: "1024px", container: "100%", columns: 12, gutter: "24px", description: "Tablets in landscape, small desktops" },
  { name: "xl", minWidth: "1280px", container: "1280px", columns: 12, gutter: "32px", description: "Standard desktops" },
  { name: "2xl", minWidth: "1536px", container: "1536px", columns: 12, gutter: "32px", description: "Large desktops, wide monitors" },
];

const containerWidths = [
  { name: "max-w-sm", value: "384px", usage: "Modals, small dialogs" },
  { name: "max-w-md", value: "448px", usage: "Login forms, narrow cards" },
  { name: "max-w-lg", value: "512px", usage: "Form containers, medium dialogs" },
  { name: "max-w-xl", value: "576px", usage: "Wide forms, content cards" },
  { name: "max-w-2xl", value: "672px", usage: "Article content, detail views" },
  { name: "max-w-4xl", value: "896px", usage: "Documentation pages, data tables" },
  { name: "max-w-6xl", value: "1152px", usage: "Dashboard layouts" },
  { name: "max-w-7xl", value: "1280px", usage: "Full-width application layouts" },
];

export default function GridPage() {
  return (
    <DocPage
      title="Grid & Layout"
      description="The Spectra grid system provides a flexible 12-column structure with responsive breakpoints and consistent gutters. It supports complex enterprise layouts from dense data tables to spacious dashboards."
    >
      <Section
        title="12-Column Grid"
        description="The grid uses 12 columns as the base unit. This divides cleanly into halves, thirds, quarters, and sixths, accommodating nearly any layout."
      >
        <Preview>
          <div className="space-y-3">
            {/* 12 columns */}
            <div className="grid grid-cols-12 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-10 rounded-md bg-brand-100 border border-brand-200 flex items-center justify-center text-xs text-brand-600 font-medium">
                  {i + 1}
                </div>
              ))}
            </div>
            {/* 6+6 */}
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-6 h-10 rounded-md bg-brand-200 border border-brand-300 flex items-center justify-center text-xs text-brand-700 font-medium">6</div>
              <div className="col-span-6 h-10 rounded-md bg-brand-200 border border-brand-300 flex items-center justify-center text-xs text-brand-700 font-medium">6</div>
            </div>
            {/* 4+4+4 */}
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-4 h-10 rounded-md bg-brand-300 border border-brand-400 flex items-center justify-center text-xs text-white font-medium">4</div>
              <div className="col-span-4 h-10 rounded-md bg-brand-300 border border-brand-400 flex items-center justify-center text-xs text-white font-medium">4</div>
              <div className="col-span-4 h-10 rounded-md bg-brand-300 border border-brand-400 flex items-center justify-center text-xs text-white font-medium">4</div>
            </div>
            {/* 3+3+3+3 */}
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-3 h-10 rounded-md bg-brand-400 flex items-center justify-center text-xs text-white font-medium">3</div>
              <div className="col-span-3 h-10 rounded-md bg-brand-400 flex items-center justify-center text-xs text-white font-medium">3</div>
              <div className="col-span-3 h-10 rounded-md bg-brand-400 flex items-center justify-center text-xs text-white font-medium">3</div>
              <div className="col-span-3 h-10 rounded-md bg-brand-400 flex items-center justify-center text-xs text-white font-medium">3</div>
            </div>
            {/* 3+9 */}
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-3 h-10 rounded-md bg-brand-500 flex items-center justify-center text-xs text-white font-medium">3</div>
              <div className="col-span-9 h-10 rounded-md bg-brand-500 flex items-center justify-center text-xs text-white font-medium">9</div>
            </div>
            {/* 2+8+2 */}
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-2 h-10 rounded-md bg-brand-600 flex items-center justify-center text-xs text-white font-medium">2</div>
              <div className="col-span-8 h-10 rounded-md bg-brand-600 flex items-center justify-center text-xs text-white font-medium">8</div>
              <div className="col-span-2 h-10 rounded-md bg-brand-600 flex items-center justify-center text-xs text-white font-medium">2</div>
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`{/* Equal halves */}
<div className="grid grid-cols-12 gap-6">
  <div className="col-span-6">Left</div>
  <div className="col-span-6">Right</div>
</div>

{/* Sidebar + Content */}
<div className="grid grid-cols-12 gap-6">
  <aside className="col-span-3">Sidebar</aside>
  <main className="col-span-9">Content</main>
</div>`}
        />
      </Section>

      <Section
        title="Responsive Breakpoints"
        description="Breakpoints define when layouts adapt. The grid is mobile-first: styles apply upward from each breakpoint."
      >
        <div className="overflow-x-auto border border-neutral-200 rounded-xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Breakpoint</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Min Width</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Container</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Columns</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Gutter</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Devices</th>
              </tr>
            </thead>
            <tbody>
              {breakpoints.map((bp) => (
                <tr key={bp.name} className="border-b border-neutral-100 last:border-0">
                  <td className="px-4 py-3"><code className="text-xs font-semibold">{bp.name}</code></td>
                  <td className="px-4 py-3 text-neutral-500 font-mono text-xs">{bp.minWidth}</td>
                  <td className="px-4 py-3 text-neutral-500 font-mono text-xs">{bp.container}</td>
                  <td className="px-4 py-3 text-neutral-500">{bp.columns}</td>
                  <td className="px-4 py-3 text-neutral-500 font-mono text-xs">{bp.gutter}</td>
                  <td className="px-4 py-3 text-neutral-500">{bp.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Container Widths"
        description="Use container constraints to prevent content from stretching too wide on large screens."
      >
        <div className="overflow-x-auto border border-neutral-200 rounded-xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Class</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Max Width</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Common Usage</th>
              </tr>
            </thead>
            <tbody>
              {containerWidths.map((c) => (
                <tr key={c.name} className="border-b border-neutral-100 last:border-0">
                  <td className="px-4 py-3"><code className="text-xs">{c.name}</code></td>
                  <td className="px-4 py-3 text-neutral-500 font-mono text-xs">{c.value}</td>
                  <td className="px-4 py-3 text-neutral-500">{c.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Common Layout Patterns"
        description="Reusable layout compositions for typical enterprise application views."
      >
        <div className="space-y-6">
          {/* Sidebar + Content */}
          <div>
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Sidebar + Content</div>
            <Preview>
              <div className="grid grid-cols-12 gap-4 min-h-[120px]">
                <div className="col-span-3 bg-neutral-100 rounded-lg p-3 flex items-start justify-center">
                  <span className="text-xs text-neutral-500 font-medium">Sidebar (3 cols)</span>
                </div>
                <div className="col-span-9 bg-neutral-50 rounded-lg border border-dashed border-neutral-200 p-3 flex items-start justify-center">
                  <span className="text-xs text-neutral-500 font-medium">Main Content (9 cols)</span>
                </div>
              </div>
            </Preview>
          </div>

          {/* Full Width */}
          <div>
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Full Width</div>
            <Preview>
              <div className="min-h-[120px] bg-neutral-50 rounded-lg border border-dashed border-neutral-200 p-3 flex items-start justify-center">
                <span className="text-xs text-neutral-500 font-medium">Full Width Content (12 cols)</span>
              </div>
            </Preview>
          </div>

          {/* Centered Content */}
          <div>
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Centered Content</div>
            <Preview>
              <div className="grid grid-cols-12 gap-4 min-h-[120px]">
                <div className="col-span-2" />
                <div className="col-span-8 bg-neutral-50 rounded-lg border border-dashed border-neutral-200 p-3 flex items-start justify-center">
                  <span className="text-xs text-neutral-500 font-medium">Centered Content (8 cols, offset 2)</span>
                </div>
                <div className="col-span-2" />
              </div>
            </Preview>
          </div>

          {/* Two Sidebars */}
          <div>
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Dual Sidebar</div>
            <Preview>
              <div className="grid grid-cols-12 gap-4 min-h-[120px]">
                <div className="col-span-2 bg-neutral-100 rounded-lg p-3 flex items-start justify-center">
                  <span className="text-xs text-neutral-500 font-medium">Nav (2)</span>
                </div>
                <div className="col-span-7 bg-neutral-50 rounded-lg border border-dashed border-neutral-200 p-3 flex items-start justify-center">
                  <span className="text-xs text-neutral-500 font-medium">Content (7)</span>
                </div>
                <div className="col-span-3 bg-neutral-100 rounded-lg p-3 flex items-start justify-center">
                  <span className="text-xs text-neutral-500 font-medium">Panel (3)</span>
                </div>
              </div>
            </Preview>
          </div>
        </div>
      </Section>

      <Section title="Usage Guidelines">
        <DosAndDonts
          dos={[
            "Use the 12-column grid for page-level layouts.",
            "Apply responsive breakpoints mobile-first (start with base, add sm:, md:, lg:).",
            "Use max-width containers to constrain content on ultra-wide screens.",
            "Use consistent gutter sizes (gap-4 for compact, gap-6 for default, gap-8 for spacious).",
            "Nest grids for complex component layouts within a column.",
          ]}
          donts={[
            "Don't nest more than two grid levels deep; it becomes hard to maintain.",
            "Don't mix grid and flexbox for the same layout axis; choose one.",
            "Don't use fixed pixel widths for columns; let the grid handle proportions.",
            "Don't forget to test layouts at every breakpoint, not just desktop.",
            "Don't use asymmetric gutters unless you have a specific design reason.",
          ]}
        />
      </Section>
    </DocPage>
  );
}
