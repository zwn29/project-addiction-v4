import React from 'react';
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

export default function Results({ posts }) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify center">
      {posts.map((post) => (
        <Thumbnail key={post.id} post={post} />
      ))}
    </FlipMove>
  );
}
