import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div id="home-page">
        <h1>
          <Link href="/">Home page</Link>
        </h1>
        <h2>Hi, Myself Developer </h2>
        <h2>
          and I work at <a href="https://www.newtonschool.co/">Newton School</a>
        </h2>
        <Link href="/blog">
          <button id="home-to-blog"> Go to Blog</button>
        </Link>
        <Link href="/info">
          <button id="home-to-info"> Go to Info</button>
        </Link>
      </div>
    </>
  );
}
