import React, { useState } from 'react';
import './_writing.scss';
import Post from '../design-system/post/Post';
import Card from '../design-system/card/Card.js';
import { writings } from './writingList.js';

function Posts() {
  const [list, setList] = useState(writings);

  return (
    <Post>
      <h1>Writing</h1>
      <section className="Cards">

      </section>
    </Post>
  );
}

export default Posts;
