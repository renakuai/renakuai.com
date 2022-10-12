import React from 'react';
import './_nav.scss';

function Nav() {
  return (
    <nav className="Top">
      <div className="Left">
        <h5><a href="https://www.renakuai.com">Rena Kuai</a></h5>
      </div>

      <div className="Right">
        <ul>
          <li>Projects (WIP)</li>
          <li>Writing (WIP)</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
