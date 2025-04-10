import React from "react";
import Navs from "../Nav/Navs";
import Header from "./Header/Header";
import Services from "../Services/Services";
import Features from "../features/Features";
import Des from "../description/Des";
import Pricing from "../Pricing/Pricing";
import Team from "../Team/Team";
import WorkProgress from "../WORK PROGRESS/WorkProgress";
import Blog from "../Blog/Blog";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

const Home = () => {
return(
  <>
    <Navs />
    <Header />
    <Services />
    <Features />
    <Des />
    <Pricing />
    <Team />
    <WorkProgress />
    <Blog />
    <Contact />
    <Footer />
  </>
)
}

export default Home;