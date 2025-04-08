"use client"
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Subscriptions from "../components/benefits";
import Services from "../components/services";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
    
     <Hero />
      {/* <Subscriptions /> */}
      <Services />
      <Footer />
    
    </>
  );
}
