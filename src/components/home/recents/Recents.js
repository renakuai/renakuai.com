import React from 'react';
import './_recents.scss';

function Recents(props) {
  const {
    children,
    title
  } = props;
  return (
    <section className="Recents">
      <div className="Divider" />
      <div className="RowLayout">
        <div className="Left">
          <h3>{title}</h3></div>
        <div className="Right">
          {children}
        </div>
      </div>
    </section>
  );
}

export default Recents;
