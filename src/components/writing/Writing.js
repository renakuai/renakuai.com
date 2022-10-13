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
          link="https://medium.com/@renakuai"
        >
          Placeholder for something coming soon.
        </Card>

      </section>
    </Page>
  );
}

export default Writing;
