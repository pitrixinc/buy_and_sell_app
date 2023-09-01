"use client";

import { signOut, signIn } from "next-auth/react";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DiamondIcon from "@mui/icons-material/Diamond";
import ViewListIcon from "@mui/icons-material/ViewList";

import { useRouter, redirect, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  // Get the params of the User
  const pathname = usePathname();

  // Help check if the user is logged in and help redirect if they are not
  const session: any = useSession<any | null | undefined>();

  console.log(session);

  return (
    <>
    <div className="flex py-1 space-x-3 mx-auto max-w-6xl">
      <div className="flex-1 my-auto">
        <img
          src="/logo.jpeg"
          alt="Logo"
          onClick={() => router.push("/")}
          className="w-8 ml-5 hover:cursor-pointer"
        />
      </div>

      <div
        className=" p-[5px] rounded-full bg-white tooltip tooltip-bottom hidden md:block lg:block"
        data-tip="Bookmark"
      >
        <BookmarkIcon />
      </div>
      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom hidden md:block lg:block"
        data-tip="Messages"
      >
        <MessageIcon />
      </div>

      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom"
        data-tip="Notifications"
      >
        <NotificationsIcon />
      </div>

      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom hidden md:block lg:block"
        data-tip="Premium Services"
      >
        <DiamondIcon />
      </div>

      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom hover:cursor-pointer"
        data-tip="My Adverts"
        onClick={() => router.push(`/myadverts/${session.data?.user.email}`)}
      >
        <ViewListIcon />
      </div>

      <div className="dropdown dropdown-hover my-auto dropdown-bottom dropdown-end hidden md:block lg:block">
        <img
          src={session.data?.user.image || "/logo.jpeg"}
          className="rounded-full w-8"
          alt="logo"
        />
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu shadow bg-base-100 rounded-sm w-40"
        >
          <li>
            <a>My Shop</a>
          </li>
          <li>
            <a>My clients</a>
          </li>
          <li>
            <a>Feedback</a>
          </li>
          <li>
            <a>Performance</a>
          </li>
          <li className="">
            <a>My Balance</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            {session.data && <button onClick={() => signOut()}>Log out</button>}
            {!session.data && <button onClick={() => signIn()}>Sign In</button>}
          </li>
        </ul>
      </div>

      <button
        onClick={() => router.push("/create")}
        className="btn btn-warning btn-sm my-auto mr-10 hidden md:block lg:block"
      >
        Sell
      </button>
    </div>




<div className="fixed md:hidden lg:hidden z-50 w-full h-16 max-w-[320px] -translate-x-1/2 items-center justify-center bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group"  onClick={() => router.push("/")}>
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            <span className="sr-only">Home</span>
        </button>
        <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"/>
                <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"/>
            </svg>
            <span className="sr-only">Wallet</span>
        </button>
        <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Wallet
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div className="flex items-center justify-center">
            <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-green-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800" onClick={() => router.push("/create")}>
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                </svg>
                <span className="sr-only">New item</span>
            </button>
        </div>
        <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Create new item
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" onClick={() => router.push(`/myadverts/${session.data?.user.email}`)}>
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
            </svg>
            <span className="sr-only">Settings</span>
        </button>
        <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Settings
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <img
          src={session.data?.user.image || "/logo.jpeg"}
          className="rounded-full w-8"
          alt="logo"
        />
            <span className="sr-only">Profile</span>
        </button>
        <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Profile
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>


    </>
  );
}
