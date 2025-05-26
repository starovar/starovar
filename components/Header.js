import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useTheme } from 'next-themes'

const products = [
  { name: 'Розливне пиво', description: 'Доступні різні обєми КЕГ-діжок на 20, 30 та 50 літрів.', href: '#', icon: BeakerIcon },
  { name: 'Пляшкове пиво', description: 'Кращі сорти пива представлені у скляній або ПЕТ тарі', href: '#', icon: BeakerIcon },
 // { name: 'Маркетинг', description: 'Сучасні маркетингові рішення від стратегії до втілення у життя', href: '#', icon: FingerPrintIcon },
 // { name: 'Управління веб-сайтами', description: 'Забезпечимо стабільність та безпеку вашого сайту.', href: '#', icon: SquaresPlusIcon },
 //{ name: 'Електронна комерція', description: 'Розробка та підтримка сучасних інтернет магазинів', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
const solutions =[
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
    icon: IconTwo,
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
    icon: IconThree,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white border-b dark:border-royal-gray dark:bg-black text-white dark:text-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2 lg:px-8 border-b border-gray-900/10" aria-label="Global">
        <div className="flex lg:flex-1 text-gray-600 dark:text-neutral-200 text-lg font-black">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <svg
            className="h-5 w-auto mr-2 logo dark:text-neutral-200"
            viewBox="0 0 197 197"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M175.27,197H52.11a9,9,0,0,1-6.37-15.36l61.59-61.59a9,9,0,0,1,12.72,0l61.59,61.59A9,9,0,0,1,175.27,197Z" fill=""/>
            <path d="M181.64,15.36,15.36,181.64A9,9,0,0,1,0,175.27V121.69a9,9,0,0,1,2.64-6.37L115.32,2.64A9,9,0,0,1,121.69,0h53.58A9,9,0,0,1,181.64,15.36Z" fill=""/>
          </svg>
          Kotec
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="items-baseline hidden lg:flex">
          <Popover className="relative">
          {({ open }) => (
          <>
            <Popover.Button className={`${open ? '' : 'text-opacity-90'} group inline-flex items-center transition duration-150 rounded-md bg-white dark:bg-black px-3 py-2 text-sm font-medium text-indigo-600 dark:hover:text-neutral-200 dark:text-neutral-200/60 hover:text-opacity-100 focus:outline-none`}>
              Ассортимент пива
              <ChevronDownIcon className={`${open ? '' : 'text-opacity-70 transition duration-150 rotate-180'}
                  ml-2 h-5 w-5 text-indigo-600 transition duration-150 dark:text-neutral-200/60 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-75 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-75 opacity-0"
            >
              <Popover.Panel className="absolute lg:max-w-3xl -left-44 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative -m-3 flex items-center gap-x-4 rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block text-sm font-medium text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-medium leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
            </>
          )}
          </Popover>

          {/* Popover 2 */}
          
          <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md bg-white dark:bg-black px-3 py-2 text-sm fonmedium dark:text-neutral-200/60 dark:hover:text-neutral-200 transition duration-150 text-indigo-600 hover:text-opacity-100 focus:outline-none`}
            >
              <span>НапоЇ</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70 rotate-180'}
                  ml-2 h-5 w-5 text-indigo-600 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition duration-150 ease-out"
              enterFrom="transform scale-75 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-100 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-75 opacity-0"
            >
              <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md -left-76 transform px-4 sm:px-0 lg:max-w-5xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-3">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4">
                    <Link
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Documentation
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                      </span>
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      {/* Popover 2 END*/}

          <Link href="#" className="px-3 py-2 text-sm font-medium dark:text-neutral-200/60 dark:hover:text-white transition duration-150 leading-6 text-gray-600">
            ПЕТ тара
          </Link>
          <Link href="#" className="px-3 py-2 text-sm font-medium dark:text-neutral-200/60 dark:hover:text-white transition duration-150 leading-6 text-gray-600">
            Устаткування
          </Link>
          <Link href="#" className="px-3 py-2 text-sm font-medium dark:text-neutral-200/60 dark:hover:text-white transition duration-150 leading-6 text-gray-600">
            Контакти
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="px-3 py-2 text-sm font-medium dark:text-neutral-200/60 dark:hover:text-white transition duration-150 leading-6 text-gray-600">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-3 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-300 text-2xl font-black">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <svg
            className="h-4 dark:text-neutral-200/80 w-auto mr-2 logo"
            viewBox="0 0 197 197"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M175.27,197H52.11a9,9,0,0,1-6.37-15.36l61.59-61.59a9,9,0,0,1,12.72,0l61.59,61.59A9,9,0,0,1,175.27,197Z" fill="none"/>
            <path d="M181.64,15.36,15.36,181.64A9,9,0,0,1,0,175.27V121.69a9,9,0,0,1,2.64-6.37L115.32,2.64A9,9,0,0,1,121.69,0h53.58A9,9,0,0,1,181.64,15.36Z" fill="none"/>
          </svg>
          Starovar
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-gray-900 text-base font-semibold leading-7 hover:bg-gray-50">
                        Ассортимент пива
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  НапоЇ
                </Link>
                <Link href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  ПЕТ тара
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Устаткування
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Контакти
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

// Popover two Icons
function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}