import type { Metadata } from 'next'
import "../../css/signup.css"
import "animate.css"
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
      <body className=''  
      style={{ fontFamily: 'Mona Sans, sans-serif' }}>
        {children}</body>
    </html>
  )
}
