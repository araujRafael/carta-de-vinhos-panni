'use client'
import { LayoutPage } from '@/components/Atom/LayoutPage'
import { ChackraProviders } from '@/components/ChackraProviders'
import LikeContextProvider from '@/contexts/LikeContext'
import React from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <LikeContextProvider>
        <ChackraProviders>
          <LayoutPage>
            {children}
          </LayoutPage>
        </ChackraProviders>
      </LikeContextProvider>
    </div>
  )
}
