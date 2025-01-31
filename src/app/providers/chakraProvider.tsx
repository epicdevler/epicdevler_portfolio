'use client'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";



const theme = extendTheme({
    colors: {
        brand: '#1D5CE3',
        white: '#F6F6F6'
    },
})
export default function ThemeProvider({children}:{children: React.ReactNode}){
    return <ChakraProvider theme={theme} >{children}</ChakraProvider>
}