import React from 'react';
import { useRouter } from 'next/router';

function VideoPlayer() {
  const { query } = useRouter();
  return (
    <div className="text-white">
      <video controls src={query.url}></video>
    </div>
  );
}

export default VideoPlayer;
