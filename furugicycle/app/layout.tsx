import type { Metadata } from 'next'
import { Inter, Roboto_Flex } from 'next/font/google'
import './globals.css'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  display: 'auto',
  variable: '--roboto-ramily'
})

const inter = Inter({
  subsets: ['latin'],
  display: 'auto',
  variable: '--inter-ramily'
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
      <body
        className={`${roboto.className} ${roboto.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
