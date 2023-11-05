import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Coin tail ',
  description: 'Main cointail app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Mona Sans, sans-serif' }} >
        {children}
      </body>
    </html>
  )
}
