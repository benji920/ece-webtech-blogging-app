import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout.js";
import { supabase } from "./api/supabase";
import React from "react";
import { useState, useContext, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Gravatar from "react-gravatar";
import moment from "moment";

export default function Articles() {
  const [contacts, setContacts] = useState([]);
  const supabase = useSupabaseClient();
  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase.from("articles").select();
      setContacts(data);
    })();
  }, [supabase]);
  let obj;
  //console.log(JSON.stringify(contacts));
  return (
    <Layout>
      <Head>
        <title>WebTech - articles</title>
        <meta name="description" content="WebTech articles page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="grid gap-8 lg:grid-cols-2 w-xl">
        {contacts.map((contact) => (
          <article
            key={contact.article_id}
            class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex justify-between items-center  text-gray-500">
              <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6z"
                  />
                </svg>

                {contact.tag1}
                {contact.tag2 ? "\xa0" + " | " + "\xa0" + contact.tag2 : ""}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mx-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                  />
                  {contact.categorie1}
                  {contact.categorie2 ? " | " + contact.tag2 : ""}
                </svg>
              </span>
              <span class="text-sm">
                {moment(contact.time, "YYYY-MM-DD hh:mm:ss").fromNow()}
              </span>
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {contact.title}
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400 max-w-xl line-clamp-2">
              {contact.content}
            </p>

            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <Gravatar
                  email={contact.author}
                  className="rounded-full border-2 bg-white"
                  size={35}
                />
                <span class=" dark:text-white">{contact.author}</span>
              </div>
              <a
                href={"/articles/" + contact.article_id}
                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read more
                <svg
                  class="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export function relativeDays(timestamp) {
  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const daysDifference = Math.round(
    (timestamp - new Date().getTime()) / oneDayInMs
  );

  return rtf.format(daysDifference, "day");
}
