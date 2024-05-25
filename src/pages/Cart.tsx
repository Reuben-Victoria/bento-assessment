import { Button } from "@/components";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
interface CheckoutProps {
  description: string;
  price: number;
}

const CartItem = () => {
  return (
    <div className='cartitem'>
      <div className='cartitem-container'>
        <div className='cartitem-cover'>
          <div>Book Cover</div>
        </div>
        <div className='cartitem-responsive'>
          <div className='cartitem-details'>
            <p>Zip Tote Basket</p>
            <span>White and black</span>
          </div>

          <div className='cartitem-details-actions'>
            <select />
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className='cartitem-actions'>
        <select />
        <button>Remove</button>
      </div>

      <p className='cartitem-price'>$140.00</p>
    </div>
  );
};

const Checkout: React.FC<CheckoutProps> = ({ description, price }) => {
  return (
    <div className='cart-checkout-element'>
      <span>{description}</span>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

const Cart = () => {
  const checkoutData = [
    { description: "Subtotal", price: 30 },
    { description: "Shipping", price: 40 },
    { description: "Tax", price: 80 },
  ];
  return (
    <div className='cart'>
      <div className='cart-action'>
        <h2>
          Shopping <span>Cart</span>
        </h2>
        <button>
          <Icon icon={"ph:x"} />
        </button>
      </div>

      <div className='cart-items'>
        <CartItem />
      </div>

      <div className='cart-total'>
        <div className='cart-checkout'>
          {checkoutData?.map((items) => {
            const { description, price } = items;
            return (
              <Checkout
                description={description}
                price={price}
                key={description}
              />
            );
          })}
          <div className='cart-checkout-total'>
            <span>Order total</span>
            <span>$131.00</span>
          </div>
        </div>

        <div className='cart-button'>
          <Button variant='primary' size='medium'>
            Continue to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
