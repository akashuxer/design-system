"use client";

import { useState } from "react";
import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";

function UnderlineTabs({
  tabs,
  size = "md",
}: {
  tabs: { label: string; icon?: React.ReactNode; content: React.ReactNode }[];
  size?: "sm" | "md";
}) {
  const [active, setActive] = useState(0);
  const textSize = size === "sm" ? "text-xs" : "text-sm";
  const py = size === "sm" ? "py-2" : "py-2.5";
  const iconSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  return (
    <div>
      <div className="flex border-b border-neutral-200">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`${textSize} ${py} px-4 font-medium transition-colors relative flex items-center gap-2 ${
              active === i
                ? "text-brand-600"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            {tab.icon && <span className={iconSize}>{tab.icon}</span>}
            {tab.label}
            {active === i && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full" />
            )}
          </button>
        ))}
      </div>
      <div className="pt-4">{tabs[active].content}</div>
    </div>
  );
}

function PillTabs({
  tabs,
  size = "md",
}: {
  tabs: { label: string; icon?: React.ReactNode; content: React.ReactNode }[];
  size?: "sm" | "md";
}) {
  const [active, setActive] = useState(0);
  const textSize = size === "sm" ? "text-xs" : "text-sm";
  const px = size === "sm" ? "px-3 py-1" : "px-4 py-1.5";

  return (
    <div>
      <div className="inline-flex bg-neutral-100 rounded-lg p-1 gap-0.5">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`${textSize} ${px} font-medium rounded-md transition-all flex items-center gap-2 ${
              active === i
                ? "bg-white text-neutral-900 shadow-xs"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-4">{tabs[active].content}</div>
    </div>
  );
}

const tabIcon = (d: string) => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default function TabsPage() {
  return (
    <DocPage
      title="Tabs"
      description="Tabs organize content into separate views, allowing users to switch between them without leaving the page. Only one tab panel is visible at a time."
    >
      <Section
        title="Default Tabs (Underline)"
        description="The standard tab style with an underline indicator on the active tab."
      >
        <Preview>
          <UnderlineTabs
            tabs={[
              { label: "Overview", content: <p className="text-sm text-neutral-600">This is the overview tab content. It provides a summary of the main information.</p> },
              { label: "Activity", content: <p className="text-sm text-neutral-600">Recent activity feed showing user actions and events in chronological order.</p> },
              { label: "Settings", content: <p className="text-sm text-neutral-600">Configure preferences, notifications, and account-level settings here.</p> },
            ]}
          />
        </Preview>
        <CodeBlock
          code={`<Tabs defaultValue="overview">
  <Tabs.List>
    <Tabs.Tab value="overview">Overview</Tabs.Tab>
    <Tabs.Tab value="activity">Activity</Tabs.Tab>
    <Tabs.Tab value="settings">Settings</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="overview">...</Tabs.Panel>
</Tabs>`}
        />
      </Section>

      <Section
        title="Contained / Pill Tabs"
        description="Pill-style tabs with a contained background, ideal for toggling between view modes."
      >
        <Preview>
          <PillTabs
            tabs={[
              { label: "All", content: <p className="text-sm text-neutral-600">Showing all 248 results across all categories.</p> },
              { label: "Active", content: <p className="text-sm text-neutral-600">Showing 186 active items that are currently in use.</p> },
              { label: "Archived", content: <p className="text-sm text-neutral-600">Showing 62 archived items that are no longer active.</p> },
            ]}
          />
        </Preview>
        <CodeBlock
          code={`<Tabs variant="pills" defaultValue="all">
  <Tabs.List>
    <Tabs.Tab value="all">All</Tabs.Tab>
    <Tabs.Tab value="active">Active</Tabs.Tab>
    <Tabs.Tab value="archived">Archived</Tabs.Tab>
  </Tabs.List>
</Tabs>`}
        />
      </Section>

      <Section
        title="With Icons"
        description="Tabs can include icons alongside labels for better visual recognition."
      >
        <Preview>
          <UnderlineTabs
            tabs={[
              {
                label: "Profile",
                icon: tabIcon("M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"),
                content: <p className="text-sm text-neutral-600">Manage your profile information, display name, and avatar.</p>,
              },
              {
                label: "Notifications",
                icon: tabIcon("M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"),
                content: <p className="text-sm text-neutral-600">Configure email, push, and in-app notification preferences.</p>,
              },
              {
                label: "Security",
                icon: tabIcon("M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"),
                content: <p className="text-sm text-neutral-600">Two-factor authentication, password settings, and session management.</p>,
              },
            ]}
          />
        </Preview>
        <CodeBlock
          code={`<Tabs.Tab value="profile" icon={<UserIcon />}>Profile</Tabs.Tab>`}
        />
      </Section>

      <Section
        title="Sizes"
        description="Tabs come in sm and md sizes to fit different layout contexts."
      >
        <Preview>
          <div className="space-y-8">
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">Small</p>
              <UnderlineTabs
                size="sm"
                tabs={[
                  { label: "Tab One", content: <p className="text-xs text-neutral-500">Small tab content panel.</p> },
                  { label: "Tab Two", content: <p className="text-xs text-neutral-500">Second small tab content.</p> },
                  { label: "Tab Three", content: <p className="text-xs text-neutral-500">Third small tab content.</p> },
                ]}
              />
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">Medium (default)</p>
              <UnderlineTabs
                size="md"
                tabs={[
                  { label: "Tab One", content: <p className="text-sm text-neutral-500">Medium tab content panel.</p> },
                  { label: "Tab Two", content: <p className="text-sm text-neutral-500">Second medium tab content.</p> },
                  { label: "Tab Three", content: <p className="text-sm text-neutral-500">Third medium tab content.</p> },
                ]}
              />
            </div>
          </div>
        </Preview>
        <CodeBlock code={`<Tabs size="sm">...</Tabs>\n<Tabs size="md">...</Tabs>`} />
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "defaultValue", type: "string", description: "The initially active tab value" },
            { name: "value", type: "string", description: "Controlled active tab value" },
            { name: "onChange", type: "(value: string) => void", description: "Callback when active tab changes" },
            { name: "variant", type: '"underline" | "pills"', default: '"underline"', description: "Visual style of the tab list" },
            { name: "size", type: '"sm" | "md"', default: '"md"', description: "Size of tab labels and padding" },
            { name: "children", type: "ReactNode", description: "Tabs.List and Tabs.Panel components" },
          ]}
        />
      </Section>

      <Section title="Guidelines">
        <DosAndDonts
          dos={[
            "Use tabs to organize related but distinct content sections",
            "Keep tab labels short (1-2 words) and descriptive",
            "Use underline tabs for page-level navigation within a section",
            "Use pill tabs for toggling between views of the same data",
          ]}
          donts={[
            "Don't use more than 5-6 tabs in a single tab bar",
            "Don't use tabs for sequential steps - use a stepper instead",
            "Don't nest tabs within tabs",
            "Don't use tabs when content needs to be compared side-by-side",
          ]}
        />
      </Section>
    </DocPage>
  );
}
