import React from 'react';
import './_intro.scss';

function Intro(props) {

  const {
    title,
    company,
    caption,
    timeline,
    team
  } = props

  return (
    <article
      className="Intro"
    >
      <p className="Label">{company}</p>
      <h1 className="Gradient">{title}</h1>

      <div className="Data">
        <div className="Data__left">
          <p className="Caption">{caption}</p>
        </div>

        <div className="Data__right">
          <div className="Timeline">
            <p className="Data__label">Timeline</p>
            <p>{timeline}</p>
          </div>
          <div className="Team">
            <p className="Data__label">Team</p>
            <p>{team.map((member) => (
              <li key={member}>{member}</li>
            ))}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Intro;