import type { Metadata } from 'next'
import { Inter, Roboto_Flex } from 'next/font/google'
import './globals.css'

const roboto = Roboto_Flex({ subsets: ['latin'], display: 'fallback' })

export const metadata: Metadata = {
  title: 'Furugi'
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
