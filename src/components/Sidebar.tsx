"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Palette,
  Type,
  Grid3X3,
  Layers,
  Sun,
  Smile,
  RectangleHorizontal,
  TextCursorInput,
  ListFilter,
  CheckSquare,
  Circle,
  ToggleLeft,
  Award,
  UserCircle,
  AlertTriangle,
  Maximize2,
  MessageSquare,
  CreditCard,
  Table2,
  PanelTop,
  ChevronRight,
  Hash,
  Tag,
  Activity,
  Loader,
  ChevronDown,
  FileText,
  Layout,
  Navigation,
  FileQuestion,
  Home,
  Box,
} from "lucide-react";
import { useState } from "react";

const navSections = [
  {
    title: "Overview",
    items: [
      { label: "Getting Started", href: "/", icon: Home },
    ],
  },
  {
    title: "Foundations",
    items: [
      { label: "Colors", href: "/foundations/colors", icon: Palette },
      { label: "Typography", href: "/foundations/typography", icon: Type },
      { label: "Spacing", href: "/foundations/spacing", icon: Grid3X3 },
      { label: "Grid", href: "/foundations/grid", icon: Layout },
      { label: "Shadows", href: "/foundations/shadows", icon: Layers },
      { label: "Icons", href: "/foundations/icons", icon: Smile },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Button", href: "/components/button", icon: RectangleHorizontal },
      { label: "Input", href: "/components/input", icon: TextCursorInput },
      { label: "Select", href: "/components/select", icon: ListFilter },
      { label: "Checkbox", href: "/components/checkbox", icon: CheckSquare },
      { label: "Radio", href: "/components/radio", icon: Circle },
      { label: "Toggle", href: "/components/toggle", icon: ToggleLeft },
      { label: "Badge", href: "/components/badge", icon: Award },
      { label: "Avatar", href: "/components/avatar", icon: UserCircle },
      { label: "Alert", href: "/components/alert", icon: AlertTriangle },
      { label: "Modal", href: "/components/modal", icon: Maximize2 },
      { label: "Tooltip", href: "/components/tooltip", icon: MessageSquare },
      { label: "Card", href: "/components/card", icon: CreditCard },
      { label: "Table", href: "/components/table", icon: Table2 },
      { label: "Tabs", href: "/components/tabs", icon: PanelTop },
      { label: "Breadcrumb", href: "/components/breadcrumb", icon: ChevronRight },
      { label: "Pagination", href: "/components/pagination", icon: Hash },
      { label: "Tag", href: "/components/tag", icon: Tag },
      { label: "Progress", href: "/components/progress", icon: Activity },
      { label: "Skeleton", href: "/components/skeleton", icon: Loader },
      { label: "Dropdown", href: "/components/dropdown", icon: ChevronDown },
    ],
  },
  {
    title: "Patterns",
    items: [
      { label: "Forms", href: "/patterns/forms", icon: FileText },
      { label: "Data Tables", href: "/patterns/data-tables", icon: Table2 },
      { label: "Navigation", href: "/patterns/navigation", icon: Navigation },
      { label: "Empty States", href: "/patterns/empty-states", icon: FileQuestion },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (title: string) =>
    setCollapsed((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[260px] bg-white border-r border-neutral-200 overflow-y-auto z-40">
      <div className="px-5 py-5 border-b border-neutral-200">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
            <Box className="w-4.5 h-4.5 text-white" />
          </div>
          <div>
            <span className="text-base font-semibold text-neutral-900 tracking-tight">
              Spectra
            </span>
            <span className="text-[10px] font-medium text-neutral-400 ml-1.5 bg-neutral-100 px-1.5 py-0.5 rounded">
              v2.0
            </span>
          </div>
        </Link>
      </div>

      <nav className="py-4 px-3">
        {navSections.map((section) => {
          const isCollapsed = collapsed[section.title];
          return (
            <div key={section.title} className="mb-1">
              {section.title !== "Overview" && (
                <button
                  onClick={() => toggle(section.title)}
                  className="flex items-center justify-between w-full px-2 py-1.5 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider hover:text-neutral-600 transition-colors"
                >
                  {section.title}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${
                      isCollapsed ? "-rotate-90" : ""
                    }`}
                  />
                </button>
              )}
              {!isCollapsed && (
                <ul className="space-y-0.5">
                  {section.items.map((item) => {
                    const active = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-2.5 px-2.5 py-[7px] rounded-lg text-[13px] font-medium transition-all ${
                            active
                              ? "bg-brand-50 text-brand-700"
                              : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 flex-shrink-0 ${
                              active ? "text-brand-600" : "text-neutral-400"
                            }`}
                          />
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
