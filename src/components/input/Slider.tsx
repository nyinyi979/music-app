"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={"relative flex w-full touch-none select-none items-center"}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[3px] w-full overflow-hidden rounded-full bg-pink-900/80">
      <SliderPrimitive.Range className="absolute h-full bg-gray-50" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block size-4 rounded-full border-[4px] border-white shadow-slider disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
