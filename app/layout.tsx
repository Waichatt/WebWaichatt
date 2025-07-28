import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import N8nChatWeb from '@/components/n8n-chat-web'
import { Analytics } from '@vercel/analytics/next';
import './globals.css'

export const metadata: Metadata = {
  title: 'Waichatt',
  description: 'Created with create-next-app',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head >
        <link rel=".ico" href="/favicon.ico" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <N8nChatWeb />
        <Analytics />
      </body>
    </html>
  )
}
