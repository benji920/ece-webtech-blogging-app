import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout.js";
import { supabase } from "../api/supabase";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Gravatar from "react-gravatar";
import moment from "moment";
import UserContext from "../../components/UserContext";
import DropdownMenu from "../../components/Dropdownmenu.js";

export default function Article({ article, ctx }) {
  const supabase = useSupabaseClient();
  const { user, logout, loading } = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const router = useRouter();
  const [comments, setComments] = useState([]);
  const [dbUpdated, setDbUpdated] = useState(false);

  const onClickButton = async function () {
    let { data, error, status } = await supabase
      .from("articles")

      .delete()

      .eq("article_id", article.article_id)
      .single();

    console.log(status);
    console.log("error" + error);
    if (error == null) {
      //handle error and RLS
      setMessage(
        <div className="text-center">
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>Your article has been deleted</p>
          <Link className="" href="/articles">
            Go back to the articles
          </Link>
        </div>
      );
    } else {
      setMessage("You cannot update this article");
    }
  };

  const onClick = async function () {
    console.log("test");
    setMessage(
      <div className="text-center">
        <p>Do you really want to delete the article ?</p>
        <p onClick={onClickButton} className="cursor-pointer">
          Yes
        </p>{" "}
        <Link
          className="no-underline font-normal text-slate-700"
          href={"/articles/" + article.article_id}
        >
          No
        </Link>
      </div>
    );
  };

  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from("comments")
        .select(`id, content,created_at,email,article_id, articles(author)`)
        .eq("article_id", article.article_id)
        .order("created_at", { ascending: false });

      setComments(data);
      console.log("data" + JSON.stringify(comments));
    })();
  }, [dbUpdated]);

  const onSubmit = async function (e) {
    e.preventDefault();
    const data = new FormData(e.target);
    let obj = Object.fromEntries(data);
    user ? (obj.email = user.email) : (obj.email = null);
    obj.article_id = article.article_id;
    console.log(obj);

    const { error } = await supabase
      .from("comments")
      .insert(obj, { returning: "minimal" });
    setDbUpdated(!dbUpdated);
  };

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
            {moment(article.time).format("DD/MM/YYYY")}
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
              size={30}
            />
            <span class=" dark:text-white">{article.author}</span>
          </div>
          {user ? (
            user.email == article.author ? (
              <div>
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

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 ml-2 inline-flex cursor-pointer"
                  onClick={onClick}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
                <p
                  id="demo"
                  className="inline-flex ml-1 cursor-pointer"
                  onClick={onClick}
                >
                  {" "}
                  Delete article
                </p>
              </div>
            ) : (
              <> </>
            )
          ) : (
            <></>
          )}
        </div>
      </article>

      <section class="bg-white dark:bg-slate-600  py-8 lg:py-16">
        <div class=" mx-auto ">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion (20)
            </h2>
          </div>
          <form class="mb-6" onSubmit={onSubmit}>
            <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label for="comment" class="sr-only">
                Your comment
              </label>
              <textarea
                id="comment
              "
                name="content"
                rows="6"
                class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post comment
            </button>
          </form>
          {comments.map((comment) => (
            <article
              key={comment.id}
              class="p-5 mb-3 text-base bg-whFeb. 8, 2022ite  border-b border-gray-200 dark:border-0 dark:rounded-lg dark:bg-gray-800"
            >
              <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    {comment.email ? (
                      <>
                        <Gravatar
                          email={comment.email}
                          className="rounded-full border-2 bg-white mr-2"
                          size={30}
                        />
                        {comment.email}{" "}
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Anonymous
                      </>
                    )}
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    <time
                      pubdate
                      datetime="2022-02-08"
                      title="February 8th, 2022"
                    >
                      {" "}
                      {moment(
                        comment.created_at,
                        "YYYY-MM-DD hh:mm:ss"
                      ).fromNow()}
                      {}
                    </time>
                  </p>
                </div>
                {user ? (
                  user.email == comment.email ||
                  user.email == comment.articles.author ? (
                    <DropdownMenu
                      comment_id={comment.id}
                      comment_content={comment.content}
                      dbUpdated={dbUpdated}
                      setdbUpdated={setDbUpdated}
                    />
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
              </footer>
              <p class="text-gray-500 dark:text-gray-400">{comment.content}</p>
              <div class="flex items-center mt-4 space-x-4"></div>
            </article>
          ))}
        </div>
      </section>

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
    paths: articles.map((article) => `/articles/${article.article_id}`),
    fallback: false,
  };
}
