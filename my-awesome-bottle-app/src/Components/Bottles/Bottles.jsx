import  { use, useState } from 'react';
import "./Bottles.css"
import Bottle from '../Bottle/Bottle';

const Bottles = ({bottlesPromise}) => {
    const bottles=use(bottlesPromise)
    // console.log(bottles)
    const [cart,setCart]=useState([]);
    
    const handleCart=(bottle)=>{
        //  console.log("Button Are Clicked",bottle)
        const newCart=[...cart,bottle];
        setCart(newCart);

    }

    return (
       <div>
        <p>Total Bottles Selected:{cart.length}</p>
         <div className='bottles-container'>
            {
                bottles.map(bottle=><Bottle bottle={bottle} key={bottle.id} handleCart={handleCart}></Bottle>)
            }            
        </div>
       </div>
    );
};

export default Bottles;