import React from 'react';
import '../writing/_writing.scss';
import Page from '../design-system/page/Page';
import Card from '../design-system/card/Card.js';


function Writing() {
  return (
    <Page>
      <h1>Projects</h1>
      <p>Showcasing my favorite projects. Includes a mix of side projects and professional work involving UX design and code.</p>
      <section className="Cards">
        <Card
          imgsrc='/uploads/table_component.png'
          imgalt="Table Components"
          subtitle="Side Project: Figma"
          title="Customizable Table Component in Figma"
          link="https://www.figma.com/community/file/1158568599671392782"
          label={['Figma', 'Design System']}
        >
          A basic, but highly customizable table component. Includes cell variants, column header variants, full rows, etc. It is recommended to build tables using individual cells for the most customization.
        </Card>

        <Card
          imgsrc='/uploads/connect_four.gif'
          imgalt="Connect 4 Game"
          subtitle="Side Project: Code"
          title="Connect 4 Game"
          link="https://connect-4.stackblitz.io/"
          label={['React', 'CSS']}
        >
          Created a Connect 4 game using React.
        </Card>

        <Card
          imgsrc='/uploads/weather_app.gif'
          imgalt="Weather App"
          subtitle="Side Project: Code"
          title="Weather App with CSS Animations"
          link="https://renas-weather.netlify.app/"
          label={['React', 'CSS', 'Animations']}
        >
          Created a weather app to practice ReactJS themes / styled components and CSS animations.
        </Card>
      </section>
    </Page>
  );
}

export default Writing;
