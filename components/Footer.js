import { useState, useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useMediaQuery } from '@react-hook/media-query'

function MobileMenu({ title, links }) {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 640px)');
  
    useEffect(() => {
      setIsOpen(!isMobile);
    }, [isMobile]);
  
    return (
      <Disclosure
        as="div"
        className="" //mt-2
        data-headlessui={isOpen ? 'open' : 'closed'}
        data-headlessui-state={isOpen ? 'open' : 'closed'}
        open={isOpen}
        defaultOpen={true}
        onChange={setIsOpen}
      >
        {({ open }) => (
          <>
            <Disclosure.Button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex justify-between transition w-full md:w-44 border dark:border-royal-gray px-5 py-2.5 text-sm font-medium dark:bg-black text-gray-500 rounded-md ${
                open ? 'text-slate-400 md:w-44 dark:border-black dark:bg-royal-black' : ''
              }`}
            >
              <span>{title}</span>
              <ChevronUpIcon
                className={`${open ? '' : 'rotate-180'} 
                w-5 h-5 text-royal-gray ml-0.5 transition duration-150 ease-in-out`}
                aria-hidden="true" />
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
            <Disclosure.Panel
              className="px-4 pt-4 pb-2 text-sm text-gray-600"
            >
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-gray-900 dark:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    );
  }
  

  
  

  function Footer() {
    const servicesLinks = [
      { href: '/web-design', title: 'Веб-дизайн' },
      { href: '/branding', title: 'Брендінг' },
      { href: '/marketing', title: 'Маркетинг' },
      { href: '/managment', title: 'Менеджмент' },
      { href: '/ecommerce', title: 'Електронна комерція' },
    ];
  
    const companyLinks = [
      { href: '/about', title: 'Про нас' },
      { href: '/portfolio', title: 'Портфоліо' },
      { href: '/contacts', title: 'Контакти' },
      { href: '/blog', title: 'Блог' },
    ];
  
    const directoryLinks = [
      { href: '/getstarted', title: 'Початок роботи' },
      { href: '/faqs', title: 'Часті запитання' },
      { href: '/docs', title: 'Документація' },
    ];
  
    const legalLinks = [
      { href: '/terms-of-service', title: 'Надання послуг' },
      { href: '/public-offer', title: 'Публічна оферта' },
    ];
  
    const isMobile = useMediaQuery('(max-width: 640px)');
    const [isOpen, setIsOpen] = useState(!isMobile);
  
    useEffect(() => {
      setIsOpen(!isMobile);
    }, [isMobile]);
  
    return (
        <footer className="bg-white dark:bg-black text-white dark:text-black border-t dark:border-royal-gray">
        <div className="max-w-screen-xl px-4 py-8 md:pt-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8 divide-y dark:divide-royal-gray">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-gray-600 dark:text-indigo-300 text-2xl font-black">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                <svg
                  className="h-6 mr-2"
                  viewBox="0 0 197 197"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M175.27,197H52.11a9,9,0,0,1-6.37-15.36l61.59-61.59a9,9,0,0,1,12.72,0l61.59,61.59A9,9,0,0,1,175.27,197Z" fill="#4f46e5"/>
                  <path d="M181.64,15.36,15.36,181.64A9,9,0,0,1,0,175.27V121.69a9,9,0,0,1,2.64-6.37L115.32,2.64A9,9,0,0,1,121.69,0h53.58A9,9,0,0,1,181.64,15.36Z" fill="#4f46e5"/>
                </svg>
                Kotec Labs
                </Link>
              </div>
      
              <p className="max-w-xs mt-4 text-sm text-gray-500 dark:text-gray-400">
              Ми хочемо допомогти вам створити красиві, доступні, швидкі та безпечні веб-сайти, які працюють у різних браузерах і для всіх ваших користувачів.
              </p>
      
              <ul className="flex gap-6 mt-8">
                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-600 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">Facebook</span>
      
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    >
                      <path
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </Link>
                </li>
      
                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-600 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">Instagram</span>
      
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    >
                      <path
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </Link>
                </li>
      
                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-600 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">Twitter</span>
      
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </Link>
                </li>
      
                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-600 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">GitHub</span>
      
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    >
                      <path
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
        <div className="w-11/12 sm:w-max mx-auto overflow-hidden">
          <nav className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:flex lg:grid-cols-2 pb-8 whitespace-nowrap">
            <MobileMenu title="Послуги" links={servicesLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
            <MobileMenu title="Компанія" links={companyLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
            <MobileMenu title="Каталог" links={directoryLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
            <MobileMenu title="Юридичний" links={legalLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
          </nav>
        </div>
        </div>

        <nav className="pt-8 border-t md:items-baseline sm:flex sm:items-center sm:justify-between">
    <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end leading-6 pb-4">
          <li>
            <Link href="/terms" className="text-gray-500 transition hover:text-gray-600">
              Правила та умови
            </Link>
          </li>

          <li>
            <Link href="/privacy" className="text-gray-500 transition hover:text-gray-600">
              Конфіденційність
            </Link>
        </li>

        <li>
            <Link href="/terms-of-service" className="text-gray-500 transition hover:text-gray-600">
              Надання послуг
            </Link>
          </li>

          <li>
            <Link href="/public-offer" className="text-gray-500 transition hover:text-gray-600">
              Публічна оферта
            </Link>
        </li>
      </ul>
      <p className="flex text-xs justify-center text-gray-500 dark:text-gray-400 leading-6">
      &copy; 2022. Kotec Labs. Всі права захищені.
    </p>
    </nav>

        </div>
      </footer>
    );
  }
export default Footer;  