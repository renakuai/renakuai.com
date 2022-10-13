import React from 'react';
import { Btn } from './_tab.styles.js';
import Icon from '../icon/Icon.js';

function Tab(props) {

  const {
    children,
    active,
    onClick,
    id
  } = props

  return (
    <Btn
      id={id}
      active={active}
      onClick={onClick}>
      {children}
    </Btn>
  );
}

export default Tab;
