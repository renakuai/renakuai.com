import React, { useEffect, useState } from 'react';
import '../../writing/_writing.scss';
import Page from '../../design-system/page/Page';
import Card from '../../design-system/card/Card.js';
import { projects } from '../projectsList';
import Detail from './Detail';

function Filters() {
  const [item, setItem] = useState(projects);

  useEffect(() => {
    projects.map((obj) => {
      if (obj.id === 2) {
        setItem(obj);
      }
    })
  }, [])

  return (
    <Detail
      title={item.title}
      subtitle={item.description}
      imgsrc={item.imgsrc}
      imgalt={item.imgalt}
    >
      <p>Iterable is a marketing application that allows marketers to create, manage, and analyze their campaigns. Messaging Insights was our primary analytics feature that helped customers to get a holistic understanding of campaign performances. This was a really fun project with a strong focus on design systems and interaction considerations. I acted as the only designer on the Analytics team.</p>
      <p>The original filters within Messaging Insights was very basic and did not allow marketers to drill down into the specific campaigns that they wanted. This was a huge blocker in the workflows of our customers so we knew that we needed to fix this.</p>
      <p>We had a good understanding of the filters that we needed to add into Messaging Analytics, however, the current filter design would not be able to support these additional, more complex cases. Through user testing, quick protoyping, and collaborating closely with other designers, we were able to create a new filtering pattern that improved the speed and accuracy for which customers would be able to accomplish their goals. We also redesigned the filtering panel to improve the ease of use and discoverability for our customers.</p>
    </Detail>
  );
}

export default Filters;
