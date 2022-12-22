import Link from "next/link";
import Image from "next/image";
import Login from "./Login";
import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";
import React from "react";
import Switch from "./Switch";

export default function Header() {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
  return (
    <header className="flex space-x-4 bg-color300 dark:bg-color900 px-15 py-5">
      <Link href={`/`} className="flex-grow py-1 px-5 flex items-center rounded">
        <Image
          src="/logo3.png"
          className="cursor-pointer"
          alt="Adaltas Logo"
          width={300}
          height={100}
        />
        {/* <span className="rounded py-1 px-2 text-color800 hover:bg-color400 hover:text-color900 dark:text-color100">
        Web technologies
      </span> */}
      </Link>
      <ul className="flex justify-left text-2xl items-center w-screen">
        <li className="rounded py-1 px-5 text-color800 hover:bg-color400 hover:text-color900 hover:font-medium  dark:text-color200">
          {" "}
          <Link href="/articles">Articles</Link>{" "}
        </li>
        <li className="rounded py-1 px-5 text-color900 hover:bg-color50 hover:text-color900 hover:font-medium dark:text-color200">
          <Link href="/about">About us</Link>
        </li>
        <li className="rounded py-1 px-5 text-color800 hover:bg-color400 hover:text-color900 hover:font-medium dark:text-color200">
          <Link href="/contact">Contact us</Link>
        </li>
      </ul>
      <ul className="flex justify-right space-x-4 items-center text-2xl px-5">
        <li className="rounded text-color800 hover:bg-color400 hover:text-color900 hover:font-medium dark:text-color200">
          <Login />
        </li>
        <div className="flex justify-right space-x-4 items-center px-5">
          <Switch isOn={darkMode} handleToggle={toggleDarkMode} />
        </div>
      </ul>
    </header>
  );
}
