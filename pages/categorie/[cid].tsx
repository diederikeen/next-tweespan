import React, { FC } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";

import { GET_SINGLE_COLLECTION } from "../../src/graphql/schema.graphql";
import { Container, padding } from "../../styles";
import { Row, Col } from "../index.styles";
import { titlelize } from "../../helpers";
import { ProductCard } from "../../components";
import { ProductTypes } from "../../components/ProductCard/types";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import { ISingleCollection } from "../../src/types";

const SingleCategory: FC = () => {
  const router = useRouter();
  const { cid } = router.query;

  const { data, loading }: ISingleCollection = useQuery(GET_SINGLE_COLLECTION, {
    variables: {
      handle: cid,
    },
  });

  const categoryTitle = titlelize(cid, false);
  const prettyTitle = titlelize(cid, true);

  //TODO MAKE THIS A COMPONENT
  if (loading) {
    return (
      <>
        <HtmlHead title={`2-Span | ${prettyTitle}`} />
        <Container>
          <div style={{ margin: `${padding.xxl} 0 ${padding.xl}` }}>
            <h1 className="section-title">
              <span>Alle {categoryTitle}</span>
            </h1>
          </div>
        </Container>
      </>
    );
  }

  const { edges } = data?.collectionByHandle?.products;

  return (
    <>
      <HtmlHead title={`2-Span | ${prettyTitle}`} url={window.location.href} />
      <Container>
        <div style={{ margin: `${padding.xxl} 0 ${padding.xl}` }}>
          <h1 className="section-title">
            <span>Alle {categoryTitle}</span>
          </h1>
        </div>
        <Row>
          {edges.length > 0 ? (
            edges.map(({ node }) => {
              const nodeImage = node.images.edges[0]?.node.originalSrc;
              const hasMaxVariantPrice =
                node.priceRange.maxVariantPrice.amount !==
                node.priceRange.minVariantPrice.amount;

              return (
                <Col key={node.id}>
                  <ProductCard
                    type={ProductTypes.Product}
                    title={titlelize(node.title, false, true)}
                    handle={node.handle}
                    imageUrl={nodeImage}
                    minPrice={node.priceRange.minVariantPrice.amount}
                    maxPrice={
                      hasMaxVariantPrice &&
                      node.priceRange.maxVariantPrice.amount
                    }
                  />
                </Col>
              );
            })
          ) : (
            <div
              className="flex flex-center"
              style={{ opacity: "0.5", width: "100%" }}
            >
              <h2>Helaas er is niks gevonden in {categoryTitle}</h2>
            </div>
          )}
        </Row>
      </Container>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      "/categorie/verlichting",
      "/categorie/banden",
      "/categorie/marathonwagens",
    ],
    fallback: true,
  };
}

export async function getStaticProps(props: { params: { cid: string } }) {
  return {
    props: {
      cid: props.params.cid,
    },
  };
}

export default SingleCategory;
