import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Img from 'gatsby-image'
import BgImg from 'gatsby-background-image'

// const ImageContainer = styled.div`
//   display: flex;
//   position: relative;
//   overflow: hidden;
//   border-radius: 8px;
//   justify-content: center;
//   align-items: center;
//   width: ${props => props.width};
//   height: ${props => props.height};
// `;

const Parent = styled.div`
  position: relative;
  background-color: ${({ overlayColor }) => overlayColor};
  border-radius: 8px;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 100%;
  width: 100%;
`;


const HTMLImg = styled.img`
  position: absolute;
  top: ${props => props.top || 0};
  left: ${props => props.left || 0};
  right: ${props => props.right || 0};
  bottom: ${props => props.bottom || 0};
`;

const BackgroundImage = styled(BgImg)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &:before,
  &:after {
    transition: .15s ease-in-out all;
  }

  &:hover::before,
  &:hover::after {
    transform: scale(1.3);
  }
`;

const ImageOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = ({ imageInfo, children, bg, overlayColor, opacity, style, className }) => {
  const { alt = '', childImageSharp, image, width, height } = imageInfo
  const imageStyle = style;

  if (bg && !!childImageSharp) {
    return (
      <Parent className={className} overlayColor={overlayColor} opacity={opacity}>
        <BackgroundImage style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
        <Content>
          {children && children}
        </Content>
      </Parent>
    )
  }

  if (!!image && !!image.childImageSharp) {
    return (
      <Img className={className} style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img className={className} style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  // if (!!image && typeof image === 'string')
  //   return (
  //     <ImageContainer height={height} width={width}>
  //       <HTMLImg style={imageStyle} src={image} alt={alt} />
  //         { children &&
  //           <ImageOverlay>
  //             {children}
  //           </ImageOverlay>
  //         }
  //     </ImageContainer>
  //   );

  return null
}

Image.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.PropTypes.object,
    src: PropTypes.PropTypes.string,
    style: PropTypes.object,
  }).isRequired,
}

export default Image
