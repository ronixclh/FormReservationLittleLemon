import { Box } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

function Nav() {
  return (
    <ChakraProvider>
      <div className="NavStyle">
        <Box display="flex" mt="2" alignItems="center" justifyContent="center">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              margin="30px"
            ></MenuButton>
            <MenuList>
              <MenuItem as="a" href="#" color="#3F3F3F">
                Home
              </MenuItem>
              <MenuItem as="a" href="#" color="#3F3F3F">
                About
              </MenuItem>
              <MenuItem as="a" href="#" color="#3F3F3F">
                Menu
              </MenuItem>
              <MenuItem as="a" href="#" color="#3F3F3F">
                Reservations
              </MenuItem>
              <MenuItem as="a" href="#" color="#3F3F3F">
                Order Online
              </MenuItem>
            </MenuList>
          </Menu>
          <Image
            width="200px"
            height="150px"
            src="https://www.48hourslogo.com/oss/works/2022/01/13/21255711641/115168_45900_fc8ca08f-43ca-45b0-9147-3c86b3eb880a.jpg"
            alt="Lemon Logo"
          />
          <a href="https://www.facebook.com/">
            <img
              width="150px"
              height="150px"
              src="https://static.vecteezy.com/system/resources/previews/000/628/941/original/shopping-basket-icon-vector.jpg"
              alt="Basket Icon"
            />
          </a>
        </Box>
      </div>
    </ChakraProvider>
  )
}

export default Nav
