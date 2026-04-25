/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/set-state-in-effect */
import  { use, useEffect, useState } from 'react';
import "./Bottles.css"
import Bottle from '../Bottle/Bottle';
import { getCartFromLocalStorage, removeCartFromLocalStorage, setCartToLocalStorage } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';

const Bottles = ({bottlesPromise}) => {
    const bottles=use(bottlesPromise)
    // console.log(bottles)
    const [cart,setCart]=useState([]);
    
    const handleCart=(bottle)=>{
        //  console.log("Button Are Clicked",bottle)
        const newCart=[...cart,bottle];
        setCart(newCart);
        setCartToLocalStorage(bottle.id);

    }

    useEffect(()=>{
        const storedCart=getCartFromLocalStorage();
        const storedBottle=[];
        for( const id of storedCart){
            const cartBottle=bottles.find(bottle=>bottle.id===id);
            if (cartBottle){
                storedBottle.push(cartBottle);
            }
            

        }
        setCart(storedBottle);
    },[bottles])

    const handleRemoveBottle=(item)=>{
        // console.log("Button Clicked",item)
        const remainingBottles=cart.filter(bottle=>bottle.id!==item.id)
        setCart(remainingBottles)
        removeCartFromLocalStorage(item.id);
    }

    return (
       <div>
        <p>Total Bottles Selected:{cart.length}</p>
        <Cart cart={cart} handleRemoveBottle={handleRemoveBottle}></Cart>
         <div className='bottles-container'>
            {
                bottles.map(bottle=><Bottle bottle={bottle} key={bottle.id} handleCart={handleCart}></Bottle>)
            }            
        </div>
       </div>
    );
};

export default Bottles;