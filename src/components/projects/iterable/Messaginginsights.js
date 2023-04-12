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

        <Section
          title="Deep dive into the work"
        >
          <h5>Improving the general filter pattern</h5>

          <div className="Section__content">
            We knew that we needed to support additional filters to satisfy the use cases of our customers; however, our existing filtering design wasn't scalable enough and all filters were hidden behind a single dropdown.
            <p>In the new design, we wanted to improve both visibility and scalability. I ended up surfacing all nested filters outright and moving the filtering to the side to create more vertical space for filter selection. I also utilized a sentence logic structure that would support additional modifiers and was a pattern that was already familiar to our customers.</p>

          </div>

          <div className="Section__img">
            <img src='/iterable/filterpattern.png' alt="Previous and new filters" className="Styled" />
            <p className="Small Alt" >Previous and new filter patterns</p>
          </div>

          <h5>New components to support additional filters</h5>

          <div className="Section__content">
            The additional filters requested had a variety of requirements. Some filters were simple, such as only needing the ability to multiselect, while others were more complex, such as needing the ability to view nested items. Our existing design system didn't support these additional cases and a few other designers needed similar functionality so I decided to embark on componentizing these elements.
            <p>I ended up doing the following:
              <ul>
                <li>Componentizing existing filters and adding a new Ad Lib Pill variant</li>
                <li>Creating a menu panel component with additional variants</li>
              </ul>
              <p>For both, it was important to spec out the microinteractions as well as follow the mental models of our customers when organizing information.</p>
            </p>

          </div>

          <div className="Section__img">
            <img src='/iterable/filtertypes.png' alt="Different filter types" className="Styled" />
            <p className="Small Alt" >Different filter types including Ad Lib Pills</p>
          </div>
          <div className="Section__img">
            <img src='/iterable/menus.png' alt="Some menu variants" className="Styled" />
            <p className="Small Alt" >A few menu variants</p>
          </div>
        </Section>



      </div>


    </Detailpage >
  );
}

export default Messaginginsights;
