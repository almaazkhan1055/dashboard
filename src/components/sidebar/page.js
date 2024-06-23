"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  XMarkIcon,
  Cog6ToothIcon,
  TableCellsIcon,
  UserGroupIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import sfLogo from "../../../public/Images/sf_logo.jpg";
import dropdownIcon from "../../../public/svgs/dropdown-icon.svg";
import userImg from "../../../public/Images/user.avif";
import { useState } from "react";
import TableDropDown from "../tableDropdown/page";

const initialNavigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: false },
  { name: "Tables", href: "#", icon: TableCellsIcon, current: false },
  { name: "Users", href: "#", icon: UserGroupIcon, current: false },
  {
    name: "Conversations",
    href: "#",
    icon: ChatBubbleOvalLeftEllipsisIcon,
    current: false,
  },
  { name: "Settings", href: "#", icon: Cog6ToothIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [navigation, setNavigation] = useState(initialNavigation);
  const [tableTabOpen, setTableTabOpen] = useState(false);

  const clickHandler = (index) => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item, idx) => ({
        ...item,
        current: idx === index,
      }))
    );

    if (index === 1) {
      setTableTabOpen(!tableTabOpen);
    } else {
      setTableTabOpen(false);
    }
    console.log("tableTabOpen", tableTabOpen);
  };

  return (
    <div>
      <Dialog
        className="relative z-50 lg:hidden"
        open={sidebarOpen}
        onClose={setSidebarOpen}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button
                  type="button"
                  className="-m-2.5 p-2.5"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </TransitionChild>
            <div className="flex grow flex-col gap-y-4 bg-white px-6 pb-4">
              <div className="flex h-16 shrink-0 items-center">
                <h2 className="text-2xl font-semibold">Semiflat__</h2>
              </div>
              <div className="flex h-16 shrink-0 items-center justify-between border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center justify-center gap-2">
                  <Image alt="img" src={sfLogo} className="w-10 rounded-lg" />
                  <h3>Semiflat</h3>
                </div>
                <div>
                  <Image alt="img" src={dropdownIcon} className="w-5" />
                </div>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col items-start">
                  {navigation.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => clickHandler(index)}
                      className={classNames(
                        tableTabOpen && index === 1 ? "mb-[142px]" : ""
                      )}
                    >
                      <ul role="list" className="-mx-2 space-y-1">
                        <li>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-50 text-indigo-600"
                                : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                            )}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-indigo-600"
                                  : "text-gray-400 group-hover:text-indigo-600",
                                "h-6 w-6 shrink-0"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
                {tableTabOpen && <TableDropDown />}
              </nav>
              <div className="flex items-start gap-2 mt-auto">
                <div>
                  <Image src={userImg} className="w-8 rounded-lg" alt="" />
                </div>
                <div className="text-[12px]">
                  <p className="font-semibold">Tom Cook</p>
                  <p className="text-gray-400 font-medium">
                    tomcook@semiflat.com
                  </p>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <h2 className="text-3xl font-semibold">Semiflat__</h2>
          </div>
          <div className="flex h-16 shrink-0 items-center justify-between border border-gray-200 p-4 rounded-lg">
            <div className="flex items-center justify-center gap-2">
              <Image alt="img" src={sfLogo} className="w-10 rounded-lg" />
              <h3>Semiflat</h3>
            </div>
            <div>
              <Image alt="img" src={dropdownIcon} className="w-5" />
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col">
              {navigation.map((item, index) => (
                <li
                  key={index}
                  onClick={() => clickHandler(index)}
                  className={classNames(
                    tableTabOpen && index === 1 ? "mb-[136px]" : ""
                  )}
                >
                  <ul role="list" className="-mx-2 space-y-1">
                    <li>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-50 text-indigo-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-indigo-600"
                              : "text-gray-400 group-hover:text-indigo-600",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
            {tableTabOpen && <TableDropDown />}
          </nav>
          <div className="flex items-start gap-2 mt-auto">
            <div>
              <Image src={userImg} className="w-8 rounded-lg" alt="" />
            </div>
            <div className="text-[12px]">
              <p className="font-semibold">Tom Cook</p>
              <p className="text-gray-400 font-medium">tomcook@semiflat.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
