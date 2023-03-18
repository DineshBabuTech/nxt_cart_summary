import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const total = cartList.map(eachItem => eachItem.price)
      const ItemsCount = cartList.length
      return (
        <div className="cart-summary-cont">
          <div className="cart-content-cont">
            <p className="order-text">
              Order Total: <span className="span-item">RS {total}/-</span>
            </p>
            <p className="items-cart">{ItemsCount} Items in cart</p>
            <button className="checkout-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
