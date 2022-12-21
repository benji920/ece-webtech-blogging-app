import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout.js";
import UserContext from "../components/UserContext";
import UserImage from "../components/UserImage";
import Gravatar from "react-gravatar";

export default function Contact() {
  const { user, logout, loading } = useContext(UserContext);
  const router = useRouter();
  var json;
  useEffect(() => {
    if (!(user || loading)) {
      router.push("/login");
    }
  }, [user, loading, router]);
  const onClickLogout = function () {
    logout();
  };
  return (
    <Layout>
      <Head>
        <title>WebTech - user signedin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!(user || loading) ? (
        <p>Redirecting...</p>
      ) : (
        <>
          {/* <div class="flex flex-row">
            {" "}
            <div class="basis-1/4">
              {" "}
              <Gravatar
                email={user.email}
                className="rounded-full border-4 bg-white"
                size={135}
              />
            </div>
            <div className="grid place-items-center">
              <p className="font-bold text-3xl">
                {user.user_metadata.preferred_username}
                <br></br>
                {user.email}
              </p>
            </div>
          </div> */}
          <div class="grid grid-cols-6 gap-4 place-items-center text-center">
            <div class="col-start-1 col-end-3 ">
              {" "}
              <Gravatar
                email={user.email}
                className="rounded-full border-4 bg-white"
                size={135}
              />
            </div>
            <div class="col-start-3 w-full col-end-6">
              <p className="font-bold text-3xl">
                {user.user_metadata.preferred_username}
                <br></br>
                {user.email}
              </p>
            </div>
            <div class="col-start-1 w-full col-end-3">
              <button
                className="roundedcontent-center px-3 py-2 text-white bg-slate-500 hover:bg-blue-500"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </div>
          </div>

          <pre>
            <code>{JSON.stringify(user, null, 2)}</code>
          </pre>
        </>
      )}
      {/* <div class="holder">
        <div class="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
          <div class="profile w-full flex m-3 ml-4 ">
            <UserImage className="w-28 h-28 p-1 bg-white rounded-full" />
            {/* <img
              class="w-28 h-28 p-1 bg-white rounded-full"
              src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
              alt=""
            /> }
            <div class="title mt-9 ml-3 font-bold flex flex-col">
              <div class="name break-words">
                {user.user_metadata.preferred_username}
                <br />
                {user.email}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}
