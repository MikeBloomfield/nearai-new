import { useCallback, useEffect, useState } from "react";

const Breakpoints = {
  xs: 0, // default settings
  sm: 480, // For just phones, like 10, 12
  md: 768, // Tablet like Ipad Mini
  lg: 1024, // Tablet like Ipad Air
  xl: 1200, // Large screens
} as const;

export const useIsUnderBreakpoint = (breakpoint: keyof typeof Breakpoints): boolean | null => {
  if (!breakpoint) {
    throw new Error("This hook requires a breakpoint.");
  }

  const breakpointValue = Breakpoints[breakpoint];
  const [targetReached, setTargetReached] = useState<boolean | null>(null);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    setTargetReached(e.matches);
  }, []);

  useEffect(() => {
    if (!window.matchMedia) {
      throw new Error("matchMedia is not supported.");
    }

    const media = window.matchMedia(`(max-width: ${breakpointValue}px)`);

    const handleChange = (e: MediaQueryListEvent): void => {
      updateTarget(e);
    };

    media.addEventListener("change", handleChange);

    setTargetReached(media.matches);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, [updateTarget, breakpointValue]);

  return targetReached;
};
