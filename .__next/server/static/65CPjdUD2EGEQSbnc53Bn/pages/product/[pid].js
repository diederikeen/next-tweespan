module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0IYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bobz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _formatting__WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "11Gw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "react-toast-notifications"
var external_react_toast_notifications_ = __webpack_require__("C1xe");

// EXTERNAL MODULE: ./src/graphql/schema.graphql
var schema_graphql = __webpack_require__("JCC+");

// EXTERNAL MODULE: ./helpers/index.ts
var helpers = __webpack_require__("0IYK");

// EXTERNAL MODULE: ./styles/index.ts + 6 modules
var styles = __webpack_require__("vBmG");

// EXTERNAL MODULE: ./components/ProductGallery/ProductGallery.tsx + 2 modules
var ProductGallery = __webpack_require__("uoHw");

// EXTERNAL MODULE: ./styles/product/product.ts
var product_product = __webpack_require__("BWkH");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/ProductGallery/components/ProductOptions.tsx
var __jsx = external_react_default.a.createElement;



const Wrap = external_styled_components_default.a.div.withConfig({
  displayName: "ProductOptions__Wrap",
  componentId: "sc-2x85rm-0"
})(["@media screen and (min-width:", "){margin-left:2em;}"], styles["c" /* breakpoint */].md);

const ProductOptions = ({
  variants,
  onVariantChange
}) => {
  const handleSelectChange = ({
    currentTarget
  }) => {
    onVariantChange(currentTarget.value);
  };

  return __jsx(Wrap, null, __jsx("h4", {
    style: {
      marginBottom: "0.5em"
    }
  }, "Beschikbare varianten:"), __jsx("select", {
    style: {
      width: "300px"
    },
    onChange: handleSelectChange
  }, variants.edges.map(({
    node
  }) => __jsx("option", {
    key: node.id,
    value: node.id
  }, node.title))));
};

/* harmony default export */ var components_ProductOptions = (ProductOptions);
// EXTERNAL MODULE: ./helpers/formatting/index.ts
var formatting = __webpack_require__("bobz");

// EXTERNAL MODULE: ./src/context/cart.tsx
var cart = __webpack_require__("kpvc");

// CONCATENATED MODULE: ./components/ProductQuantitySelect/ProductQuantitySelect.styles.ts


const ProductQuantitySelect_styles_Wrap = external_styled_components_default.a.div.withConfig({
  displayName: "ProductQuantitySelectstyles__Wrap",
  componentId: "sc-1284wxn-0"
})(["@media screen and (min-width:", "){}"], styles["c" /* breakpoint */].md);
// CONCATENATED MODULE: ./components/ProductQuantitySelect/ProductQuantitySelect.tsx
var ProductQuantitySelect_jsx = external_react_default.a.createElement;



const ProductQuantitySelect = ({
  onChange,
  maxAmount
}) => {
  const handleChange = event => {
    const value = parseInt(event.currentTarget.value);
    onChange(value);
  };

  return ProductQuantitySelect_jsx(ProductQuantitySelect_styles_Wrap, null, ProductQuantitySelect_jsx("p", {
    style: {
      marginBottom: "0.5em"
    }
  }, ProductQuantitySelect_jsx("strong", null, "Aantal")), ProductQuantitySelect_jsx("select", {
    onChange: handleChange,
    style: {
      width: "150px"
    },
    disabled: !maxAmount
  }, Array.from(Array(maxAmount ? maxAmount : 1)).map((_, index) => {
    return ProductQuantitySelect_jsx("option", {
      key: index,
      value: index + 1
    }, index + 1);
  })));
};

/* harmony default export */ var ProductQuantitySelect_ProductQuantitySelect = (ProductQuantitySelect);
// EXTERNAL MODULE: ./components/HtmlHead/HtmlHead.tsx
var HtmlHead = __webpack_require__("3tMB");

// CONCATENATED MODULE: ./pages/product/[pid].tsx
var _pid_jsx = external_react_default.a.createElement;
// TOASTER https://jossmac.github.io/react-toast-notifications/













