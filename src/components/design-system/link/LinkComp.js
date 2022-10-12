import React from 'react';
import { Link } from './_link.styles.js';
import Icon from '../icon/Icon.js';

function LinkComp(props) {

  const {
    children,
    type,
    iconName,
    iconPosition,
    link
  } = props

  return (
    <Link
      type={type}
      href={link}
    >
      {iconPosition === 'left' && <Icon
        name={iconName}
        color={type}
      />}
      {children}
      {iconPosition === 'right' && <Icon
        name={iconName}
        color={type}
      />}
    </Link>
  );
}

export default LinkComp;
