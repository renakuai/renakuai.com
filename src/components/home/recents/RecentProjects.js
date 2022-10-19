import React, { useState } from 'react';
import Recents from './Recents.js';
import Card from '../../design-system/card/Card.js';
import { projects } from '../../projects/projectsList';

function RecentProjects() {
  const [list, setList] = useState([projects[projects.length - 1], projects[projects.length - 2]]);

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
          label={item.label}
          size="small"
          link={item.link && item.link}
          route={item.route && item.route}
        >
          {item.description}
        </Card>
      ))}
    </Recents>
  );
}

export default RecentProjects;