var ToasterContent;

(function (ToasterContent) {
  ToasterContent["Error"] = "Er is iets fout gegaan. Probeer opnieuw";
  ToasterContent["Success"] = "Product is succesvol toegevoegd";
})(ToasterContent || (ToasterContent = {}));

const SingleProduct = ({
  pid
}) => {
  if (!pid) {
    return null;
  }

  const {
    0: variant,
    1: setVariant
  } = Object(external_react_["useState"])(null);
  const {
    0: quantity,
    1: setQuantity
  } = Object(external_react_["useState"])(1);
  const {
    0: checkoutId,
    1: setCheckoutId
  } = Object(external_react_["useState"])();
  const {
    setCartResponse
  } = Object(cart["b" /* useCart */])();
  const {
    addToast
  } = Object(external_react_toast_notifications_["useToasts"])();
  const {
    data,
    loading
  } = Object(react_hooks_["useQuery"])(schema_graphql["GET_SINGLE_PRODUCT"], {
    variables: {
      handle: pid
    }
  });
  const [createCheckout] = Object(react_hooks_["useMutation"])(schema_graphql["CREATE_CHECKOUT"]);
  const [updateCart] = Object(react_hooks_["useMutation"])(schema_graphql["UPDATE_CHECKOUT"]);
  const productTitle = Object(helpers["a" /* titlelize */])(pid, true);
  Object(external_react_["useEffect"])(() => {
    if (!data) return;
    setVariant(data.productByHandle.variants.edges[0].node);
    setCheckoutId(localStorage.getItem("checkoutId"));
  }, [loading, data]);

  if (loading || !variant) {
    return null;
  }

  const {
    productByHandle: product
  } = data;
  const hasMultipleImages = product.images.edges.length > 1;
  const hasNoImage = !Boolean(product.images.edges.length);
  const hasProductOptions = product.options.length > 1;
  const disableProduct = variant.currentlyNotInStock || variant.quantityAvailable === 0;

  const handleVariantChange = id => {
    const {
      node: variant
    } = product.variants.edges.find(({
      node
    }) => node.id === id);
    setVariant(variant);
  };

  const handleDirectBuy = () => {
    createCheckout({
      variables: {
        input: {
          lineItems: [{
            quantity,
            variantId: variant.id
          }]
        }
      }
    }).then(res => res).then(({
      data
    }) => {
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
            lineItems: [{
              quantity,
              variantId: variant.id
            }]
          }
        }
      }).then(res => res).then(({
        data
      }) => {
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
        lineItems: [{
          quantity,
          variantId: variant.id
        }]
      }
    }).then(res => res).then(({
      data
    }) => {
      setCartResponse(data.checkoutLineItemsAdd.checkout);
      addToast(ToasterContent.Success, {
        appearance: "success",
        autoDismiss: true
      });
    }).catch(err => addToast(ToasterContent.Error, {
      appearance: "error",
      autoDismiss: true
    }));
  };

  return _pid_jsx(external_react_default.a.Fragment, null, _pid_jsx(HtmlHead["a" /* default */], {
    customKey: "main",
    title: `2-Span | ${productTitle}`,
    description: product.description
  }), _pid_jsx(styles["a" /* Container */], null, _pid_jsx("div", {
    style: {
      padding: `0 0 ${styles["d" /* padding */].xl}`
    }
  })), _pid_jsx(product_product["d" /* Wrap */], null, _pid_jsx(styles["a" /* Container */], null, _pid_jsx("div", {
    className: "content-wrap"
  }, _pid_jsx(product_product["b" /* MainContent */], null, _pid_jsx(ProductGallery["a" /* default */], {
    hasMultipleImages: hasMultipleImages,
    hasNoImage: hasNoImage,
    images: product.images.edges
  })), _pid_jsx(product_product["a" /* Aside */], null, disableProduct && _pid_jsx("span", {
    className: "note warning margin-bottom-1"
  }, "Tijdelijk niet beschikbaar"), _pid_jsx("h1", null, productTitle), _pid_jsx("h2", {
    className: "product-price"
  }, Object(formatting["a" /* formatCurrency */])(variant.priceV2.amount)), _pid_jsx("p", {
    className: "product-description"
  }, product.description), _pid_jsx("div", {
    className: "select-content"
  }, hasProductOptions && _pid_jsx(components_ProductOptions, {
    variants: product.variants,
    onVariantChange: handleVariantChange
  }), _pid_jsx(ProductQuantitySelect_ProductQuantitySelect, {
    onChange: setQuantity,
    maxAmount: variant.quantityAvailable
  })), _pid_jsx("div", {
    className: "button-content"
  }, _pid_jsx("button", {
    type: "button",
    className: "btn-primary",
    onClick: handleUpdateCart,
    disabled: disableProduct
  }, "Toevoegen aan winkelwagen"), _pid_jsx("button", {
    style: {
      marginLeft: "1em"
    },
    type: "button",
    className: "btn-ghost",
    onClick: handleDirectBuy,
    disabled: disableProduct
  }, "of koop direct")))))));
};

