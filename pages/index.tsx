import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { ICollectionsResponse } from "./types";
import { GET_COLLECTIONS } from "../src/graphql/schema.graphql";
import { Row, Col } from "index.styles";
import { Container, padding } from "../styles";
import ProductCard from "../components/ProductCard/ProductCard";
import { ProductTypes } from "../components/ProductCard/types";

function Home() {
  const { data, loading } = useQuery<ICollectionsResponse>(GET_COLLECTIONS);

  //TODO Create spinner component / skeleton components
  if (loading) {
    return (
      <Container>
        <div style={{ margin: `${padding.xxl} 0 ${padding.xl}` }}>
          <h1 className="section-title">
            <span>Onze categorieën</span>
          </h1>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div style={{ margin: `${padding.xxl} 0 ${padding.xl}` }}>
        <h1 className="section-title">
          <span>Onze categorieën</span>
        </h1>
      </div>
      <Row>
        {data.collections.edges.map(({ node: category }) => {
          const hasItems = category.products.edges.length >= 1;

          if (hasItems) {
            return (
              <Col key={category.id}>
                <ProductCard
                  type={ProductTypes.Overview}
                  title={category.title}
                  handle={category.handle}
                  imageUrl={category.image.originalSrc}
                />
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
}

export default Home;
