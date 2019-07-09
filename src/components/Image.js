import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Img from 'gatsby-image'

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
`;

const HTMLImg = styled.img`
  position: absolute;
  top: ${props => props.top || 0};
  left: ${props => props.left || 0};
  right: ${props => props.right || 0};
  bottom: ${props => props.bottom || 0};
`;

const ImageOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = ({ imageInfo, children, top, left, right, bottom }) => {
  const { alt = '', childImageSharp, image, width, height } = imageInfo
  const imageStyle = { height: height }

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return (
      <ImageContainer height={height} width={width}>
        <HTMLImg style={imageStyle} src={image} alt={alt} top={top} left={left} right={right} bottom={bottom} />
          { children &&
            <ImageOverlay>
              {children}
            </ImageOverlay>
          }
      </ImageContainer>
    );

  return null
}

Image.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default Image
