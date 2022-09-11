import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Akshay&apos;s Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <AboutMe />
      <Experience />
    </div>
  );
}
