import React from 'react';
import './_section.scss';

function Section(props) {

  const {
    title,
    children
  } = props

  return (

    <article
      className="Section"
    >
      <h3 className="Gradient">{title}</h3>
      <div className="Divider" />

      <div>
        <p className="Large">
          {children}
        </p>
      </div>
    </article>

  );
}

export default Section;