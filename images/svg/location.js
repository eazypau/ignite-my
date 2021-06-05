import React from 'react'
import PropTypes from 'prop-types'

const LocationIcon = ({ className }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 4C16.26 4 10 10.26 10 18C10 28.5 24 44 24 44C24 44 38 28.5 38 18C38 10.26 31.74 4 24 4ZM24 23C21.24 23 19 20.76 19 18C19 15.24 21.24 13 24 13C26.76 13 29 15.24 29 18C29 20.76 26.76 23 24 23Z"
      fill="#FF6600"
    />
  </svg>
)

export default LocationIcon

LocationIcon.propTypes = {
  className: PropTypes.string
}
