/* eslint-disable */
import React from 'react';
import Icon from './Icon';

const IconAward = props => {
  const { iconWidth, iconHeight, ...rest } = props
  return (
    <Icon {...rest}>
      <svg version="1.1" viewBox="0 0 24 24" width={iconWidth || 16} height={iconHeight || 16}>
        <circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
      </svg>
    </Icon>
  )
}

export default IconAward