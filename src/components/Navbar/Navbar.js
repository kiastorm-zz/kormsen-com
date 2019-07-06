import React from 'react'
import { NavbarContainer } from './Navbar-styles';
import styled from 'styled-components';
import {layout, space} from 'styled-system';
import GridContainer from '../../styles';

const RightNav = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
  ${layout}
  ${space}
`;

const Navbar = (props) => {
  console.log(props);
  return (
    <NavbarContainer alignItems height={72} width={[1]}>
      <GridContainer className="grid-container w-100">
        <div className="flex justify-between w-100 pb1">
          <div>
            <h4 className="bold">kormsen</h4>
          </div>

          <RightNav width={4/5}>
            <h4 className="ml5">photography</h4>
            <h4 className="ml5">music</h4>
            <h4 className="ml5">writing</h4>
            <h4 className="ml5">web dev / design</h4>
          </RightNav>
        </div>
      </GridContainer>
    </NavbarContainer>
  );
}

export default Navbar;
