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
            In less than 3 months, we were able to quickly design and build a cross-channel analytics experience that seamlessly fit into the existing single channel experience.

            <p>After a few months into the release, we received a lot of positive sentiment from our customers and also achieved our goal of having customers with cross-channel campaigns using this feature on a regular basis.</p>
          </div>

          <div className="Section__img">
            <img src='/iterable/cross_channel.gif' alt="Cross-channel analtyics" className="Styled" />
            <p className="Small Alt" >The final Cross-channel analytics feature</p>
          </div>
        </Section>

        <Section
          title="Deep dive into the work"
        >
          <div className="Section__content">
            <h5>Using a research as a starting point</h5>
            Before diving into design, my PM and I wanted to get some insights into what customers were trying to achieve and see within their cross-channel insights.
            <p>Due to time constraints, we conducted research in a scrappy way and were able to pull together insights from several places. We discovered the following: </p>
            <ul>
              <li>Customers want to compare the performance of their channels against each other</li>
              <li>The existing workaround that customers were doing was very cumbersome</li>
            </ul>
          </div>
          <div className="Section__img">
            <img src='/iterable/survey.png' alt="Our survey" className="Styled" />
            <p className="Small Alt" >A snippet of our survey</p>
          </div>

          <div className="Section__content">
            <h5>Creating a new experience and merging with the old</h5>
            Our existing feature allowed for the viewing of one channel at a time and we needed to figure out a way to add in a cross-channel view that wasn't too disruptive, but was also different enough to support the different goals of each view. We also needed to consider entry points from other parts of the application as well.
            <p>During this process, I made sure to design the cross-channel experience side by side with the single channel experience, repurposed existing components as much as possible, and prototyped all transitions to make sure the views were cohesive.</p>
          </div>
          <div className="Section__img">
            <img src='/iterable/connect.png' alt="Comparing single and cross-channel elements" className="Styled" />
            <p className="Small Alt" >Comparing single and cross-channel cards and tables</p>
          </div>
          <div className="Section__img">
            <img src='/iterable/singletocross.gif' alt="Transitioning from single to cross" className="Styled" />
            <p className="Small Alt" >Transition from the single to cross-channel experience</p>
          </div>

          <div className="Section__content">
            <h5>Showcasing channel performance comparisons</h5>
            The most important part of our feature were the overview cards. From our user research, we knew that customers wanted the capability to compare metrics of channels with ease.
            <p>I designed the overview cards to with a visual for quick understanding of performance and surfaced both aggregate and breakdowns by channel.</p>
          </div>
          <div className="Section__img">
            <img src='/iterable/cards.png' alt="Card design" className="Styled" />
            <p className="Small Alt" >Final card designs</p>
          </div>

          <div className="Section__content">
            We made sure to carry comparisons over to each tab including the list of campaigns and audiences. We also drastically improved our charting by separating metrics so that they weren't all displayed on a single chart and allowing for time series and bar chart views.
          </div>
          <div className="Section__img">
            <img src='/iterable/charts.png' alt="Improved charts" className="Styled" />
            <p className="Small Alt" >Improved charts along with previous chart</p>
          </div>

        </Section>



      </div>


    </Detailpage >
  );
}

export default Crosschannel;
