import React, { FC } from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";

import { useQuery } from "@apollo/react-hooks";
import { GET_COLLECTIONS } from "../../src/graphql/schema.graphql";
import { Nav, Container } from "../../styles";

type SingleNavItem = {
  node: {
    title: string;
    handle: string;
    products: {
      edges: [];
    };
  };
};

const Header: FC = () => {
  const Logo = "/images/icons/2-SPAN.svg";

  const { data: navItems, loading: isLoadingNavItems } = useQuery(
    GET_COLLECTIONS
  );

  return (
    <Nav>
      <Container className="flex flex-end items-center">
        <div style={{ marginRight: "auto" }} className="logo-wrap--desktop">
          <Link href="/">
            <div className="logo">
              <ReactSVG src={Logo} wrapper="div" style={{ width: "100%" }} />
            </div>
          </Link>
        </div>

        <Link href="/" as="/">
          <a>Homepagina</a>
        </Link>

        <span className="dropdown">
          Categorieën
          <div className="dropdown-content">
            <ul>
              {!isLoadingNavItems
                ? navItems.collections.edges.map(({ node }: SingleNavItem) => {
                    const hasItems = node.products.edges.length >= 1;
                    if (hasItems) {
                      return (
                        <li key={node.handle}>
                          <Link
                            href="/categorie/[cid]"
                            as={`/categorie/${node.handle}`}
                          >
                            <a>{node.title}</a>
                          </Link>
                        </li>
                      );
                    }
                  })
                : null}
            </ul>
          </div>
        </span>

        <Link href="/categorie/sale">
          <a>Sale</a>
        </Link>
      </Container>
    </Nav>
  );
};

export default Header;
