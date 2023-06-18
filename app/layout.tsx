import './globals.css';
import { Open_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';


const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Aaron Linley',
  description: 'The personal website of Aaron Linley, a software engineer based in Yorkshire.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} text-slate-700`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
