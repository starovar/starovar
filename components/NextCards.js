import Link from 'next/link';

// Функция для генерации карточек
const generateCard = (title, content) => (
  <Link
    href="#"
    className=""
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="border-4 dark:border-royal-gray p-4 rounded-2xl hover:bg-neutral-200/5">
      {/* Инлайн-стили для карточки */}
      <h2 className="text-xl font-bold dark:text-neutral-200/90 mb-2">
        {title} <span>&rarr;</span>
      </h2>
      <p className="text-gray-600 dark:text-royal-lightgray">{content}</p>
    </div>
  </Link>
);

export default function Example() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:pb-8">
      {generateCard('Docs', 'Find in-depth information about Next.js features and API.')}
      {generateCard('Learn', 'Learn about Next.js in an interactive course with quizzes!')}
      {generateCard('Templates', 'Discover and deploy boilerplate example Next.js projects.')}
      {generateCard('Deploy', 'Instantly deploy your Next.js site to a shareable URL with Vercel.')}
    </div>
  );
}
