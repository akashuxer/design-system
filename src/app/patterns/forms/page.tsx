"use client";

import React, { useState } from "react";
import DocPage, {
  Section,
  Preview,
  CodeBlock,
  DosAndDonts,
} from "@/components/DocPage";
import {
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  Info,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared tiny helpers                                                */
/* ------------------------------------------------------------------ */

function Label({
  children,
  required,
  htmlFor,
}: {
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-neutral-700 mb-1.5"
    >
      {children}
      {required && <span className="text-error-500 ml-0.5">*</span>}
      {!required && (
        <span className="text-neutral-400 font-normal ml-1">(optional)</span>
      )}
    </label>
  );
}

function InputShell({
  children,
  error,
  success,
  hint,
}: {
  children: React.ReactNode;
  error?: string;
  success?: string;
  hint?: string;
}) {
  return (
    <div>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5" />
          {error}
        </p>
      )}
      {success && (
        <p className="mt-1.5 text-sm text-success-700 flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          {success}
        </p>
      )}
      {hint && !error && !success && (
        <p className="mt-1.5 text-sm text-neutral-400">{hint}</p>
      )}
    </div>
  );
}

const inputBase =
  "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all";
const inputDefault = `${inputBase} border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20`;
const inputError = `${inputBase} border-error-500 focus:border-error-500 focus:ring-2 focus:ring-error-500/20`;
const inputSuccess = `${inputBase} border-success-500 focus:border-success-500 focus:ring-2 focus:ring-success-500/20`;

/* ------------------------------------------------------------------ */
/*  Complete Sign-Up Form                                              */
/* ------------------------------------------------------------------ */

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    terms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label required htmlFor="su-first">
            First name
          </Label>
          <input
            id="su-first"
            type="text"
            placeholder="Jane"
            className={inputDefault}
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <Label required htmlFor="su-last">
            Last name
          </Label>
          <input
            id="su-last"
            type="text"
            placeholder="Doe"
            className={inputDefault}
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
      </div>

      <div>
        <Label required htmlFor="su-email">
          Email address
        </Label>
        <input
          id="su-email"
          type="email"
          placeholder="jane@company.com"
          className={inputDefault}
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </div>

      <div>
        <Label required htmlFor="su-password">
          Password
        </Label>
        <div className="relative">
          <input
            id="su-password"
            type={showPassword ? "text" : "password"}
            placeholder="Min. 8 characters"
            className={inputDefault}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
        <p className="mt-1.5 text-sm text-neutral-400">
          Must be at least 8 characters with one uppercase and one number.
        </p>
      </div>

      <div>
        <Label htmlFor="su-role">Role</Label>
        <select
          id="su-role"
          className={inputDefault}
          value={formData.role}
          onChange={(e) =>
            setFormData({ ...formData, role: e.target.value })
          }
        >
          <option value="">Select a role</option>
          <option value="designer">Designer</option>
          <option value="developer">Developer</option>
          <option value="pm">Product Manager</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex items-start gap-2">
        <input
          id="su-terms"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-neutral-300 text-brand-600 focus:ring-brand-500"
          checked={formData.terms}
          onChange={(e) =>
            setFormData({ ...formData, terms: e.target.checked })
          }
        />
        <label htmlFor="su-terms" className="text-sm text-neutral-600">
          I agree to the{" "}
          <span className="text-brand-600 underline cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-brand-600 underline cursor-pointer">
            Privacy Policy
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
      >
        {submitted ? "Account created!" : "Create account"}
      </button>

      <p className="text-sm text-center text-neutral-500">
        Already have an account?{" "}
        <span className="text-brand-600 font-medium cursor-pointer">
          Sign in
        </span>
      </p>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Two-Column Layout                                                  */
/* ------------------------------------------------------------------ */

function TwoColumnForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-8 gap-y-4 items-start">
        <div className="md:pt-2">
          <p className="text-sm font-medium text-neutral-700">Full name</p>
          <p className="text-xs text-neutral-400 mt-0.5">
            As it appears on your ID.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First name"
            className={inputDefault}
          />
          <input
            type="text"
            placeholder="Last name"
            className={inputDefault}
          />
        </div>

        <div className="md:pt-2">
          <p className="text-sm font-medium text-neutral-700">Email</p>
        </div>
        <input
          type="email"
          placeholder="you@company.com"
          className={inputDefault}
        />

        <div className="md:pt-2">
          <p className="text-sm font-medium text-neutral-700">Bio</p>
          <p className="text-xs text-neutral-400 mt-0.5">Max 200 chars.</p>
        </div>
        <textarea
          rows={3}
          placeholder="Tell us about yourself..."
          className={inputDefault + " resize-none"}
        />
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-neutral-200">
        <button
          type="button"
          className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="button"
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors"
        >
          Save changes
        </button>
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Inline Validation                                                  */
/* ------------------------------------------------------------------ */

function InlineValidation() {
  const [email, setEmail] = useState("notanemail");
  const [username, setUsername] = useState("janedoe");

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="max-w-sm space-y-5">
      <InputShell error={email && !emailValid ? "Please enter a valid email address." : undefined}>
        <Label required htmlFor="v-email">
          Email
        </Label>
        <input
          id="v-email"
          type="email"
          className={email && !emailValid ? inputError : inputDefault}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputShell>

      <InputShell success="Username is available!">
        <Label required htmlFor="v-user">
          Username
        </Label>
        <input
          id="v-user"
          type="text"
          className={inputSuccess}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputShell>

      <InputShell hint="We'll only use this for order notifications.">
        <Label htmlFor="v-phone">Phone number</Label>
        <input
          id="v-phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          className={inputDefault}
        />
      </InputShell>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Form Sections with Dividers                                        */
/* ------------------------------------------------------------------ */

function FormSections() {
  return (
    <div className="space-y-8">
      {/* Section 1 */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">
          Personal Information
        </h3>
        <p className="text-xs text-neutral-400 mb-4">
          Basic details about you.
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-lg">
          <div>
            <Label required>First name</Label>
            <input type="text" className={inputDefault} placeholder="Jane" />
          </div>
          <div>
            <Label required>Last name</Label>
            <input type="text" className={inputDefault} placeholder="Doe" />
          </div>
        </div>
      </div>

      <hr className="border-neutral-200" />

      {/* Section 2 */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">
          Contact Details
        </h3>
        <p className="text-xs text-neutral-400 mb-4">
          How can we reach you?
        </p>
        <div className="space-y-4 max-w-lg">
          <div>
            <Label required>Email</Label>
            <input
              type="email"
              className={inputDefault}
              placeholder="jane@company.com"
            />
          </div>
          <div>
            <Label>Phone</Label>
            <input
              type="tel"
              className={inputDefault}
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>
      </div>

      <hr className="border-neutral-200" />

      {/* Section 3 */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">
          Notifications
        </h3>
        <p className="text-xs text-neutral-400 mb-4">
          Choose what you want to be notified about.
        </p>
        <div className="space-y-3">
          {["Product updates", "Security alerts", "Marketing emails"].map(
            (label, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={i < 2}
                  className="h-4 w-4 rounded border-neutral-300 text-brand-600 focus:ring-brand-500"
                />
                <span className="text-sm text-neutral-700">{label}</span>
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Required vs Optional                                               */
/* ------------------------------------------------------------------ */

function RequiredOptional() {
  return (
    <div className="max-w-sm space-y-5">
      <div>
        <Label required htmlFor="ro-name">
          Full name
        </Label>
        <input
          id="ro-name"
          type="text"
          className={inputDefault}
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <Label required htmlFor="ro-email">
          Work email
        </Label>
        <input
          id="ro-email"
          type="email"
          className={inputDefault}
          placeholder="jane@company.com"
        />
      </div>

      <div>
        <Label htmlFor="ro-company">Company name</Label>
        <input
          id="ro-company"
          type="text"
          className={inputDefault}
          placeholder="Acme Inc."
        />
      </div>

      <div>
        <Label htmlFor="ro-website">Website</Label>
        <input
          id="ro-website"
          type="url"
          className={inputDefault}
          placeholder="https://example.com"
        />
      </div>

      <div className="bg-info-50 border border-info-500/20 rounded-lg p-3 flex gap-2">
        <Info className="w-4 h-4 text-info-500 mt-0.5 shrink-0" />
        <p className="text-xs text-neutral-600">
          Mark required fields with an asterisk (<span className="text-error-500 font-semibold">*</span>).
          Use <span className="text-neutral-400">(optional)</span> for non-required fields to reduce ambiguity.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FormsPatternPage() {
  return (
    <DocPage
      title="Form Patterns"
      description="Guidelines and interactive examples for building accessible, user-friendly forms across the Spectra Design System."
    >
      {/* 1 - Sign-Up Form */}
      <Section
        title="Complete Sign-Up Form"
        description="A standard registration form demonstrating input types, a select, checkbox, password toggle, and submit action."
      >
        <Preview>
          <SignUpForm />
        </Preview>
        <CodeBlock
          code={`<form className="max-w-md space-y-5">
  <div className="grid grid-cols-2 gap-4">
    <Input label="First name" required />
    <Input label="Last name" required />
  </div>
  <Input label="Email" type="email" required />
  <PasswordInput label="Password" required />
  <Select label="Role" options={roles} />
  <Checkbox label="I agree to the Terms" />
  <Button type="submit" fullWidth>Create account</Button>
</form>`}
        />
      </Section>

      {/* 2 - Layouts */}
      <Section
        title="Form Layouts"
        description="Choose between single-column (compact, mobile-friendly) and two-column (label + input side-by-side for settings pages)."
      >
        <div className="space-y-8">
          <div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
              Two-column layout
            </p>
            <Preview>
              <TwoColumnForm />
            </Preview>
          </div>
        </div>
      </Section>

      {/* 3 - Inline Validation */}
      <Section
        title="Inline Validation"
        description="Show validation messages immediately beneath the field. Use red for errors, green for success, and grey for hints."
      >
        <Preview>
          <InlineValidation />
        </Preview>
        <CodeBlock
          code={`{/* Error state */}
<input className="border-error-500 focus:ring-error-500/20" />
<p className="text-error-500 flex items-center gap-1">
  <AlertCircle /> Please enter a valid email.
</p>

{/* Success state */}
<input className="border-success-500 focus:ring-success-500/20" />
<p className="text-success-700 flex items-center gap-1">
  <CheckCircle2 /> Username is available!
</p>`}
        />
      </Section>

      {/* 4 - Form Sections */}
      <Section
        title="Form Sections with Dividers"
        description="Group related fields together and separate groups with horizontal rules for long forms."
      >
        <Preview>
          <FormSections />
        </Preview>
      </Section>

      {/* 5 - Required vs Optional */}
      <Section
        title="Required vs Optional Fields"
        description="Always indicate which fields are required and which are optional to reduce user confusion."
      >
        <Preview>
          <RequiredOptional />
        </Preview>
      </Section>

      {/* 6 - Dos and Don'ts */}
      <Section title="Dos and Don'ts">
        <DosAndDonts
          dos={[
            "Use clear, concise labels above each input.",
            "Mark required fields with an asterisk and optional fields explicitly.",
            "Show inline validation errors beneath the field as the user types.",
            "Group related fields into logical sections with headings.",
            "Provide helper text for complex fields (e.g. password rules).",
            "Use a single primary action button; disable it until the form is valid.",
          ]}
          donts={[
            "Don't use placeholder text as the only label.",
            "Don't wait until form submission to show all errors at once.",
            "Don't use more than two columns for form fields on desktop.",
            "Don't rely solely on color to indicate errors (add icons and text).",
            "Don't make optional fields look identical to required fields.",
            "Don't use reset / clear buttons next to submit buttons.",
          ]}
        />
      </Section>
    </DocPage>
  );
}
