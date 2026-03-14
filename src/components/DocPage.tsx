import React from "react";

interface DocPageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function DocPage({ title, description, children }: DocPageProps) {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-neutral-900 tracking-tight mb-2">
          {title}
        </h1>
        <p className="text-base text-neutral-500 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
      <div className="space-y-12">{children}</div>
    </div>
  );
}

export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-neutral-900 mb-1">{title}</h2>
      {description && (
        <p className="text-sm text-neutral-500 mb-5">{description}</p>
      )}
      {!description && <div className="mb-5" />}
      {children}
    </section>
  );
}

export function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-neutral-200 rounded-xl p-6 bg-white">
      {children}
    </div>
  );
}

export function CodeBlock({ code }: { code: string }) {
  return <pre className="mt-3 text-sm">{code}</pre>;
}

export function PropsTable({
  props,
}: {
  props: { name: string; type: string; default?: string; description: string }[];
}) {
  return (
    <div className="overflow-x-auto border border-neutral-200 rounded-xl">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-neutral-50 border-b border-neutral-200">
            <th className="text-left px-4 py-3 font-semibold text-neutral-700">
              Prop
            </th>
            <th className="text-left px-4 py-3 font-semibold text-neutral-700">
              Type
            </th>
            <th className="text-left px-4 py-3 font-semibold text-neutral-700">
              Default
            </th>
            <th className="text-left px-4 py-3 font-semibold text-neutral-700">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((p) => (
            <tr key={p.name} className="border-b border-neutral-100 last:border-0">
              <td className="px-4 py-3">
                <code className="text-xs">{p.name}</code>
              </td>
              <td className="px-4 py-3 text-neutral-500">
                <code className="text-xs">{p.type}</code>
              </td>
              <td className="px-4 py-3 text-neutral-400">
                {p.default || "—"}
              </td>
              <td className="px-4 py-3 text-neutral-600">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DosAndDonts({
  dos,
  donts,
}: {
  dos: string[];
  donts: string[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border border-success-500/30 rounded-xl p-5 bg-success-50/50">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-success-500 flex items-center justify-center text-white text-xs font-bold">
            ✓
          </div>
          <span className="text-sm font-semibold text-success-700">Do</span>
        </div>
        <ul className="space-y-2">
          {dos.map((d, i) => (
            <li key={i} className="text-sm text-neutral-700 flex gap-2">
              <span className="text-success-500 mt-0.5">•</span>
              {d}
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-error-500/30 rounded-xl p-5 bg-error-50/50">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-error-500 flex items-center justify-center text-white text-xs font-bold">
            ✕
          </div>
          <span className="text-sm font-semibold text-error-700">Don&apos;t</span>
        </div>
        <ul className="space-y-2">
          {donts.map((d, i) => (
            <li key={i} className="text-sm text-neutral-700 flex gap-2">
              <span className="text-error-500 mt-0.5">•</span>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
