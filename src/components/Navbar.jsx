import React, { useState, useRef } from "react";

// hooks.js
import { useEffect } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (ref?.current?.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const node = useRef();

  useOnClickOutside(node, () => setNav(false));

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shaldow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <Bars3Icon className="w-5 " />
          ) : (
            <XMarkIcon className="w-5" />
          )}
        </div>
      </div>

      <div
        ref={node}
        className="transition background-color  bg-indigo-600 transition-delay-150 duration-300 ease-in-out"
      >
        {nav ? (
          <ul className={"absolute bg-zinc-200 w-full px-8 "}>
            <li className="border-b-2 border-zinc-300 w-full transition-all">
              Home
            </li>
            <li className="border-b-2 border-zinc-300 w-full transition-all">
              About
            </li>
            <li className="border-b-2 border-zinc-300 w-full transition-all">
              Support
            </li>
            <li className="border-b-2 border-zinc-300 w-full transition-all">
              Platforms
            </li>
            <li className="border-b-2 border-zinc-300 w-full transition-all">
              Pricing
            </li>

            <div className="flex flex-col my-4">
              <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
                Sign In
              </button>
              <button className="px-8 py-3">Sign up</button>
            </div>
          </ul>
        ) : null}
      </div>
    </div>
  );
};
