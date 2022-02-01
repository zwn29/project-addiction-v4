import { ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';

const Thumbnail = forwardRef(({ post }, ref) => {
  const router = useRouter();
  const id = post.id;
  const url = post.data().url;

  const handleClick = (e) => {
    e.preventDefault();
    console.log(post.id);
    console.log(url);
    if (id) {
      router.push(`/${id}?url=${url}`);
    }
  };
  return (
    <div
      ref={ref}
      onClick={handleClick}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={post.data().image}
        height={1080}
        width={1920}
        alt={'image'}
      />

      <div className="p-2">
        <p className="truncate max-w-md">{post?.caption}</p>

        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {post.caption}
        </h2>
        <p className="opacity-0 group-hover:opacity-100 flex items-center">
          <ThumbUpIcon className="h-5 mx-2" /> {'100'}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = 'Thumbnail';

export default Thumbnail;
