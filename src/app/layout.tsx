import './globals.css'

import type {Metadata} from 'next'
import {poppins} from "@/app/fonts";
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Nwadike Philip | epicdevler ',
    description: 'Nwadike Phiip\'s Portfolio',
    keywords: ['Nwadike Philip', 'epicdevler', 'devler', 'cedars', 'android developer', 'android'],
    creator: 'Nwadike Philip (epicdevler)',
    openGraph: {
        images: '/image_preview.svg',
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
        return (
        <html lang="en">
        <body className={poppins.variable}>
            <Suspense fallback={<p>Loadding Page</p>} >
                {children}
            </Suspense>
        </body>

        </html>
    )
}
