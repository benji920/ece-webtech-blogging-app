import Link from "next/link";
import Image from "next/image";
import Login from "./Login";
import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";
import React from "react";
import Switch from "./Switch";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Header() {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
  //const { theme, setTheme } = useThemeContext();
  return (
    <header className="flex text-2xl space-x-4 bg-slate-200 dark:bg-slate-800 px-15 py-5">
      <Link
        href={`/`}
        className="flex-grow   dark:text-white stroke-black fill-black dark:stroke-white py-0 pl-5 flex items-center rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler fill-white icon-tabler-3d-cube-sphere"
          width="55"
          height="55"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          // stroke="#000000"
          // fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 17.6l-2 -1.1v-2.5" />
          <path d="M4 10v-2.5l2 -1.1" />
          <path d="M10 4.1l2 -1.1l2 1.1" />
          <path d="M18 6.4l2 1.1v2.5" />
          <path d="M20 14v2.5l-2 1.12" />
          <path d="M14 19.9l-2 1.1l-2 -1.1" />
          <line x1="12" y1="12" x2="14" y2="10.9" />
          <line x1="18" y1="8.6" x2="20" y2="7.5" />
          <line x1="12" y1="12" x2="12" y2="14.5" />
          <line x1="12" y1="18.5" x2="12" y2="21" />
          <path d="M12 12l-2 -1.12" />
          <line x1="6" y1="8.6" x2="4" y2="7.5" />
        </svg>{" "}
        ITech
        {/* <span className="rounded py-1 px-2 text-color800 hover:bg-color400 hover:text-color900 dark:text-color100">
        Web technologies
      </span> */}
      </Link>
      <ul className="flex justify-left text-2xl items-center w-screen">
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100 dark:text-white">
          {" "}
          <Link href="/articles">Articles</Link>{" "}
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100 dark:text-white">
          <Link href="/sendarticles">Publish</Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100 dark:text-white">
          <Link href="/contact">Contact us</Link>
        </li>
      </ul>
      <ul className="flex justify-right space-x-4 items-center text-2xl px-5">
        <li className="rounded  hover:font-medium dark:text-color200">
          <Login />
        </li>
        <li>
          <Switch isOn={darkMode} handleToggle={toggleDarkMode} />
        </li>
        <li className=" ">
          <ThemeSwitcher className="mt-12" />
        </li>
      </ul>
    </header>
  );
}
