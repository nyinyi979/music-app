"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={`${className} inline-flex w-[38px] h-5 shrink-0 cursor-pointer items-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-cyan-500 data-[state=unchecked]:bg-gray-300 duration-300`}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={
        "pointer-events-none block size-[14px] rounded-full ring-0 transition-transform bg-white data-[state=checked]:translate-x-[22px] data-[state=unchecked]:translate-x-[2px] duration-300"
      }
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
