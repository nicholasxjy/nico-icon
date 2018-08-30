/* eslint-disable */
import React from 'react';
import Icon from './Icon';

const IconActivity = props => {
  const { iconWidth, iconHeight, ...rest } = props
  return (
    <Icon {...rest}>
      <svg version="1.1" viewBox="0 0 24 24" width={iconWidth || 16} height={iconHeight || 16}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    </Icon>
  )
}

export default IconActivity