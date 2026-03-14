"use client";

import React, { useState } from "react";
import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";
import {
  Menu,
  X,
  Bell,
  Search,
  ChevronRight,
  ChevronDown,
  Home,
  Users,
  BarChart3,
  Settings,
  FileText,
  HelpCircle,
  LogOut,
  Layers,
  LayoutDashboard,
  ShoppingBag,
  MessageSquare,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Top Navigation Bar                                                 */
/* ------------------------------------------------------------------ */

function TopNavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = ["Dashboard", "Projects", "Team", "Reports"];
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="rounded-lg border border-neutral-200 overflow-hidden">
      <nav className="bg-white border-b border-neutral-200 px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          {/* Logo + links */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-neutral-900">
                Spectra
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => setActive(l)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    active === l
                      ? "bg-brand-50 text-brand-700"
                      : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="relative p-2 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error-500 rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold flex items-center justify-center">
              JD
            </div>
            <button
              className="sm:hidden p-2 rounded-lg text-neutral-400 hover:bg-neutral-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="sm:hidden pb-3 space-y-1">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => {
                  setActive(l);
                  setMobileOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  active === l
                    ? "bg-brand-50 text-brand-700"
                    : "text-neutral-500 hover:bg-neutral-50"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </nav>
      {/* Placeholder page body */}
      <div className="h-24 bg-neutral-50 flex items-center justify-center text-xs text-neutral-400">
        Page content
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sidebar Navigation                                                 */
/* ------------------------------------------------------------------ */

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Users, label: "Team" },
  { icon: BarChart3, label: "Analytics" },
  { icon: FileText, label: "Documents" },
  { icon: ShoppingBag, label: "Orders" },
  { icon: MessageSquare, label: "Messages", badge: 3 },
  { icon: Settings, label: "Settings" },
];

