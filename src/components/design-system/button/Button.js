import React from 'react';
import { Btn } from './_button.styles.js';
import Icon from '../icon/Icon.js';

function Button(props) {

  const {
    children,
    type,
    iconName,
    iconPosition
  } = props

  return (
    <Btn
      type={type}
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
    </Btn>
  );
}

export default Button;
