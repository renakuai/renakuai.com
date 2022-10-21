import React, { useEffect, useState } from 'react';
import '../../writing/_writing.scss';
import Page from '../../design-system/page/Page';
import Card from '../../design-system/card/Card.js';
import { projects } from '../projectsList';
import Detail from './Detail';

function Cross() {
  const [item, setItem] = useState(projects);

  useEffect(() => {
    projects.map((obj) => {
      if (obj.id === 1) {
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
      description={item.longDescription}
    >
      <p>Iterable is a marketing application that allows marketers to create, manage, and analyze their campaigns. This was a particularly challenging project due to tight time constraints and technical limitations. However our team was able to work together to create a successful feature in a very short period of time. I acted as the only designer within the Analytics team.</p>
      <p>Implementing cross-channel analytics was a high priority for our customers. Oftentimes, marketers have initiatives that span across multiple mediums (email, SMS, etc.), but Iterable did not have the ability to display analytics across their channels at once. Because of this, it was hard for customers to get a holistic understanding of the performance of their initiatives and to understand which mediums were more effective than others.</p>
      <p>This project involved conducting scrappy user research, due to time constraints, rapid prototyping, close cross-functional collaboration, and sharing frequently and often. I made sure to share my progress regularly in order to reach alignment from stakeholders faster in order to have designs ready for implementation.</p>
      <p>In terms of specific UX work, a big challenge revolved around how to create a good cross-functional user experience within an existing single-channel experience. I made sure to design the updated single and new, cross-channel designs in tandem to make sure the experience was seamless when transitioning between the two modes. In addition to cross-channel designs, we also used this project to do some quick improvements for our data visualizations and tables.</p>
    </Detail>
  );
}

export default Cross;
