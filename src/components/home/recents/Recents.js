import React from 'react';
import LinkComp from '../../design-system/link/LinkComp';
import './_recents.scss';
import { Link } from "react-router-dom";


function Recents(props) {
  const {
    children,
    title,
    linkName,
    route
  } = props;
  return (
    <section className="Recents">
      <div className="Divider" />
      <div className="RowLayout">
        <div className="Left">
          <h3>{title}</h3></div>
        <div className="Right">
          {children}
          <div className="Link">
            <Link to={route}><LinkComp
              type="default"
              iconName="arrow"
              iconPosition="right"
            >{linkName}</LinkComp>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recents;
