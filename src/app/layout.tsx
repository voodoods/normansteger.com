import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Norman Steger - UI / UX Designer | Software Developer | Frontend Engineer',
  description: 'Welcome to my website! I do: Full-Stack Software Engineering, Web Software Consulting, Agile Coaching',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
