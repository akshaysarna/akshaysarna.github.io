import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Awards from "../components/Awards";
import Footer from "../components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Akshay&apos;s Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <AboutMe />
      <div className="container mr-3">
        <div className="row">
          <div className="col-md-6">
            <Experience />
            <Education/>
          </div> 
          <div className="col-md-6">
            <Skills />
            <Certificates/>
            <Awards/>
          </div> 
      </div>
      </div>
      <Footer />
    </div>
  );
}
