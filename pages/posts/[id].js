import React from 'react';
import { useRouter } from 'next/router';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className='text-royal-lightgray'>
      <h1>Post Details</h1>
      <p>Post ID: {id}</p>
    </div>
  );
};

export default PostPage;
