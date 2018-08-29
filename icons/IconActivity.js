/* eslint-disable */
import React from 'react';
import Icon from './Icon';

const IconActivity = props => (
  <Icon {...props}>
    <svg version="1.1" viewBox="0 0 24 24" width={props.iconWidth || 16 + 'px'} height={props.iconHeight || 16 + 'px'}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  </Icon>
)

export default IconActivity