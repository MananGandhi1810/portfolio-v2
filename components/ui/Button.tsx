import Link from "next/link";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        href?: string;
        className?: string;
    };

export default function Button({
    children,
    href,
    className = "",
    ...props
}: ButtonProps) {
    if (href) {
        return (
            <Link
                href={href}
                className={`btn-primary micro-anim focus-accent hover:underline underline-offset-2 ${className}`}
                {...(props as any)}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={`btn-primary micro-anim focus-accent hover:underline underline-offset-2 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
