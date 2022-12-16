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
    <header className="flex bg-slate-200 dark:bg-slate-800 px-10 py-2">
      <Link href={`/`} className="flex-grow flex items-center">
        <Image
          src="/adaltas.svg"
          className="cursor-pointer h-6 mr-5"
          alt="Adaltas Logo"
          width={25}
          height={25}
        />
        <span className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100 dark:text-white">
          Web technologies
        </span>
      </Link>
      <ul className="flex gap-5">
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100 dark:text-white">
          {" "}
          <Link href="/articles">Articles</Link>{" "}
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100 dark:text-white">
          <Link href="/about">About us</Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100 dark:text-white">
          <Link href="/contact">Contact us</Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100 dark:text-white">
          <Login />
        </li>
        <li>
          <div>
            <Switch isOn={darkMode} handleToggle={toggleDarkMode} />
          </div>
        </li>
      </ul>
    </header>
  );
}
