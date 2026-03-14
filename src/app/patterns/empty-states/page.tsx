"use client";

import React from "react";
import DocPage, {
  Section,
  Preview,
  DosAndDonts,
} from "@/components/DocPage";
import {
  Inbox,
  SearchX,
  AlertTriangle,
  Rocket,
  ShieldX,
  Plus,
  RefreshCw,
  ArrowRight,
  FolderOpen,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared empty-state card shell                                      */
/* ------------------------------------------------------------------ */

function EmptyStateCard({
  icon: Icon,
  iconBg,
  iconColor,
  heading,
  description,
  actions,
}: {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  heading: string;
  description: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-14 px-6 text-center rounded-xl border border-neutral-200 bg-white">
      <div
        className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-5`}
      >
        <Icon className={`w-7 h-7 ${iconColor}`} />
      </div>
      <h3 className="text-base font-semibold text-neutral-900 mb-1.5">
        {heading}
      </h3>
      <p className="text-sm text-neutral-500 max-w-xs mb-6 leading-relaxed">
        {description}
      </p>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Individual states                                                  */
/* ------------------------------------------------------------------ */

function NoDataState() {
  return (
    <EmptyStateCard
      icon={Inbox}
      iconBg="bg-brand-50"
      iconColor="text-brand-500"
      heading="No projects yet"
      description="Get started by creating your first project. You can invite team members and start collaborating right away."
      actions={
        <button className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors">
          <Plus className="w-4 h-4" />
          New project
        </button>
      }
    />
  );
}

function SearchNoResults() {
  return (
    <EmptyStateCard
      icon={SearchX}
      iconBg="bg-neutral-100"
      iconColor="text-neutral-400"
      heading="No results found"
      description="We couldn't find anything matching your search. Try using different keywords or check for typos."
      actions={
        <>
          <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
            Clear search
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors">
            Browse all
            <ArrowRight className="w-4 h-4" />
          </button>
        </>
      }
    />
  );
}

function ErrorState() {
  return (
    <EmptyStateCard
      icon={AlertTriangle}
      iconBg="bg-error-50"
      iconColor="text-error-500"
      heading="Something went wrong"
      description="We hit an unexpected error while loading your data. Our team has been notified. Please try again."
      actions={
        <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
          <RefreshCw className="w-4 h-4" />
          Retry
        </button>
      }
    />
  );
}

function OnboardingState() {
  return (
    <EmptyStateCard
      icon={Rocket}
      iconBg="bg-brand-50"
      iconColor="text-brand-500"
      heading="Welcome to Spectra!"
      description="Complete these quick steps to set up your workspace and start building with your team."
      actions={
        <button className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors">
          Get started
          <ArrowRight className="w-4 h-4" />
        </button>
      }
    />
  );
}

function OnboardingChecklist() {
  const steps = [
    { label: "Create your workspace", done: true },
    { label: "Invite team members", done: false },
    { label: "Connect your first integration", done: false },
    { label: "Create your first project", done: false },
  ];

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 max-w-sm mx-auto">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
          <Rocket className="w-5 h-5 text-brand-500" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-neutral-900">
            Getting started
          </h3>
          <p className="text-xs text-neutral-400">1 of 4 completed</p>
        </div>
      </div>
      {/* Progress bar */}
      <div className="h-1.5 bg-neutral-100 rounded-full mb-5 overflow-hidden">
        <div className="h-full w-1/4 bg-brand-500 rounded-full transition-all" />
      </div>
      <ul className="space-y-3">
        {steps.map((s, i) => (
          <li key={i} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                s.done
                  ? "bg-brand-600 border-brand-600"
                  : "border-neutral-300"
              }`}
            >
              {s.done && (
                <svg
                  className="w-3 h-3 text-white"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M3 6l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <span
              className={`text-sm ${
                s.done
                  ? "text-neutral-400 line-through"
                  : "text-neutral-700 font-medium"
              }`}
            >
              {s.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PermissionDenied() {
  return (
    <EmptyStateCard
      icon={ShieldX}
      iconBg="bg-warning-50"
      iconColor="text-warning-500"
      heading="Access restricted"
      description="You don't have permission to view this page. Contact your workspace admin to request access."
      actions={
        <>
          <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
            Go back
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors">
            Request access
          </button>
        </>
      }
    />
  );
}

function EmptyFolder() {
  return (
    <EmptyStateCard
      icon={FolderOpen}
      iconBg="bg-neutral-100"
      iconColor="text-neutral-400"
      heading="This folder is empty"
      description="Upload files or create new documents to get started. Drag and drop files here or use the button below."
      actions={
        <button className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors">
          <Plus className="w-4 h-4" />
          Upload files
        </button>
      }
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function EmptyStatesPatternPage() {
  return (
    <DocPage
      title="Empty State Patterns"
      description="Empty states guide users when there is no content to display. A well-designed empty state reduces confusion and encourages action."
    >
      <Section
        title="No Data"
        description="Shown when a section or page has no content yet. Encourage the user to take the primary creation action."
      >
        <Preview>
          <NoDataState />
        </Preview>
      </Section>

      <Section
        title="Search No Results"
        description="Displayed when a search or filter returns zero matches. Offer a way to clear filters or browse all items."
      >
        <Preview>
          <SearchNoResults />
        </Preview>
      </Section>

      <Section
        title="Error State"
        description="When data fails to load due to a network or server error. Acknowledge the problem, reassure the user, and offer a retry."
      >
        <Preview>
          <ErrorState />
        </Preview>
      </Section>

      <Section
        title="First-Time / Onboarding"
        description="Welcome new users and guide them through setup. Can be a simple CTA or a checklist with progress."
      >
        <div className="space-y-6">
          <Preview>
            <OnboardingState />
          </Preview>
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            Onboarding checklist variant
          </p>
          <Preview>
            <OnboardingChecklist />
          </Preview>
        </div>
      </Section>

      <Section
        title="Permission Denied"
        description="When the user does not have access to the current resource. Explain clearly and provide a path forward."
      >
        <Preview>
          <PermissionDenied />
        </Preview>
      </Section>

      <Section
        title="Empty Folder / Container"
        description="For generic containers like folders, lists, or boards that have no children yet."
      >
        <Preview>
          <EmptyFolder />
        </Preview>
      </Section>

      <Section title="Dos and Don'ts">
        <DosAndDonts
          dos={[
            "Always include an icon or illustration, a heading, a description, and an action button.",
            "Keep the message helpful and positive -- tell users what they can do next.",
            "Use the primary action button to guide users toward the most logical next step.",
            "Match the icon background color to the state type (brand for creation, red for error, etc.).",
            "Provide a secondary action (like 'Go back') for permission-denied and error states.",
          ]}
          donts={[
            "Don't leave an empty page with no explanation.",
            "Don't use technical jargon or error codes in user-facing messages.",
            "Don't show a spinner indefinitely -- switch to an error state after a timeout.",
            "Don't blame the user in error or permission-denied states.",
            "Don't overload empty states with multiple competing CTAs.",
          ]}
        />
      </Section>
    </DocPage>
  );
}
