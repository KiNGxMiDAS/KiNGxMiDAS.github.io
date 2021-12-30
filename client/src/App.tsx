import React from "react"
import {
  Container,
  useColorMode,
  Button,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react"

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <main>
      <Button
        position="fixed"
        right="1rem"
        top="1rem"
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Container>
        <Heading as="h1">Page currently undergoing construction</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          Stay tuned :)
        </Text>
      </Container>
      <Divider />
    </main>
  )
}

export default App
