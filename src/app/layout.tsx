import './globals.css'

import type {Metadata} from 'next'
import {poppins} from "@/app/fonts";

export const metadata: Metadata = {
    title: 'Nwadike Philip | epicdevler ',
    description: 'Nwadike Phiip\'s Portfolio',
    keywords: ['Nwadike Philip', 'epicdevler', 'devler', 'cedars', 'android developer', 'android'],
    creator: 'Nwadike Philip (epicdevler)',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

        <body className={poppins.variable}>{children}</body>

        </html>
    )
}
