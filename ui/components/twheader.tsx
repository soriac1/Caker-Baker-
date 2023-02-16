import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from "next/link"
import { CakeIcon } from '@heroicons/react/24/solid'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from "react"


  export default function TWHeader() {
    const session = useSession()
    const supabase = useSupabaseClient()


    const navigation = [
        { name: 'Home', href: '/' },
      ]

    return (
      <header className="bg-gray-900">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
            <div className="flex items-center">
              <Link href="/">
                    <CakeIcon className="h-6 w-6 text-white"/>
                    <span className="sr-only">CakerBaker</span>
              </Link>
              <div className="ml-10 hidden space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
            {!session && (
              <Link
                href={`/login`}
                className="inline-block rounded-md border border-transparent bg-purple-900 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign in
              </Link>
              )}
              {session?.user && (
              <Menu>
              <Menu.Button>
              
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-500">
                    <span className="text-lg font-medium leading-none text-white">TW</span>
                </span>
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                    <Menu.Item>
                        <a
                        href={`/api/auth/signout`}
                        onClick={(e) => {
                            e.preventDefault()
                            supabase.auth.signOut()
                          }}
                        className="ui-active:bg-gray-100 ui-active:text-gray-900 text-gray-700 block px-4 py-2 text-sm">
                            Logout
                        </a>
                    </Menu.Item>
                    </div>
                </Menu.Items>
                </Transition>
              </Menu>
              )}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }