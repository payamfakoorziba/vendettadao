import React, { useState, Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const Navbar = () => {
  return (
    // <nav className="bg-neutral-900 p-6 sticky top-0 z-20 inset-x-0">
    //   <div className="flex items-center justify-between flex-wrap  max-w-screen-xl mx-auto">
    //     <div className="flex items-center flex-shrink-0 text-white mr-6">
    //       <img className="h-10" src="/vendettadaoLogo.png" alt="logo" />
    //       <span className="font-semibold text-xl tracking-tight">Vendetta DAO</span>
    //     </div>
    //     {/* Menu button */}
    //     <div className="block lg:hidden">
    //       <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
    //         <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //           <title>Menu</title>
    //           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    //         </svg>
    //       </button>
    //     </div>
    //     <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    //       <div className="text-base lg:flex-grow">
    //         <Link href="/">
    //           <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8">
    //             Home
    //           </a>
    //         </Link>
    //         <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8">
    //           DEX
    //         </a>
    //         <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8" href="https://chalkrivergeneralstore.nftify.network/">
    //           Store
    //         </a>
    //         <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8" href="">
    //           Docs
    //         </a>
    //         <Link href="/stinky">
    //           <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8">
    //             Social Media
    //           </a>
    //         </Link>
    //         <Link href="/contact">
    //           <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8">
    //             Contact
    //           </a>
    //         </Link>
    //       </div>
    //       <div>
    //         <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
    //           Download
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    <Popover as="header" className="relative z-10">
      <div className="bg-gray-900 pt-6">
        <nav
          className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between md:w-auto">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=200&to-color=cyan&to-shade=400&toShade=400"
                  alt=""
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:ml-10 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#" className="text-base font-medium text-white hover:text-gray-300">
              Log in
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700"
            >
              Start free trial
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden">
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=500&to-color=cyan&to-shade=600&toShade=600"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 px-5">
                <a
                  href="#"
                  className="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700"
                >
                  Start free trial
                </a>
              </div>
              <div className="mt-6 px-5">
                <p className="text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-gray-900 hover:underline">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>

  );
}

export default Navbar;