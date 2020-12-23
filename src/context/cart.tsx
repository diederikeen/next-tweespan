import { createContext, useContext, useState } from "react";
import lscache from "lscache";

const test = lscache.get("cart");

const initialValues = test ? JSON.parse(test) : null;
const cartContext = createContext({
  cartContent: initialValues,
  setCartResponse: (val: object) => {},
});

interface Props {
  children: React.Component;
}

export const CartContextProvider = ({ children }: Props) => {
  const [cartContent, setCartContent] = useState(initialValues);

  const setCartResponse = (res: object) => {
    lscache.set("cart", JSON.stringify(res));
    setCartContent(res);
  };

  return (
    <cartContext.Provider
      value={{
        cartContent,
        setCartResponse,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => {
  const { cartContent, setCartResponse } = useContext(cartContext);
  return {
    cartContent,
    setCartResponse,
  };
};
