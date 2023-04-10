import React, { useState } from 'react';
import Card from '../design-system/card/Card.js';
import './_featuredwork.scss';
import { Link } from "react-router-dom";

function FeaturedWork() {


  return (
    <section className="SectionDiv" id="featured" name="featured">
      <h3>Featured Design Work</h3>
      <div className="Divider" />
      <div className="List">

        <Link to={{
          pathname: 'boomi_exosphere'
        }}><Card
          orientation="Landscape"
          company="Boomi"
          title="Exosphere Design System"
          description="I currently lead the Design Technology team at Boomi, responsible for our design system, Exosphere. I designed components, created roadmaps, and established processes for communication and documentation."
          imgSrc="/boomi/thumb_Exosphere.png"
        >
          </Card>
        </Link>

        <a href="https://www.salesforce.com/products/sales-cloud/tools/sales-enablement/" target="_blank">
          <Card
            orientation="Landscape"
            company="Salesforce"
            title="Sales Enablement Analytics"
            description="At Salesforce, I designed new a set of analytics for our Sales Enablement product. These analytics help organizations better understand the effectiveness of their enablement programs and progress towards goals."
            imgSrc="/salesforce/thumb_Salesforce.png"
          >
          </Card>
        </a>

        <Card
          orientation="Landscape"
          company="Iterable"
          title="Cross-channel Analytics"
          description="As the lead designer on the analytics team at Iterable, I designed a brand new feature for marketers to better compare the effectiveness of their cross-channel campaigns."
          imgSrc="/iterable/cross_channel.gif"
        >
        </Card>

        <Card
          orientation="Landscape"
          company="Iterable"
          title="Messaging Insights"
          description="As the lead designer on the analytics team at Iterable, I improved the filtering experience in our main analytics feature to help marketers better understand the performance of their campaigns."
          imgSrc="/iterable/mi_filters.gif"
        >
        </Card>

        <Card
          orientation="Landscape"
          company="15Five"
          title="Reporting for People Ops"
          description="I was on the analytics team at 15Five where I designed a new user experience and enhanced the capabilities of our reporting feature. This allowed People leaders to better understand the engagement of their employees"
          imgSrc="/15five/15five.png"
        >
        </Card>
      </div>


    </section>
  );
}

export default FeaturedWork;
