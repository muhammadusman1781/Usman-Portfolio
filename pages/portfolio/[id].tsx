import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "../../component/Footer";
import Header from "../../component/Header";
import PortfolioByIdSection from "../../component/PortfolioByIdSection";
import { portfolioDataWithId, PortfolioItem } from "../../component/PortfolioSection/data";
import Loader from "../../component/Loader";

export default function PortfolioById() {
  const router = useRouter();
  const [project, setProject] = useState<PortfolioItem | null>(null);
  const [loader, setLoader] = useState(true);
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    const pid = Number(id);
    const data = portfolioDataWithId.find((item) => item.id === pid) || null;
    setProject(data);
    setLoader(false);
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
      {project && <PortfolioByIdSection data={project} />}
      <Footer />
    </>
  );
}
