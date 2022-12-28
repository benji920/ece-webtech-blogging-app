import { Dropdown } from "flowbite-react";
import Head from "next/head";
import Link from "next/link";
import DropdownMenu from "../components/Dropdownmenu.js";
import Layout from "../components/Layout.js";

export default function Home() {
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

      <h1 className="wt-title">
        Welcome to <a href="https://www.adaltas.com">web technologies!</a>
      </h1>
      <DropdownMenu />
      <ul>
        <li className="bg-color800">
          <Link href="/articles">View our articles</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/contact">Contact us</Link>
        </li>
      </ul>
    </Layout>
  );
}
