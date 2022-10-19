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
      description={item.longDescription}
    ></Detail>
  );
}

export default Five;
