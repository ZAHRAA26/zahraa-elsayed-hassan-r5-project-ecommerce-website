import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  cart: [],
  total: 0, // Keep track of the total price in the cart

  // Add product to cart or update quantity if it already exists
  addToCart: (product, count = 1) => {
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      let updatedCart;
      if (existingProduct) {
        // If the product exists, update its count
        updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + count }
            : item
        );
      } else {
        // If the product doesn't exist in the cart, add it
        updatedCart = [...state.cart, { ...product, count }];
      }

      // Calculate the new total
      const newTotal = updatedCart.reduce(
        (acc, item) => acc + (item.price * item.count),
        0
      );

      return {
        cart: updatedCart,
        total: newTotal, // Update the total price in the cart
      };
    });

    const { cart } = get();
  },

  // Remove a product from the cart and update the total
  removeFromCart: (productId) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== productId);

      // Calculate the new total after removal
      const newTotal = updatedCart.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
      return {
        cart: updatedCart,
        total: newTotal, // Update the total price
      };
    });
  },
}));

export default useCartStore;
