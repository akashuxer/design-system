"use client";

import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";

function ChevronSep() {
  return (
    <svg className="w-4 h-4 text-neutral-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function SlashSep() {
  return <span className="text-neutral-300 mx-0.5">/</span>;
}

export default function BreadcrumbPage() {
  return (
    <DocPage
      title="Breadcrumb"
      description="Breadcrumbs show the user's location within a hierarchical navigation structure. They help users understand context and navigate back to parent pages."
    >
      <Section
        title="Basic Breadcrumb"
        description="A standard breadcrumb with chevron separators. The last item represents the current page."
      >
        <Preview>
          <div className="space-y-6">
            <nav className="flex items-center gap-1.5 text-sm">
              <a href="#" className="text-neutral-500 hover:text-brand-600 transition-colors">Home</a>
              <ChevronSep />
              <a href="#" className="text-neutral-500 hover:text-brand-600 transition-colors">Products</a>
              <ChevronSep />
              <a href="#" className="text-neutral-500 hover:text-brand-600 transition-colors">Electronics</a>
              <ChevronSep />
              <span className="text-neutral-900 font-medium">Wireless Headphones</span>
            </nav>
            <nav className="flex items-center gap-2 text-sm">
              <a href="#" className="text-neutral-500 hover:text-brand-600 transition-colors">Home</a>
              <SlashSep />
              <a href="#" className="text-neutral-500 hover:text-brand-600 transition-colors">Settings</a>
              <SlashSep />
              <span className="text-neutral-900 font-medium">Notifications</span>
            </nav>
          </div>
        </Preview>
        <CodeBlock
          code={`<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
  <Breadcrumb.Item active>Wireless Headphones</Breadcrumb.Item>
</Breadcrumb>`}
        />
      </Section>

      <Section
        title="With Icons"
        description="Add icons to breadcrumb items for better visual hierarchy, commonly a home icon for the root."
      >
        <Preview>
          <nav className="flex items-center gap-1.5 text-sm">
            <a href="#" className="text-neutral-500 hover:text-brand-600 transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </a>
            <ChevronSep />
            <a href="#" className="text-neutral-500 hover:text-brand-600 transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Team
            </a>
            <ChevronSep />
            <a href="#" className="text-neutral-500 hover:text-brand-600 transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </a>
            <ChevronSep />
            <span className="text-neutral-900 font-medium">Permissions</span>
          </nav>
        </Preview>
        <CodeBlock
          code={`<Breadcrumb>
  <Breadcrumb.Item href="/" icon={<HomeIcon />}>Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/team" icon={<UsersIcon />}>Team</Breadcrumb.Item>
  <Breadcrumb.Item active>Permissions</Breadcrumb.Item>
</Breadcrumb>`}
        />
      </Section>

      <Section
        title="Truncated (Collapsed Middle Items)"
        description="When the breadcrumb is deeply nested, collapse middle items into an ellipsis to save space."
      >
        <Preview>
          <nav className="flex items-center gap-1.5 text-sm">
            <a href="#" className="text-neutral-500 hover:text-brand-600 transition-colors">Home</a>
            <ChevronSep />
            <button className="text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded px-1.5 py-0.5 transition-colors text-sm">
              ...
            </button>
            <ChevronSep />
            <a href="#" className="text-neutral-500 hover:text-brand-600 transition-colors">Workspace Settings</a>
            <ChevronSep />
            <span className="text-neutral-900 font-medium">API Keys</span>
          </nav>
        </Preview>
        <CodeBlock
          code={`<Breadcrumb maxItems={3} collapse="middle">
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/org">Organization</Breadcrumb.Item>
  <Breadcrumb.Item href="/org/workspace">Workspace</Breadcrumb.Item>
  <Breadcrumb.Item href="/org/workspace/settings">Workspace Settings</Breadcrumb.Item>
  <Breadcrumb.Item active>API Keys</Breadcrumb.Item>
</Breadcrumb>`}
        />
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "children", type: "ReactNode", description: "Breadcrumb.Item components" },
            { name: "separator", type: 'ReactNode | "chevron" | "slash"', default: '"chevron"', description: "Separator between breadcrumb items" },
            { name: "maxItems", type: "number", description: "Maximum items to display before collapsing" },
            { name: "collapse", type: '"middle" | "start"', default: '"middle"', description: "Where to collapse items when maxItems is exceeded" },
          ]}
        />
      </Section>

      <Section title="Breadcrumb.Item Props">
        <PropsTable
          props={[
            { name: "href", type: "string", description: "Link destination for the breadcrumb item" },
            { name: "active", type: "boolean", default: "false", description: "Marks the item as the current page (no link, bold text)" },
            { name: "icon", type: "ReactNode", description: "Optional icon displayed before the label" },
            { name: "children", type: "ReactNode", description: "Breadcrumb item label" },
          ]}
        />
      </Section>

      <Section title="Guidelines">
        <DosAndDonts
          dos={[
            "Always start breadcrumbs with the root page (e.g., Home or Dashboard)",
            "Use breadcrumbs for hierarchies of 3+ levels deep",
            "Make all items except the current page clickable",
            "Truncate long breadcrumbs using the collapse pattern",
          ]}
          donts={[
            "Don't use breadcrumbs as a substitute for primary navigation",
            "Don't include the current page as a link",
            "Don't use breadcrumbs for flat site structures with only 1-2 levels",
            "Don't duplicate breadcrumb info in the page title",
          ]}
        />
      </Section>
    </DocPage>
  );
}
