import React, { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

interface NavItem {
  name: React.ReactNode;
  href?: string;
  items?: NavItem[];
}

// useActiveElement hook
const useActiveElement = () => {
  const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // listen to any focus event

    const onFocus = (event: FocusEvent) => {
      setActiveElement(event.target as HTMLElement);
    }

    document.addEventListener("focus", onFocus, true);

    return () => {
      document.removeEventListener("focus", onFocus, true);
    }
  }, []);

  return activeElement;
}
  

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "DEX", href: "#" },
  { name: "Store", href: "#" },
  {
    name: "Docs",
    items: [
      {
        name: "Litepaper",
        href: "https://mcswyzzle-crypto-freedom.gitbook.io/vendettadao-lite-paper.2/general-overview/vendetta-ecosystem"
      },
      {
        name: "NFT Deck",
        href: "https://vendettadao.com/wp-content/uploads/2022/08/NFT-DECK.pdf"
      },
      {
        name: "Investment Proposal",
        href: "https://vendettadao.com/wp-content/uploads/2022/07/Vendetta-Investment-Deck-1-1.pdf"
      },
    ]
  },
  {
    name: "Social Media",
    items: [
      {
        name: <>Discord</>,
        href: "https://discord.gg/akjJeWYaty"
      },
      {
        name: <>Twitter</>,
        href: "https://twitter.com/VendettaDao"
      },
      {
        name: <>Telegram</>,
        href: "https://t.me/OfficialVendettaDao"
      }
    ]
  },
  { name: "Contact", href: "/contact" }
];

const NavElement = ({ item }: { item: NavItem }) => {
  const activeElement = useActiveElement();

  console.debug(activeElement)

  if (item.href) {
    const isExternal = item.href.startsWith("http");
    return (
      <Link href={item.href}>
        <a className="text-base
        font-medium
        text-white
        hover:text-neutral-300
        focus:outline-none
        focus:underline
        underline-offset-2
        focus:text-accent-200
        flex
        whitespace-nowrap
        items-center"
        {...(isExternal && { target: "_blank" })}
        >
          {item.name}
          {isExternal && <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1.5 opacity-80 flex-shrink-0" />}
        </a>
      </Link>
    );
  }

  if (item.items) {
    return (
      <div className="relative group">
        <button
          className="text-base font-medium text-white hover:text-neutral-300 flex items-center"
          data-nav={item.name}
        >
          {item.name}
          <ChevronDownIcon className="w-3.5 h-3.5 flex-shrink-0 ml-1 transition-all ease-in-out duration-200 group-hover:rotate-180 group-focus-within:rotate-180 " />
        </button>
        <div className="absolute top-full pt-1 hidden group-hover:block group-focus-within:block">
          <div className="bg-neutral-900 border rounded border-neutral-700 p-1">
            {item.items.map((subItem, i) => (
              <div key={i} className="px-3 py-1 rounded hover:bg-black/50 pr-6">
                <NavElement item={subItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const Navbar = () => {
  return (
    <Popover as="header" className=" z-20 sticky top-0">
      <div className="bg-neutral-900 p-4">
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex flex-1 items-center ">
            <div className="flex w-full items-center justify-between 2md:w-auto">
              {/* Logo */}
              <a href="#">
                <span className="sr-only">Vendettadao</span>
                <img className="h-10 w-auto sm:h-10" src="/vendettadaoLogo.png" alt="" />
              </a>
              {/* Button */}
              <div className="-mr-2 flex items-center 2md:hidden">
                <Popover.Button
                  className="focus-ring-inset
                    inline-flex
                    items-center
                    justify-center
                    rounded-md
                    bg-neutral-900
                    p-2
                    text-neutral-400
                    hover:bg-neutral-800
                    focus:outline-none
                    focus:ring-2
                    focus:ring-orange-700"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-7 xl:space-x-8 2md:ml-10 2md:flex">
              {navigation.map((item, i) => (
                <NavElement key={i} item={item} />
              ))}
            </div>
          </div>
          <div className="hidden 2md:flex 2md:items-center 2md:space-x-6">
            <a
              href="#"
              className="inline-flex
                  items-center
                  rounded-md
                  border
                  border-transparent
                  bg-orange-700
                  px-4
                  py-2
                  text-base
                  font-medium
                  text-neutral-100
                  hover:bg-orange-800"
            >
              Connect Wallet
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
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top transform p-2 transition 2md:hidden"
        >
          <div
            className="overflow-hidden
          rounded-lg
          bg-neutral-900
          shadow-md
          ring-1
          ring-black
          ring-opacity-5"
          >
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img className="h-8 w-auto" src="/vendettadaoLogo.png" alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button
                  className="inline-flex
                items-center
                justify-center
                rounded-md
                bg-neutral-700
                p-2
                text-white
                hover:bg-neutral-800
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-orange-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6 bg-neutral-900">
              <div className="space-y-1 px-2">
                {navigation.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-neutral-100 hover:bg-neutral-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 px-5">
                <a
                  href="#"
                  className="block
                  w-full
                  rounded-md
                  bg-orange-700
                  py-3
                  px-4
                  text-center
                  font-medium
                  text-neutral-100
                  shadow
                  hover:bg-orange-800"
                >
                  Start free trial
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
