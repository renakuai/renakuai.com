import React from 'react';
import './_post.scss';
import Page from '../page/Page';


function Post(props) {

  const { title, children } = props;

  return (
    <Page>
      <h1>{title}</h1>
      <section className="Post">
        {children}
      </section>
    </Page>
  );
}

export default Post;
