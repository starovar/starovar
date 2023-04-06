/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Example() {
  return (
    <div className="bg-indigo-600/5 border rounded-3xl relative isolate overflow-hidden dark:bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl text-gray-900 font-bold tracking-tight dark:text-white sm:text-4xl">Підпишіться на розсилку Kotec Labs.</h2>
            <p className="mt-4 text-gray-600 text-lg leading-8 dark:text-gray-300">
            Отримуйте цікаві статті, корисні поради та ексклюзивні пропозиції першими.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
              Електронна адреса
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white dark:bg-white/5 px-3.5 py-2 text-gray-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-900/20 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Введіть свій email"
              />
              <button
                type="submit"
                className="transition flex-none rounded-md border border-transparent bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Підписатися
              </button>
            </div>
            <div className="mt-4 inline-flex text-xs leading-6 text-gray-600">
            <label htmlFor="terms" className="flex pl-1.5">
             <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="form-checkbox inline-flex cursor-pointer h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
                 </label>
                 <p className="ml-2 text-xs text-gray-600 dark:text-white">
             Я розумію, що мої особисті дані оброблятимуться відповідно до 
             <span className="inline-block">
             <Link href="/privacy" className="ml-1 mr-1 underline">
              Політики конфіденційності
              </Link> 
              </span>
              Kotec Labs.
              </p>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-gray-900/5 dark:bg-white/5 p-2 ring-1 ring-gray-900/10 dark:ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-gray-900 dark:text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900 dark:text-white">Щотижневі статті</dt>
              <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
              Щотижня ми будемо ділитися з вами корисними статтями, проектами, ідеями, які спрямовані на покращення ефективності онлайн бізнесу.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-gray-900/5 dark:bg-white/5 p-2 ring-1 ring-gray-900/10 dark:ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-gray-900 dark:text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900 dark:text-white">Без спаму</dt>
              <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
              Ми поважаємо вашу приватність і не розсилаємо спам. На вашу пошту будуть надходити тільки цікаві та корисні матеріали.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] dark:bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
