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
      <body className='bg-[backgroundColor:"#b99fdf"]'  style={{backgroundColor:"#b99fdf", fontFamily: 'Mona Sans, sans-serif' }}>
        {children}</body>
    </html>
  )
}
