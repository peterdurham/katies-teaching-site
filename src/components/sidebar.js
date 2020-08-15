import React from "react"
import styled from "styled-components"

const SidebarStyles = styled.div`
  width: 320px;
  height: 250px;
  border: 1px solid ${props => props.theme.orange};
`
const Sidebar = () => {
  return (
    <SidebarStyles>
      <h2>Sidebar here</h2>
    </SidebarStyles>
  )
}
export default Sidebar
