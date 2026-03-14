"use client";

import { useState } from "react";
import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";

const users = [
  { name: "Sarah Chen", email: "sarah.chen@acme.com", role: "Admin", status: "Active", lastActive: "2 hours ago" },
  { name: "Marcus Johnson", email: "m.johnson@acme.com", role: "Editor", status: "Active", lastActive: "5 min ago" },
  { name: "Priya Sharma", email: "priya.s@acme.com", role: "Viewer", status: "Inactive", lastActive: "3 days ago" },
  { name: "Alex Rodriguez", email: "a.rodriguez@acme.com", role: "Editor", status: "Active", lastActive: "1 hour ago" },
  { name: "Emily Watson", email: "e.watson@acme.com", role: "Admin", status: "Pending", lastActive: "Never" },
];

const statusColor: Record<string, string> = {
  Active: "bg-success-50 text-success-700",
  Inactive: "bg-neutral-100 text-neutral-500",
  Pending: "bg-warning-50 text-warning-700",
};

function SortIcon({ direction }: { direction?: "asc" | "desc" }) {
  return (
    <span className="inline-flex flex-col ml-1 -space-y-1">
      <svg className={`w-3 h-3 ${direction === "asc" ? "text-brand-600" : "text-neutral-300"}`} viewBox="0 0 12 12" fill="currentColor">
        <path d="M6 3l3 4H3z" />
      </svg>
      <svg className={`w-3 h-3 ${direction === "desc" ? "text-brand-600" : "text-neutral-300"}`} viewBox="0 0 12 12" fill="currentColor">
        <path d="M6 9l3-4H3z" />
      </svg>
    </span>
  );
}

