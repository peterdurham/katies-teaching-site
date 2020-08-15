import React from "react"
import styled from "styled-components"

const HeaderStyles = styled.header`
  height: 240px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fontHeader};
  font-weight: 700;
  font-size: 60px;
`

function Header() {
  return <HeaderStyles>Header Intro</HeaderStyles>
}

export default Header
