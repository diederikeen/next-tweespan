// TOASTER https://jossmac.github.io/react-toast-notifications/
import React, { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useToasts } from "react-toast-notifications";
import {
  GET_SINGLE_PRODUCT,
  UPDATE_CHECKOUT,
  CREATE_CHECKOUT,
} from "../../src/graphql/schema.graphql";

import { titlelize } from "../../helpers";
import { Container, padding } from "../../styles";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import { MainContent, Aside, Wrap } from "./Product.styles";
import ProductOptions from "../../components/ProductGallery/components/ProductOptions";
import { formatCurrency } from "../../helpers/formatting";
import { useCart } from "../../src/context/cart";
import ProductQuantitySelect from "../../components/ProductQuantitySelect/ProductQuantitySelect";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import { IProductByHandle } from "../../src/types";

enum ToasterContent {
  Error = "Er is iets fout gegaan. Probeer opnieuw",
  Success = "Product is succesvol toegevoegd",
}

const SingleProduct: FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [variant, setVariant] = useState(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [checkoutId, setCheckoutId] = useState<string>();
  const { setCartResponse } = useCart();
  const { addToast } = useToasts();

  const { data, loading }: IProductByHandle = useQuery(GET_SINGLE_PRODUCT, {
    variables: {
      handle: pid,
    },
  });

  const [createCheckout] = useMutation(CREATE_CHECKOUT);
  const [updateCart] = useMutation(UPDATE_CHECKOUT);

  const productTitle = titlelize(pid, true);

  useEffect(() => {
    if (!data) return;
    setVariant(data.productByHandle.variants.edges[0].node);
    setCheckoutId(localStorage.getItem("checkoutId"));
  }, [loading, data]);

  if (loading || !variant) {
    return null;
  }

  const { productByHandle: product } = data;
  const hasMultipleImages = product.images.edges.length > 1;
  const hasNoImage = !Boolean(product.images.edges.length);
  const hasProductOptions = product.options.length > 1;

  const disableProduct =
    variant.currentlyNotInStock || variant.quantityAvailable === 0;

  const handleVariantChange = (id: string) => {
    const { node: variant } = product.variants.edges.find(
      ({ node }) => node.id === id
    );

    setVariant(variant);
  };

  const handleDirectBuy = () => {
    createCheckout({
      variables: {
        input: {
          lineItems: [
            {
              quantity,
              variantId: variant.id,
            },
          ],
        },
      },
    })
      .then((res) => res)
      .then(({ data }) => {
        if (!checkoutId) {
          const id = data.checkoutCreate.checkout.id;
          setCheckoutId(id);
          localStorage.setItem("checkoutId", id);
        }

        window.open(data.checkoutCreate.checkout.webUrl, "_blank");
      });
  };

  const handleUpdateCart = async () => {
    if (!checkoutId) {
      await createCheckout({
        variables: {
          input: {
            lineItems: [
              {
                quantity,
                variantId: variant.id,
              },
            ],
          },
        },
      })
        .then((res) => res)
        .then(({ data }) => {
          const id = data.checkoutCreate.checkout.id;
          localStorage.setItem("checkoutId", id);
          setCheckoutId(id);
          setCartResponse(data.checkoutCreate.checkout);
        });

      return;
    }

    await updateCart({
      variables: {
        checkoutId: checkoutId,
        lineItems: [
          {
            quantity,
            variantId: variant.id,
          },
        ],
      },
    })
      .then((res) => res)
      .then(({ data }) => {
        setCartResponse(data.checkoutLineItemsAdd.checkout);
        addToast(ToasterContent.Success, {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch((err) =>
        addToast(ToasterContent.Error, {
          appearance: "error",
          autoDismiss: true,
        })
      );
  };

  return (
    <>
      <HtmlHead
        customKey={"main"}
        title={`2-Span | ${productTitle}`}
        description={product.description}
      />
      <Container>
        <div style={{ padding: `0 0 ${padding.xl}` }}></div>
      </Container>

      <Wrap>
        <Container>
          <div className="content-wrap">
            <MainContent>
              <ProductGallery
                hasMultipleImages={hasMultipleImages}
                hasNoImage={hasNoImage}
                images={product.images.edges}
              />
            </MainContent>

            <Aside>
              {disableProduct && (
                <span className="note warning margin-bottom-1">
                  Tijdelijk niet beschikbaar
                </span>
              )}

              <h1>{productTitle}</h1>

              <h2 className="product-price">
                {formatCurrency(variant.priceV2.amount)}
              </h2>

              <p className="product-description">{product.description}</p>

              <div className="select-content">
                {hasProductOptions && (
                  <ProductOptions
                    variants={product.variants}
                    onVariantChange={handleVariantChange}
                  />
                )}

                <ProductQuantitySelect
                  onChange={setQuantity}
                  maxAmount={variant.quantityAvailable}
                />
              </div>

              <div className="button-content">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleUpdateCart}
                  disabled={disableProduct}
                >
                  Toevoegen aan winkelwagen
                </button>

                <button
                  style={{ marginLeft: "1em" }}
                  type="button"
                  className="btn-ghost"
                  onClick={handleDirectBuy}
                  disabled={disableProduct}
                >
                  of koop direct
                </button>
              </div>
            </Aside>
          </div>
        </Container>
      </Wrap>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: ["/product/[pid]"],
    fallback: true,
  };
}

export async function getStaticProps(props: { params: { pid: string } }) {
  return {
    props: {
      pid: props.params.pid,
    },
  };
}

export default SingleProduct;
