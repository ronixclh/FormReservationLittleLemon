import 'bootstrap/dist/css/bootstrap.min.css' // Make sure to include this line to import Bootstrap CSS
import { Text } from '@chakra-ui/react'
import React from 'react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

function NavB() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <Box>
        <Image
          width="150px"
          height="100px"
          src="https://www.48hourslogo.com/oss/works/2022/01/13/21255711641/115168_45900_fc8ca08f-43ca-45b0-9147-3c86b3eb880a.jpg"
          alt="Lemon Logo"
          marginLeft="10px"
          borderRadius="20"
        />
      </Box>
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <Text fontSize="6xl" color="#FFFFFF" marginTop="10px">
                  Home
                </Text>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <Text fontSize="6xl" color="#FFFFFF" marginTop="10px">
                  About
                </Text>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Text fontSize="6xl" color="#FFFFFF" marginTop="10px">
                  Menu
                </Text>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Text fontSize="6xl" color="#FFFFFF" marginTop="10px">
                  Reservations
                </Text>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                <Text fontSize="6xl" color="#FFFFFF" marginTop="10px">
                  Order Online
                </Text>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Box>
        <a href="https://www.facebook.com/">
          <Image
            borderRadius="20"
            width="80px"
            height="80px"
            src="https://o.remove.bg/downloads/bb520a7c-1164-4241-a1e7-4ff0a340abe4/eps10-white-shopping-basket-solid-icon-isolated-on-black-background-online-shop-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector-removeb.png"
            alt="Basket Icon"
            marginRight="10px"
          />
        </a>
      </Box>
    </nav>
  )
}

export default NavB
