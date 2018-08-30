/* eslint-disable */
import React from 'react';
import Icon from './Icon';

const IconBook = props => {
  const { iconWidth, iconHeight, ...rest } = props
  return (
    <Icon {...rest}>
      <svg version="1.1" viewBox="0 0 24 24" width={iconWidth || 16} height={iconHeight || 16}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    </Icon>
  )
}

export default IconBook