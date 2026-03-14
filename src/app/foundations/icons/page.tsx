import DocPage, { Section, Preview, CodeBlock, DosAndDonts } from "@/components/DocPage";

const iconSet = [
  { name: "Search", path: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { name: "Home", path: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
  { name: "User", path: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
  { name: "Settings", path: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" },
  { name: "Bell", path: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" },
  { name: "Mail", path: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" },
  { name: "Calendar", path: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" },
  { name: "Chart", path: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
  { name: "Check", path: "M4.5 12.75l6 6 9-13.5" },
  { name: "X Close", path: "M6 18L18 6M6 6l12 12" },
  { name: "Plus", path: "M12 4.5v15m7.5-7.5h-15" },
  { name: "Minus", path: "M19.5 12h-15" },
  { name: "Chevron Down", path: "M19.5 8.25l-7.5 7.5-7.5-7.5" },
  { name: "Chevron Right", path: "M8.25 4.5l7.5 7.5-7.5 7.5" },
  { name: "Arrow Right", path: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" },
  { name: "Upload", path: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" },
  { name: "Download", path: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" },
  { name: "Filter", path: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" },
  { name: "Edit", path: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" },
  { name: "Trash", path: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" },
  { name: "Copy", path: "M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" },
  { name: "Link", path: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" },
  { name: "Lock", path: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" },
  { name: "Eye", path: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
];

const iconSizes = [
  { size: 16, label: "16px", class: "w-4 h-4", usage: "Inline icons, badges, dense tables" },
  { size: 20, label: "20px", class: "w-5 h-5", usage: "Default size for buttons, inputs, navigation" },
  { size: 24, label: "24px", class: "w-6 h-6", usage: "Standalone icons, card headers, section titles" },
  { size: 32, label: "32px", class: "w-8 h-8", usage: "Empty states, feature highlights, hero sections" },
];

function Icon({ path, size = 24, className = "" }: { path: string; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {path.split(" M").map((d, i) => (
        <path key={i} d={i === 0 ? d : `M${d}`} />
      ))}
    </svg>
  );
}

export default function IconsPage() {
  return (
    <DocPage
      title="Icons"
      description="Spectra uses Heroicons (outline style) as its icon library, providing a consistent set of 24x24 SVG icons. Icons are used to reinforce meaning, improve scanability, and support navigation."
    >
      <Section
        title="Icon Library"
        description="A selection of commonly used icons in the Spectra system. All icons use a 24x24 viewBox with 1.5px stroke width."
      >
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1">
          {iconSet.map((icon) => (
            <div
              key={icon.name}
              className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-neutral-50 transition-colors group"
            >
              <Icon path={icon.path} size={24} className="text-neutral-600 group-hover:text-brand-600 transition-colors" />
              <span className="text-[10px] text-neutral-400 group-hover:text-neutral-600 text-center leading-tight transition-colors">
                {icon.name}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Icon Sizes"
        description="Icons are available in four sizes. Choose the size appropriate to the context and surrounding text."
      >
        <Preview>
          <div className="space-y-6">
            {iconSizes.map((s) => (
              <div key={s.size} className="flex items-center gap-6">
                <div className="w-20 shrink-0">
                  <span className="text-xs font-semibold text-neutral-700">{s.label}</span>
                  <div className="text-[10px] text-neutral-400">{s.class}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon path={iconSet[0].path} size={s.size} className="text-neutral-600" />
                  <Icon path={iconSet[2].path} size={s.size} className="text-neutral-600" />
                  <Icon path={iconSet[8].path} size={s.size} className="text-neutral-600" />
                  <Icon path={iconSet[6].path} size={s.size} className="text-neutral-600" />
                  <Icon path={iconSet[10].path} size={s.size} className="text-neutral-600" />
                </div>
                <span className="text-xs text-neutral-400">{s.usage}</span>
              </div>
            ))}
          </div>
        </Preview>
        <div className="mt-4 overflow-x-auto border border-neutral-200 rounded-xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Size</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Dimensions</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Class</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Pairs With</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-700">Usage</th>
              </tr>
            </thead>
            <tbody>
              {iconSizes.map((s) => (
                <tr key={s.size} className="border-b border-neutral-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-neutral-700">{s.label}</td>
                  <td className="px-4 py-3 text-neutral-500">{s.size}x{s.size}</td>
                  <td className="px-4 py-3"><code className="text-xs">{s.class}</code></td>
                  <td className="px-4 py-3 text-neutral-500">
                    {s.size === 16 && "text-xs, text-sm"}
                    {s.size === 20 && "text-sm, text-base"}
                    {s.size === 24 && "text-base, text-lg"}
                    {s.size === 32 && "text-xl, text-2xl"}
                  </td>
                  <td className="px-4 py-3 text-neutral-500">{s.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Icon + Text Pairing"
        description="When pairing icons with text, use consistent alignment and appropriate gap spacing."
      >
        <Preview>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-neutral-700">
              <Icon path={iconSet[0].path} size={16} className="text-neutral-500" />
              <span>Search (16px icon + text-sm)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700">
              <Icon path={iconSet[5].path} size={20} className="text-neutral-500" />
              <span>Inbox (20px icon + text-sm)</span>
            </div>
            <div className="flex items-center gap-2.5 text-base text-neutral-700">
              <Icon path={iconSet[1].path} size={24} className="text-neutral-500" />
              <span>Dashboard (24px icon + text-base)</span>
            </div>

            <div className="border-t border-neutral-100 pt-4 mt-4">
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Button Examples</div>
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-600 text-white text-sm font-medium rounded-lg">
                  <Icon path={iconSet[10].path} size={16} className="text-white" />
                  Add Item
                </button>
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-neutral-200 text-neutral-700 text-sm font-medium rounded-lg">
                  <Icon path={iconSet[17].path} size={16} className="text-neutral-500" />
                  Filter
                </button>
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-error-500/30 text-error-700 text-sm font-medium rounded-lg bg-error-50/50">
                  <Icon path={iconSet[19].path} size={16} className="text-error-500" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`{/* Icon + text in a button */}
<button className="inline-flex items-center gap-1.5 px-3 py-1.5">
  <SearchIcon className="w-4 h-4" />
  Search
</button>

{/* Icon + text in navigation */}
<a className="flex items-center gap-2 text-sm">
  <HomeIcon className="w-5 h-5 text-neutral-500" />
  Dashboard
</a>

{/* Standalone icon button */}
<button className="p-2 rounded-lg hover:bg-neutral-100">
  <SettingsIcon className="w-5 h-5 text-neutral-500" />
</button>`}
        />
      </Section>

      <Section
        title="Icon Colors"
        description="Use color intentionally. Most icons use neutral tones; semantic colors add meaning."
      >
        <Preview>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col items-center gap-2">
              <Icon path={iconSet[8].path} size={24} className="text-neutral-400" />
              <span className="text-[10px] text-neutral-400">Default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon path={iconSet[8].path} size={24} className="text-neutral-600" />
              <span className="text-[10px] text-neutral-400">Emphasized</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon path={iconSet[8].path} size={24} className="text-brand-600" />
              <span className="text-[10px] text-neutral-400">Active / Brand</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon path={iconSet[8].path} size={24} className="text-success-500" />
              <span className="text-[10px] text-neutral-400">Success</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon path={iconSet[8].path} size={24} className="text-warning-500" />
              <span className="text-[10px] text-neutral-400">Warning</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon path={iconSet[8].path} size={24} className="text-error-500" />
              <span className="text-[10px] text-neutral-400">Error</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon path={iconSet[8].path} size={24} className="text-info-500" />
              <span className="text-[10px] text-neutral-400">Info</span>
            </div>
          </div>
        </Preview>
      </Section>

      <Section title="Usage Guidelines">
        <DosAndDonts
          dos={[
            "Use icons to reinforce meaning alongside text labels, not replace them.",
            "Match icon size to the surrounding text size using the pairing guide.",
            "Use consistent stroke width (1.5px) across all icons.",
            "Provide aria-label or sr-only text for icon-only buttons.",
            "Use the outline style consistently; don't mix outline and filled icons.",
          ]}
          donts={[
            "Don't use icons purely for decoration; each icon should serve a purpose.",
            "Don't use colored icons without semantic intent (success, error, warning, info).",
            "Don't scale icons beyond the defined sizes; use the next size up instead.",
            "Don't use icon-only buttons without accessible labels.",
            "Don't mix icon libraries; stick to Heroicons throughout the product.",
          ]}
        />
      </Section>
    </DocPage>
  );
}
