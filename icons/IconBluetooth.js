/* eslint-disable */
import React from 'react';
import Icon from './Icon';

const IconBluetooth = props => (
  <Icon {...props}>
    <svg version="1.1" viewBox="0 0 24 24" width={props.iconWidth || 16 + 'px'} height={props.iconHeight || 16 + 'px'}>
      <path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11"/>
    </svg>
  </Icon>
)

export default IconBluetooth