import React from 'react'
import PropTypes from 'prop-types'

const TimeIcon = ({ className }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.98 4C12.94 4 4 12.96 4 24C4 35.04 12.94 44 23.98 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 23.98 4ZM24 40C15.16 40 8 32.84 8 24C8 15.16 15.16 8 24 8C32.84 8 40 15.16 40 24C40 32.84 32.84 40 24 40Z"
      fill="#FF6600"
    />
    <path d="M25 14H22V26L32.5 32.3L34 29.84L25 24.5V14Z" fill="#FF6600" />
  </svg>
)

export default TimeIcon

TimeIcon.propTypes = {
  className: PropTypes.string
}
