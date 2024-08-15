import { createSystem } from '@chakra-ui/react'

const colors = {
  primary: {
    value: "hsla(0, 70%, 55%, 1)",
  }
}

export const theme = createSystem({ 
  theme: {
    semanticTokens: {
      colors
    }
  },
})