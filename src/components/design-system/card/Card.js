import React from 'react';
import './_card.scss';
import Label from '../label/Label.js';

function Card(props) {

  const {
    children,
    imgsrc,
    imgalt,
    label,
    date,
    subtitle,
    title,
    link
  } = props

  return (
    <a className="Card" href={link} target="_blank">
      <article
        imgsrc={imgsrc}
        imgalt={imgalt}
        subtitle={subtitle}
        label={[label]}
        date={date}
        title={title}
        className="Card"
        link={link}
      >
        {imgsrc && <img src={imgsrc} alt={imgalt} className="Card" />}
        {subtitle && <p className="Subtitle">{subtitle}</p>}
        <h4>{title}</h4>
        <p className="Content">{children}</p>
        {label && <div className="Labels">
          {label.map((item, i) =>
            <Label key={i}>{item}</Label>)}
        </div>}
        {date && <p className="Date">{date}</p>}
      </article>
    </a>
  );
}

export default Card;
