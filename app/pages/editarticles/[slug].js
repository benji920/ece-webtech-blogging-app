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
      <form className="[&_span]:block grid gap-3" onSubmit={onSubmit}>
        <div>
          {/* <label>
            <span>Content</span>
            <input type="text" name="content" className="h-40" />
          </label> */}

          <label
            for="title"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <textarea
            id="title"
            name="title"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 w-1/2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your article here..."
            defaultValue={article.title}
          ></textarea>
        </div>
        <div>
          {/* <label>
            <span>Content</span>
            <input type="text" name="content" className="h-40" />
          </label> */}

          <label
            for="content"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="content"
            name="content"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 w-1/2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your article here..."
            defaultValue={article.content}
          ></textarea>
        </div>
        <div>
          {/* <label>
            <span>Content</span>
            <input type="text" name="content" className="h-40" />
          </label> */}

          <label
            for="categorie1"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First categorie
          </label>
          <textarea
            id="categorie1"
            name="categorie1"
            rows="1"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 w-1/2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your article here..."
            defaultValue={article.categorie1}
          ></textarea>
        </div>
        <div>
          {/* <label>
            <span>Content</span>
            <input type="text" name="content" className="h-40" />
          </label> */}

          <label
            for="categorie2"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Second categorie
          </label>
          <textarea
            id="categorie2"
            name="categorie2"
            rows="1"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 w-1/2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your article here..."
            defaultValue={article.categorie2}
          ></textarea>
        </div>
        <div>
          {/* <label>
            <span>Content</span>
            <input type="text" name="content" className="h-40" />
          </label> */}

          <label
            for="tag1"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First tag
          </label>
          <textarea
            id="tag1"
            name="tag1"
            rows="1"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 w-1/2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your article here..."
            defaultValue={article.tag1}
          ></textarea>
        </div>
        <div>
          {/* <label>
            <span>Content</span>
            <input type="text" name="content" className="h-40" />
          </label> */}

          <label
            for="tag2"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Second tag
          </label>
          <textarea
            id="tag2"
            name="tag2"
            rows="1"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 w-1/2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your article here..."
            defaultValue={article.tag2}
          ></textarea>
        </div>
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
      </form>
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
