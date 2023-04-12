import React, { useEffect } from 'react';
import Detailpage from '../../design-system/page/Detailpage';
import '../_projects.scss';
import Hero from '../../design-system/hero/Hero';
import { useOutletContext } from "react-router-dom";
import Intro from '../../design-system/section/Intro';
import Section from '../../design-system/section/Section';


function Reporting() {

  const [detail, setDetail] = useOutletContext();

  useEffect(() => {
    setDetail(true);
  })

  return (
    <Detailpage>
      <Hero
        imgSrc='/15five/15five_hero.png'
      />
      <div className="Maindetails">
        <Intro
          company="15Five"
          title="Reporting for People Ops"
          caption="I was on the analytics team at 15Five where I designed a new user experience and enhanced the capabilities of our reporting feature. This allowed People leaders to better understand the engagement of their employees."
          timeline="2019 (~4 months)"
          team={["1 Designer (me)", "A couple of engineers", "1 Product Manager"]}
        />
        <Section
          title="The problem"
        >
          <div className="Section__content">
            15Five is an application that allows People Ops leaders to monitor employee engagement, objectives, and performance. Our customers wanted a better reporting tool and often mentioned that the existing functionality was too basic and showed too few metrics to be useful for them. Sales also mentioned Reporting as a weakness in our product suite.

          </div>
          <div className="Section__img">
            <img src='/15five/previous.png' alt="Previous reporting experience" className="Styled" />
            <p className="Small Alt" >Previous reporting experience</p>
          </div>

        </Section>

        <Section
          title="The outcome"
        >
          <div className="Section__content">
            We were able to build out a much more comprehensive reporting feature after a couple of months. We were able to surface metrics that weren't visible to customers before and completely revamped the user experience to allow for the drilling in and exploration of data.
            <p>After release, we saw an increase in usage of the feature. We also shared the new feature with a customer who was on the fence and they ended up closing a deal with us!</p>

          </div>

          <div className="Section__img">
            <img src='/15five/15five_reporting.gif' alt="New reporting experience" className="Styled" />
            <p className="Small Alt" >The new reporting experience</p>
          </div>
        </Section>





      </div>


    </Detailpage >
  );
}

export default Reporting;
