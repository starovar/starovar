// components/SubscribeForm.js
import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь логику для отправки данных на сервер
    console.log(`Email submitted: ${email}`);
    // Очистите поле после отправки, если это необходимо
    setEmail('');
  };

  return (
    <form className='relative h-8 mt-3' onSubmit={handleSubmit}>
      <label>
        <input
          className='dark:bg-royal-black w-full placeholder:text-royal-lightgray py-2 dark:border-black dark:text-neutral-200 rounded-md pr-20 text-sm'
          placeholder='Введіть свій email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button className='absolute text-xs dark:text-royal-lightgray border top-[17%] right-1 dark:border-royal-gray z-10 transition duration-100 py-1 px-2 rounded-md dark:bg-black dark:hover:text-neutral-200 tracking-wider' type="submit">
        Підписатися
        </button>
    </form>
  );
};

export default SubscribeForm;
