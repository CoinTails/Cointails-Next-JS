import "../globals.css";
import type { Metadata } from 'next'
import "@/css/notify-me.css"
import {inter} from "../fonts"
export const metadata: Metadata = {
  title: 'Motify me',
  description: 'Notify me',
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