function SidebarNav() {
  const [active, setActive] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex rounded-lg border border-neutral-200 overflow-hidden h-80">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-neutral-200 flex flex-col transition-all ${
          collapsed ? "w-16" : "w-56"
        }`}
      >
        {/* Logo */}
        <div className="h-14 flex items-center gap-2 px-4 border-b border-neutral-100 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center shrink-0">
            <Layers className="w-4 h-4 text-white" />
          </div>
          {!collapsed && (
            <span className="text-sm font-bold text-neutral-900">Spectra</span>
          )}
        </div>

        {/* Links */}
        <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
          {sidebarItems.map(({ icon: Icon, label, badge }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active === label
                  ? "bg-brand-50 text-brand-700"
                  : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
              } ${collapsed ? "justify-center px-0" : ""}`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {!collapsed && <span className="flex-1 text-left">{label}</span>}
              {!collapsed && badge && (
                <span className="bg-brand-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                  {badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-neutral-100 p-2 space-y-0.5">
          <button
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-colors ${
              collapsed ? "justify-center px-0" : ""
            }`}
          >
            <HelpCircle className="w-4 h-4 shrink-0" />
            {!collapsed && "Help"}
          </button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-colors ${
              collapsed ? "justify-center px-0" : ""
            }`}
          >
            <Menu className="w-4 h-4 shrink-0" />
            {!collapsed && "Collapse"}
          </button>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 bg-neutral-50 flex items-center justify-center text-xs text-neutral-400">
        Page content
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Breadcrumbs                                                        */
/* ------------------------------------------------------------------ */

function Breadcrumbs() {
  const crumbs = [
    { label: "Home", icon: Home },
    { label: "Projects" },
    { label: "Spectra Design System" },
    { label: "Components" },
  ];

  return (
    <div className="space-y-6">
      {/* Default */}
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Default
        </p>
        <nav className="flex items-center gap-1 text-sm">
          {crumbs.map((c, i) => (
            <React.Fragment key={c.label}>
              {i > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-neutral-300 mx-0.5" />
              )}
              {i < crumbs.length - 1 ? (
                <button className="flex items-center gap-1 text-neutral-500 hover:text-brand-600 transition-colors">
                  {c.icon && <c.icon className="w-3.5 h-3.5" />}
                  {c.label}
                </button>
              ) : (
                <span className="text-neutral-900 font-medium">{c.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* With background */}
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Contained
        </p>
        <nav className="inline-flex items-center gap-1 text-sm bg-neutral-100 rounded-lg px-3 py-2">
          {crumbs.map((c, i) => (
            <React.Fragment key={c.label}>
              {i > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-neutral-300 mx-0.5" />
              )}
              {i < crumbs.length - 1 ? (
                <button className="text-neutral-500 hover:text-brand-600 transition-colors">
                  {c.label}
                </button>
              ) : (
                <span className="text-neutral-900 font-medium">{c.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Tabs                                                               */
/* ------------------------------------------------------------------ */

function TabNavigation() {
  const tabs = ["Overview", "Members", "Settings", "Billing", "Integrations"];
  const [active, setActive] = useState("Overview");

  return (
    <div className="space-y-6">
      {/* Underline tabs */}
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Underline tabs
        </p>
        <div className="border-b border-neutral-200">
          <nav className="flex gap-0 -mb-px">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                  active === t
                    ? "border-brand-600 text-brand-600"
                    : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
                }`}
              >
                {t}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Pill tabs */}
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Pill tabs
        </p>
        <nav className="inline-flex items-center gap-1 bg-neutral-100 rounded-lg p-1">
          {tabs.slice(0, 4).map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors ${
                active === t
                  ? "bg-white text-neutral-900 shadow-xs"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              {t}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Bottom Nav                                                  */
/* ------------------------------------------------------------------ */

function MobileBottomNav() {
  const items = [
    { icon: Home, label: "Home" },
    { icon: Search, label: "Search" },
    { icon: ShoppingBag, label: "Orders" },
    { icon: MessageSquare, label: "Messages", badge: 2 },
    { icon: Users, label: "Account" },
  ];
  const [active, setActive] = useState("Home");

  return (
    <div className="max-w-xs mx-auto rounded-2xl border border-neutral-200 overflow-hidden bg-neutral-50">
      {/* Fake content */}
      <div className="h-40 flex items-center justify-center text-xs text-neutral-400">
        Mobile screen content
      </div>

      {/* Bottom bar */}
      <nav className="bg-white border-t border-neutral-200 flex items-center justify-around py-2 px-1">
        {items.map(({ icon: Icon, label, badge }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`flex flex-col items-center gap-0.5 min-w-[48px] py-1 rounded-lg transition-colors ${
              active === label ? "text-brand-600" : "text-neutral-400"
            }`}
          >
            <div className="relative">
              <Icon className="w-5 h-5" />
              {badge && (
                <span className="absolute -top-1.5 -right-2 bg-error-500 text-white text-[9px] font-bold px-1 rounded-full leading-tight">
                  {badge}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function NavigationPatternPage() {
  return (
    <DocPage
      title="Navigation Patterns"
      description="Patterns for guiding users through your application with clear, consistent navigation structures."
    >
      <Section
        title="Top Navigation Bar"
        description="Use for apps with 3-7 top-level sections. Collapses into a hamburger menu on mobile. Best for flat information architectures."
      >
        <Preview>
          <TopNavBar />
        </Preview>
      </Section>

      <Section
        title="Sidebar Navigation"
        description="Best for apps with many sections or deep hierarchies (admin panels, dashboards). Supports collapsible states and badges. Click 'Collapse' to toggle."
      >
        <Preview>
          <SidebarNav />
        </Preview>
      </Section>

      <Section
        title="Breadcrumb Navigation"
        description="Shows the user's current location in a hierarchy. Always place above the page title. The last item is the current page and should not be a link."
      >
        <Preview>
          <Breadcrumbs />
        </Preview>
        <CodeBlock
          code={`<nav className="flex items-center gap-1 text-sm">
  <a href="/" className="text-neutral-500 hover:text-brand-600">Home</a>
  <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
  <a href="/projects" className="text-neutral-500 hover:text-brand-600">Projects</a>
  <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
  <span className="text-neutral-900 font-medium">Current Page</span>
</nav>`}
        />
      </Section>

      <Section
        title="Tab Navigation"
        description="Use tabs to switch between related views within a single page. Choose underline tabs for page-level nav and pill tabs for smaller, in-content sections."
      >
        <Preview>
          <TabNavigation />
        </Preview>
      </Section>

      <Section
        title="Mobile Bottom Navigation"
        description="For mobile-first apps with 3-5 primary destinations. Keep labels short (one word). Use badges sparingly."
      >
        <Preview>
          <MobileBottomNav />
        </Preview>
      </Section>

      <Section
        title="When to Use Each Pattern"
        description="Choose the right navigation pattern based on your application's complexity and primary use case."
      >
        <PropsTable
          props={[
            {
              name: "Top nav bar",
              type: "3-7 sections",
              default: "Web apps",
              description:
                "Flat hierarchy, marketing sites, apps with few top-level pages.",
            },
            {
              name: "Sidebar",
              type: "5-20+ sections",
              default: "Admin panels",
              description:
                "Deep hierarchies, dashboards, tools with many features.",
            },
            {
              name: "Breadcrumbs",
              type: "3+ levels deep",
              default: "Supplementary",
              description:
                "Always used alongside top nav or sidebar, never as the sole nav.",
            },
            {
              name: "Tabs",
              type: "2-6 views",
              default: "In-page",
              description:
                "Switch between related content within a single page context.",
            },
            {
              name: "Bottom nav",
              type: "3-5 destinations",
              default: "Mobile apps",
              description:
                "Thumb-reachable primary actions for native-feel mobile experiences.",
            },
          ]}
        />
      </Section>

      <Section title="Dos and Don'ts">
        <DosAndDonts
          dos={[
            "Highlight the current page or section clearly.",
            "Keep navigation labels short and scannable.",
            "Use icons alongside labels in sidebar and bottom nav for quick recognition.",
            "Collapse sidebar navigation on smaller screens or provide a toggle.",
            "Limit top-level items to 7 or fewer to avoid cognitive overload.",
          ]}
          donts={[
            "Don't nest more than 2 levels in sidebar navigation.",
            "Don't use bottom navigation on desktop layouts.",
            "Don't make the last breadcrumb item a clickable link.",
            "Don't use tabs for unrelated content areas.",
            "Don't hide critical navigation behind a hamburger menu on desktop.",
          ]}
        />
      </Section>
    </DocPage>
  );
}
