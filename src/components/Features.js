import React from 'react'
import PropTypes from 'prop-types'
// import Image from '../components/Image'

const FeatureGrid = ({ gridItems }) => (
  <div>

  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
