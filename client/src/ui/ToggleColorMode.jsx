import { Button, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
const ToggleColorMode = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      onClick={toggleColorMode}
      size="xs"
      display={{ base: "none", sm: "flex"}}
    >
      {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ToggleColorMode