"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function MainHeader() {
  // TODO make a hamburger menu
  const [isOpen, setIsOpen] = useState(false);

  function hamburgerMenuHandler() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <header className="bg-white  ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between ">
          <div className="md:flex md:items-center md:gap-12 overflow-hidden">
            <Link className="block" href="/">
              <span className="sr-only">Home</span>
              <Image src="/logo.svg" width={70} height={70} alt="logo" />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Upload book
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md  bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-blue-500"
                href="/files"
              >
                GET STARTED
              </Link>
            </div>

            <div className="block md:hidden">
              <button
                onClick={hamburgerMenuHandler}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
