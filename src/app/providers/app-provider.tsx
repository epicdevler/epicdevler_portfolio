"use client";
import { ThemeProvider } from "@/components/provider";
import { PropsWithChildren } from "react";
import SystemTheme from "../theme/theme";

/** The design is light-only, so colour mode is forced to light. */
export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      systemTheme={SystemTheme}
      forcedTheme="light"
      defaultTheme="light"
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
}