async function getStaticPaths() {
  return {
    paths: ["/product/[pid]"],
    fallback: true
  };
}
async function getStaticProps(props) {
  var _props$params;

  console.log("product", props);
  const productId = (props === null || props === void 0 ? void 0 : (_props$params = props.params) === null || _props$params === void 0 ? void 0 : _props$params.pid) || null;
  return {
    props: {
      pid: productId || null
    }
  };
}
/* harmony default export */ var _pid_ = __webpack_exports__["default"] = (SingleProduct);

/***/ }),

/***/ "3tMB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const defaultData = {
  title: "2-Span | Alles voor uw aanspanning",
  description: "Bij 2-Span hebben wij alles in huis voor uw aanspanning. Van accessoires tot rijtuigen.",
  image: "/images/icons/2-SPAN.svg",
  url: ""
};

const HtmlHead = ({
  title = defaultData.title,
  description = defaultData.description,
  image = defaultData.image,
  url = defaultData.url,
  customKey = "custom"
}) => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    key: customKey
  }, __jsx("title", null, title), __jsx("meta", {
    property: "og:title",
    content: title,
    key: "title"
  }), __jsx("meta", {
    name: "description",
    content: description
  }), __jsx("meta", {
    property: "og:type",
    content: "website"
  }), __jsx("meta", {
    property: "og:url",
    content: url
  }), __jsx("meta", {
    property: "og:title",
    content: title
  }), __jsx("meta", {
    property: "og:description",
    content: description
  }), __jsx("meta", {
    property: "og:image",
    content: image
  }), __jsx("meta", {
    property: "twitter:card",
    content: "summary_large_image"
  }), __jsx("meta", {
    property: "twitter:url",
    content: "https://metatags.io/"
  }), __jsx("meta", {
    property: "twitter:title",
    content: title
  }), __jsx("meta", {
    property: "twitter:description",
    content: description
  }), __jsx("meta", {
    property: "twitter:image",
    content: "https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (HtmlHead);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("11Gw");


/***/ }),

/***/ "BWkH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MainImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aside; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hKtz");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vBmG");



const MainImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product__MainImage",
  componentId: "sc-1wwcdea-0"
})(["width:100%;padding:0 0 75%;position:relative;background-color:white;border-radius:3px;overflow:hidden;div{position:absolute;left:0;top:0;width:100%;height:100%;background-size:contain;background-position:center;background-repeat:no-repeat;}"]);
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product__Wrap",
  componentId: "sc-1wwcdea-1"
})(["display:flex;.content-wrap{display:flex;flex-direction:column;@media screen and (min-width:", "){flex-direction:row;}}"], ___WEBPACK_IMPORTED_MODULE_2__[/* breakpoint */ "c"].md);
const MainContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product__MainContent",
  componentId: "sc-1wwcdea-2"
})(["width:100%;@media screen and (min-width:", "){width:40%;flex-shrink:0;}.thumbnail-wrap{display:flex;position:relative;margin:16px -16px 0 -16px;padding:0 8px;.thumbnail-image{margin:0 8px;max-width:33%;img{width:100%;}}}"], ___WEBPACK_IMPORTED_MODULE_2__[/* breakpoint */ "c"].md);
const Aside = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product__Aside",
  componentId: "sc-1wwcdea-3"
})(["flex-grow:1;position:relative;padding:2em 1em;@media screen and (min-width:", "){margin-left:3em;padding:2em;}h1{@media screen and (max-width:", "){font-size:1.8rem;}}&:after{content:\"\";position:absolute;border-radius:4px;left:0;top:0;width:100vw;height:100%;background-color:white;display:block;box-shadow:0px 4px 10px ", ";z-index:-1;}.select-content{display:flex;flex-direction:column;@media screen and (min-width:", "){align-items:flex-end;flex-direction:row;}}.button-content{margin-top:3em;@media screen and (max-width:", "){display:flex;flex-direction:column;justify-content:center;}}.product-price{font-size:1.4rem;opacity:0.6;margin:0 0 1.2em;}.product-description{margin-top:0;margin-bottom:1em;font-size:14px;opacity:0.7;}"], ___WEBPACK_IMPORTED_MODULE_2__[/* breakpoint */ "c"].md, ___WEBPACK_IMPORTED_MODULE_2__[/* breakpoint */ "c"].md, Object(polished__WEBPACK_IMPORTED_MODULE_1__["rgba"])("#000", 0.05), ___WEBPACK_IMPORTED_MODULE_2__[/* breakpoint */ "c"].md, ___WEBPACK_IMPORTED_MODULE_2__[/* breakpoint */ "c"].md);

/***/ }),

