import React, { useEffect, useState } from 'react';
import '../writing/_writing.scss';
import Page from '../design-system/page/Page';
import Card from '../design-system/card/Card.js';
import Tab from '../design-system/tab/Tab.js';
import './_projects.scss';
import { projects } from './projectsList';

function Projects() {
  const [filtered, setFiltered] = useState('All');
  const [list, setList] = useState(projects);

  function handleClick(e) {
    const selected = e.target.id;
    if (selected === 'All') {
      setList(projects);
      setFiltered(selected)
    }
    else {
      const newList = [];
      console.log(list)
      projects.map((proj) => {
        if (proj.label.includes(selected)) {
          newList.push(proj)
        }
      })
      setList(newList);
      setFiltered(selected);
    }
  }

  return (
    <Page>
      <h1>Projects</h1>
      <p>Showcasing my favorite projects. Includes a mix of side projects and professional work involving UX design and code.</p>
      <section className="Cards">

        <nav>
          <ul className="Filter">
            <li>
              <Tab
                id="All"
                active={filtered === 'All' ? true : false} onClick={(e) => handleClick(e)}>All</Tab>
            </li>
            <li>
              <Tab
                id="Code"
                active={filtered === 'Code' ? true : false} onClick={(e) => handleClick(e)}>Code</Tab>
            </li>
            <li>
              <Tab
                id="Design"
                active={filtered === 'Design' ? true : false} onClick={(e) => handleClick(e)}>Design</Tab>
            </li>
            <li>
              <Tab
                id="Design Systems"
                active={filtered === 'Design Systems' ? true : false} onClick={(e) => handleClick(e)}>Design Systems</Tab>
            </li>
            <li>
              <Tab
                id="Professional Work"
                active={filtered === 'Professional Work' ? true : false} onClick={(e) => handleClick(e)}>Professional Work</Tab>
            </li>
            <li>
              <Tab
                id="Side Project"
                active={filtered === 'Side Project' ? true : false} onClick={(e) => handleClick(e)}>Side Project</Tab>
            </li>
          </ul>
        </nav>

        {list && list.map((item, i) => (
          <Card
            key={i}
            imgsrc={item.imgsrc}
            imgalt={item.imgalt}
            subtitle={item.subtitle}
            title={item.title}
            link={item.link && item.link}
            route={item.route && item.route}
            label={item.label}
            size="large"
          >
            {item.description}
          </Card>
        )).reverse()}
      </section>
    </Page>
  );
}

export default Projects;