export default function TablePage() {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [sortCol, setSortCol] = useState<string>("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const toggleAll = () => {
    if (selected.size === users.length) setSelected(new Set());
    else setSelected(new Set(users.map((_, i) => i)));
  };

  const toggleRow = (i: number) => {
    const next = new Set(selected);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setSelected(next);
  };

  const handleSort = (col: string) => {
    if (sortCol === col) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else { setSortCol(col); setSortDir("asc"); }
  };

  return (
    <DocPage
      title="Table"
      description="Tables display structured data in rows and columns, making it easy to scan, compare, and act on information. Designed for data-dense B2B interfaces."
    >
      <Section
        title="Basic Table"
        description="A standard table with header and body rows."
      >
        <Preview>
          <div className="overflow-x-auto border border-neutral-200 rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700">Name</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700">Email</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700">Role</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700">Status</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700">Last Active</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.email} className="border-b border-neutral-100 last:border-0">
                    <td className="px-4 py-3 font-medium text-neutral-900">{u.name}</td>
                    <td className="px-4 py-3 text-neutral-500">{u.email}</td>
                    <td className="px-4 py-3 text-neutral-600">{u.role}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${statusColor[u.status]}`}>
                        {u.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-neutral-400">{u.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Preview>
        <CodeBlock
          code={`<Table>
  <Table.Head>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Email</Table.HeaderCell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Sarah Chen</Table.Cell>
      <Table.Cell>sarah.chen@acme.com</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`}
        />
      </Section>

      <Section
        title="Striped & Hoverable Rows"
        description="Alternating row colors improve readability. Hoverable rows help users track across columns."
      >
        <Preview>
          <div className="overflow-x-auto border border-neutral-200 rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700">Name</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700">Email</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700">Role</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700">Status</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700">Last Active</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, i) => (
                  <tr key={u.email} className={`border-b border-neutral-100 last:border-0 hover:bg-brand-50/50 transition-colors ${i % 2 === 1 ? "bg-neutral-50/50" : ""}`}>
                    <td className="px-4 py-3 font-medium text-neutral-900">{u.name}</td>
                    <td className="px-4 py-3 text-neutral-500">{u.email}</td>
                    <td className="px-4 py-3 text-neutral-600">{u.role}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${statusColor[u.status]}`}>
                        {u.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-neutral-400">{u.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Preview>
        <CodeBlock code={`<Table striped hoverable>...</Table>`} />
      </Section>

      <Section
        title="Sorting Indicators"
        description="Column headers can indicate sort direction. Click to toggle sorting."
      >
        <Preview>
          <div className="overflow-x-auto border border-neutral-200 rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  {["name", "email", "role", "status", "lastActive"].map((col) => (
                    <th
                      key={col}
                      className="text-left px-4 py-3 font-semibold text-neutral-700 cursor-pointer select-none hover:text-brand-600 transition-colors"
                      onClick={() => handleSort(col)}
                    >
                      <span className="inline-flex items-center">
                        {col === "lastActive" ? "Last Active" : col.charAt(0).toUpperCase() + col.slice(1)}
                        <SortIcon direction={sortCol === col ? sortDir : undefined} />
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...users]
                  .sort((a, b) => {
                    const aVal = a[sortCol as keyof typeof a];
                    const bVal = b[sortCol as keyof typeof b];
                    const cmp = aVal.localeCompare(bVal);
                    return sortDir === "asc" ? cmp : -cmp;
                  })
                  .map((u) => (
                    <tr key={u.email} className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50/50">
                      <td className="px-4 py-3 font-medium text-neutral-900">{u.name}</td>
                      <td className="px-4 py-3 text-neutral-500">{u.email}</td>
                      <td className="px-4 py-3 text-neutral-600">{u.role}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${statusColor[u.status]}`}>
                          {u.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-neutral-400">{u.lastActive}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Preview>
        <CodeBlock code={`<Table.HeaderCell sortable sortDirection="asc" onSort={handleSort}>Name</Table.HeaderCell>`} />
      </Section>

      <Section
        title="Selection with Checkboxes"
        description="Row selection allows users to perform bulk actions on multiple items."
      >
        <Preview>
          <div className="overflow-x-auto border border-neutral-200 rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  <th className="px-4 py-3 w-10">
                    <input
                      type="checkbox"
                      checked={selected.size === users.length}
                      onChange={toggleAll}
                      className="w-4 h-4 rounded border-neutral-300 text-brand-600 focus:ring-brand-500 cursor-pointer"
                    />
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700">Name</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700">Email</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700">Role</th>
                  <th className="text-left px-4 py-3 font-semibold text-neutral-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, i) => (
                  <tr key={u.email} className={`border-b border-neutral-100 last:border-0 transition-colors ${selected.has(i) ? "bg-brand-50/50" : "hover:bg-neutral-50/50"}`}>
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selected.has(i)}
                        onChange={() => toggleRow(i)}
                        className="w-4 h-4 rounded border-neutral-300 text-brand-600 focus:ring-brand-500 cursor-pointer"
                      />
                    </td>
                    <td className="px-4 py-3 font-medium text-neutral-900">{u.name}</td>
                    <td className="px-4 py-3 text-neutral-500">{u.email}</td>
                    <td className="px-4 py-3 text-neutral-600">{u.role}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${statusColor[u.status]}`}>
                        {u.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {selected.size > 0 && (
            <div className="mt-3 px-4 py-2 bg-brand-50 rounded-lg text-xs font-medium text-brand-700">
              {selected.size} row{selected.size > 1 ? "s" : ""} selected
            </div>
          )}
        </Preview>
        <CodeBlock code={`<Table selectable onSelectionChange={handleSelection}>...</Table>`} />
      </Section>

      <Section
        title="Density: Compact & Comfortable"
        description="Adjust row padding for information-dense or relaxed layouts."
      >
        <Preview>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">Compact</p>
              <div className="overflow-x-auto border border-neutral-200 rounded-xl">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-neutral-50 border-b border-neutral-200">
                      <th className="text-left px-3 py-2 font-semibold text-neutral-700 text-xs">Name</th>
                      <th className="text-left px-3 py-2 font-semibold text-neutral-700 text-xs">Email</th>
                      <th className="text-left px-3 py-2 font-semibold text-neutral-700 text-xs">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.slice(0, 3).map((u) => (
                      <tr key={u.email} className="border-b border-neutral-100 last:border-0">
                        <td className="px-3 py-1.5 font-medium text-neutral-900 text-xs">{u.name}</td>
                        <td className="px-3 py-1.5 text-neutral-500 text-xs">{u.email}</td>
                        <td className="px-3 py-1.5 text-neutral-600 text-xs">{u.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">Comfortable</p>
              <div className="overflow-x-auto border border-neutral-200 rounded-xl">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-neutral-50 border-b border-neutral-200">
                      <th className="text-left px-5 py-4 font-semibold text-neutral-700">Name</th>
                      <th className="text-left px-5 py-4 font-semibold text-neutral-700">Email</th>
                      <th className="text-left px-5 py-4 font-semibold text-neutral-700">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.slice(0, 3).map((u) => (
                      <tr key={u.email} className="border-b border-neutral-100 last:border-0">
                        <td className="px-5 py-4 font-medium text-neutral-900">{u.name}</td>
                        <td className="px-5 py-4 text-neutral-500">{u.email}</td>
                        <td className="px-5 py-4 text-neutral-600">{u.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Preview>
        <CodeBlock code={`<Table density="compact">...</Table>\n<Table density="comfortable">...</Table>`} />
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "data", type: "T[]", description: "Array of data objects to display" },
            { name: "columns", type: "Column[]", description: "Column configuration with header, accessor, and render" },
            { name: "striped", type: "boolean", default: "false", description: "Alternating row background colors" },
            { name: "hoverable", type: "boolean", default: "true", description: "Highlight rows on hover" },
            { name: "selectable", type: "boolean", default: "false", description: "Enable row selection with checkboxes" },
            { name: "sortable", type: "boolean", default: "false", description: "Enable column sorting" },
            { name: "density", type: '"compact" | "default" | "comfortable"', default: '"default"', description: "Row padding density" },
            { name: "onSelectionChange", type: "(selected: T[]) => void", description: "Callback when selection changes" },
            { name: "onSort", type: "(column: string, direction: string) => void", description: "Callback when sort changes" },
          ]}
        />
      </Section>

      <Section title="Guidelines">
        <DosAndDonts
          dos={[
            "Right-align numerical data for easy comparison",
            "Use consistent date/time formatting across all cells",
            "Provide sorting for columns users commonly search by",
            "Use compact density for data-heavy dashboards",
          ]}
          donts={[
            "Don't show more than 7-8 columns without horizontal scrolling",
            "Don't use tables for simple key-value data - use a description list instead",
            "Don't truncate cell content without a tooltip to reveal full text",
            "Don't mix different text sizes within the same table",
          ]}
        />
      </Section>
    </DocPage>
  );
}
