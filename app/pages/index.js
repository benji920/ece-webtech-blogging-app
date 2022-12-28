import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout.js";
import React from "react";
import { useRouter } from "next/router.js";
import { useState, useContext, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Gravatar from "react-gravatar";
import moment from "moment";
import UserContext from "../components/UserContext.js";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const supabase = useSupabaseClient();
  const router = useRouter();
  const { user, logout, loading } = useContext(UserContext);
  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from("articles")
        .select()
        .eq("posted", "true")
        .limit(3)
        .order("time", { ascending: false });
      setContacts(data);
    })();
  }, [supabase]);
  return (
    <Layout>
      <Head>
        <title>WebTech</title>
        <meta
          name="description"
          content="Web technologies blogging application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl text-center mb-6">Welcome to ITech website!</h1>

      <p className="text-center mb-5">
        This website contains the best tech article on the web.{" "}
      </p>
      {user ? (
        <>
          <p className="text-center mb-8">
            {" "}
            <a
              className="cursor-pointer underline underline-offset-2 "
              onClick={() => router.push("/sendarticles")}
            >
              Publish
            </a>{" "}
            an article now !
          </p>
        </>
      ) : (
        <div>
          <p className="text-center mb-8">
            {" "}
            You must{" "}
            <a
              className="cursor-pointer underline underline-offset-2 "
              onClick={() => router.push("/login")}
            >
              sign in
            </a>{" "}
            to publish articles
          </p>
        </div>
      )}

      <p className="text-2xl text-center mb-5 p-2 border-b-2">
        Latest articles
      </p>

      <div class="grid gap-8 lg:grid-cols-1 w-xl">
        {contacts.map((contact) => (
          <article
            key={contact.article_id}
            class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex justify-between items-center  text-gray-500">
              <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 text-color500">
                {contact.tag1 || contact.tag2 ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-2"
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
                    <div className="mr-4"></div>
                  </>
                ) : (
                  <></>
                )}
                {contact.categorie1 || contact.categorie2 ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5  mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                    {contact.categorie1}
                    {contact.categorie2 ? " | " + contact.categorie2 : ""}
                  </>
                ) : (
                  <></>
                )}
              </span>
              <span class="text-sm">
                {" "}
                {moment(contact.time).format("DD/MM/YYYY")}
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
                  className="rounded-full border-slate-800 border-color500  border-2 bg-white"
                  size={35}
                />
                <span class=" truncate dark:text-white">{contact.author}</span>
              </div>

              <Link href={`/articles/` + contact.article_id} className="">
                Read more
                <svg
                  class="ml-2 w-4 h-4 inline-flex"
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
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
}
