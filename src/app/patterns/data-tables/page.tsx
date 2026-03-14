"use client";

import React, { useState, useMemo } from "react";
import DocPage, { Section, Preview, DosAndDonts } from "@/components/DocPage";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  ArrowUpDown,
  MoreHorizontal,
  Pencil,
  Trash2,
  Copy,
  ChevronLeft,
  ChevronRight,
  Inbox,
  Download,
  UserPlus,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Invited" | "Suspended";
  plan: string;
  lastActive: string;
}

const USERS: User[] = [
  { id: 1, name: "Olivia Martin", email: "olivia@acme.com", role: "Admin", status: "Active", plan: "Enterprise", lastActive: "2 hours ago" },
  { id: 2, name: "Liam Chen", email: "liam@globex.io", role: "Editor", status: "Active", plan: "Pro", lastActive: "5 min ago" },
  { id: 3, name: "Emma Rodriguez", email: "emma@initech.co", role: "Viewer", status: "Invited", plan: "Starter", lastActive: "Never" },
  { id: 4, name: "Noah Williams", email: "noah@hooli.dev", role: "Admin", status: "Active", plan: "Enterprise", lastActive: "1 day ago" },
  { id: 5, name: "Ava Patel", email: "ava@umbrella.org", role: "Editor", status: "Suspended", plan: "Pro", lastActive: "3 weeks ago" },
  { id: 6, name: "James Kim", email: "james@stark.ind", role: "Viewer", status: "Active", plan: "Starter", lastActive: "12 min ago" },
  { id: 7, name: "Sophia Lee", email: "sophia@wayne.ent", role: "Admin", status: "Active", plan: "Enterprise", lastActive: "Just now" },
  { id: 8, name: "Mason Taylor", email: "mason@oscorp.net", role: "Editor", status: "Invited", plan: "Pro", lastActive: "Never" },
];

/* ------------------------------------------------------------------ */
/*  Status Badge                                                       */
/* ------------------------------------------------------------------ */

function StatusBadge({ status }: { status: User["status"] }) {
  const map: Record<User["status"], string> = {
    Active: "bg-success-50 text-success-700 border-success-500/20",
    Invited: "bg-warning-50 text-warning-700 border-warning-500/20",
    Suspended: "bg-error-50 text-error-700 border-error-500/20",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${map[status]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === "Active"
            ? "bg-success-500"
            : status === "Invited"
            ? "bg-warning-500"
            : "bg-error-500"
        }`}
      />
      {status}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Row Actions Dropdown                                               */
/* ------------------------------------------------------------------ */

function RowActions({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="fixed inset-0 z-10" onClick={onClose} />
      <div className="absolute right-0 top-8 z-20 w-44 rounded-lg border border-neutral-200 bg-white shadow-lg py-1">
        {[
          { icon: Pencil, label: "Edit user", color: "text-neutral-700" },
          { icon: Copy, label: "Copy email", color: "text-neutral-700" },
          { icon: Trash2, label: "Delete user", color: "text-error-500" },
        ].map(({ icon: Icon, label, color }) => (
          <button
            key={label}
            onClick={onClose}
            className={`flex w-full items-center gap-2 px-3 py-2 text-sm ${color} hover:bg-neutral-50 transition-colors`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Full Table                                                         */
/* ------------------------------------------------------------------ */

type SortKey = "name" | "role" | "status" | "plan" | "lastActive";
type SortDir = "asc" | "desc";

function FullDataTable() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<number[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [openAction, setOpenAction] = useState<number | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [page, setPage] = useState(1);
  const perPage = 5;

  const filtered = useMemo(() => {
    let rows = USERS.filter((u) => {
      const matchesQuery =
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.email.toLowerCase().includes(query.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || u.status === statusFilter;
      return matchesQuery && matchesStatus;
    });

    rows.sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

    return rows;
  }, [query, statusFilter, sortKey, sortDir]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function SortIcon({ col }: { col: SortKey }) {
    if (sortKey !== col) return <ArrowUpDown className="w-3.5 h-3.5 text-neutral-300" />;
    return sortDir === "asc" ? (
      <ChevronUp className="w-3.5 h-3.5 text-brand-600" />
    ) : (
      <ChevronDown className="w-3.5 h-3.5 text-brand-600" />
    );
  }

  const allSelected = paged.length > 0 && paged.every((u) => selected.includes(u.id));

  return (
    <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 border-b border-neutral-100">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-9 pr-3 py-2 text-sm rounded-lg border border-neutral-300 bg-white placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none w-64 transition-all"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </div>
          <div className="flex items-center gap-1.5">
            <SlidersHorizontal className="w-4 h-4 text-neutral-400" />
            {["All", "Active", "Invited", "Suspended"].map((s) => (
              <button
                key={s}
                onClick={() => {
                  setStatusFilter(s);
                  setPage(1);
                }}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  statusFilter === s
                    ? "bg-brand-50 text-brand-700"
                    : "text-neutral-500 hover:bg-neutral-100"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {selected.length > 0 && (
            <span className="text-xs text-neutral-500 mr-1">
              {selected.length} selected
            </span>
          )}
          {selected.length > 0 && (
            <button className="inline-flex items-center gap-1.5 rounded-lg border border-error-300 bg-white px-3 py-1.5 text-xs font-medium text-error-700 hover:bg-error-50 transition-colors">
              <Trash2 className="w-3.5 h-3.5" />
              Delete
            </button>
          )}
          <button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
            <Download className="w-3.5 h-3.5" />
            Export
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700 transition-colors shadow-xs">
            <UserPlus className="w-3.5 h-3.5" />
            Add user
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-neutral-50 border-b border-neutral-200 text-left">
              <th className="px-5 py-3 w-10">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-neutral-300 text-brand-600 focus:ring-brand-500"
                  checked={allSelected}
                  onChange={() => {
                    if (allSelected) {
                      setSelected(selected.filter((id) => !paged.find((u) => u.id === id)));
                    } else {
                      setSelected([...new Set([...selected, ...paged.map((u) => u.id)])]);
                    }
                  }}
                />
              </th>
              {(
                [
                  ["name", "Name"],
                  ["role", "Role"],
                  ["status", "Status"],
                  ["plan", "Plan"],
                  ["lastActive", "Last Active"],
                ] as [SortKey, string][]
              ).map(([key, label]) => (
                <th key={key} className="px-5 py-3">
                  <button
                    className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 uppercase tracking-wider hover:text-neutral-900 transition-colors"
                    onClick={() => toggleSort(key)}
                  >
                    {label}
                    <SortIcon col={key} />
                  </button>
                </th>
              ))}
              <th className="px-5 py-3 w-16" />
            </tr>
          </thead>
          <tbody>
            {paged.map((user) => (
              <tr
                key={user.id}
                className={`border-b border-neutral-100 last:border-0 hover:bg-neutral-50/50 transition-colors ${
                  selected.includes(user.id) ? "bg-brand-50/30" : ""
                }`}
              >
                <td className="px-5 py-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-neutral-300 text-brand-600 focus:ring-brand-500"
                    checked={selected.includes(user.id)}
                    onChange={() =>
                      setSelected(
                        selected.includes(user.id)
                          ? selected.filter((id) => id !== user.id)
                          : [...selected, user.id]
                      )
                    }
                  />
                </td>
                <td className="px-5 py-3">
                  <div>
                    <p className="font-medium text-neutral-900">{user.name}</p>
                    <p className="text-xs text-neutral-400">{user.email}</p>
                  </div>
                </td>
                <td className="px-5 py-3 text-neutral-600">{user.role}</td>
                <td className="px-5 py-3">
                  <StatusBadge status={user.status} />
                </td>
                <td className="px-5 py-3 text-neutral-600">{user.plan}</td>
                <td className="px-5 py-3 text-neutral-400 text-xs">
                  {user.lastActive}
                </td>
                <td className="px-5 py-3 relative">
                  <button
                    className="p-1 rounded-md hover:bg-neutral-100 transition-colors"
                    onClick={() =>
                      setOpenAction(openAction === user.id ? null : user.id)
                    }
                  >
                    <MoreHorizontal className="w-4 h-4 text-neutral-400" />
                  </button>
                  {openAction === user.id && (
                    <RowActions onClose={() => setOpenAction(null)} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-neutral-100 text-sm">
        <p className="text-neutral-400 text-xs">
          Showing {(page - 1) * perPage + 1}
          &ndash;
          {Math.min(page * perPage, filtered.length)} of {filtered.length} users
        </p>
        <div className="flex items-center gap-1">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="p-1.5 rounded-md border border-neutral-200 hover:bg-neutral-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-neutral-600" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-8 h-8 rounded-md text-xs font-medium transition-colors ${
                page === p
                  ? "bg-brand-600 text-white"
                  : "text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="p-1.5 rounded-md border border-neutral-200 hover:bg-neutral-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-neutral-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Empty State                                                        */
/* ------------------------------------------------------------------ */

function TableEmptyState() {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
      <div className="px-5 py-4 border-b border-neutral-100 flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Search users..."
            defaultValue="xyznonexistent"
            className="pl-9 pr-3 py-2 text-sm rounded-lg border border-neutral-300 bg-white placeholder:text-neutral-400 outline-none w-64"
            readOnly
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center mb-4">
          <Inbox className="w-6 h-6 text-neutral-400" />
        </div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">
          No users found
        </h3>
        <p className="text-sm text-neutral-400 max-w-xs mb-4">
          We couldn&apos;t find any users matching your search. Try a different query or clear filters.
        </p>
        <button className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
          Clear search
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DataTablesPatternPage() {
  return (
    <DocPage
      title="Data Table Patterns"
      description="Patterns for displaying, searching, sorting, filtering, and acting on tabular data in B2B admin panels."
    >
      <Section
        title="Full Data Table"
        description="A production-ready table with search, filters, sortable columns, row selection, bulk actions, row-level actions, and pagination."
      >
        <Preview>
          <FullDataTable />
        </Preview>
      </Section>

      <Section
        title="Table Toolbar"
        description="Toolbars sit above the table and contain search, filter chips, bulk actions, and primary actions. The bulk actions appear contextually when rows are selected."
      >
        <Preview>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-9 pr-3 py-2 text-sm rounded-lg border border-neutral-300 bg-white outline-none w-56"
                    readOnly
                  />
                </div>
                <div className="flex gap-1.5">
                  {["Status", "Role", "Plan"].map((f) => (
                    <button
                      key={f}
                      className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5 text-xs font-medium text-neutral-600 hover:bg-neutral-50 transition-colors"
                    >
                      {f}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-brand-600 font-medium">
                  3 selected
                </span>
                <button className="inline-flex items-center gap-1.5 rounded-lg border border-error-300 bg-white px-3 py-1.5 text-xs font-medium text-error-700 hover:bg-error-50 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
                  <Download className="w-3.5 h-3.5" />
                  Export
                </button>
              </div>
            </div>
          </div>
        </Preview>
      </Section>

      <Section
        title="Row Actions"
        description="Use a three-dot menu for secondary row actions. Place destructive actions at the bottom and style them in red."
      >
        <Preview>
          <div className="flex items-center gap-6">
            {/* Inline actions */}
            <div>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                Inline actions
              </p>
              <div className="flex items-center gap-1.5">
                <button className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-100 transition-colors">
                  <Pencil className="w-3.5 h-3.5" />
                  Edit
                </button>
                <button className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-medium text-error-600 hover:bg-error-50 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete
                </button>
              </div>
            </div>
            {/* Menu actions */}
            <div>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                Dropdown menu
              </p>
              <div className="w-44 rounded-lg border border-neutral-200 bg-white shadow-lg py-1">
                {[
                  { icon: Pencil, label: "Edit user", color: "text-neutral-700" },
                  { icon: Copy, label: "Copy email", color: "text-neutral-700" },
                  { icon: Trash2, label: "Delete user", color: "text-error-500" },
                ].map(({ icon: Icon, label, color }) => (
                  <button
                    key={label}
                    className={`flex w-full items-center gap-2 px-3 py-2 text-sm ${color} hover:bg-neutral-50 transition-colors`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Preview>
      </Section>

      <Section
        title="Empty State"
        description="When no rows match the current search or filters, show a helpful empty state with a clear call-to-action."
      >
        <Preview>
          <TableEmptyState />
        </Preview>
      </Section>

      <Section title="Dos and Don'ts">
        <DosAndDonts
          dos={[
            "Provide instant search and clearly show result counts.",
            "Allow sorting on columns with comparable data.",
            "Use status badges with color and dot indicators for quick scanning.",
            "Show contextual bulk actions only when rows are selected.",
            "Include pagination for datasets larger than 10-20 rows.",
            "Show an empty state with guidance when no results are found.",
          ]}
          donts={[
            "Don't overload rows with too many action buttons inline.",
            "Don't auto-paginate without showing a clear page indicator.",
            "Don't mix different action styles (icons-only vs. text) in the same column.",
            "Don't hide the search bar behind a toggle on admin panels.",
            "Don't remove row selection checkboxes if bulk actions are supported.",
            "Don't forget to indicate the current sort direction visually.",
          ]}
        />
      </Section>
    </DocPage>
  );
}
