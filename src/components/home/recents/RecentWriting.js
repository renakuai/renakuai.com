import React, { useState } from 'react';
import Recents from './Recents.js';
import Card from '../../design-system/card/Card.js';
import { writings } from '../../writing/writingList.js';

function RecentWriting() {
  const [list, setList] = useState([writings[writings.length - 1], writings[writings.length - 2]]);

  return (
    <Recents
      title="Recent Writing"
      route="/writing"
      linkName="View more writing"
    >
      {list && list.map((item, i) => (
        <Card
          key={i}
          title={item.title}
          date={item.date}
          link={item.link}
        >
          {item.description}
        </Card>
      ))}
    </Recents>
  );
}

export default RecentWriting;
