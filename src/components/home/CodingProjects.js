import React, { useState } from 'react';
import Card from '../design-system/card/Card.js';
import './_codingprojects.scss';

function CodingProjects() {

  return (
    <section className="SectionDiv" id="coding" name="coding">
      <h3>Coding Projects</h3>
      <div className="Divider" />
      <div className="List">
        <div className="RowGrid">

          <a href="https://helios-app.netlify.app/" target="_blank">
            <Card
              orientation="Portrait"
              title="Helios: A design system app"
              description="An app to help people visualize foundational building blocks of their design system. This is version 0.1."
              imgSrc="/projects/helios.png"
            >
            </Card>
          </a>

          <a href="https://connect-4.stackblitz.io/" target="_blank">
            <Card
              orientation="Portrait"
              title="Connect 4 Game"
              description="A Connect 4 game that allows you to play against a computer using an API. Built using React."
              imgSrc="/projects/connect_four.gif"
            >
            </Card>
          </a>

          <a href="https://renas-weather.netlify.app/" target="_blank">
            <Card
              orientation="Portrait"
              title="A Weather App"
              description="A weather app that visualizes the current weather of a selected location. Built using React and CSS."
              imgSrc="/projects/weather_app.gif"
            >
            </Card>
          </a>

          <a href="https://d3playground.netlify.app/" target="_blank">
            <Card
              orientation="Portrait"
              title="Visualization of GDP Data"
              description="A choropleth map showing GDP per capita over years using D3 as the calc engine and React as the renderer."
              imgSrc="/projects/d3_map.png"
            >
            </Card>
          </a>


        </div>
      </div>


    </section>
  );
}

export default CodingProjects;
