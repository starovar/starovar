import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
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
        className="mt-2"
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
              className={`flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md ${
                open ? 'bg-gray-200' : ''
              }`}
            >
              <span>{title}</span>
              <ChevronUpIcon
                className={`${
                  open ? 'transform rotate-180' : ''
                } w-5 h-5 text-gray-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel
              className="px-4 pt-4 pb-2 text-sm text-gray-500"
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
      <footer className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-between">
            <MobileMenu title="Послуги" links={servicesLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
            <MobileMenu title="Компанія" links={companyLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
            <MobileMenu title="Каталог" links={directoryLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
            <MobileMenu title="Юридична інформація" links={legalLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
          </nav>
          <p className="mt-8 text-center text-base text-gray-500">
            © 2023 My Company, Inc. Всі права захищені.
          </p>
        </div>
      </footer>
    );
  }
export default Footer;  