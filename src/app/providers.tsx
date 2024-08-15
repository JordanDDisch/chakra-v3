"use client"
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { theme } from "./theme"

export default async function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={theme}>
      {children}
    </ChakraProvider>
  )
}