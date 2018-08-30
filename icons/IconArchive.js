/* eslint-disable */
import React from 'react';
import Icon from './Icon';

const IconArchive = props => {
  const { iconWidth, iconHeight, ...rest } = props
  return (
    <Icon {...rest}>
      <svg version="1.1" viewBox="0 0 24 24" width={iconWidth || 16} height={iconHeight || 16}>
        <path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"/>
      </svg>
    </Icon>
  )
}

export default IconArchive