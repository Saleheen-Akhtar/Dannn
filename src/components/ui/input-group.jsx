import * as React from "react";
import { cn } from "@/lib/utils";

const InputGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex items-center rounded-xl border border-input bg-background focus-within:ring-1 focus-within:ring-ring transition-colors",
      className
    )}
    {...props}
  />
));
InputGroup.displayName = "InputGroup";

const InputGroupAddon = React.forwardRef(({ className, align = "inline-start", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center text-muted-foreground px-2.5",
      align === "inline-end" && "ml-auto",
      className
    )}
    {...props}
  />
));
InputGroupAddon.displayName = "InputGroupAddon";

const InputGroupInput = React.forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "w-full bg-transparent text-sm placeholder:text-muted-foreground outline-none border-none py-1.5 px-2",
      className
    )}
    {...props}
  />
));
InputGroupInput.displayName = "InputGroupInput";

export { InputGroup, InputGroupAddon, InputGroupInput };
