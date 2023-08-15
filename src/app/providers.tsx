'use client'
import { LayoutPage } from '@/components/Atom/LayoutPage'
import { ChackraProviders } from '@/components/ChackraProviders'
import React from 'react'

export default function Providers({
  children
}: { children: React.ReactNode }) {
  return (
    <div>
      <ChackraProviders>
        <LayoutPage>
          {children}
        </LayoutPage>
      </ChackraProviders>
    </div>
  )
}
