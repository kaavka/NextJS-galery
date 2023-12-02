import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.scss'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal'],
})

export const metadata: Metadata = {
  title: 'Next gallery',
  description: 'Made by kavvka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Header />
        <main style={{ width: '100%' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
