import { Box } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

function Nav() {
  return (
    <ChakraProvider>
      <div>
        <Box display="flex" mt="2" alignItems="center">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              bgColor="#495e57"
            ></MenuButton>
            <MenuList>
              <MenuItem as="a" href="#">
                Home
              </MenuItem>
              <MenuItem as="a" href="#">
                About
              </MenuItem>
              <MenuItem as="a" href="#">
                Menu
              </MenuItem>
              <MenuItem as="a" href="#">
                Reservations
              </MenuItem>
              <MenuItem as="a" href="#">
                Order Online
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </div>
    </ChakraProvider>
  )
}

export default Nav
