"use client";

import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";

export default function CardPage() {
  return (
    <DocPage
      title="Card"
      description="Cards are surfaces that group related content and actions. They provide a flexible container for organizing information in a scannable layout."
    >
      <Section
        title="Basic Card"
        description="A simple card with padding and border."
      >
        <Preview>
          <div className="max-w-sm">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-neutral-900 mb-1">Basic Card</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                This is a simple card with just content inside. It uses a subtle border and rounded corners.
              </p>
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`<Card>
  <Card.Title>Basic Card</Card.Title>
  <Card.Body>This is a simple card with just content inside.</Card.Body>
</Card>`}
        />
      </Section>

      <Section
        title="Card with Header, Body & Footer"
        description="Structured card with distinct sections for organized content."
      >
        <Preview>
          <div className="max-w-sm">
            <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
              <div className="px-6 py-4 border-b border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-900">Team Members</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Manage your team and permissions</p>
              </div>
              <div className="px-6 py-5">
                <div className="space-y-3">
                  {[
                    { name: "Sarah Chen", role: "Admin" },
                    { name: "Marcus Johnson", role: "Editor" },
                    { name: "Priya Sharma", role: "Viewer" },
                  ].map((m) => (
                    <div key={m.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-xs font-semibold text-brand-700">
                          {m.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="text-sm font-medium text-neutral-700">{m.name}</span>
                      </div>
                      <span className="text-xs text-neutral-400">{m.role}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 py-3 border-t border-neutral-100 bg-neutral-50 flex justify-end">
                <button className="text-xs font-medium text-brand-600 hover:text-brand-700">
                  Invite member
                </button>
              </div>
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`<Card>
  <Card.Header title="Team Members" subtitle="Manage your team" />
  <Card.Body>...</Card.Body>
  <Card.Footer><Button variant="link">Invite member</Button></Card.Footer>
</Card>`}
        />
      </Section>

      <Section
        title="Card with Image"
        description="Cards can include a media area at the top for images or illustrations."
      >
        <Preview>
          <div className="grid grid-cols-3 gap-4">
            {[
              { color: "bg-brand-200", title: "Analytics Dashboard", desc: "Track key metrics" },
              { color: "bg-success-50", title: "Reports", desc: "Generate custom reports" },
              { color: "bg-warning-50", title: "Integrations", desc: "Connect your tools" },
            ].map((card) => (
              <div key={card.title} className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
                <div className={`h-32 ${card.color}`} />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-0.5">{card.title}</h3>
                  <p className="text-xs text-neutral-500">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Preview>
        <CodeBlock
          code={`<Card>
  <Card.Image src="/analytics.png" alt="Analytics" />
  <Card.Body>
    <Card.Title>Analytics Dashboard</Card.Title>
    <Card.Description>Track key metrics</Card.Description>
  </Card.Body>
</Card>`}
        />
      </Section>

      <Section
        title="Clickable Card"
        description="Interactive cards that respond to hover with a subtle elevation change."
      >
        <Preview>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "User Settings", desc: "Manage preferences and profile", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
              { title: "Billing", desc: "Plans, invoices, and payments", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
            ].map((card) => (
              <button
                key={card.title}
                className="rounded-xl border border-neutral-200 bg-white p-5 text-left hover:border-brand-300 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-3 group-hover:bg-brand-100 transition-colors">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-0.5 group-hover:text-brand-700 transition-colors">{card.title}</h3>
                <p className="text-xs text-neutral-500">{card.desc}</p>
              </button>
            ))}
          </div>
        </Preview>
        <CodeBlock
          code={`<Card clickable onClick={handleClick}>
  <Card.Icon icon={UserIcon} />
  <Card.Title>User Settings</Card.Title>
  <Card.Description>Manage preferences and profile</Card.Description>
</Card>`}
        />
      </Section>

      <Section
        title="Card Grid Layout"
        description="Cards work well in grid layouts for dashboards and overview pages."
      >
        <Preview>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Total Users", value: "12,847", change: "+12%", up: true },
              { label: "Revenue", value: "$84.2k", change: "+8.1%", up: true },
              { label: "Active Sessions", value: "1,429", change: "-3%", up: false },
              { label: "Bounce Rate", value: "24.5%", change: "-1.2%", up: true },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-neutral-200 bg-white p-5">
                <p className="text-xs text-neutral-500 mb-1">{stat.label}</p>
                <p className="text-xl font-bold text-neutral-900">{stat.value}</p>
                <span className={`text-xs font-medium ${stat.up ? "text-success-500" : "text-error-500"}`}>
                  {stat.change}
                </span>
              </div>
            ))}
          </div>
        </Preview>
      </Section>

      <Section
        title="Stat Card Variant"
        description="Compact cards optimized for displaying a single metric with icon and label."
      >
        <Preview>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "New Signups", value: "2,847", icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z", color: "brand" },
              { label: "Completed Tasks", value: "1,203", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "success" },
              { label: "Open Issues", value: "48", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", color: "warning" },
            ].map((stat) => {
              const colorMap: Record<string, { bg: string; icon: string }> = {
                brand: { bg: "bg-brand-50", icon: "text-brand-600" },
                success: { bg: "bg-success-50", icon: "text-success-500" },
                warning: { bg: "bg-warning-50", icon: "text-warning-500" },
              };
              const c = colorMap[stat.color];
              return (
                <div key={stat.label} className="rounded-xl border border-neutral-200 bg-white p-5 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0`}>
                    <svg className={`w-6 h-6 ${c.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                    <p className="text-xs text-neutral-500">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Preview>
        <CodeBlock
          code={`<StatCard
  icon={UsersIcon}
  value="2,847"
  label="New Signups"
  color="brand"
/>`}
        />
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "children", type: "ReactNode", description: "Card content using Card.Header, Card.Body, Card.Footer sub-components" },
            { name: "clickable", type: "boolean", default: "false", description: "Enables hover and focus styles for interactive cards" },
            { name: "onClick", type: "() => void", description: "Click handler for clickable cards" },
            { name: "padding", type: '"none" | "sm" | "md" | "lg"', default: '"md"', description: "Internal padding of the card" },
            { name: "shadow", type: '"none" | "sm" | "md"', default: '"none"', description: "Shadow level applied to the card" },
          ]}
        />
      </Section>

      <Section title="Guidelines">
        <DosAndDonts
          dos={[
            "Use cards to group related content and actions together",
            "Maintain consistent card sizes within a grid",
            "Use the header/body/footer structure for complex content",
            "Apply hover states only on cards that are interactive",
          ]}
          donts={[
            "Don't nest cards within cards",
            "Don't overload a single card with too many actions",
            "Don't mix card sizes in the same row without purpose",
            "Don't use clickable cards for primary actions - use buttons instead",
          ]}
        />
      </Section>
    </DocPage>
  );
}
