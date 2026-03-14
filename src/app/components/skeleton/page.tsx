"use client";

import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";

function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`bg-neutral-200 rounded animate-pulse ${className ?? ""}`} />
  );
}

export default function SkeletonPage() {
  return (
    <DocPage
      title="Skeleton"
      description="Skeleton loaders provide a visual placeholder for content that is loading. They reduce perceived load time by showing the layout shape before data arrives."
    >
      <Section
        title="Text Skeleton"
        description="Placeholder lines for text content like paragraphs, headings, and labels."
      >
        <Preview>
          <div className="space-y-3 max-w-md">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </Preview>
        <CodeBlock
          code={`<Skeleton width="200px" height="20px" />
<Skeleton width="100%" height="16px" />
<Skeleton width="75%" height="16px" />`}
        />
      </Section>

      <Section
        title="Circle Skeleton"
        description="Circular placeholders for avatars, icons, and profile images."
      >
        <Preview>
          <div className="flex items-center gap-4">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="w-12 h-12 rounded-full" />
            <Skeleton className="w-16 h-16 rounded-full" />
          </div>
        </Preview>
        <CodeBlock code={`<Skeleton variant="circle" size={48} />`} />
      </Section>

      <Section
        title="Rectangular Skeleton"
        description="Rectangular placeholders for images, cards, and block-level content."
      >
        <Preview>
          <div className="flex gap-4">
            <Skeleton className="w-32 h-24 rounded-lg" />
            <Skeleton className="w-48 h-24 rounded-lg" />
            <Skeleton className="w-40 h-24 rounded-lg" />
          </div>
        </Preview>
        <CodeBlock code={`<Skeleton variant="rectangular" width={200} height={100} />`} />
      </Section>

      <Section
        title="Card Skeleton Loader"
        description="A complete skeleton that mirrors the card component layout for smooth loading transitions."
      >
        <Preview>
          <div className="grid grid-cols-3 gap-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
                <Skeleton className="h-32 w-full rounded-none" />
                <div className="p-4 space-y-3">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                  <div className="flex items-center gap-2 pt-1">
                    <Skeleton className="w-6 h-6 rounded-full" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Preview>
        <CodeBlock
          code={`<Card.Skeleton>
  <Skeleton variant="rectangular" height={128} />
  <Card.Body>
    <Skeleton width="75%" height={16} />
    <Skeleton width="100%" height={12} />
    <Skeleton width="85%" height={12} />
  </Card.Body>
</Card.Skeleton>`}
        />
      </Section>

      <Section
        title="Table Skeleton Loader"
        description="A skeleton that matches the table layout for consistent loading states in data tables."
      >
        <Preview>
          <div className="overflow-x-auto border border-neutral-200 rounded-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  <th className="text-left px-4 py-3">
                    <Skeleton className="h-3 w-16" />
                  </th>
                  <th className="text-left px-4 py-3">
                    <Skeleton className="h-3 w-24" />
                  </th>
                  <th className="text-left px-4 py-3">
                    <Skeleton className="h-3 w-12" />
                  </th>
                  <th className="text-left px-4 py-3">
                    <Skeleton className="h-3 w-16" />
                  </th>
                  <th className="text-left px-4 py-3">
                    <Skeleton className="h-3 w-20" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {[0, 1, 2, 3, 4].map((i) => (
                  <tr key={i} className="border-b border-neutral-100 last:border-0">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Skeleton className="w-7 h-7 rounded-full" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Skeleton className="h-3 w-36" />
                    </td>
                    <td className="px-4 py-3">
                      <Skeleton className="h-3 w-14" />
                    </td>
                    <td className="px-4 py-3">
                      <Skeleton className="h-5 w-16 rounded-full" />
                    </td>
                    <td className="px-4 py-3">
                      <Skeleton className="h-3 w-20" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Preview>
        <CodeBlock
          code={`<Table.Skeleton rows={5} columns={["name", "email", "role", "status", "lastActive"]} />`}
        />
      </Section>

      <Section
        title="Animated Pulse"
        description="All skeletons use a subtle pulse animation by default to indicate loading activity."
      >
        <Preview>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <div className="border-l border-neutral-200 h-12 mx-2" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-48" />
              <Skeleton className="h-3 w-40" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
        </Preview>
        <CodeBlock code={`<Skeleton animation="pulse" /> {/* default */}\n<Skeleton animation="none" />`} />
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "variant", type: '"text" | "circle" | "rectangular"', default: '"text"', description: "Shape of the skeleton element" },
            { name: "width", type: "string | number", description: "Width of the skeleton (px or percentage)" },
            { name: "height", type: "string | number", description: "Height of the skeleton (px or percentage)" },
            { name: "animation", type: '"pulse" | "wave" | "none"', default: '"pulse"', description: "Animation style for the loading state" },
            { name: "className", type: "string", description: "Additional CSS classes for custom styling" },
          ]}
        />
      </Section>

      <Section title="Guidelines">
        <DosAndDonts
          dos={[
            "Match skeleton shapes and sizes to the actual content layout",
            "Use skeleton loaders for content that loads within 1-5 seconds",
            "Show skeletons immediately without delay",
            "Transition smoothly from skeleton to real content",
          ]}
          donts={[
            "Don't use skeleton for actions that take less than 300ms",
            "Don't use skeleton for error states - show an error message instead",
            "Don't animate skeleton loaders too aggressively - keep it subtle",
            "Don't use different skeleton layouts from the actual content layout",
          ]}
        />
      </Section>
    </DocPage>
  );
}
