export default function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`tag-badge micro-anim ${className}`}>{children}</span>;
}
