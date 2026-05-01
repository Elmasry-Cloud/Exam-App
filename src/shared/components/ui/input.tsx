import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/shared/lib/utils/tailwind-cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "border border-gray-200 p-2.5 font-normal text-sm h-11.5 w-full text-gray-400 rounded-none outline-none focus-visible:ring-1 focus-visible:ring-blue-600 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-red-600 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
