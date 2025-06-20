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
import { IoBeer, IoDocumentAttachOutline } from 'react-icons/io5'
import { FaWineBottle } from 'react-icons/fa'


const products = [
  { name: 'Розливне пиво', description: 'Доступні різні обєми КЕГ-діжок на 20, 30 та 50 літрів.', href: '#', icon: IoBeer },
  { name: 'Пляшкове пиво', description: 'Кращі сорти пива представлені у скляній або ПЕТ тарі', href: '#', icon: FaWineBottle },
 // { name: 'Маркетинг', description: 'Сучасні маркетингові рішення від стратегії до втілення у життя', href: '#', icon: FingerPrintIcon },
 // { name: 'Управління веб-сайтами', description: 'Забезпечимо стабільність та безпеку вашого сайту.', href: '#', icon: SquaresPlusIcon },
 //{ name: 'Електронна комерція', description: 'Розробка та підтримка сучасних інтернет магазинів', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Сертифікати', href: '#', icon: IoDocumentAttachOutline },
  { name: 'Контакти', href: '#', icon: PhoneIcon },
]
const solutions =[
  {
    name: 'Розливні напої',
    description: 'Яблучний сидр, мохіто, квас і лимонад оптом в КЕГах',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Пляшкові напої',
    description: 'Слабоалкогольні і безалкогольні напої у склі оптом',
    href: '##',
    icon: IconTwo,
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
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-4 lg:px-8 border-b border-gray-900/10" aria-label="Global">
        <div className="flex lg:flex-1 text-gray-600 dark:text-neutral-200 text-lg font-black">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <svg
  className="w-36 h-auto mr-2"
  viewBox="20 50 360 220"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  xmlns="http://www.w3.org/2000/svg">
  
  <path className="draw-path" d="M372.54,60.56c4.34,3.19-1,26.7-5.75,25.55S360,83,357.85,87.26s-3.07,60.29-3.07,60.29,10.22,3.45,7.29,9.07-23.38,12.43-27.34,11.13,2.55-11.13,3.83-15.47,1.92-65,1.92-65-5.11-3.71,0-9.46S355,66.05,355.93,67.46s2.17,7.14,2.17,7.14S368.2,57.36,372.54,60.56Z"/>
  <path className="draw-path" d="M331,156.46c2.05,1.79,2.3,10.22-6.38,14s-12.26,1.79-12.26,1.79-13.81,14.31-22,6.13-4.09-36.79-1.27-45.16S315,103.57,315,103.57s3.2-12.51-1.4-12.77-5.62,7.66-9.19,12.77-9.71,6.65-10.22-4.08,21.2-27.34,31.67-20.44,5.88,33.72,3.84,52.63S331,156.46,331,156.46Zm-25.29,7.92c5.88-.26,7.41-7.92,7.16-17.38s0-27.07,0-27.07-10,6.38-10,22.74-3.08,22,2.79,21.71Z"/>
  <path className="draw-path" d="M286.5,88.24c8.18.26,5.11,5.88,4.34,8.69s-17.63,76.14-19.16,82.27-7.66,13-12.26,10.22-15.59-74.35-16.32-83,19.64-14.06,23-10.74-1.35,5.63-2.37,17.49,4.86,34.89,4.86,34.89c3.83-1.79,10.47-28.61,11-37.81s-2.81-6.9-6.13-10.73S278.32,88,286.5,88.24Z"/>
  <path className="draw-path" d="M235.41,109c6.05,5.51,8.62,17,7.4,47.47-2,51.1-34,55.19-42.67,46.5-13.4-13.41-5.29-68.62,4.35-83.8,5.9-9.3,13.77-12.38,19-13.37A13.78,13.78,0,0,1,235.41,109Zm-10.35,19c.17-3,.12-8.9-2.94-9.09-4.09-.26-7.67,6.9-8.44,15.59s-2.3,43.94-2.3,43.94S211.13,193,216,194s7.41-14.31,7.92-21.72c.42-6.06.84-30.76,1-39.54C224.9,131.16,225,129.58,225.06,128Z"/>
  <path className="draw-path" d="M196.31,113.54c4.34,3.19-1,26.69-5.75,25.54s-6.76-3.06-8.94,1.15-3.07,60.3-3.07,60.3,10.22,3.45,7.29,9.07S162.46,222,158.5,220.73s2.56-11.13,3.83-15.47,1.92-65,1.92-65-5.11-3.7,0-9.45,14.56-11.75,15.45-10.34,2.18,7.14,2.18,7.14S192,110.35,196.31,113.54Z"/>
  <path className="draw-path" d="M83.9,200.15c1,25.8-4.6,40.4-15.59,51.11s-24,20.93-34.75,12.51C24,256.25,31,243,41.14,237.05a2.65,2.65,0,0,1,3.64.94,2.72,2.72,0,0,1,.36,1.14c.44,5.17,2.12,13.49,8.54,12,9.2-2.22,19.93-26.4,8.69-41.56s-29.3-32.88-25-58.43,28.36-43.94,42.92-32.45-9.71,26.58-10.73,22.23c-.56-2.39-1.43-5.47-2.1-7.75a3.3,3.3,0,0,0-4.06-2.29,2.74,2.74,0,0,0-.4.15c-4,1.84-9.6,6.42-6.17,17.26C61.92,164.38,82.87,174.34,83.9,200.15Z"/>
  <path className="draw-path" d="M113.28,147.18c1,1.36,1.36,8.18-7,12.09,0,0-4.76,66.77-3.23,69.66s5.79-5.45,7.49,1.88-21.92,23.29-23,11.92c-1.24-13.11,2.72-54.51,2-78.35,0,0-6.47,1.54-5.62-2.39s21.46-34.91,23.34-34.4,0,20.78,0,20.78S112.26,145.82,113.28,147.18Z"/>
  <path className="draw-path" d="M154.7,212c1.83,6.21,1.25,10-6,14.38-5.28,3.2-9.33,2.94-11.39,2.44a3,3,0,0,0-2.77.83c-6.12,6.13-14.79,9.06-19.56,4.65-5.11-4.73-4.73-27.21-1.79-42s26.57-31.42,26.57-31.42c-.25-4.1,1.66-14.32-4.21-13S131,157.35,127.2,162s-6.9-1.29-6.9-1.29c-5.23-8.68,1.92-17.75,11.63-24s18.91-3.58,22.36,5.87c3.12,8.57.58,57.45.08,66.61A8.33,8.33,0,0,0,154.7,212Zm-17-2.1c.77-5.37,0-34.24,0-34.24s-7.15,3.83-9.19,14.82-3.45,29.89.89,30.28,7.51-5.51,8.27-10.87Z"/>

</svg>
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
            <Popover.Button className={`${open ? '' : ''} group inline-flex items-center transition duration-150 rounded-md bg-white dark:bg-black px-3 py-2 text-base font-medium text-indigo-600 dark:hover:text-zinc-100 dark:text-zinc-300 focus:outline-none`}>
              Ассортимент пива
              <ChevronDownIcon className={`${open ? '' : 'transition duration-150 rotate-180'}
                  ml-2 h-5 w-5 text-indigo-600 transition duration-150 dark:text-zinc-300 ease-in-out group-hover:text-zinc-100`}
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
              <Popover.Panel className="absolute lg:max-w-3xl -left-44 top-3/4 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg shadow-2xl shadow-orange-500/15 ring-1 ring-white ring-opacity-20">
                <div className="relative grid gap-8 bg-black p-7 lg:grid-cols-2">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative -m-3 flex items-center gap-x-4 rounded-lg p-2 transition duration-150 ease-in-out hover:bg-zinc-800"
                    >
                      <div className="flex h-16 w-16 flex-none items-center justify-center rounded-lg bg-amber-700">
                        <item.icon className="h-8 w-8 text-gray-300 group-hover:text-gray-100" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className=" group-hover:text-zinc-100 block text-base font-medium text-zinc-300">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className=" group-hover:text-zinc-400 mt-1 text-sm text-zinc-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="group grid grid-cols-2 divide-x divide-gray-900/25 border-t dark:border-royal-gray/50 bg-black">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center transition duration-150 ease-in-out justify-center gap-x-2.5 p-3 text-sm font-medium leading-6 text-zinc-600 hover:text-zinc-500"
                    >
                      <item.icon className="h-5 w-5 flex-none text-zinc-600" aria-hidden="true" />
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
                ${open ? 'dark:text-amber-600' : ' text-opacity-90'}
                group inline-flex items-center rounded-md bg-white dark:bg-black px-3 py-2 text-base font-medium dark:text-zinc-300 dark:hover:text-zinc-200 transition duration-150 text-indigo-600 hover:text-opacity-100 focus:outline-none`}
            >
              <span>НапоЇ</span>
              <ChevronDownIcon
                className={`${open ? 'dark:text-amber-600' : 'text-opacity-70 rotate-180'}
                  ml-2 h-5 w-5 text-indigo-600 transition duration-150 dark:text-zinc-300 ease-in-out group-hover:text-zinc-200`}
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
              <Popover.Panel className="absolute z-10 top-3/4 mt-3 w-screen max-w-md -left-76 rounded-lg transform px-4 sm:px-0 lg:max-w-3xl shadow-2xl shadow-orange-500/15 ring-1 ring-white ring-opacity-20">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white dark:bg-black p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-zinc-800 focus:outline-none"
                      >
                        <div className="flex h-16 w-16 flex-none shrink-0 items-center justify-center text-white">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="group-hover:text-zinc-100 text-base font-medium text-zinc-300">
                            {item.name}
                          </p>
                          <p className="group-hover:text-zinc-400 text-sm text-zinc-500">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-black p-4">
                    <Link
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-zinc-400">
                          Документація
                        </span>
                      </span>
                      <span className="block text-sm text-zinc-500">
                        Почніть працювати з нами
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

          <Link href="#" className="px-3 py-2 text-base font-medium dark:text-neutral-200/60 dark:hover:text-white transition duration-150 leading-6 text-gray-600">
            ПЕТ тара
          </Link>
          <Link href="#" className="px-3 py-2 text-base font-medium dark:text-neutral-200/60 dark:hover:text-white transition duration-150 leading-6 text-gray-600">
            Устаткування
          </Link>
          <Link href="#" className="px-3 py-2 text-base font-medium dark:text-neutral-200/60 dark:hover:text-white transition duration-150 leading-6 text-gray-600">
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