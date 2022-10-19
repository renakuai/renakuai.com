import React, { useEffect, useState } from 'react';
import './_detail.scss';
import Page from '../../design-system/page/Page';
import Card from '../../design-system/card/Card.js';
import { projects } from '../projectsList';

function Detail(props) {

  const {
    title,
    description,
    imgsrc,
    imgalt,
    subtitle,
  } = props

  return (
    <Page>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <section className="Cards">

        <img src={imgsrc} imgalt={imgalt} className="Detail" />
        <p>{description}</p>
      </section>
    </Page>
  );
}

export default Detail;
