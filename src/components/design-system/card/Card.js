import React from 'react';
import './_card.scss';


function Card(props) {

  const {
    imgSrc,
    company,
    thumbAlt,
    title,
    description,
    orientation
  } = props

  return (
    <article
      className='Card'
    >{
        orientation === 'Landscape' ?
          <div className='Landscape'>
            <div className="Left">
              <p className="Label">{company}</p>
              <h4 className="Gradient">{title}</h4>
              <p className="Description">{description}</p>
            </div>
            <div className="Thumbnail">
              <img src={imgSrc} alt={thumbAlt} />
            </div>
          </div>
          :
          <div className="Portrait">
            <div className="Left">
              <div className="Thumbnail">
                <img src={imgSrc} alt={thumbAlt} />
              </div>
              <p className="Label">{company}</p>
              <h4 className="Gradient">{title}</h4>
              <p className="Description">{description}</p>
            </div>
          </div>
      }
    </article>
  );
}

export default Card;
