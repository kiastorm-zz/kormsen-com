import styled from 'styled-components';
import {space} from 'styled-system';

const GridContainer = styled.div`
  ${space}
  margin-right: auto;
  margin-left: auto;
  max-width: 134rem;
`;


GridContainer.defaultProps = {
  px: ['8%', '6%', '6%', '4%']
}

export default GridContainer;
