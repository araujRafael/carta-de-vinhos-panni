import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  title: {
    template: '%s | Panni',
    default: 'Carta de vinhos Panni',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`
        !font-body text-fore-main select-none
      `}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
