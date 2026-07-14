import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-32 w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-3.5 text-sm text-white placeholder:text-[#666666] transition-colors duration-200 focus:border-[#00D4A5]/50 focus:outline-none focus:ring-2 focus:ring-[#00D4A5]/20 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
