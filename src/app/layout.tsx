import type { Metadata } from 'next'
import { ChackraProviders } from '@/components/ChackraProviders'
import { LayoutPage } from '@/components/Atom/LayoutPage'
import './globals.css'
import LikeContextProvider from '@/contexts/LikeContext'
import Providers from './providers'

export const metadata: Metadata = {
  title: {
    template: '%s | Avalia Produtos app',
    default: 'Avalia Produtos app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className='!font-body text-fore-main select-none'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
