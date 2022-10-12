import React from 'react';
import './_page.scss';

function Page(props) {

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

export default Page;
