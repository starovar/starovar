import Link from 'next/link';
import SubscribeForm from './SubscribeForm';


function MobileMenu({ title, links, customClass }) {
  return (
    
      <div className={`text-sm text-neutral-200 ${customClass}`}>
      <h4 className='mb-4 font-semibold'>{title}</h4>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block hover:text-royal-black text-royal-gray dark:hover:text-neutral-200 transition duration-100 dark:text-royal-lightgray mb-3"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
  );
}
  

  
  

  function Footer() {
    const servicesLinks = [
      { href: '/web-design', title: 'Веб-дизайн' },
      { href: '/branding', title: 'Брендінг' },
      { href: '/marketing', title: 'Маркетинг' },
      { href: '/managment', title: 'Менеджмент' },
      { href: '/ecommerce', title: 'Ecommerce' },
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
  
    return (
        <footer className="bg-white dark:bg-black text-white dark:text-black border-t dark:border-royal-gray">
        <div className="max-w-screen-xl px-6 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8 divide-y dark:divide-royal-gray">
          <div className="pt-12 pb-5 md:pt-9 md:pb-9">
            <nav className='Kotec grid gap-8 grid-cols-2 lg:flex lg:flex-wrap justify-between'>
              <div className="text-xl font-black">
              <Link href="/" className="flex items-center text-gray-500 dark:text-neutral-200">
                <svg
                  className="h-5 mr-2"
                  viewBox="0 0 197 197"
                  fill="#e5e5e5"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M175.27,197H52.11a9,9,0,0,1-6.37-15.36l61.59-61.59a9,9,0,0,1,12.72,0l61.59,61.59A9,9,0,0,1,175.27,197Z" />
                  <path d="M181.64,15.36,15.36,181.64A9,9,0,0,1,0,175.27V121.69a9,9,0,0,1,2.64-6.37L115.32,2.64A9,9,0,0,1,121.69,0h53.58A9,9,0,0,1,181.64,15.36Z" />
                </svg>
                Kotec
                </Link>
              </div>
              
          
            <MobileMenu title="Послуги" links={servicesLinks} customClass='col-start-1' />
            <MobileMenu title="Компанія" links={companyLinks} />
            <MobileMenu title="Каталог" links={directoryLinks} />
            <MobileMenu title="Юридичний" links={legalLinks} />

            <div className="footer_newsletter text-sm lg:max-w-240 col-span-full">
              <h4 className='dark:text-neutral-200 mb-4 font-semibold'>Підпишіться на нашу розсилку</h4>
              <p className='dark:text-royal-lightgray pr-16'>Будьте в курсі нових сучасних рішень.</p>
              <SubscribeForm />
                  </div>

        
      </nav>
      <nav className="pt-9 mt-12 text-center border-t dark:border-royal-gray md:items-baseline sm:flex sm:items-center sm:justify-between">
    <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end leading-6">
          <li>
            <Link href="/terms" className="text-gray-500 dark:text-royal-lightgray transition hover:text-gray-600 dark:hover:text-neutral-200">
              Правила та умови
            </Link>
          </li>

          <li>
            <Link href="/privacy" className="text-gray-500 dark:text-royal-lightgray transition hover:text-gray-600 dark:hover:text-neutral-200">
              Конфіденційність
            </Link>
        </li>
      </ul>
      <p className="flex text-xs justify-center text-gray-500 dark:text-royal-lightgray leading-6 md:py-0 lg:py-0 py-4">
      &copy; 2025 Starovar, Inc.
    </p>
    </nav>
  </div>
</div>
      </footer>
    );
  }
export default Footer;  