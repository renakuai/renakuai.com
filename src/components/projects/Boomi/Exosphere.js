import React, { useEffect } from 'react';
import Detailpage from '../../design-system/page/Detailpage';
import '../_projects.scss';
import Hero from '../../design-system/hero/Hero';
import { useOutletContext } from "react-router-dom";
import Intro from '../../design-system/section/Intro';
import Section from '../../design-system/section/Section';


function Exosphere() {

  const [detail, setDetail] = useOutletContext();

  useEffect(() => {
    setDetail(true);
  })

  return (
    <Detailpage>
      <Hero
        imgSrc='/boomi/exo_hero.png'
      />
      <div className="Maindetails">
        <Intro
          company="Boomi"
          title="Exosphere Design System"
          caption="I currently lead the Design Technology team, responsible for our design system. I created components and documentation, created roadmaps, provided support, and established processes including communication and requests"
          timeline="Sept 2022 - Ongoing"
          team={["2 Design Technologists", "5 UX Engineers"]}
        />
        <Section
          title="Where we started"
        >
          <div className="Section__content">
            When I joined Boomi, there was a limited design system in place; however, there was no documentation, very limited components to choose from, no roadmap, and the overall UI was outdated. People were also confused about what items were available in the design system and what was coming next.

            <p>We were also in the middle of migrating the whole platform to React so we knew that we needed to move fast in order to support all the new features that needed to use our design system. There were a few aggressive goals that I wanted to achieve in the short-term:

              <ul>
                <li>Create a design systems roadmap</li>
                <li>Design 45% of core components needed with a focus on usability, scalability, accessibility, and a modern UI</li>
                <li>Establish plans for documentation and communications</li>
                <li>Provide support for questions and requests</li>
              </ul>
            </p>
          </div>

        </Section>

        <Section
          title="Where we are now"
        >
          <div className="Section__content">
            Although we still have a lot of work to do, I'm very proud of what the team was able to achieve during such a short period of time.

            As of Q1 of 2023, we accomplished the following:
            <ul>
              <li>Designed and built <b>36 additional core components</b> including tables, inputs, buttons, etc.</li>
              <li>Streamlined design – our components have been used <b>8.5k times this week in Figma</b></li>
              <li>Refreshed our foundational choices (Colors, Typography, Grids, etc.)</li>
              <li>Defined, mapped, and created <b>200+ design tokens</b> to make it easier to update and scale</li>
              <li>Set up <b>Storybook, Zeroheight, and the Figma library</b></li>
              <li>Helped <b>3 teams</b> transition to Exosphere that resulted in a lot of praise from customers</li>
            </ul>
          </div>

          <div className="Section__img">
            <img src='/boomi/tokens.png' />
            <p className="Small Alt" alt="Design tokens for light and dark modes">Design tokens for light and dark modes</p>
          </div>

          <div className="Section__content">

            We also went above and beyond our original goals:


            <ul>
              <b>✔️ Create a design systems roadmap</b>
              <br />I worked with Designers, Product Managers, and the Design Systems team to create a short-term and long-term roadmap. We also started sprints on the Design Technology team where I prioritized the work to in order to achieve our roadmap.

              <br /><br /><b>✔️ Design 45% of core components needed</b>
              <br />We surpassed this goal at the end of 2022 and were even able to improve some existing components.

              <br /><br /><b>✔️ Establish plans for documentation and communications</b>
              <br />I was able to get Zeroheight (documentation repo) set up and provided templates for writing documentation. Currently, we've created documentation and usage guidelines for 95% of existing components. I also was able to unify our communications by sending out release announcements to all of Boomi and presenting updates during company All-Hands.

              <br /><br /><b>✔️ Provide support for questions and requests</b>
              <br />We were able to set up office hours and Slack channels in order to provide support and guidance to the team. I also created a request intake process so that everyone could have a voice in requesting updates to Exosphere.
            </ul>
          </div>


          <div className="Section__img">
            <img src='/boomi/zeroheight.png' />
            <p className="Small Alt" alt="Component documentation example">Component documentation example</p>
          </div>
        </Section>
        <Section
          title="Deep dive into the work"
        >
          <div className="Section__content">
            There are 4 foundational pillars of Exosphere that we focus on:
            <ul>
              <li>Foundations</li>
              <li>Core Components</li>
              <li>Layouts & Patterns</li>
              <li>Usage Guidelines</li>
            </ul>
          </div>

          <div className="Section__content">
            <h5>Foundations</h5>
            Foundations refer to the base design choices that makeup the design system. These include elements such as color, typography, and principles.

            <p>We made sure to select colors and typography that were accessible. We also mapped each selection to design tokens, a big change from the hard-coded hex values that could be found in the app prior.</p>
          </div>
          <div className="Section__img">
            <img src='/boomi/colors.png' />
            <p className="Small Alt" alt="Colors with contrast ratios and their respective tokens">Colors with contrast ratios and their respective tokens</p>
          </div>

          <div className="Section__content">
            <h5>Core Components</h5>
            Our core components are designed with usability, scalability, and accessibility in mind. We make sure to:
            <ul>
              <li>Conduct research prior to understand design standards and naming conventions</li>
              <li>Prototype designs using Javascript, HTML, CSS, or React</li>
              <li>Share explorations during crits early and often</li>
              <li>Build componenents in Figma that mirror code</li>
            </ul>

          </div>
          <div className="Section__img">
            <img src='/boomi/table.png' />
            <p className="Small Alt" alt="Table with Figma properties and sample code">Table with Figma properties and coded prototype</p>
          </div>
          <div className="Section__img">
            <img src='/boomi/components.png' />
            <p className="Small Alt" alt="Other components">Examples of other components</p>
          </div>

          <div className="Section__content">
            <h5>Layouts & Patterns</h5>
            We are currently working on creating page layouts & other patterns to level up our design system. Currently, we've already established patterns for things such as:
            <ul>
              <li>Grids and responsive behavior</li>
              <li>Page headers</li>
              <li>Required v optional, links v buttons, etc.</li>
            </ul>
          </div>
          <div className="Section__img">
            <img src='/boomi/grid.png' />
            <p className="Small Alt" alt="Page header in a grid">Page header in a grid</p>
          </div>


          <div className="Section__content">
            <h5>Usage Guidelines</h5>
            A large effort was put in place to backfill all documentation for existing components. We also made sure to provide guidelines on common patterns, responsive behavior, and accessibility as well.</div>

          <div className="Section__img">
            <img src='/boomi/doc.png' />
            <p className="Small Alt" alt="An example pattern guideline">An example guideline</p>
          </div>
        </Section>

      </div>


    </Detailpage >
  );
}

export default Exosphere;
