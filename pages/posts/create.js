import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Добавьте код для отправки данных на сервер или сохранения в базе данных

    // Предположим, что после успешного сохранения, вы получаете ID созданной записи
    const newId = 123; // Замените этот ID на реальный ID вашей записи

    // После успешного сохранения, перенаправьте пользователя на страницу деталей записи
    router.push(`/posts/${newId}`);
  };

  return (
    <div className='text-royal-lightgray'>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostPage;

