"use client";

import { useState } from "react";
import { Mail, MapPin, LoaderCircle, CircleCheck, CircleAlert } from "lucide-react";
import { SiGithub } from "react-icons/si";
import LinkedinIcon from "./LinkedinIcon";

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "21222b90-aee9-4735-8f9f-c551331ec81e";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message: result.message || "Message transmitted successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message:
            result.message ||
            "Failed to transmit message. Please verify your access key or try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error occurred. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-[11px] tracking-widest text-primary">
        07. CONTACT_SYSTEM
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.3fr]">
        <div className="reveal space-y-4">
          <h2 className="text-2xl font-bold text-text">Let&apos;s Connect</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            Open to internship and freelance opportunities, especially
            backend and database-focused work.
          </p>
          <div className="space-y-2 pt-2 font-mono text-[13px] text-text-muted">
            <a
              href="mailto:asadfarhan237@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" /> asadfarhan237@gmail.com
            </a>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Bandung, Indonesia
            </p>
          </div>
          <div className="flex gap-4 pt-2 text-text-muted">
            <a
              href="https://github.com/MAFK7"
              aria-label="GitHub"
              className="rounded-sm border border-border p-2 transition-colors hover:border-primary hover:text-primary"
            >
              <SiGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/m-asad-farhan-khomeini-915537373/"
              aria-label="LinkedIn"
              className="rounded-sm border border-border p-2 transition-colors hover:border-primary hover:text-primary"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <form
          className="reveal overflow-hidden rounded-md border border-border bg-bg-elevated"
          style={{ animationDelay: "100ms" }}
          onSubmit={handleSubmit}
        >
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-text-faint/60" />
            <span className="h-2 w-2 rounded-full bg-text-faint/60" />
            <span className="h-2 w-2 rounded-full bg-text-faint/60" />
            <span className="ml-2 font-mono text-[10px] text-text-faint">
              guest@root_dev:~/send_message
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 font-mono text-[11px] text-primary">
              NAME:
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="Type here..."
                className="rounded-sm border border-border bg-bg px-3 py-2 font-sans text-sm text-text placeholder:text-text-faint focus:border-primary focus:outline-none disabled:opacity-50"
              />
            </label>
            <label className="flex flex-col gap-1.5 font-mono text-[11px] text-primary">
              EMAIL:
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="guest@domain.com"
                className="rounded-sm border border-border bg-bg px-3 py-2 font-sans text-sm text-text placeholder:text-text-faint focus:border-primary focus:outline-none disabled:opacity-50"
              />
            </label>
            <label className="flex flex-col gap-1.5 font-mono text-[11px] text-primary sm:col-span-2">
              MESSAGE:
              <textarea
                rows={4}
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="Enter your query..."
                className="resize-none rounded-sm border border-border bg-bg px-3 py-2 font-sans text-sm text-text placeholder:text-text-faint focus:border-primary focus:outline-none disabled:opacity-50"
              />
            </label>
          </div>

          <div className="flex flex-col gap-3 px-5 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-2 font-mono text-[13px] font-semibold text-black transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  TRANSMITTING...
                </>
              ) : (
                "EXECUTE_SEND"
              )}
            </button>

            {status.type === "success" && (
              <div className="flex items-center gap-2 font-mono text-xs text-primary">
                <CircleCheck className="h-4 w-4 shrink-0" />
                <span>{status.message}</span>
              </div>
            )}

            {status.type === "error" && (
              <div className="flex items-center gap-2 font-mono text-xs text-red-400">
                <CircleAlert className="h-4 w-4 shrink-0" />
                <span>{status.message}</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
