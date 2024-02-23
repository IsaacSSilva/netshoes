import type { Metadata } from 'next'
import { Inter, Roboto_Flex, Roboto_Mono } from 'next/font/google'
import './globals.css'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  display: 'block',
  variable: '--roboto-ramily'
})
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'block',
  variable: '--roboto_mono-ramily'
})

const inter = Inter({
  subsets: ['latin'],
  display: 'block',
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
        className={`${roboto.className} ${roboto.variable} ${roboto_mono.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
