import React from "react";
import NextApp from "next/app";
import { ToastProvider } from "react-toast-notifications";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";

import { ThemeProvider } from "styled-components";

import HtmlHead from "../components/HtmlHead/HtmlHead";

import MainLayout from "../layouts/main/MainLayout";
import { CartContextProvider } from "../src/context/cart";

const theme = {
  primary: "green",
};

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    const client = new ApolloClient({
      uri: process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_URL,
      cache: new InMemoryCache(),

      headers: {
        Accept: "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
      },

      onError: (err) => console.log(err),
    });

    return (
      <>
        <HtmlHead customKey={"main"} />
        <ApolloProvider client={client}>
          <CartContextProvider>
            <ThemeProvider theme={theme}>
              <MainLayout>
                <ToastProvider
                  placement="top-center"
                >
                  <Component {...pageProps} />
                </ToastProvider>
              </MainLayout>
            </ThemeProvider>
          </CartContextProvider>
        </ApolloProvider>
      </>
    );
  }
}
