import type { Metadata } from 'next'
import { Inter, Roboto_Flex } from 'next/font/google'
import './globals.css'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  display: 'block',
  variable: '--roboto-ramily'
})

export const metadata: Metadata = {
  title: 'Furugi | 古着'
  // description: "",
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
