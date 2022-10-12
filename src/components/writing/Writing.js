import React from 'react';
import './_home.scss';
import Page from '../design-system/page/Page';
import LinkComp from '../design-system/link/LinkComp';
import RecentProjects from './recents/RecentProjects';
import RecentWriting from './recents/RecentWriting'


function Home() {
  return (
    <Page>
      <h1>Writing</h1>
      <Card
        title="Working at early stage, growth, and large companies"
        date="Oct 2022"

      >
        Coming soon!
      </Card>

    </Page>
  );
}

export default Home;