/***/ "C1xe":
/***/ (function(module, exports) {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "JCC+":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"originalSrc"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"altText"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PriceModel"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MoneyV2"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PriceRange"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductPriceRange"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxVariantPrice"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriceModel"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"minVariantPrice"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriceModel"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Variants"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantConnection"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriceModel"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"currentlyNotInStock"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"availableForSale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriceModel"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"quantityAvailable"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Products"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductConnection"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"productType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceRange"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriceRange"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"250"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Variants"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"4"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"},"directives":[]}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Collections"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CollectionConnection"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"4"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Products"},"directives":[]}]}}]}}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_COLLECTIONS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"4"},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Collections"},"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_SINGLE_COLLECTION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectionByHandle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handle"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"250"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Products"},"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_SINGLE_PRODUCT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productByHandle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handle"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"availableForSale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"options"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"values"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"4"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"originalSrc"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"250"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"quantityAvailable"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceRange"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriceRange"},"directives":[]}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CheckoutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"webUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalTax"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"subtotalPrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"subtotalPriceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriceModel"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPriceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriceModel"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"totalTaxV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriceModel"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"lineItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"250"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"variant"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"selectedOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"priceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalSrc"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]}]}}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_CHECKOUT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckoutCreateInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkoutCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"webUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"subtotalPriceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriceModel"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPriceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"totalTaxV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"lineItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"variant"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"selectedOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"priceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalSrc"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_CHECKOUT"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lineItems"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckoutLineItemInput"}}}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkoutLineItemsAdd"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lineItems"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lineItems"}}},{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"webUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"subtotalPriceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriceModel"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPriceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriceModel"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"totalTaxV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriceModel"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"lineItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"250"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"selectedOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"priceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalSrc"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REMOVE_ITEM"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lineItemIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkoutLineItemsRemove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}},{"kind":"Argument","name":{"kind":"Name","value":"lineItemIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lineItemIds"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userErrors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CheckoutFragment"},"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":4760}};
    doc.loc.source = {"body":"fragment Image on Image {\n  id\n  originalSrc\n  altText\n}\n\nfragment PriceModel on MoneyV2 {\n  amount\n  currencyCode\n}\n\nfragment PriceRange on ProductPriceRange {\n  maxVariantPrice {\n    ...PriceModel\n  }\n  minVariantPrice {\n    ...PriceModel\n  }\n}\n\nfragment Variants on ProductVariantConnection {\n  edges {\n    node {\n      id\n      title\n      priceV2 {\n        ...PriceModel\n      }\n      currentlyNotInStock\n      availableForSale\n      unitPrice {\n        ...PriceModel\n      }\n      quantityAvailable\n    }\n  }\n}\n\nfragment Products on ProductConnection {\n  edges {\n    node {\n      id\n      title\n      productType\n      handle\n      priceRange {\n        ...PriceRange\n      }\n      variants(first: 250) {\n        ...Variants\n      }\n      images(first: 4) {\n        edges {\n          node {\n            ...Image\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment Collections on CollectionConnection {\n  edges {\n    node {\n      title\n      id\n      description\n      handle\n      image {\n        ...Image\n      }\n      products(first: 4) {\n        ...Products\n      }\n    }\n  }\n}\n\nquery GET_COLLECTIONS($amount: Int = 4) {\n  collections(first: $amount) {\n    ...Collections\n  }\n}\n\nquery GET_SINGLE_COLLECTION($handle: String!) {\n  collectionByHandle(handle: $handle) {\n    id\n    title\n    description\n    products(first: 250) {\n      ...Products\n    }\n  }\n}\n\nquery GET_SINGLE_PRODUCT($handle: String!) {\n  productByHandle(handle: $handle) {\n    id\n    title\n    description\n    availableForSale\n    options {\n      id\n      name\n      values\n    }\n    images(first: 4) {\n      edges {\n        node {\n          id\n          originalSrc\n        }\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          priceV2 {\n            amount\n          }\n          quantityAvailable\n          product {\n            id\n            priceRange {\n              ...PriceRange\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment CheckoutFragment on Checkout {\n  id\n  webUrl\n  totalTax\n  subtotalPrice\n  totalPrice\n  subtotalPriceV2 {\n    ...PriceModel\n  }\n  totalPriceV2 {\n    ...PriceModel\n  }\n  totalTaxV2 {\n    ...PriceModel\n  }\n  lineItems(first: 250) {\n    edges {\n      node {\n        id\n        title\n        variant {\n          id\n          title\n          selectedOptions {\n            name\n            value\n          }\n          priceV2 {\n            amount\n          }\n          image {\n            originalSrc\n          }\n          product {\n            handle\n          }\n        }\n        quantity\n      }\n    }\n  }\n}\n\n# Create checkout method\n# const [\n#     createCheckout,\n#     { data: createCheckoutData, loading: createLoading },\n#   ] = useMutation(CREATE_CHECKOUT);\n\n# Add item to checkout method\n# const [addItem, { data: addItemData, loading: addLoading }] = useMutation(\n#   UPDATE_CHECKOUT\n# );\n\nmutation CREATE_CHECKOUT($input: CheckoutCreateInput!) {\n  checkoutCreate(input: $input) {\n    checkout {\n      id\n      webUrl\n      subtotalPriceV2 {\n        ...PriceModel\n      }\n      totalPriceV2 {\n        amount\n      }\n      totalTaxV2 {\n        amount\n      }\n      lineItems(first: 5) {\n        edges {\n          node {\n            id\n            title\n            quantity\n            variant {\n              selectedOptions {\n                name\n                value\n              }\n              priceV2 {\n                amount\n              }\n              image {\n                originalSrc\n              }\n              product {\n                handle\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nmutation UPDATE_CHECKOUT(\n  $lineItems: [CheckoutLineItemInput!]!\n  $checkoutId: ID!\n) {\n  checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {\n    checkout {\n      id\n      webUrl\n      subtotalPriceV2 {\n        ...PriceModel\n      }\n      totalPriceV2 {\n        ...PriceModel\n      }\n      totalTaxV2 {\n        ...PriceModel\n      }\n\n      lineItems(first: 250) {\n        edges {\n          node {\n            id\n            title\n            quantity\n            unitPrice {\n              amount\n            }\n            variant {\n              selectedOptions {\n                name\n                value\n              }\n              priceV2 {\n                amount\n              }\n              image {\n                originalSrc\n              }\n              product {\n                handle\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nmutation REMOVE_ITEM($checkoutId: ID!, $lineItemIds: [ID!]!) {\n  checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {\n    userErrors {\n      message\n      field\n    }\n    checkout {\n      ...CheckoutFragment\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["GET_COLLECTIONS"] = oneQuery(doc, "GET_COLLECTIONS");
        
        module.exports["GET_SINGLE_COLLECTION"] = oneQuery(doc, "GET_SINGLE_COLLECTION");
        
        module.exports["GET_SINGLE_PRODUCT"] = oneQuery(doc, "GET_SINGLE_PRODUCT");
        
        module.exports["CREATE_CHECKOUT"] = oneQuery(doc, "CREATE_CHECKOUT");
        
        module.exports["UPDATE_CHECKOUT"] = oneQuery(doc, "UPDATE_CHECKOUT");
        
        module.exports["REMOVE_ITEM"] = oneQuery(doc, "REMOVE_ITEM");
        


/***/ }),

/***/ "YFKg":
/***/ (function(module, exports) {

module.exports = require("lscache");

/***/ }),

/***/ "bobz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return titlelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatCurrency; });
const titlelize = (handle, capitalized = false, unCapitlized = false) => {
  let title = handle;

  if (capitalized) {
    title = title.charAt(0).toUpperCase() + handle.slice(1);
  }

  if (unCapitlized) {
    title = title.charAt(0).toLowerCase() + handle.slice(1);
  }

  const strippedTitle = title.split("-").join(" ");
  return strippedTitle;
};
const formatCurrency = stringVal => {
  const value = parseFloat(stringVal);
  const formatter = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2
  });
  return formatter.format(value);
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hKtz":
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "kpvc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lscache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFKg");
/* harmony import */ var lscache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lscache__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const test = lscache__WEBPACK_IMPORTED_MODULE_1___default.a.get("cart");
const initialValues = test ? JSON.parse(test) : null;
const cartContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  cartContent: initialValues,
  setCartResponse: val => {}
});
const CartContextProvider = ({
  children
}) => {
  const {
    0: cartContent,
    1: setCartContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValues);

  const setCartResponse = res => {
    lscache__WEBPACK_IMPORTED_MODULE_1___default.a.set("cart", JSON.stringify(res));
    setCartContent(res);
  };

  return __jsx(cartContext.Provider, {
    value: {
      cartContent,
      setCartResponse
    }
  }, children);
};
const useCart = () => {
  const {
    cartContent,
    setCartResponse
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(cartContext);
  return {
    cartContent,
    setCartResponse
  };
};

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "uoHw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./styles/product/product.ts
var product = __webpack_require__("BWkH");

// CONCATENATED MODULE: ./components/ProductGallery/components/MainProductImage.tsx
var __jsx = external_react_default.a.createElement;



const MainProductImage = ({
  imageSrc,
  hasPlaceholder
}) => {
  return __jsx(product["c" /* MainImage */], null, __jsx("div", {
    style: {
      backgroundImage: `url(${imageSrc})`
    }
  }));
};

/* harmony default export */ var components_MainProductImage = (MainProductImage);
// CONCATENATED MODULE: ./components/ProductGallery/components/ThumbNailImages.tsx
var ThumbNailImages_jsx = external_react_default.a.createElement;


const ThumbNailImages = ({
  images
}) => {
  return ThumbNailImages_jsx("div", {
    className: "thumbnail-wrap"
  }, images.map(img => ThumbNailImages_jsx("div", {
    className: "thumbnail-image",
    key: img.node.id
  }, ThumbNailImages_jsx("img", {
    src: img.node.originalSrc
  }))));
};

/* harmony default export */ var components_ThumbNailImages = (ThumbNailImages);
// CONCATENATED MODULE: ./components/ProductGallery/ProductGallery.tsx
var ProductGallery_jsx = external_react_default.a.createElement;




const ProductGallery = ({
  hasMultipleImages,
  hasNoImage,
  images
}) => {
  const image = hasNoImage ? "/images/icons/2-SPAN.svg" : images[0].node.originalSrc;
  return ProductGallery_jsx(external_react_default.a.Fragment, null, ProductGallery_jsx(components_MainProductImage, {
    imageSrc: image,
    hasPlaceholder: hasNoImage
  }), hasMultipleImages && ProductGallery_jsx(components_ThumbNailImages, {
    images: images.splice(1)
  }));
};

/* harmony default export */ var ProductGallery_ProductGallery = __webpack_exports__["a"] = (ProductGallery);

/***/ }),

