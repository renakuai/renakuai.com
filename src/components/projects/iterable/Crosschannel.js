import React, { useEffect } from 'react';
import Detailpage from '../../design-system/page/Detailpage';
import '../_projects.scss';
import Hero from '../../design-system/hero/Hero';
import { useOutletContext } from "react-router-dom";
import Intro from '../../design-system/section/Intro';
import Section from '../../design-system/section/Section';


function Crosschannel() {

  const [detail, setDetail] = useOutletContext();

  useEffect(() => {
    setDetail(true);
  })

  return (
    <Detailpage>
      <Hero
        imgSrc='/iterable/cross_hero.png'
      />
      <div className="Maindetails">
        <Intro
          company="Iterable"
          title="Cross-channel Analytics"
          caption="In a short period of time, we were able to build a brand new, widely requested feature to help marketers better compare the effectiveness of their cross-channel campaigns."
          timeline="2020 (~9 weeks)"
          team={["1 Designer (me)", "A couple of engineers", "1 Product Manager"]}
        />
        <Section
          title="The problem"
        >
          <div className="Section__content">
            Within Iterable, we only provided the ability to view the performance of campaigns from a single channel (such as text, email, push, etc.) at a time. This was problematic because digital marketers use a variety of different channels to reach their audiences and need to understand the performance of their marketing efforts as a whole.

            <p>Our competitors also provided the ability to view cross-channel analytics so we knew it was necessary to build this feature as soon as possible.
            </p>
          </div>
          <div className="Section__img">
            <img src='/iterable/single.png' alt="Previous Messaging Insights design" className="Styled" />
            <p className="Small Alt" >Previous design that only supported one channel at a time</p>
          </div>

        </Section>

        <Section
          title="The outcome"
        >
          <div className="Section__content">
            We were able to quickly design and build a cross-channel analytics experience that seamlessly fit into the existing single channel experience in less than 3 months. After a few months into the release, we received a lot of positive sentiment from our customers and also achieved our goal of having customers with cross-channel campaigns using this feature on a regular basis.
          </div>

          <div className="Section__img">
            <img src='/iterable/cross_channel.gif' alt="Cross-channel analtyics" className="Styled" />
            <p className="Small Alt" >The final Cross-channel analytics feature</p>
          </div>
        </Section>



      </div>


    </Detailpage >
  );
}

export default Crosschannel;
