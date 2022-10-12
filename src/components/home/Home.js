import React from 'react';
import './_home.scss';
import Page from '../design-system/page/Page';
import LinkComp from '../design-system/link/LinkComp';
import RecentProjects from './recents/RecentProjects';
import RecentWriting from './recents/RecentWriting'


function Home() {
  return (
    <Page>
      <h1>Hi, I'm Rena</h1>
      <section className="Intro">
        <p className="Large">I'm a Designer who codes (or what they call a Design Technologist or UX Engineer), with a background in Product Management. I like to view myself as a lifelong learner, a creator at heart, and someone who embraces change. Specifically, I love experimenting with front-end code, building out design systems, and creating processes and tools to enable design teams to do their best work ✨</p>

        <p className="Large">Outside of work, I love exploring new places (and eating all the local dishes), staying active, and watching TV and movies. When I feel inspired, I also enjoy <LinkComp
          type="default"
          link="http://www.instagram.com/renamakesart"
        >
          painting with watercolors</LinkComp>. I currently work remotely out of Dallas, TX where I live with my husband and my cat.</p>
        <section className="Links">
          <LinkComp type="primary" link="http://www.github.com/renakuai">Github</LinkComp>
          <LinkComp type="primary" link="http://www.linkedin.com/in/renakuai">Linkedin</LinkComp>
          <LinkComp type="primary" link="http://www.codepen.io/renakuai">Codepen</LinkComp>
          <LinkComp type="primary" link="mailto:rena.kuai@gmail.com">Email Me</LinkComp>
        </section>
      </section>

      <RecentProjects />
      <RecentWriting />

    </Page>
  );
}

export default Home;