/***/ "vBmG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ misc_padding; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ misc_breakpoints; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ container; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ nav; });

// UNUSED EXPORTS: color, Wrap

// CONCATENATED MODULE: ./styles/misc/padding.ts
const padding = {
  sm: "8px",
  m: "16px",
  l: "32px",
  xl: "48px",
  xxl: "64px"
};
/* harmony default export */ var misc_padding = (padding);
// CONCATENATED MODULE: ./styles/misc/breakpoints.ts
const breakpoints = {
  sm: "400px",
  md: "767px",
  l: "969px",
  lg: "1199px",
  xl: "1399px"
};
/* harmony default export */ var misc_breakpoints = (breakpoints);
// CONCATENATED MODULE: ./styles/misc/color.ts
const color = {
  button: "#4389f7"
};
/* harmony default export */ var misc_color = (color);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./styles/elements/container.ts



const Container = external_styled_components_default.a.div.withConfig({
  displayName: "container__Container",
  componentId: "emhwuf-0"
})(["width:100%;position:relative;padding:0 ", ";margin:0 auto;max-width:1460px;@media screen and (min-width:", "){padding:0 ", ";}"], misc_padding.sm, misc_breakpoints.md, misc_padding.l);
/* harmony default export */ var container = (Container);
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__("hKtz");

