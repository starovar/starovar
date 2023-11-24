import Image from "next/image"
import Link from "next/link"


const posts = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      categories: [
        { title: 'Marketing', href: '#' },
        { title: 'Development', href: '#' },
        // Another categories, max 3 categories for best UX
      ],
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
      title: 'Boost2 your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      categories: [
        { title: 'Marketing', href: '#' },
        { title: 'Design', href: '#' },
        { title: 'Managment', href: '#' },
        // Another categories, max 3 categories for best UX
      ],
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
      title: 'Boost3 your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      categories: [
        { title: 'Marketing', href: '#' },
        { title: 'Automation', href: '#' },
        { title: 'Ads', href: '#' },
        // Another categories, max 3 categories for best UX
      ], 
      author: {
        name: 'Serge Blacksmith',
        role: 'Founder & CEO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...

  ]
  
  export default function Example() {
    return (
      <div className="dark:bg-royal-black border dark:border-royal-gray rounded-3xl container max-w-xl lg:max-w-7xl lg:py-16 py-10 sm:pt-16 sm:pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center lg:mx-0">
            <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl dark:text-neutral-200">Читайте наш блог</h2>
            <p className="mt-2 text-lg font-medium leading-8 text-gray-600 dark:text-royal-lightgray">
            Дізнайтеся, як досягти неперевершеної <strong className="dark:text-neutral-200">продуктивності</strong> та <strong className="dark:text-neutral-200">ефективності</strong>.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t dark:border-royal-gray pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="transition-all duration-150 lg:p-4 rounded-2xl lg:dark:hover:bg-black flex max-w-xl flex-col items-start justify-between">
                <Image src={post.img} alt="" width={384} height={256} className="rounded-2xl" />
                <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#888888" className="" viewBox="0 0 16 16"> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/> <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/> </svg>
                <time dateTime={post.datetime} className="text-gray-500 dark:text-royal-lightgray">
                    {post.date}
                  </time>
                  </div>
                <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
                
                  {post.categories.map((category, index) => (
                  <Link 
                    key={index}
                    href={category.href}
                    className="relative z-10 bg-yellow-100 text-yellow-800 font-medium me-2 px-2.5 py-0.5 rounded-full transition duration-200 dark:bg-amber-900/20 dark:text-amber-500/75 dark:hover:text-amber-500/90 tracking-wider">
                    {category.title}
                  </Link>
                  ))}
                </div>
                <div className="group relative">
                
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 transition duration-200 group-hover:text-royal-lightgray dark:text-neutral-200">
                    <Link href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="group mt-5 line-clamp-3 text-sm leading-6 transition duration-200 text-gray-600 dark:text-royal-lightgray dark:group-hover:text-neutral-200">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image src={post.author.imageUrl} alt="" width={100} height={100} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-medium text-gray-900 me-2 px-2.5 py-0.5 dark:text-royal-lightgray">
                      <Link href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </Link>
                    </p>
                    <p className="bg-yellow-100 text-xs cursor-pointer relative z-10 text-yellow-800 font-medium me-2 px-2.5 py-0.5 rounded-full transition duration-200 dark:bg-indigo-900/20 dark:text-indigo-500/75 dark:hover:text-indigo-500/90 tracking-wider">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }