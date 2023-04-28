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
          caption="I currently lead the Design Technology team, responsible for our design system. I create components, documentation, and prototypes along with roadmaps, providing support, and establishing processes."
          timeline="Sept 2022 - Ongoing"
          team={["2 Design Technologists", "A couple of UX Engineers"]}
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
            <img src='/boomi/tokens.png' alt="Design tokens for light and dark modes" />
            <p className="Small Alt">Design tokens for light and dark modes</p>
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
            <img src='/boomi/zeroheight.png' alt="Component documentation example" />
            <p className="Small Alt" >Component documentation example</p>
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
            <img src='/boomi/colors.png' alt="Colors with contrast ratios and their respective tokens" />
            <p className="Small Alt" >Colors with contrast ratios and their respective tokens</p>
          </div>
          <div className="Section__content">
            <p>To help designers be aware of all design tokens and their options, I built a Figma plugin to bring in design tokens that Figma doesn't support out of the box (such as padding, spacing, opacity, etc.) and make it easier to adjust parameters with a single click. The plugin helped streamline the workflow of designers by ensuring proper, available tokens were used.</p>
          </div>

          <div className="Section__img">
            <img src='/boomi/tokens_plugin.gif' alt="Design token plugin gif" class="Styled" />
            <p className="Small Alt" >Walk through of the Figma token plugin</p>
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
            <img src='/boomi/components.png' alt="Examples of a few components" className="Styled" />
            <p className="Small Alt" >Examples of a few components</p>
          </div>
          <div className="Section__img">
            <img src='/boomi/drawer_proto.gif' alt="Coded prototype of a responsive side drawer" className="Styled" />
            <p className="Small Alt" >Coded prototype of a responsive side drawer</p>
          </div>
          <div className="Section__img">
            <img src='/boomi/loader_proto.gif' alt="Loader animation exploration prototype" className="Styled" />
            <p className="Small Alt" >Loader animation exploration prototype</p>
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
            <img src='/boomi/grid.png' alt="Some of our responsive grids" />
            <p className="Small Alt" >Some of our responsive grids</p>
          </div>


          <div className="Section__content">
            <h5>Usage Guidelines</h5>
            A large effort was put in place to backfill all documentation for existing components. For any new components, we made sure that documentation was written before we defined a component as complete. For these usage guidelines, we noted down all variants, anatomy, interaction behavior, responsive behavior, and accessibility.</div>

          <div className="Section__img">
            <img src='/boomi/doc.png' alt="An example pattern guideline" />
            <p className="Small Alt" >An example guideline</p>
          </div>
          <div className="Section__img">
            <img src='/boomi/table_guidelines.png' alt="An example table guideline" class="Styled" />
            <p className="Small Alt" >Another example of a guideline</p>
          </div>
        </Section>

      </div>


    </Detailpage >
  );
}

export default Exosphere;
