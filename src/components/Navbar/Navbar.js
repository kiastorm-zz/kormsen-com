import React from 'react'
import styled from 'styled-components';
import {space, color, layout} from 'styled-system';
import GridContainer from '../../styles';
import BurgerMenu from '../../img/icons/menu-icon.svg'


const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  ${space}
  ${color}
  ${layout}
`;

const RightNav = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
  ${layout}
  ${space}
`;

const NavItem = styled.h4`
  ${space}
`;

const Navbar = (props) => {
  return (
    <NavbarContainer height={72} py={3} width={[1]}>
      <GridContainer className="grid-container w-100">
        <div className="flex items-center justify-between w-100 pb1">
          <div>
            <h4 className="bold">kormsen</h4>
          </div>

          <RightNav className="p-display-none" width={4/5}>
            <NavItem ml={[3,'6%', '8%']}>photography</NavItem>
            <NavItem ml={[3,'6%', '8%']}>music</NavItem>
            <NavItem ml={[3,'6%', '8%']}>writing</NavItem>
            <NavItem ml={[3,'6%', '8%']}>dev / design</NavItem>
          </RightNav>

          <BurgerMenu className="p-flex tp-display-none tl-display-none display-none" fill="white" width="32px" />
        </div>
      </GridContainer>
    </NavbarContainer>
  );
}

export default Navbar;
