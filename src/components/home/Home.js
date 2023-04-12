import React, { useEffect } from 'react';
import Homepage from '../design-system/page/Homepage';
import './_home.scss';
import LinkComp from '../design-system/link/LinkComp';
import FeaturedWork from './FeaturedWork';
import CodingProjects from './CodingProjects';
import Nav from '../nav/Nav.js';
import { useOutletContext } from "react-router-dom";


function Home() {

  const [detail, setDetail] = useOutletContext();

  useEffect(() => {
    setDetail(false)
  })

  return (
    <Homepage>
      <h1 className="Gradient">Hi, I'm Rena</h1>
      <section className="Intro">

        <p className="Large">I'm a Product Designer who codes (or what they call a Design Technologist or UX Engineer), with a background in Product Management. I've worked at a large variety of companies ranging from startups such as Iterable and Gatsby to larger places such as Salesforce. I love creating beautiful user experiences, experimenting with front-end code, building design systems, and just learning new things ✨</p>

        <p className="Large">Outside of work, I love exploring new places (and eating all the local dishes) and staying active. When I feel inspired, I also enjoy <LinkComp
          type="default"
          link="http://www.instagram.com/renamakesart"
        >
          painting with watercolors</LinkComp>. I currently work remotely out of Dallas, TX where I live with my husband and my cat.</p>

        <div className="Announcement">
          <p className="Semibold">🟢 I am currently taking on freelance design & front-end development work. <a href="mailto:rena.kuai@gmail.com">Send me an email →</a></p>
        </div>

        <section className="Links">
          <LinkComp type="primary" link="http://www.github.com/renakuai">Github</LinkComp>
          <LinkComp type="primary" link="http://www.linkedin.com/in/renakuai">Linkedin</LinkComp>
          <LinkComp type="primary" link="https://codepen.io/rkuai">Codepen</LinkComp>
          <LinkComp type="primary" link="mailto:rena.kuai@gmail.com">Email Me</LinkComp>
        </section>
      </section>

      <FeaturedWork />
      <CodingProjects />

    </Homepage>
  );
}

export default Home;
