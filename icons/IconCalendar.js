/* eslint-disable */
import React from 'react';
import Icon from './Icon';

const IconCalendar = props => (
  <Icon {...props}>
    <svg version="1.1" viewBox="0 0 24 24" width={props.iconWidth || 16 + 'px'} height={props.iconHeight || 16 + 'px'}>
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  </Icon>
)

export default IconCalendar