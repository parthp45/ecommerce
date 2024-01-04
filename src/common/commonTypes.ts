export interface CartSliceType {
  cart: {
    open: boolean;
    cartItems: CartItem[];
  };
}
export interface CartItem {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
  quantity?: number;
}
