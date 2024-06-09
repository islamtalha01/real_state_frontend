import { useLocation, Link } from "react-router-dom";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { classNames } from "../utilis/utilis";
import { navigation } from "../data/navigation";
import ReloadButton from "./ReloadButton";
import MyIcon from "../../public/MyIcon";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Static sidebar for mobile */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden m-9"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#2E2E2E] bg-opacity-50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-[#2E2E2E] rounded-lg shadow-lg shadow-black">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 bg-[#2E2E2E] rounded-full focus:outline-none"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pb-4 overflow-y-auto pt-3">
                {/* <span className="font-medium text-gray-400 text-sm px-2">Templates</span> */}

                <div className="flex items-center justify-between border-b border-[#f2f2f2] pb-3 duration-300 dark:border-[#484848]">
                  <div className="flex items-center">
                    <a className="group flex items-center p-2" href="/">
                      <img
                        alt="Devin"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-md text-transparent"
                        src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJmNnMwaGJMelpSdEY3cGwwaGlBbEliNFNYaCJ9?width=200"
                      />
                      <div className="flex w-full flex-1 items-center duration-300 opacity-100">
                        {/* <h1 className="relative ml-2 block w-fit text-xl font-bold leading-6 after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-black after:transition after:duration-200 after:content-[''] after:hover:scale-x-100 dark:text-white dark:after:bg-white">Real Estate Genius */}
                        {/* </h1> */}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      {/* Sidebar component, swap this element with another sidebar if you like */}

      <div className="hidden  justify-between md:flex md md:flex-col  md:inset-y-0 m-4">

        <div className="flex-1 flex flex-col w-fit-content min-h-0 bg-[#2E2E2E] rounded-lg shadow-lg shadow-black">
          <div className="flex items-center justify-between border-b border-[#f2f2f2] pb-3 duration-300 dark:border-[#484848]">
            <div className="flex items-center">
              <a className="group flex items-center p-2" href="/">
              <img
                        alt="Devin"
                        loading="lazy"
                        width="110"
                        height="110"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-md text-transparent"
                        src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJmNnMwaGJMelpSdEY3cGwwaGlBbEliNFNYaCJ9?width=200"
                      />
                {/* <MyIcon/> */}
                <div className="flex w-full flex-1 items-center duration-300 opacity-100"></div>
              </a>
            </div>
          </div>

        <div className="flex-1 flex flex-col pb-4 overflow-y-auto "></div>



        <div className="flex items-center justify-between  pb-3 duration-300">
            <div className="flex items-center">
            <ReloadButton styleProp={{ width: '35px', height: '35px' }}/>
            </div>
          </div>
          
        </div>
      </div>

      {/* Static header for mobile */}
      <div className="md:hidden fixed z-10 w-full bg-[#2E2E2E] border-b border-gray-700">
        <div className="flex">
          <button
            type="button"
            className="h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}
