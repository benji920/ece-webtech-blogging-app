import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout.js";
import { supabase } from "../api/supabase";
import Gravatar from "react-gravatar";
import moment from "moment";
import { userAgent } from "next/server.js";
import UserContext from "../../components/UserContext";

export default function Article({ article }) {
  const { user, logout, loading } = useContext(UserContext);
  console.log(user);
  return (
    <Layout>
      <Head>
        <title>WebTech - {article.title}</title>
        <meta name="description" content="WebTech articles page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article class="p-6 bg-white rounded-lg border  flex flex-col border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
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

            {article.tag1}
            {article.tag2 ? "\xa0" + " | " + "\xa0" + article.tag2 : ""}

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
            </svg>
            {article.categorie1}
            {article.categorie2 ? " | " + article.categorie2 : ""}
          </span>
          <span class="text-sm">
            {moment(article.time, "YYYY-MM-DD hh:mm:ss").fromNow()}
          </span>
        </div>
        <h2 class="mb-2 mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {article.title}
        </h2>
        <p class="mb-5 font-light text-gray-500 dark:text-gray-400 whitespace-pre-line ">
          {article.content}
        </p>

        <div class="flex justify-between items-center ">
          <div class="flex items-center space-x-4 ">
            <Gravatar
              email={article.author}
              className="rounded-full border-2 bg-white"
              size={35}
            />
            <span class=" dark:text-white">{article.author}</span>
          </div>
          {user ? (
            user.email == article.author ? (
              <Link href={`/editarticles/` + article.article_id}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 inline-flex"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                <p className="inline-flex ml-1 "> Edit article</p>
              </Link>
            ) : (
              <> </>
            )
          ) : (
            <></>
          )}
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  let article = {};
  let { data, error, status } = await supabase
    .from("articles")
    .select()
    .eq("article_id", ctx.params.slug)
    .single();
  if (!error) article = data; // handle errors
  return {
    props: {
      article: article,
    },
  };
}

export async function getStaticPaths(ctx) {
  let articles = [];
  let { data, error, status } = await supabase.from("articles").select();
  if (!error) articles = data; // handle errors
  return {
    paths: articles.map((article) => `/articles/${article.article_id}`),
    fallback: false,
  };
}
