/* eslint-disable */
import React from 'react';
import Icon from './Icon';

const IconAirplay = props => {
  const { iconWidth, iconHeight, ...rest } = props
  return (
    <Icon {...rest}>
      <svg version="1.1" viewBox="0 0 24 24" width={iconWidth || 16} height={iconHeight || 16}>
        <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="M12 15l5 6H7l5-6z"/>
      </svg>
    </Icon>
  )
}

export default IconAirplay