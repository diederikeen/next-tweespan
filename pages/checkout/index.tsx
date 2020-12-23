import React, { FC } from "react";
import { useToasts } from "react-toast-notifications";

import { useCart } from "../../src/context/cart";
import { REMOVE_ITEM } from "../../src/graphql/schema.graphql";
import Icon from "../../components/Icon/Icon";

import { Container, padding } from "../../styles";
import { useMutation } from "@apollo/react-hooks";

import { Wrap, Row, PaymentActions, PriceColumn } from "./Checkout.styles";
import Link from "next/link";
import { formatCurrency } from "../../helpers/formatting";
import { IProductCard } from "../../components/ProductCard/types";

const Checkout: FC = () => {
  const { cartContent, setCartResponse } = useCart();
  const displayEmpty = !cartContent || cartContent.lineItems.edges.length === 0;
  const { addToast } = useToasts();

  if (displayEmpty) {
    return (
      <Container>
        <div style={{ margin: `${padding.xxl} 0 ${padding.xl}` }}>
          <h1 className="section-title">
            <span>Uw winkelmandje</span>
          </h1>

          <div
            className="flex flex-center"
            style={{ opacity: "0.5", marginTop: "2em" }}
          >
            <h2>U heeft nog niks in uw mandje.</h2>
          </div>
        </div>
      </Container>
    );
  }

  const { lineItems, id: checkoutId } = cartContent;

  const [removeItem] = useMutation(REMOVE_ITEM);

  const handleDeleteClick = ({ id, title }: Partial<IProductCard>) => {
    removeItem({
      variables: {
        checkoutId,
        lineItemIds: [id],
      },
    })
      .then((res) => res)
      .then(({ data }) => {
        setCartResponse(data.checkoutLineItemsRemove.checkout);
      })
      .then(() => {
        addToast(`${title} succesvol verwijderd!`, {
          appearance: "success",
          autoDismiss: true,
        });
      });
  };

  const handlePaymentClick = () => {
    window.open(cartContent.webUrl, "_blank");
  };

  return (
    <Container>
      <div style={{ margin: `${padding.xxl} 0 ${padding.xl}` }}>
        <h1 className="section-title">
          <span>Uw winkelmandje</span>
        </h1>

        <Wrap>
          {lineItems.edges.map(({ node }: any) => {
            const { handle } = node.variant.product;
            const hasVariant = false;

            return (
              <Row className="flex" key={node.id}>
                <div className="thumbnail">
                  <div
                    style={{
                      backgroundImage: `url(${node.variant.image.originalSrc})`,
                    }}
                  ></div>
                </div>
                <div className="row-content">
                  <Link href={`/product/[pid]`} as={`/product/${handle}`}>
                    <>
                      <a>
                        <div className="text-content flex">
                          <h3>{node.title}</h3>
                          {hasVariant && (
                            <p>
                              {node.variant.selectedOptions[0].name}:{" "}
                              <strong>
                                {node.variant.selectedOptions[0].value}
                              </strong>
                            </p>
                          )}
                          <p>Aantal: {node.quantity}</p>
                        </div>

                        <div className="actions">
                          <button
                            onClick={() => handleDeleteClick(node)}
                            className="remove-button btn-secondary"
                          >
                            <Icon
                              type="trash-can"
                              fill="red"
                              className="remove-icon"
                            />
                            Verwijder
                          </button>
                        </div>
                      </a>
                    </>
                  </Link>

                  <div className="price">
                    <h4>{formatCurrency(node.variant.priceV2.amount)}</h4>
                  </div>
                </div>
              </Row>
            );
          })}
        </Wrap>

        {!displayEmpty && (
          <>
            <PriceColumn>
              <p>
                Subtotaal:{" "}
                <span>
                  {formatCurrency(cartContent.subtotalPriceV2.amount)}
                </span>
              </p>
              <hr></hr>
              <p>
                Totaal:{" "}
                <span>{formatCurrency(cartContent.totalPriceV2.amount)}</span>
              </p>
            </PriceColumn>
            <PaymentActions>
              <div>
                <button onClick={handlePaymentClick} className="btn-primary">
                  Doorgaan naar afrekenen
                </button>
                <p style={{ fontSize: "0.6rem", opacity: 0.5 }}>
                  Dit opent een nieuw tabblad in uw browser.
                </p>
              </div>
            </PaymentActions>
          </>
        )}
      </div>
    </Container>
  );
};

export default Checkout;
