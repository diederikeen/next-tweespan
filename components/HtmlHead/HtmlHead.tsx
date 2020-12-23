import React, { FC } from "react";
import Head from "next/head";

interface IHtmlHead {
  title: string;
  description?: string;
  image?: string;
  keyword?: string[];
  url?: string;
  customKey?: string;
}

const defaultData = {
  title: "2-Span | Alles voor uw aanspanning",
  description:
    "Bij 2-Span hebben wij alles in huis voor uw aanspanning. Van accessoires tot rijtuigen.",
  image: "/images/icons/2-SPAN.svg",
  url: "",
};

const HtmlHead: FC<IHtmlHead> = ({
  title = defaultData.title,
  description = defaultData.description,
  image = defaultData.image,
  url = defaultData.url,
  customKey = "custom",
}) => {
  return (
    <Head key={customKey}>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="description" content={description} />

      {/* Default images */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter handling */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />
    </Head>
  );
};

export default HtmlHead;
