"use client";

import PageHeading from "@/components/PageHeading";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main id="main-content" className="page-shell">
      <PageHeading label="SAY HELLO" title="Contact">
        <p>
          Have a question or a project in mind? Email{" "}
          <a className="inline-link" href="mailto:hello@manan.cloud">
            hello@manan.cloud
          </a>{" "}
          or leave a message below.
        </p>
      </PageHeading>
      <div className="contact-layout">
        <div className="contact-form-panel">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-none"
                required
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-none"
                required
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Subject
              </label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="rounded-none"
                required
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="rounded-none"
                required
                rows={6}
                placeholder="Your message here..."
              />
            </div>

            <div className="form-status" aria-live="polite">
              <Button
                type="submit"
                disabled={isLoading}
                className="button-primary"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>

              {submitStatus === "success" && (
                <p className="text-sm text-blue-400">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-400">
                  Failed to send message. Please email hello@manan.cloud or
                  contact me directly on social media.
                </p>
              )}
            </div>
          </form>
        </div>
        <aside className="contact-sidebar">
          <h2 className="text-lg font-semibold text-zinc-50 mb-4">
            Or reach out directly:
          </h2>
          <div className="space-y-2 text-sm sm:text-base">
            <p className="text-zinc-300">
              <span className="text-zinc-400">Email:</span>{" "}
              <a
                href="mailto:hello@manan.cloud"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
              >
                hello@manan.cloud
              </a>
            </p>
            <p className="text-zinc-300">
              <span className="text-zinc-400">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/manangandhi1810"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
              >
                Manan Gandhi
              </a>
            </p>
            <p className="text-zinc-300">
              <span className="text-zinc-400">Twitter:</span>{" "}
              <a
                href="https://x.com/MananGandhi1810"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
              >
                @MananGandhi1810
              </a>
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
