import { useThemeContext } from "../hooks/useTheme";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ThemeSwitcher = ({ className }) => {
  const { theme, setTheme } = useThemeContext();
  console.log("theme: " + theme);
  return (
    <div>
      <Menu as="div" className="relative inline-block text-center">
        <div>
          <Menu.Button className="inline-flex py-2 px-2 w-15  justify-center stroke-color800 fill-color800 rounded-mdbg-white  text-sm font-medium text-gray-700   focus:outline-none hover:rounded focus:ring-offset-gray-100">
            <div className="rounded w-6 h-6 content-center bg-color800 border-2 border-color800 "></div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-0 w-15 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item onClick={() => setTheme(null)}>
                {({ active }) => (
                  <p
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900 cursor-pointer"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    <div className="rounded w-6 h-6 content-center bg-color-white border-2 border-slate-800"></div>
                  </p>
                )}
              </Menu.Item>

              <Menu.Item onClick={() => setTheme("cranberry")}>
                {({ active }) => (
                  <p
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900 cursor-pointer"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    <div className="rounded w-6 h-6 content-center bg-rose-800 border-2 border-rose-800 "></div>
                  </p>
                )}
              </Menu.Item>
              <Menu.Item onClick={() => setTheme("wisteria")}>
                {({ active }) => (
                  <p
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900 cursor-pointer"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    <div className="rounded w-6 h-6 content-center bg-purple-800 border-2 border-purple-800 "></div>
                  </p>
                )}
              </Menu.Item>
              <Menu.Item onClick={() => setTheme("malibu")}>
                {({ active }) => (
                  <p
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900 cursor-pointer"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    <div className="rounded w-6 h-6 content-center bg-cyan-800 border-2 border-cyan-800 "></div>
                  </p>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ThemeSwitcher;
