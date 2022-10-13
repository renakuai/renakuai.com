import React, { useState } from 'react';
import Recents from './Recents.js';
import Card from '../../design-system/card/Card.js';
import { projects } from '../../projects/projectsList';

function RecentProjects() {
  const [list, setList] = useState([projects[0], projects[1], projects[2]]);

  return (
    <Recents
      title="Recent Projects"
      route="/projects"
      linkName="View more projects">
      {list && list.map((item, i) => (
        <Card
          key={i}
          imgsrc={item.imgsrc}
          imgalt={item.imgalt}
          subtitle={item.subtitle}
          title={item.title}
          link={item.link}
          label={item.label}
        >
          {item.description}
        </Card>
      ))}
    </Recents>
  );
}

export default RecentProjects;
