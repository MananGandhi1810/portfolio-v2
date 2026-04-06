"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
        setIsLoading(true);

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
        } catch (error) {
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="mx-auto my-12 max-w-2xl px-6">
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
                    Get in Touch
                </h1>
                <p className="mt-4 text-sm sm:text-base text-zinc-400">
                    Have a question or want to work together? Fill out the form
                    below and I'll get back to you as soon as possible.
                </p>
            </div>

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
                        required
                        rows={6}
                        placeholder="Your message here..."
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded transition-colors font-medium"
                    >
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>

                    {submitStatus === "success" && (
                        <p className="text-sm text-green-400">
                            Message sent successfully! I'll get back to you soon.
                        </p>
                    )}
                    {submitStatus === "error" && (
                        <p className="text-sm text-red-400">
                            Failed to send message. Please try again or contact me directly on social media.
                        </p>
                    )}
                </div>
            </form>

            <div className="mt-12 border-t border-zinc-800 pt-8">
                <h2 className="text-lg font-semibold text-zinc-50 mb-4">
                    Or reach out directly:
                </h2>
                <div className="space-y-2 text-sm sm:text-base">
                    <p className="text-zinc-300">
                        <span className="text-zinc-400">Email:</span>{" "}
                        <a
                            href="mailto:manangandhi1810@gmail.com"
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
            </div>
        </main>
    );
}
