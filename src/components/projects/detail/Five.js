import React, { useEffect, useState } from 'react';
import '../../writing/_writing.scss';
import Page from '../../design-system/page/Page';
import Card from '../../design-system/card/Card.js';
import { projects } from '../projectsList';
import Detail from './Detail';

function Five() {
  const [item, setItem] = useState(projects);

  useEffect(() => {
    projects.map((obj) => {
      if (obj.id === 0) {
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
      <p>15Five is a talent / HR management platform. Reporting was a critical feature within 15Five as it allowed People teams to understand the engagement of their employees at a high-level. However, the original 15Five reporting dashboard was missing a lot of important datapoints and key functionality, was preventing customers from getting the insights they needed, and was preventing us from closing as many contracts as we wanted. Within a short period of time, we were able to make turn Reporting from something very basic into a more robust and useful offering for our customers. I acted as the only designer on the Reporting team.</p>
      <p>There was a lot of collaboration and user research involved in this project, including surveys, interviews, and collaborative brainstorm sessions with the team. A big challenge also revolved around the question of "How do we stick to our principles and ethics by not reducing people to a stack ranked list?", which we resolved through language choices and presentation of holistic information.</p>
      <p>There were also quite a few UX changes including a new navigation pattern, improved presentation of graphs and data, revamping of metric definitions, and integration of metrics from across the platform.</p>
    </Detail>
  );
}

export default Five;
