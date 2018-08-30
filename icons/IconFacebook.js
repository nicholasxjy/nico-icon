/* eslint-disable */
import React from 'react';
import Icon from './Icon';

const IconFacebook = props => {
  const { iconWidth, iconHeight, ...rest } = props
  return (
    <Icon {...rest}>
      <svg version="1.1" viewBox="0 0 1024 1024" width={iconWidth || 16} height={iconHeight || 16}>
        <path _fill="#333" d="M504.657 9.466C228.602 9.466 5.145 232.923 5.145 508.978c0 276.03 223.457 499.512 499.512 499.512s499.512-223.482 499.512-499.512c0-276.055-223.456-499.512-499.512-499.512zm134.044 496.89h-86.715V819.2H423.162V506.356h-65.736V398.56h65.736V332.85c0-86.74 36.814-139.314 139.314-139.314h86.715v107.77h-52.574c-39.411 0-42.059 15.784-42.059 42.034v52.598h97.255l-13.137 110.393h.025z"/>
      </svg>
    </Icon>
  )
}

export default IconFacebook