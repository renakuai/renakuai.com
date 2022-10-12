import React from 'react';
import './iconPaths';
import { iconPaths } from './iconPaths';
import { Path } from './_icon.styles.js';

function Icon(props) {

  const {
    color,
    name
  } = props

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d={iconPaths[name]} color={color} />
    </svg>
  );
}

export default Icon;
