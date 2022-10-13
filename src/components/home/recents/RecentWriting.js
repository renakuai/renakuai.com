import React from 'react';
import Recents from './Recents.js';
import Card from '../../design-system/card/Card.js';

function RecentProjects() {
  return (
    <Recents
      title="Recent Writing"
      route="/writing"
      link="https://www.figma.com/community/file/1158568599671392782"
      linkName="View more writing"
    >
      <Card
        title="A Primer on Design Tokens"
        date="Oct 2022"

      >
        Placeholder for something coming soon.

      </Card>
    </Recents>
  );
}

export default RecentProjects;
