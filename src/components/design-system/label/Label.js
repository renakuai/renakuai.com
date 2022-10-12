import React from 'react';
import './label.scss';

function Label(props) {

  const {
    children,
  } = props

  return (
    <span className="Label" role="note">{children}</span>
  );
}

export default Label;
