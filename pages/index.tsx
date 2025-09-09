import Head from "next/head";
import Image from "next/image";
import { Box, useTheme } from "@mui/material";
import Header from "../component/Header";
import HeroSection from "../component/HeroSection";
import ServiceSection from "../component/ServiceSection";
import SkillSection from "../component/SkillSection";
import PortfolioSection from "../component/PortfolioSection";
import Resume from "../component/Resume";
import ContactMe from "../component/ContactMe";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import { useEffect, useState } from "react";
export default function Home() {
  const [loader, setLoader] = useState(true);
  const theme = useTheme();
  useEffect(() => {
    const timer = setInterval(() => {
      setLoader(false);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Unity Game Developer</title>
        <meta name="description" content="Unity Game Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loader ? <Loader /> : ""}
      <Header />

      <HeroSection />
      <ServiceSection />
      <SkillSection />
      <PortfolioSection />
      {/* <ContactMe /> */}
      <Footer />
    </>
  );
}
