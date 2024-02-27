import React from 'react';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'First Post',
  },
  {
    id: 2,
    title: 'Second Post',
  },
  // Добавьте другие записи по мере необходимости
];

const PostsPage = () => {
    return (
      <div className='text-royal-lightgray'>
        <h1>Blog Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* Добавьте ссылку на страницу создания записи */}
        <Link href="/posts/create">
          Create a new post
        </Link>
      </div>
    );
  };
  
  export default PostsPage;
