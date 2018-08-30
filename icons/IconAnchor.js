/* eslint-disable */
import React from 'react';
import Icon from './Icon';

const IconAnchor = props => {
  const { iconWidth, iconHeight, ...rest } = props
  return (
    <Icon {...rest}>
      <svg version="1.1" viewBox="0 0 24 24" width={iconWidth || 16} height={iconHeight || 16}>
        <circle cx="12" cy="5" r="3"/><path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3"/>
      </svg>
    </Icon>
  )
}

export default IconAnchor