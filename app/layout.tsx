import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '../lib/i18n'
import { Analytics } from '@vercel/analytics/react'
import ThemeProvider from '@/components/atoms/ThemeProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Alejandro Ortiz | Portfolio',
  description: 'Portfolio de Alejandro Ortiz, desarrollador Full-Stack con enfoque en web, diseño y productos digitales.'
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <body className="min-h-full flex flex-col">
        <I18nProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </I18nProvider>
        <Analytics />
      </body>
    </html >
  )
}
