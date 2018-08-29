/* eslint-disable */
import React from 'react';
import Icon from './Icon';

const IconAward = props => (
  <Icon {...props}>
    <svg version="1.1" viewBox="0 0 24 24" width={props.iconWidth || 16 + 'px'} height={props.iconHeight || 16 + 'px'}>
      <circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
    </svg>
  </Icon>
)

export default IconAward