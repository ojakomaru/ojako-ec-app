'use client';
import React, { useReducer, useContext } from 'react';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers';
import type { Product } from 'types/data';

type ShoppingCartContextType = {
  /**
   * カート内の商品リスト
   */
  cart: Product[];
  /**
   * 商品をカートに追加する関数
   * @param product 商品リスト
   */
  addProductToCart: (product: Product) => void;
  /**
   * 商品をカートから削除する関数
   * @param productId 商品ID
   */
  removeProductFromCart: (productId: number) => void;
};
const ShoppingCartContext = React.createContext<ShoppingCartContextType>({
  cart: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addProductToCart: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeProductFromCart: () => {},
});

export const useShoppingCartContext = (): ShoppingCartContextType =>
  useContext<ShoppingCartContextType>(ShoppingCartContext);

interface ShoppingCartContextProviderProps {
  children?: React.ReactNode;
}
/**
 * ショッピングカートコンテキストプロバイダー
 */
export const ShoppingCartContextProvider = ({
  children,
}: ShoppingCartContextProviderProps) => {
  const products: Product[] = [];
  // カートの状態を更新するためのリデューサー（reducer）関数と初期値を渡す
  const [cartState, dispatch] = useReducer(shopReducer, products);

  /**
   * 商品をカートに追加
   * @param product 商品
   * @description ADDアクションをディスパッチしてcartStateを更新
   */
  const addProductToCart = (product: Product) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
  };

  /**
   * 商品をカートから削除
   * @param productId 商品ID
   * @description REMOVEアクションをディスパッチしてcartStateを更新
   */
  const removeProductFromCart = (productId: number) => {
    dispatch({ type: REMOVE_PRODUCT, payload: productId });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart: cartState,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
