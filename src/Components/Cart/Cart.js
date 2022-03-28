import "./Cart.css";
import Selected from "../Selected/Selected";
const Cart = (props) => {
  const { cart, allClear, randomNumber } = props;

  return (
    <div className="cart">
      <h1>Selected Frize</h1>

      {cart.map((cart) => (
        <Selected cart={cart}></Selected>
      ))}
      <button onClick={randomNumber}>choose 1 for me</button>
      <br />
      <br />
      <button onClick={allClear}>choose agin</button>
    </div>
  );
};

export default Cart;
