import React from "react";
import Head from "next/head";
import useMobileDetect from "use-mobile-detect-hook";

import { TopBar, Navigation } from "../../components";

import GlobalStyles from "./MainLayout.styles";

interface IMainLayout {
  children: React.ReactElement;
}

function MainLayout({ children }: IMainLayout) {
  const isMobile = useMobileDetect().isMobile();
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <TopBar />
      {!isMobile && <Navigation />}

      {children}
    </>
  );
}

export default MainLayout;
