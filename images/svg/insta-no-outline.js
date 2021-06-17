import React from 'react'
import PropTypes from 'prop-types'

const InstaIcon = ({ className }) => (
  <svg
    className={className}
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9965 6.32974C9.30533 6.32974 6.32637 9.30876 6.32637 13C6.32637 16.6912 9.30533 19.6703 12.9965 19.6703C16.6877 19.6703 19.6666 16.6912 19.6666 13C19.6666 9.30876 16.6877 6.32974 12.9965 6.32974ZM12.9965 17.3352C10.6094 17.3352 8.66141 15.3871 8.66141 13C8.66141 10.6129 10.6094 8.66482 12.9965 8.66482C15.3836 8.66482 17.3316 10.6129 17.3316 13C17.3316 15.3871 15.3836 17.3352 12.9965 17.3352ZM19.9398 4.50201C19.078 4.50201 18.382 5.19798 18.382 6.05981C18.382 6.92164 19.078 7.61761 19.9398 7.61761C20.8016 7.61761 21.4976 6.9249 21.4976 6.05981C21.4979 5.85517 21.4577 5.65248 21.3795 5.46336C21.3013 5.27424 21.1866 5.10241 21.0419 4.95771C20.8972 4.813 20.7254 4.69826 20.5363 4.62007C20.3471 4.54187 20.1445 4.50175 19.9398 4.50201ZM25.9985 13C25.9985 11.2048 26.0148 9.42583 25.914 7.63387C25.8132 5.55247 25.3384 3.70522 23.8164 2.18319C22.2911 0.657911 20.4472 0.186343 18.3658 0.0855244C16.5706 -0.0152937 14.7917 0.000967347 12.9998 0.000967347C11.2046 0.000967347 9.42566 -0.0152937 7.63373 0.0855244C5.55236 0.186343 3.70515 0.661163 2.18315 2.18319C0.657899 3.70847 0.186339 5.55247 0.0855228 7.63387C-0.0152934 9.42909 0.000967329 11.208 0.000967329 13C0.000967329 14.792 -0.0152934 16.5742 0.0855228 18.3661C0.186339 20.4475 0.661151 22.2948 2.18315 23.8168C3.7084 25.3421 5.55236 25.8137 7.63373 25.9145C9.42891 26.0153 11.2078 25.999 12.9998 25.999C14.7949 25.999 16.5739 26.0153 18.3658 25.9145C20.4472 25.8137 22.2944 25.3388 23.8164 23.8168C25.3416 22.2915 25.8132 20.4475 25.914 18.3661C26.0181 16.5742 25.9985 14.7952 25.9985 13ZM23.1367 20.6687C22.8993 21.2606 22.6131 21.7029 22.1545 22.1582C21.696 22.6167 21.2569 22.9029 20.665 23.1404C18.9544 23.8201 14.8925 23.6672 12.9965 23.6672C11.1005 23.6672 7.03534 23.8201 5.32472 23.1436C4.73283 22.9062 4.29054 22.62 3.83524 22.1614C3.37669 21.7029 3.0905 21.2638 2.85309 20.6719C2.17665 18.958 2.3295 14.896 2.3295 13C2.3295 11.104 2.17665 7.03872 2.85309 5.32807C3.0905 4.73617 3.37669 4.29387 3.83524 3.83856C4.29379 3.38325 4.73283 3.09381 5.32472 2.8564C7.03534 2.17994 11.1005 2.33279 12.9965 2.33279C14.8925 2.33279 18.9577 2.17994 20.6683 2.8564C21.2602 3.09381 21.7025 3.38 22.1578 3.83856C22.6163 4.29712 22.9025 4.73617 23.1399 5.32807C23.8164 7.03872 23.6635 11.104 23.6635 13C23.6635 14.896 23.8164 18.958 23.1367 20.6687Z"
      fill="white"
    />
  </svg>
)

export default InstaIcon

InstaIcon.propTypes = {
  className: PropTypes.string
}