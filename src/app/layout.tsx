'use client'
import './globals.css'

import type {Metadata} from 'next'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {poppins} from "@/app/fonts";

const metadata: Metadata = {
    title: 'Nwadike Philip | epicdevler ',
    description: 'Nwadike Phiip\'s Portfolio',
    keywords: ['Nwadike Philip', 'epicdevler', 'devler', 'cedars', 'android developer', 'android'],
    creator: 'Nwadike Philip (epicdevler)',
}

const theme = extendTheme({
    colors: {
        brand: '#6842EF',
        white: '#F6F6F6'
    },
})
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <ChakraProvider theme={theme}>
            <body className={poppins.variable}>{children}</body>
        </ChakraProvider>
        </html>
    )
}
