import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-neutral-900 p-6 sticky top-0 z-20 inset-x-0">
      <div className="flex items-center justify-between flex-wrap  max-w-screen-xl mx-auto">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="h-10" src="/vendettadaoLogo.png" alt="logo" />
          <span className="font-semibold text-xl tracking-tight">Vendetta DAO</span>
        </div>
        {/* Menu button */}
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-base lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8">
              Home
            </a>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8">
              DEX
            </a>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8">
              Store
            </a>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8">
              Docs
            </a>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8">
              Social Media
            </a>
            <Link href="/about">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8">
                Contact
              </a>
            </Link>
          </div>
          <div>
            <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
              Download
            </a>
          </div>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;