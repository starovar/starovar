import Link from 'next/link';
import SubscribeForm from './SubscribeForm';


function MobileMenu({ title, links }) {
  return (
    
      <div className="pb-2 text-sm text-gray-600">
      <h4>{title}</h4>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-royal-black text-royal-gray dark:hover:text-neutral-200 transition duration-200 dark:text-royal-lightgray"
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
        <div className="max-w-screen-xl px-4 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8 divide-y dark:divide-royal-gray">
          <div className="md:pt-9 md:pb-9">
            <nav className='Kotec flex flex-wrap justify-between'>
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
                Kotec Labs
                </Link>
              </div>
              
          
            <MobileMenu title="Послуги" links={servicesLinks} />
            <MobileMenu title="Компанія" links={companyLinks} />
            <MobileMenu title="Каталог" links={directoryLinks} />
            <MobileMenu title="Юридичний" links={legalLinks} />

            <div className="footer_newsletter text-sm max-w-240">
              <h4 className='dark:text-neutral-200'>Subscribe to our newsletter</h4>
              <p className='dark:text-royal-lightgray'>Stay updated on new features, guides, and case.</p>
              <SubscribeForm />
                  </div>

        
      </nav>
      <nav className="pt-8 border-t dark:border-royal-gray md:items-baseline sm:flex sm:items-center sm:justify-between">
    <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end leading-6 pb-4">
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

        <li>
            <Link href="/terms-of-service" className="text-gray-500 dark:text-royal-lightgray transition hover:text-gray-600 dark:hover:text-neutral-200">
              Надання послуг
            </Link>
          </li>

          <li>
            <Link href="/public-offer" className="text-gray-500 dark:text-royal-lightgray transition hover:text-gray-600 dark:hover:text-neutral-200">
              Публічна оферта
            </Link>
        </li>
      </ul>
      <p className="flex text-xs justify-center text-gray-500 dark:text-royal-lightgray leading-6">
      &copy; 2023 Kotec, Inc.
    </p>
    </nav>
  </div>
</div>
      </footer>
    );
  }
export default Footer;  