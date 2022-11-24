import React, { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { ConnectButton } from "@rainbow-me/rainbowkit";


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
    };

    document.addEventListener("focus", onFocus, true);

    return () => {
      document.removeEventListener("focus", onFocus, true);
    };
  }, []);

  return activeElement;
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  // { name: "DEX", href: "#" },
  { name: "Store", href: "https://chalkrivergeneralstore.nftify.network/" },
  // {
  //   name: "Store",
  //   items: [
  //     {
  //       name: "NFT marketplace",
  //       href: "https://mcswyzzle-crypto-freedom.gitbook.io/vendettadao-lite-paper.2/general-overview/vendetta-ecosystem"
  //     },
  //     {
  //       name: "Merchandise",
  //       href: "https://vendettadao.com/wp-content/uploads/2022/08/NFT-DECK.pdf"
  //     },
  //   ]
  // },
  {
    name: "Docs",
    items: [
      {
        name: "Litepaper",
        href: "https://mcswyzzle-crypto-freedom.gitbook.io/vendettadao-lite-paper.2/general-overview/vendetta-ecosystem"
      },
      {
        name: "NFT Deck",
        href: "/NFT-DECK.pdf"
      },
      {
        name: "Investment Proposal",
        href: "/Vendetta-Investment-Deck-1-1.pdf"
      }
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

  if (item.href) {
    const isExternal = item.href.startsWith("http");
    return (
      <Popover.Button as={Fragment}>
        <Link href={item.href}>
          <a
            className="flex items-center text-base font-medium text-white hover:text-neutral-300 focus:outline-none focus:underline underline-offset-2 focus:text-accent-200 whitespace-nowrap"
            {...(isExternal && { target: "_blank" })}
          >
            {item.name}
            {/* {isExternal && <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1.5 opacity-80 flex-shrink-0" />} */}
          </a>
        </Link>
      </Popover.Button>
    );
  }

  if (item.items) {
    return (
      <div className="relative group">
        <button
          className="flex items-center text-base font-medium text-white hover:text-neutral-300"
          data-nav={item.name}
        >
          {item.name}
          <ChevronDownIcon className="w-3.5 h-3.5 flex-shrink-0 ml-1 transition-all ease-in-out duration-200 group-hover:rotate-180 group-focus-within:rotate-180 " />
        </button>
        <div className="absolute hidden pt-1 top-full group-hover:block group-focus-within:block">
          <div className="p-1 border rounded bg-neutral-900 border-neutral-700">
            {item.items.map((subItem, i) => (
              <div key={i} className="px-3 py-1 pr-6 rounded hover:bg-black/50">
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

const NavElementMobile = ({ item }: { item: NavItem }) => {
  const base =
    "block px-3 py-2 text-base font-medium rounded-md text-neutral-100 hover:bg-neutral-800";

  if (item.href) {
    const origin = typeof window === "undefined" ? "" : window?.location?.origin ?? "";
    const isExternal = item.href.startsWith("http") || new URL(item.href, origin).origin !== origin;

    return (
      <Link href={item.href}>
        <a {...(isExternal && { target: "_blank" })} className={"block"}>
          <Popover.Button className={`${base} w-full text-left`}>
            {/* <a className={base} {...(isExternal && { target: "_blank" })}> */}
            {item.name}
            {/* </a> */}
          </Popover.Button>
        </a>
      </Link>
    );
  }

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={`${base} flex items-center w-full justify-between`}>
            {item.name}
            <ChevronDownIcon
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 ml-2 -mr-1 transition-transform duration-200`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-2 pt-2 pb-3 space-y-1">
            {item.items?.map((subItem, i) => (
              <NavElementMobile key={i} item={subItem} />
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const Navbar = () => {
  return (
    <Popover as="header" className="sticky top-0 z-20 ">
      <div className="p-4 bg-neutral-900">
        <nav className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6">
          <div className="flex items-center flex-1 ">
            <div className="flex items-center justify-between w-full 2md:w-auto">
              {/* Logo */}
              <a href="#">
                <span className="sr-only">Vendettadao</span>
                <img className="w-auto h-10 sm:h-10" src="/vendettadaoLogo.png" alt="" />
              </a>
              {/* Button */}
              <div className="flex items-center -mr-2 2md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md focus-ring-inset bg-neutral-900 text-neutral-400 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-orange-700">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="w-6 h-6" aria-hidden="true" />
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
            {/* <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-base font-medium bg-orange-700 border border-transparent rounded-md text-neutral-100 hover:bg-orange-800"
            >
              Connect Wallet
            </a> */}
            <ConnectButton />
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
          className="absolute inset-x-0 top-0 p-2 transition origin-top transform 2md:hidden"
        >
          <div className="overflow-hidden rounded-lg shadow-md bg-neutral-900 ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img className="w-auto h-8" src="/vendettadaoLogo.png" alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-white rounded-md bg-neutral-700 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-700">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6 bg-neutral-900">
              <div className="px-2 space-y-1">
                {navigation.map((item, i) => (
                  <NavElementMobile key={i} item={item} />
                  // <a
                  //   key={i}
                  //   href={item.href}
                  //   className="block px-3 py-2 text-base font-medium rounded-md text-neutral-100 hover:bg-neutral-800"
                  // >
                  //   {item.name}
                  // </a>
                ))}
              </div>
              <div className="px-5 mt-6">
                <a
                  href="#"
                  className="block w-full px-4 py-3 font-medium text-center bg-orange-700 rounded-md shadow text-neutral-100 hover:bg-orange-800"
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
