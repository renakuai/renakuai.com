import React from 'react';
import Recents from './Recents.js';
import Card from '../../design-system/card/Card.js';

function RecentProjects() {
  return (
    <Recents
      title="Recent Writing"
      route="/writing"
      linkName="View more writing"
    >
      <Card
        title="A Primer on Design Tokens"
        date="Oct 2022"
        link="https://medium.com/@renakuai/a-primer-on-design-tokens-f7dd432f06ae"
      >
        What is a Design Token?
        Design tokens refer to special variables that store design decisions. From a technical standpoint, they are pieces of information that are associated, at a minimum, with a name-value pair.

      </Card>
    </Recents>
  );
}

export default RecentProjects;
