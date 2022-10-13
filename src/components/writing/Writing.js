import React from 'react';
import './_writing.scss';
import Page from '../design-system/page/Page';
import Card from '../design-system/card/Card.js';


function Writing() {
  return (
    <Page>
      <h1>Writing</h1>
      <section className="Cards">
        <Card
          title="A Primer on Design Tokens"
          date="Oct 2022"
          link="https://medium.com/@renakuai/a-primer-on-design-tokens-f7dd432f06ae"
        >
          What is a Design Token?
          Design tokens refer to special variables that store design decisions. From a technical standpoint, they are pieces of information that are associated, at a minimum, with a name-value pair.
          Design tokens act as foundational building blocks and the sources of truth for design systems and can help designers and engineers build more efficiently and consistently. Here are some examples of design tokens used in my personal website:


        </Card>

      </section>
    </Page>
  );
}

export default Writing;
