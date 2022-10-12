import React from 'react';
import Recents from './Recents.js';
import Card from '../../design-system/card/Card.js';

function RecentProjects() {
  return (
    <Recents
      title="Recent Projects">
      <Card
        imgSrc='/uploads/table_component.png'
        imgAlt="Table Components"
        subtitle="Side Project: Figma"
        title="Customizable Table Component in Figma"
        link="https://www.figma.com/community/file/1158568599671392782"
        label={['Figma', 'Design System']}
      >
        A basic, but highly customizable table component. Includes cell variants, column header variants, full rows, etc. It is recommended to build tables using individual cells for the most customization.
      </Card>

      <Card
        imgSrc='/uploads/connect_four.gif'
        imgAlt="Connect 4 Game"
        subtitle="Side Project: Code"
        title="Connect 4 Game"
        link="https://connect-4.stackblitz.io/"
        label={['React', 'CSS']}
      >
        Created a Connect 4 game using React.
      </Card>

      <Card
        imgSrc='/uploads/weather_app.gif'
        imgAlt="Weather App"
        subtitle="Side Project: Code"
        title="Weather App with CSS Animations"
        link="https://renas-weather.netlify.app/"
        label={['React', 'CSS', 'Animations']}
      >
        Created a weather app to practice ReactJS themes / styled components and CSS animations.
      </Card>
    </Recents>
  );
}

export default RecentProjects;
