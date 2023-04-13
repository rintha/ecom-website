import { React, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [Items, SetItems] = useState([]);

  const addItemToCartHandler = (item) => {
    console.log(item);
    const multipleitem = Items.find((cartitem) => cartitem.id === item.id);
    if (multipleitem) {
      multipleitem.quantity += item.quantity;
      const newupdateditem = Items.map((crtitm) =>
        crtitm.id === item.id ? multipleitem : crtitm
      );
      SetItems(newupdateditem);
      console.log(newupdateditem);
    } else {
      SetItems([...Items, item]);
    }
  };

  const removeItemFromCartHandler = (id) => {
    const updatedItems = [...Items];
    const updatedItemIndex = updatedItems.findIndex((item) => item.id === id);
  
    if (updatedItemIndex >= 0) {
      const updatedItem = { ...updatedItems[updatedItemIndex] };
      updatedItem.quantity -= 1;
  
      if (updatedItem.quantity === 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }
  
      SetItems(updatedItems);
    }
  };  

  const updateItemHandler = (id, quantity) => {
    const updatedItems = [...Items];
    const updatedItemIndex = updatedItems.findIndex((item) => item.id === id);
  
    if (updatedItemIndex >= 0) {
      if (quantity <= 0) {
        // Remove the item from the cart if the quantity becomes 0 or less
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        const updatedItem = { ...updatedItems[updatedItemIndex] };
        updatedItem.quantity = quantity;
        updatedItems[updatedItemIndex] = updatedItem;
      }
      SetItems(updatedItems);
    }
    else {
      console.error(`Item with id ${id} not found in cart`);
    }
  };
  

  const CartProContext = {
    items: Items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    updateItem: updateItemHandler,
  };
  return (
    <CartContext.Provider value={CartProContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
