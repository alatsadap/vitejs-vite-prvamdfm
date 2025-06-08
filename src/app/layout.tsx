import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Novita Intan',
  description: 'Novita Intan website with travel blog and more',
  authors: [{ name: 'Novita Intan' }],
  openGraph: {
    title: 'Novita Intan',
    description: 'Novita Intan website with travel blog and more',
    type: 'website',
    images: [
      {
        url: '/album/novita_1.jpg',
        width: 1200,
        height: 630,
        alt: 'Novita Intan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    images: ['/album/novita_1.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            {children}
            <Toaster />
            <Sonner />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}