// CONCATENATED MODULE: ./styles/elements/nav.ts



const Nav = external_styled_components_default.a.nav.withConfig({
  displayName: "nav__Nav",
  componentId: "sc-7lfqsw-0"
})(["padding:1.2rem 0;display:flex;justify-content:flex-end;align-items:center;background-color:white;border-bottom:1px solid #dfdfdf;a{color:black;font-weight:600;text-decoration:none;&:not(:last-child){margin-right:2em;}&:hover{color:#a88687;}}.active{color:#a88687;}.dropdown{position:relative;display:inline-block;font-weight:600;margin-right:2em;&:hover{cursor:pointer;.dropdown-content{display:block;}}.dropdown-content{display:none;position:absolute;right:0;z-index:8;}ul{position:relative;background-color:white;list-style-type:none;box-shadow:0px 1px 8px ", ";padding:", ";&:before,&:after{content:\"\";position:absolute;bottom:100%;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid #dfdfdf;right:10px;}&:after{border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:9px solid white;transform:translateX(-1px);}li{padding:", " 0;}}}"], Object(external_polished_["rgba"])("#000", 0.12), misc_padding.m, misc_padding.sm);
/* harmony default export */ var nav = (Nav);
// CONCATENATED MODULE: ./styles/elements/wrap.ts


const Wrap = external_styled_components_default.a.div.withConfig({
  displayName: "wrap__Wrap",
  componentId: "sc-1ry9v0c-0"
})(["margin-top:2rem;@media screen and (min-width:", "){margin-top:3rem;}"], misc_breakpoints.md);
/* harmony default export */ var wrap = (Wrap);
// CONCATENATED MODULE: ./styles/index.ts







/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });