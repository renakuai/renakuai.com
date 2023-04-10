import React from 'react';
import './_detailpage.scss';

function Detailpage(props) {

  const {
    children
  } = props

  return (
    <main
      className="Detailpage"
    >
      {children}
    </main>
  );
}

export default Detailpage;