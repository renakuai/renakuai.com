import React, { useState } from 'react';
import './_writing.scss';
import Page from '../design-system/page/Page';
import Card from '../design-system/card/Card.js';
import { writings } from './writingList.js';

function Writing() {
  const [list, setList] = useState(writings);

  return (
    <Page>
      <h1>Writing</h1>
      <section className="Cards">
        {list && list.map((item, i) => (
          <Card
            key={i}
            title={item.title}
            date={item.date}
            link={item.link}
          >
            {item.description}
          </Card>
        )).reverse()}

      </section>
    </Page>
  );
}

export default Writing;
