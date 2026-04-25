import "./Cart.css"
const Cart = ({ cart,handleRemoveBottle }) => {
    return (
        <div className="cart-container">
            {
                cart.map(item =>(<div key={item.id}>
                    <img src={item.img} alt="" />
                    <button onClick={()=>handleRemoveBottle(item)}>X</button>
                </div>))
            }
            
        </div>
    );
};

export default Cart;