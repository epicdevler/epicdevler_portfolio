"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defaultSystem,
  defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { useEffect } from "react";
import AOS from "aos";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: { value: "#1D5CE3" },
        white: { value: "#F6F6F6" },
      },
    },
    semanticTokens: {
      colors: {
        // bg:{
        //   value: {base:{value: "red"}, _dark:{value: "blue"}}
        // }
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  useEffect(() => {
    AOS.init({ animatedClassName: "ep-anim", initClassName: "ep-anim-init" });
  }, []);

  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
