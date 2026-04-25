const getCartFromLocalStorage=()=>{
    const allStoredCart=localStorage.getItem('cart');
    if(allStoredCart)
    {
        const carts=JSON.parse(allStoredCart);
        return  carts;
    }
    return [];
}

const setCartToLocalStorage=(id)=>{
   const storedCarts=getCartFromLocalStorage();
   storedCarts.push(id);
   saveCartToLocalStorage(storedCarts);
}

const saveCartToLocalStorage=(newcart)=>{
    const stringifiedCarts=JSON.stringify(newcart);
     if(stringifiedCarts){
        localStorage.setItem('cart',stringifiedCarts);
    }

   
  
}

const removeCartFromLocalStorage = (id) => {
  const allBottles = getCartFromLocalStorage();

  if (allBottles) {
    const remaining = allBottles.filter(itemId => itemId !== id);
    localStorage.setItem("cart", JSON.stringify(remaining));
  }
};
 export {setCartToLocalStorage,getCartFromLocalStorage,removeCartFromLocalStorage}