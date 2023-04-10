import React from 'react';
import './_hero.scss';


function Hero(props) {

  const {
    imgSrc
  } = props

  return (
    <section
      className='Hero'
    >

      <div className="HeroImg">
        <img className="HeroFill" src={imgSrc} />
      </div>
    </section>
  );
}

export default Hero;
