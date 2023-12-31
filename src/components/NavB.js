import 'bootstrap/dist/css/bootstrap.min.css'
import { Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

function NavB() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between w-100">
          <Box>
            <Image
              width="150px"
              height="100px"
              src="https://www.48hourslogo.com/oss/works/2022/01/13/21255711641/115168_45900_fc8ca08f-43ca-45b0-9147-3c86b3eb880a.jpg"
              alt="Lemon Logo"
              borderRadius={20}
              style={{ marginLeft: '10px' }}
            />
          </Box>
          <ul className="navbar-nav d-flex justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <Text
                  fontSize={['4xl', '6xl']}
                  color="#FFFFFF"
                  marginTop="10px"
                >
                  Home
                </Text>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <Text
                  fontSize={['4xl', '6xl']}
                  color="#FFFFFF"
                  marginTop="10px"
                >
                  About
                </Text>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <Text
                  fontSize={['4xl', '6xl']}
                  color="#FFFFFF"
                  marginTop="10px"
                >
                  Menu
                </Text>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <Text
                  fontSize={['4xl', '6xl']}
                  color="#FFFFFF"
                  marginTop="10px"
                >
                  Reservations
                </Text>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <Text
                  fontSize={['4xl', '6xl']}
                  color="#FFFFFF"
                  marginTop="10px"
                >
                  Order Online
                </Text>
              </a>
            </li>
          </ul>
          <Box>
            <a href="https://www.facebook.com/">
              <Image
                className="rounded-circle"
                width="80px"
                height="80px"
                src="https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-9.jpg"
                alt="Basket Icon"
                style={{ marginRight: '10px' }}
              />
            </a>
          </Box>
        </div>
      </div>
    </nav>
  )
}

export default NavB
