import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "../../component/Footer";
import Header from "../../component/Header";
import PortfolioByIdSection from "../../component/PortfolioByIdSection";
import { portfolioData } from "../../component/PortfolioSection/data";
import Loader from "../../component/Loader";

export default function PortfolioById() {
  const router = useRouter();
  const [project, setProject] = useState<{
    name: string;
    videoUrl: string;
    images: string[];
    playstore: string;
    description: string;
  }>({
    name: "",
    videoUrl: "",
    images: [],
    playstore: "",
    description: "",
  });
  const [loader, setLoader] = useState(true);
  const { id } = router.query;
  const fetchDetails = () => {
    if (id) {
      let pid: any = id;
      const data = portfolioData[pid - 1];
      setProject(data);
      setLoader(false);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, [id]);
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
      <PortfolioByIdSection data={project} />
      <Footer />
    </>
  );
}
