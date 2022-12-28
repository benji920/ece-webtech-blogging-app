import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { supabase } from "../pages/api/supabase";
import UserContext from "../components/UserContext";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownMenu({
  comment_id,
  comment_content,
  setdbUpdated,
  dbUpdated,
}) {
  const [message, setMessage] = useState(null);
  const { user, logout, loading } = useContext(UserContext);
  const supabase = useSupabaseClient();
  const deleteComment = async function () {
    console.log(comment_id);
    let { data, error, status } = await supabase
      .from("comments")

      .delete()

      .eq("id", comment_id)
      .single();
    setdbUpdated(!dbUpdated);
  };

  const onSubmit = async function (e) {
    e.preventDefault();
    const data = new FormData(e.target);
    let obj = Object.fromEntries(data);

    console.log(obj);

    const { error } = await supabase
      .from("comments")
      .update(obj, { returning: "minimal" })
      .eq("id", comment_id);
    setdbUpdated(!dbUpdated);
    setMessage(null);
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-mdbg-white px-1 py-0 text-sm font-medium text-gray-700  hover:bg-gray-50 dark:hover:bg-slate-900 focus:outline-none hover:rounded focus:ring-offset-gray-100">
            <svg
              class="w-5 h-5 fill-gray-500"
              aria-hidden="true"
              //fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
            {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
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
          <Menu.Items className="absolute right-0 z-10 mt-0 w-15 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item onClick={() => setMessage(true)}>
                {({ active }) => (
                  <p
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900 cursor-pointer"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Edit
                  </p>
                )}
              </Menu.Item>

              <Menu.Item onClick={deleteComment}>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {message && (
        <div
          aria-label="Overlow below the drawer dialog"
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          //On click, we execute the setMessaeg function
          role="dialog"
        >
          <div
            aria-label="Alert pane"
            className="max-h-[90vh] w-1/2 overflow-auto p-4 prose bg-white"
          >
            {message}
            <form class="mb-6" onSubmit={onSubmit}>
              <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label for="comment" class="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  defaultValue={comment_content}
                  name="content"
                  rows="4"
                  class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <button
                onClick={() => setMessage(null)}
                class="inline-flex mr-3 items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Post comment
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
