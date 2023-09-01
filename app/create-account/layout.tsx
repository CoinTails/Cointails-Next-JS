import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create account ',
  description: 'Accouont app',
}

export default function CreateAccount({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  style={{ fontFamily: 'Mona Sans, sans-serif' }}>
        {children}</body>
    </html>
  )
}
