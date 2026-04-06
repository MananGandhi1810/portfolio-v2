import * as React from "react"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={`flex min-h-20 w-full rounded-none border border-zinc-700 bg-black px-3 py-2 text-sm text-zinc-50 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00a8ff] focus-visible:ring-offset-0 focus-visible:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 resize-none ${className}`}
      ref={ref}
      {...props}
    />
  )
)
Textarea.displayName = "Textarea"

export { Textarea }
