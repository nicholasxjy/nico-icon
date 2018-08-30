/* eslint-disable */
import React from 'react';
import Icon from './Icon';

const IconBluetooth = props => {
  const { iconWidth, iconHeight, ...rest } = props
  return (
    <Icon {...rest}>
      <svg version="1.1" viewBox="0 0 24 24" width={iconWidth || 16} height={iconHeight || 16}>
        <path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11"/>
      </svg>
    </Icon>
  )
}

export default IconBluetooth