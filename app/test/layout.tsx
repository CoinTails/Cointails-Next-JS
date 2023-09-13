import '../globals.css'
import type { Metadata } from 'next'
import {inter} from "../fonts"
import "@/css/test.css"
export const metadata: Metadata = {
  title: 'test Coin tail ',
  description: 'Main cointail app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  style={{ fontFamily: 'Mona Sans, sans-serif' }}
       className={inter.className} >
        {children}</body>
    </html>
  )
}