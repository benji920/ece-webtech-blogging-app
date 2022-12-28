import { useState, useContext, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "../api/supabase";
import Head from "next/head";
import UserContext from "../../components/UserContext";
import Layout from "../../components/Layout.js";
import Link from "next/link";

export default function Article({ article }) {
  const { user, logout, loading } = useContext(UserContext);
  const supabase = useSupabaseClient();
  const [message, setMessage] = useState(null);
  const [button, setButton] = useState();
  const onSubmit = async function (e) {
    e.preventDefault();
    const result = new FormData(e.target);
    let obj = Object.fromEntries(result); //obj cntains all the informations of the inputs inside the form
    user ? ((obj.id = user.id), (obj.author = user.email)) : <></>;
    button ? (obj.posted = true) : (obj.posted = false);
    console.log(obj);

    const { data, error, statusText } = await supabase //handle error
      .from("articles")
      .update({
        title: obj.title,
        content: obj.content,
        categorie1: obj.categorie1,
        categorie2: obj.categorie2,
        tag1: obj.tag1,
        tag2: obj.tag2,
        posted: obj.posted,
      })
      .eq("article_id", article.article_id)
      .single();

    console.log("data: " + data);
    console.log("error: " + error);

    if (error == null) {
      //handle error and RLS
      setMessage(
        <div className="text-center">
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>Your article has been updated</p>
          <Link href="/articles">Go back to the articles</Link>
        </div>
      );
    } else {
      setMessage("You cannot update this article");
    }
  };
  return (
    <Layout>
      <Head>
        <title>WebTech - {article.title}</title>
        <meta name="description" content="WebTech articles page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="wt-title">Edit an article</h1>

      <div className="flex items-center justify-center h-screen">
        <form
          className="w-full max-w-sm h-screen palce-items-center"
          onSubmit={onSubmit}
        >
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Title
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                type="text"
                name="title"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-color500"
                defaultValue={article.title}
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Article
              </label>
            </div>
            <div class="md:w-2/3">
              <textarea
                type="text"
                name="content"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-color500"
                defaultValue={article.content}
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                First categorie
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                type="text"
                name="categorie1"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-color500"
                defaultValue={article.categorie1}
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Second categorie
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                type="text"
                name="categorie2"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-color500"
                defaultValue={article.categorie2}
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                First tag
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                type="text"
                name="tag1"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-color500"
                defaultValue={article.tag1}
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Second tag
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                type="text"
                name="tag2"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-color500"
                defaultValue={article.tag2}
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <div className="flex">
                <span className="inline-flex ">
                  <button
                    name="btn1"
                    onClick={() => setButton(false)}
                    className=" rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500"
                  >
                    Save
                  </button>
                </span>
                <span className="inline-flex ml-10">
                  <button
                    name="btn2"
                    onClick={() => setButton(true)}
                    className=" rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500"
                  >
                    Publish
                  </button>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>

      {message && (
        <div
          aria-label="Overlow below the drawer dialog"
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setMessage(null)} //On click, we execute the setMessaeg function
          role="dialog"
        >
          <div
            aria-label="Alert pane"
            className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
          >
            {message}
          </div>
        </div>
      )}
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
    paths: articles.map((article) => `/editarticles/${article.article_id}`),
    fallback: false,
  };
}
