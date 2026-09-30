import type { ReactNode } from "react";
export default function PageHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-heading">
      <span className="section-label">{label}</span>
      <h1>{title}</h1>
      {children && <div className="page-introduction">{children}</div>}
    </header>
  );
}
