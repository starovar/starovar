import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const faqData = [
  {
    question: 'What is your refund policy?',
    answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    question: 'Do you offer technical support? Do you offer',
    answer: 'No.',
  },
  {
    question: 'Do you offer technical support? Do you offer',
    answer: 'No.',
  },
  {
    question: 'Do you offer technical support? Do you offer',
    answer: 'No.',
  },
  {
    question: 'Do you offer technical support? Do you offer',
    answer: 'No.',
  },
  // Добавьте другие вопросы и ответы по аналогии
];

export default function FaqAccordionExt() {
  return (
    <div className="w-full lg:px-4 pt-16">
      <h4 className='text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl dark:text-neutral-200/90'>
        Часті запитання
        </h4>
      <div className="mx-auto lg:w-full lg:max-w-3xl rounded-2xl lg:dark:border bg-gray-100 dark:bg-royal-black dark:border-royal-gray mt-10 px-2 pb-2">
        {faqData.map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button 
                className={`${open ? 'dark:text-blue-900' : ''} inline-flex w-full justify-between rounded-lg transition duration-100 ease-in-out bg-purple-100 dark:bg-black px-4 mt-2 py-2 text-left text-sm font-semibold border dark:border-transparent text-purple-900 dark:text-royal-lightgray dark:hover:text-blue-500 dark:hover:bg-black/50`}
                >
                  <span>{item.question}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform dark:text-royal-gray' : ''
                    } h-5 w-5 text-purple-500 dark:text-royal-lightgray transition duration-100 ease-in-out`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel static className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-neutral-200/90">
                    {item.answer}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
