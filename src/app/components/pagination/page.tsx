"use client";

import { useState } from "react";
import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";

function PaginationDemo({ totalPages = 10, compact = false }: { totalPages?: number; compact?: boolean }) {
  const [page, setPage] = useState(1);

  const getPages = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push("...");
      for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
        pages.push(i);
      }
      if (page < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="px-3 py-1.5 rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-xs font-medium"
        >
          Previous
        </button>
        <span className="text-xs text-neutral-500">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="px-3 py-1.5 rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-xs font-medium"
        >
          Next
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="w-9 h-9 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {getPages().map((p, i) =>
        p === "..." ? (
          <span key={`e${i}`} className="w-9 h-9 flex items-center justify-center text-sm text-neutral-400">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => setPage(p as number)}
            className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
              page === p
                ? "bg-brand-600 text-white"
                : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            {p}
          </button>
        )
      )}
      <button
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="w-9 h-9 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

function PaginationWithPageSize() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const total = 248;
  const totalPages = Math.ceil(total / pageSize);

  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm text-neutral-500">
        <span>Showing</span>
        <select
          value={pageSize}
          onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
          className="px-2 py-1 border border-neutral-200 rounded-lg text-sm text-neutral-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-300"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>of {total} results</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-neutral-500 text-xs mr-2">{start}-{end} of {total}</span>
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="w-8 h-8 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="w-8 h-8 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function PaginationPage() {
  return (
    <DocPage
      title="Pagination"
      description="Pagination splits large datasets into discrete pages, giving users control over data navigation and reducing load on both client and server."
    >
      <Section
        title="Basic Pagination"
        description="Page number buttons with previous/next arrows. Click to navigate."
      >
        <Preview>
          <PaginationDemo totalPages={10} />
        </Preview>
        <CodeBlock
          code={`<Pagination
  page={1}
  totalPages={10}
  onChange={setPage}
/>`}
        />
      </Section>

      <Section
        title="With Previous & Next"
        description="When the total pages are high, ellipsis keeps the pagination compact."
      >
        <Preview>
          <PaginationDemo totalPages={50} />
        </Preview>
        <CodeBlock
          code={`<Pagination page={1} totalPages={50} onChange={setPage} />`}
        />
      </Section>

      <Section
        title="With Page Size Selector"
        description="Let users control how many results appear per page alongside navigation."
      >
        <Preview>
          <PaginationWithPageSize />
        </Preview>
        <CodeBlock
          code={`<Pagination
  page={1}
  totalItems={248}
  pageSize={10}
  pageSizeOptions={[10, 25, 50, 100]}
  onPageChange={setPage}
  onPageSizeChange={setPageSize}
  showPageSizeSelector
/>`}
        />
      </Section>

      <Section
        title="Compact Variant"
        description="A simplified pagination with just previous/next buttons and a page indicator."
      >
        <Preview>
          <PaginationDemo totalPages={12} compact />
        </Preview>
        <CodeBlock
          code={`<Pagination variant="compact" page={1} totalPages={12} onChange={setPage} />`}
        />
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "page", type: "number", description: "Current active page (1-indexed)" },
            { name: "totalPages", type: "number", description: "Total number of pages" },
            { name: "onChange", type: "(page: number) => void", description: "Callback when page changes" },
            { name: "variant", type: '"default" | "compact"', default: '"default"', description: "Visual variant of the pagination" },
            { name: "pageSize", type: "number", default: "10", description: "Number of items per page" },
            { name: "pageSizeOptions", type: "number[]", default: "[10, 25, 50]", description: "Options for the page size selector" },
            { name: "onPageSizeChange", type: "(size: number) => void", description: "Callback when page size changes" },
            { name: "showPageSizeSelector", type: "boolean", default: "false", description: "Display page size dropdown" },
          ]}
        />
      </Section>

      <Section title="Guidelines">
        <DosAndDonts
          dos={[
            "Show the current page and total pages for context",
            "Use pagination for datasets larger than 50 items",
            "Combine with a page size selector for data-heavy tables",
            "Disable previous/next buttons at the boundaries",
          ]}
          donts={[
            "Don't paginate fewer than 10 items",
            "Don't reset page on unrelated filter changes",
            "Don't use pagination for infinite-scroll content feeds",
            "Don't hide the total count from users",
          ]}
        />
      </Section>
    </DocPage>
  );
}
