import { createSystem, defaultConfig } from '@chakra-ui/react'

const colors = {
  primary: {
    value: "hsla(0, 70%, 55%, 1)",
  }
}

export const theme = createSystem({ 
  ...defaultConfig,
  theme: {
    semanticTokens: {
      colors
    }
  },
})