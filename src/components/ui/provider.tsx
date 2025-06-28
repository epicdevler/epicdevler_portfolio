"use client"

import { ChakraProvider, createSystem, defaultConfig, defaultSystem, defineConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

export function Provider(props: ColorModeProviderProps) {



const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: { value: "#1D5CE3" },
        white: { value: "#F6F6F6" },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
