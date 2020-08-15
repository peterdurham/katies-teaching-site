import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import {
  FaPinterest,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai"

const NavStyles = styled.div`
  width: 100%;
`
const TopNavStyles = styled.div`
  width: 100%;
  height: 70px;

  .container {
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #logo {
    font-family: ${props => props.theme.fontHeader};
    font-size: 28px;
    font-weight: 700;
    text-decoration: none;
    color: black;
    transition: all 0.3s;
  }
  #logo:hover {
    color: ${props => props.theme.pink};
  }
  nav {
    display: flex;
  }
  nav a {
    font-size: 24px;
    color: black;
    margin-left: 20px;
    transition: all 0.3s;
  }
  nav a:hover {
    color: ${props => props.theme.blue};
  }
`
const MainNavStyles = styled.div`
  width: 100%;
  height: 90px;

  .container {
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav {
    display: flex;
  }
  nav a {
    font-size: 21px;
    color: black;
    margin: 16px;
    transition: all 0.3s;
    text-decoration: none;
  }
  nav a:hover {
    color: ${props => props.theme.orange};
  }
`

function Nav() {
  return (
    <NavStyles>
      <TopNavStyles>
        <div className="container">
          <Link to="/" id="logo">
            Site Logo
          </Link>
          <nav>
            <a href="#">
              <AiOutlineShoppingCart />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaPinterest />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
          </nav>
        </div>
      </TopNavStyles>
      <MainNavStyles>
        <div className="container">
          <nav>
            <a href="#">Shop</a>
            <a href="#">Freebies</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </MainNavStyles>
    </NavStyles>
  )
}

export default Nav
