import { useState } from 'react'
import { Tab, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
        image: 'https://source.unsplash.com/random/360x480',
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
        image: 'https://source.unsplash.com/random/360x480',
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
        image: 'https://source.unsplash.com/random/360x480',
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
        image: 'https://source.unsplash.com/random/360x480',
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
        image: '/branding.png',
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
        image: '/night.jpg',
      },
    ],
  })

  const [selectedTab, setSelectedTab] = useState('Recent');
  
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
              onClick={() => setSelectedTab(category)}
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
  {Object.values(categories).map((posts, idx) => (
    <Transition
      key={idx}
      show={selectedTab === Object.keys(categories)[idx]}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Transition.Child
        key={idx}
        className={classNames(
          'rounded-xl bg-white p-3',
          'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
        )}
      >
        <ul>
          {posts.map((post) => (
            <li
              key={post.id}
              className="relative rounded-md p-3 hover:bg-gray-100"
            >
              <h3 className="text-sm text-gray-600 font-medium leading-5">
                {post.title}
                <Image className="w-full h-32 object-cover rounded-md"
                 src={post.image}
                 alt={post.title}
                 width={480}
                 height={360}
                 priority
                 
                />
              </h3>

              <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                <li>{post.date}</li>
                <li>&middot;</li>
                <li>{post.commentCount} comments</li>
                <li>&middot;</li>
                <li>{post.shareCount} shares</li>
              </ul>

              <Link
                href="#"
                className={classNames(
                  'absolute inset-0 rounded-md',
                  'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                )}
              />
            </li>
          ))}
        </ul>
      </Transition.Child>
    </Transition>
  ))}
</Tab.Panels>
      </Tab.Group>
    </div>
  )
}
