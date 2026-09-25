"use client"
import { ThemeProvider } from "@/components/provider";
import { PropsWithChildren } from "react";
import SystemTheme from "../theme/theme";

export default function AppProvider({ children }: PropsWithChildren) {
  return <ThemeProvider systemTheme={SystemTheme}>{children}</ThemeProvider>;
}
