import React, { useEffect } from 'react';
import Detailpage from '../../design-system/page/Detailpage';
import '../_projects.scss';
import Hero from '../../design-system/hero/Hero';
import { useOutletContext } from "react-router-dom";
import Intro from '../../design-system/section/Intro';
import Section from '../../design-system/section/Section';


function Messaginginsights() {

  const [detail, setDetail] = useOutletContext();

  useEffect(() => {
    setDetail(true);
  })

  return (
    <Detailpage>
      <Hero
        imgSrc='/iterable/mi_hero.png'
      />
      <div className="Maindetails">
        <Intro
          company="Iterable"
          title="Improving Messaging Insights"
          caption="We used research findings to hone in on the importance of filters and ultimately built a more user-friendly analytics experience for marketers."
          timeline="2020 (~3 months)"
          team={["1 Designer (me)", "A couple of engineers", "1 Product Manager"]}
        />
        <Section
          title="The problem"
        >
          <div className="Section__content">
            Messaging Insights had been released several months prior to me joining the team; however, the usage rates weren't as high as we wanted them to be. By speaking to customers and listening to feedback from our Customer Success Team, we realized that users had difficulties drilling into the data that they needed. Specifically, the filtering left a lot to be desired -- even simple things such as looking at specific campaigns couldn't be done.

            <p>We knew we needed to improve the filtering experience by adding in basic functionality and additional paramters that customers needed in order to better understand the performance of their campaigns.
            </p>
          </div>
          <div className="Section__img">
            <img src='/iterable/before.png' alt="Previous Messaging Insights experience" className="Styled" />
            <p className="Small Alt" >Previous experience with limited filters</p>
          </div>

        </Section>

        <Section
          title="The outcome"
        >
          <div className="Section__content">
            Our team was able to successfully revamp Messaging Insights and improve the usage of the feature. We also received a lot of positive feedback from customers about how easy it was to drill into the data they needed.

          </div>

          <div className="Section__img">
            <img src='/iterable/mi_filters.gif' alt="New messaging insights" className="Styled" />
            <p className="Small Alt" >The improved Messaging Insights experience</p>
          </div>
        </Section>



      </div>


    </Detailpage >
  );
}

export default Messaginginsights;
