import Card from "./ui/Card";
import Link from "next/link";

export type SocialLink = {
    label: string;
    value: string;
    href: string;
};
export default function SocialsCard({ social }: { social: SocialLink }) {
    const isExternal = !social.href.startsWith("mailto:");

    return (
        <Link
            href={social.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            aria-label={`${social.label}: ${social.value}`}
            className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
            <Card className="mb-0! px-4! py-2! transition-colors duration-200 group-hover:border-blue-400">
                <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                        <p className="truncate text-zinc-400">{social.label}</p>
                        <p className="my-1 truncate text-zinc-100">
                            {social.value}
                        </p>
                    </div>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                        className="shrink-0 text-zinc-300 opacity-90 transition-colors duration-200 group-hover:text-blue-400"
                    >
                        <path
                            d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
                            fill="currentColor"
                        />
                        <path
                            d="M5 5h5V3H3v7h2V5zm0 14v-5H3v7h7v-2H5z"
                            fill="currentColor"
                            opacity="0.9"
                        />
                    </svg>
                </div>
            </Card>
        </Link>
    );
}
