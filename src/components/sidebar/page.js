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

// const rocketEmoji = String.fromCodePoint(0x1f680);
// const brainEmoji = String.fromCodePoint(0x1f9e0);
// const trophyEmoji = String.fromCodePoint(0x1f3c6)
const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
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

// const teams = [
//   { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
//   { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
//   { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
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
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
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
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
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
                      ))}
                    </ul>
                  </li>
                  <li className="mt-auto">
                    <a
                      href="#"
                      className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <Cog6ToothIcon
                        className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                      Settings
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
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
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
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
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <div className="flex items-center justify-evenly">
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
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
