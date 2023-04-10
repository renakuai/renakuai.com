import React from 'react';
import './_homepage.scss';

function Homepage(props) {

  const {
    title,
    children
  } = props

  return (
    <main
      className="Page"
    >
      {children}
    </main>
  );
}

export default Homepage;