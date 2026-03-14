"use client";

import React from "react";
import DocPage, {
  Section,
  Preview,
  CodeBlock,
  PropsTable,
  DosAndDonts,
} from "@/components/DocPage";
import { User } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Helper                                                             */
/* ------------------------------------------------------------------ */

const sizeMap: Record<string, { box: string; text: string; icon: string }> = {
  xs: { box: "w-6 h-6", text: "text-[10px]", icon: "w-3 h-3" },
  sm: { box: "w-8 h-8", text: "text-xs", icon: "w-4 h-4" },
  md: { box: "w-10 h-10", text: "text-sm", icon: "w-5 h-5" },
  lg: { box: "w-12 h-12", text: "text-base", icon: "w-6 h-6" },
  xl: { box: "w-16 h-16", text: "text-lg", icon: "w-7 h-7" },
};

const statusColorMap: Record<string, string> = {
  online: "bg-success-500",
  offline: "bg-neutral-400",
  busy: "bg-error-500",
};

function Avatar({
  size = "md",
  initials,
  color = "bg-brand-100 text-brand-700",
  icon = false,
  status,
  image,
}: {
  size?: keyof typeof sizeMap;
  initials?: string;
  color?: string;
  icon?: boolean;
  status?: "online" | "offline" | "busy";
  image?: boolean;
}) {
  const s = sizeMap[size];
  const statusSize = size === "xs" || size === "sm" ? "w-2.5 h-2.5 border" : "w-3 h-3 border-2";

  return (
    <div className="relative inline-flex">
      <div
        className={`${s.box} rounded-full flex items-center justify-center font-semibold ${
          image ? "" : color
        } ${image ? "bg-gradient-to-br from-brand-400 to-brand-600" : ""}`}
      >
        {image ? null : icon ? (
          <User className={`${s.icon} opacity-70`} />
        ) : initials ? (
          <span className={s.text}>{initials}</span>
        ) : (
          <User className={`${s.icon} opacity-70`} />
        )}
      </div>
      {status && (
        <span
          className={`absolute bottom-0 right-0 ${statusSize} ${statusColorMap[status]} rounded-full border-white`}
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AvatarPage() {
  return (
    <DocPage
      title="Avatar"
      description="Avatars represent users or entities with images, initials, or icon fallbacks."
    >
      {/* With image placeholder */}
      <Section title="With Image" description="Uses a colored gradient as a placeholder for user photos.">
        <Preview>
          <div className="flex items-center gap-3">
            <Avatar size="xs" image />
            <Avatar size="sm" image />
            <Avatar size="md" image />
            <Avatar size="lg" image />
            <Avatar size="xl" image />
          </div>
        </Preview>
        <CodeBlock
          code={`<Avatar size="xs" src="/photo.jpg" />
<Avatar size="sm" src="/photo.jpg" />
<Avatar size="md" src="/photo.jpg" />
<Avatar size="lg" src="/photo.jpg" />
<Avatar size="xl" src="/photo.jpg" />`}
        />
      </Section>

      {/* Initials */}
      <Section title="Initials" description="Fallback to initials when no image is available.">
        <Preview>
          <div className="flex items-center gap-3">
            <Avatar size="xs" initials="JD" />
            <Avatar size="sm" initials="AS" color="bg-success-50 text-success-700" />
            <Avatar size="md" initials="MK" color="bg-warning-50 text-warning-700" />
            <Avatar size="lg" initials="RW" color="bg-error-50 text-error-700" />
            <Avatar size="xl" initials="LP" color="bg-info-50 text-info-700" />
          </div>
        </Preview>
        <CodeBlock
          code={`<Avatar initials="JD" />
<Avatar initials="AS" color="success" />
<Avatar initials="MK" color="warning" />`}
        />
      </Section>

      {/* Icon fallback */}
      <Section title="Icon Fallback" description="Generic user icon when neither image nor initials are available.">
        <Preview>
          <div className="flex items-center gap-3">
            <Avatar size="xs" icon />
            <Avatar size="sm" icon />
            <Avatar size="md" icon />
            <Avatar size="lg" icon />
            <Avatar size="xl" icon />
          </div>
        </Preview>
        <CodeBlock code={`<Avatar icon />`} />
      </Section>

      {/* Sizes */}
      <Section title="Sizes" description="Five sizes: xs (24px), sm (32px), md (40px), lg (48px), xl (64px).">
        <Preview>
          <div className="flex items-end gap-3">
            <div className="text-center">
              <Avatar size="xs" initials="XS" />
              <p className="text-[10px] text-neutral-400 mt-1">24px</p>
            </div>
            <div className="text-center">
              <Avatar size="sm" initials="SM" />
              <p className="text-[10px] text-neutral-400 mt-1">32px</p>
            </div>
            <div className="text-center">
              <Avatar size="md" initials="MD" />
              <p className="text-[10px] text-neutral-400 mt-1">40px</p>
            </div>
            <div className="text-center">
              <Avatar size="lg" initials="LG" />
              <p className="text-[10px] text-neutral-400 mt-1">48px</p>
            </div>
            <div className="text-center">
              <Avatar size="xl" initials="XL" />
              <p className="text-[10px] text-neutral-400 mt-1">64px</p>
            </div>
          </div>
        </Preview>
      </Section>

      {/* Status indicator */}
      <Section title="Status Indicator" description="Show online, offline, or busy status.">
        <Preview>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <Avatar size="md" initials="JD" status="online" />
              <p className="text-[10px] text-neutral-400 mt-1.5">Online</p>
            </div>
            <div className="text-center">
              <Avatar size="md" initials="AS" color="bg-neutral-100 text-neutral-600" status="offline" />
              <p className="text-[10px] text-neutral-400 mt-1.5">Offline</p>
            </div>
            <div className="text-center">
              <Avatar size="md" initials="MK" color="bg-error-50 text-error-700" status="busy" />
              <p className="text-[10px] text-neutral-400 mt-1.5">Busy</p>
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`<Avatar initials="JD" status="online" />
<Avatar initials="AS" status="offline" />
<Avatar initials="MK" status="busy" />`}
        />
      </Section>

      {/* Avatar group */}
      <Section title="Avatar Group" description="Stack avatars to represent a team or group of users.">
        <Preview>
          <div className="flex items-center">
            <div className="flex -space-x-2">
              <div className="relative z-[5]">
                <Avatar size="md" initials="JD" />
              </div>
              <div className="relative z-[4]">
                <Avatar size="md" initials="AS" color="bg-success-50 text-success-700" />
              </div>
              <div className="relative z-[3]">
                <Avatar size="md" initials="MK" color="bg-warning-50 text-warning-700" />
              </div>
              <div className="relative z-[2]">
                <Avatar size="md" initials="RW" color="bg-error-50 text-error-700" />
              </div>
              <div className="relative z-[1]">
                <div className="w-10 h-10 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center text-xs font-medium text-neutral-600">
                  +5
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <div className="flex -space-x-1.5">
              <div className="relative z-[5]">
                <Avatar size="sm" initials="A" />
              </div>
              <div className="relative z-[4]">
                <Avatar size="sm" initials="B" color="bg-success-50 text-success-700" />
              </div>
              <div className="relative z-[3]">
                <Avatar size="sm" initials="C" color="bg-warning-50 text-warning-700" />
              </div>
              <div className="relative z-[2]">
                <div className="w-8 h-8 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center text-[10px] font-medium text-neutral-600">
                  +12
                </div>
              </div>
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`<AvatarGroup max={4}>
  <Avatar initials="JD" />
  <Avatar initials="AS" />
  <Avatar initials="MK" />
  <Avatar initials="RW" />
  <Avatar initials="LP" />
  {/* shows +1 overflow */}
</AvatarGroup>`}
        />
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable
          props={[
            { name: "src", type: "string", description: "Image URL for the avatar" },
            { name: "alt", type: "string", description: "Alt text for the image" },
            { name: "initials", type: "string", description: "1-2 letter fallback initials" },
            { name: "icon", type: "boolean", default: "false", description: "Show generic user icon fallback" },
            { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Avatar size (24-64px)" },
            { name: "color", type: "string", description: "Background/text color classes for initials" },
            { name: "status", type: '"online" | "offline" | "busy"', description: "Status indicator dot" },
          ]}
        />
      </Section>

      {/* Dos and Don'ts */}
      <Section title="Best Practices">
        <DosAndDonts
          dos={[
            "Provide initials as fallback when images fail to load",
            "Use consistent sizes within the same context",
            "Use status indicators only for real-time presence",
            "Keep avatar groups to 3-5 visible + overflow count",
          ]}
          donts={[
            "Don't use avatars for non-person entities (use icons instead)",
            "Don't mix avatar sizes in the same group",
            "Don't use status indicators for stale data",
            "Don't show more than 5 avatars before collapsing",
          ]}
        />
      </Section>
    </DocPage>
  );
}
