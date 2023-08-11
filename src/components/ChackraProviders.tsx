// app/providers.tsx
'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '100', subsets: ['cyrillic'] })
const fonts = {
  heading: 'var(--font-roboto)',
  body: 'var(--font-roboto)',
}

const theme = extendTheme({ fonts })
export function ChackraProviders({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-roboto: ${roboto.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider theme={theme} >
          <main >
            {children}
          </main>
        </ChakraProvider>
      </CacheProvider>
    </>
  )
}