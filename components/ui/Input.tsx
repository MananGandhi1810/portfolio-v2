import * as React from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={`flex h-10 w-full rounded-none border border-zinc-700 bg-black px-3 py-2 text-sm text-zinc-50 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00a8ff] focus-visible:ring-offset-0 focus-visible:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = "Input"

export { Input }
