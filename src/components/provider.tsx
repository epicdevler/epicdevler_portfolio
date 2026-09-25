import { ChakraProvider, SystemContext } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

export function ThemeProvider({systemTheme, ...props}: ColorModeProviderProps & {systemTheme: SystemContext}) {
  return (
    <ChakraProvider value={systemTheme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
