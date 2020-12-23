import React, { FC, useState } from "react";
import useMobileDetect from "use-mobile-detect-hook";

import { Wrap, CartWrap } from "./TopBar.styles";
import { Container } from "../../styles";
import Link from "next/link";

import { ReactSVG } from "react-svg";
import { useCart } from "../../src/context/cart";
import { formatCurrency } from "../../helpers/formatting";

type TLineItem = {
  node: {
    quantity: number;
  };
};

type TCart = {
  quantity?: number;
  price: {
    amount: string;
  };
};

const TopBar: FC = () => {
  const { cartContent: parsedCart } = useCart();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  let cart: TCart = {
    quantity: 0,
    price: {
      amount: "0.0",
    },
  };

  if (parsedCart) {
    cart = {
      quantity: parsedCart.lineItems.edges.reduce(
        (acc: number, obj: TLineItem) => acc + obj.node.quantity,
        0
      ),
      price: parsedCart.totalPriceV2,
    };
  }

  const CartIcon = "/images/icons/cart.svg";
  const Logo = "/images/icons/2-SPAN.svg";

  const isMobile = useMobileDetect().isMobile();

  return (
    <Wrap>
      <Container>
        <div className="flex items-center">
          <div
            style={{ marginRight: "auto" }}
            className="logo-wrap--mobile flex items-center"
          >
            {isMobile && (
              <button
                className={`mobile-toggle-button ${isNavOpen && "is-open"}`}
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            )}

            <Link href="/">
              <div className="logo">
                <ReactSVG src={Logo} wrapper="div" style={{ width: "100%" }} />
              </div>
            </Link>
          </div>

          <div className="content">
            <CartWrap>
              <Link href="/checkout" as={`/checkout`}>
                <a>
                  <ReactSVG
                    src={CartIcon}
                    style={{
                      width: 24,
                      display: "inline-block",
                      cursor: "pointer",
                    }}
                  />
                  {/* TODO: Make quantity adjustable */}
                  <span className="count">
                    <span>{cart.quantity}</span>
                  </span>
                </a>
              </Link>
            </CartWrap>
            <span className="price">{formatCurrency(cart.price.amount)}</span>
          </div>
        </div>
      </Container>
    </Wrap>
  );
};

export default TopBar;
