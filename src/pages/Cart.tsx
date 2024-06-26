import { Button, RenderIf } from "@/components";
import { useCartData } from "@/context";
import React from "react";

interface CheckoutProps {
  description: string;
  price: number;
}

interface CartItemProps {
  name: string;
  publisher: string;
  removeFromCart: () => void;
  quantity: number;
  price: number;
  id: number;
  updateQuantity: (quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  publisher,
  id,
  removeFromCart,
  quantity,
  price,
  updateQuantity,
}) => {
  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    updateQuantity(Number(event.target.value));
  };
  return (
    <div className='cartitem'>
      <div className='cartitem-container'>
        <div className='cartitem-cover'>
          <img src={"./book.jpeg"} alt='book-jpeg' />
        </div>
        <div className='cartitem-responsive'>
          <div className='cartitem-details'>
            <p>{name}</p>
            <span>{publisher}</span>
          </div>

          <div className='cartitem-details-actions'>
            <select
              name={id.toString()}
              value={quantity}
              onChange={handleQuantityChange}
            >
              {[...Array(10)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            <button onClick={removeFromCart}>Remove</button>
          </div>
        </div>
      </div>
      <div className='cartitem-actions'>
        <select
          name={id.toString()}
          value={quantity}
          onChange={handleQuantityChange}
        >
          {[...Array(10)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <button onClick={removeFromCart}>Remove</button>
      </div>

      <p className='cartitem-price'>${price}.00</p>
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

const Cart = ({ children }: { children: React.ReactNode }) => {
  const { cartData, removeFromCartData, updateCartQuantity, setCartData } =
    useCartData();

  const totalPrice = cartData?.reduce(
    (accum, item) => accum + item?.price! * item?.quantity!,
    0
  );

  const checkoutData = [
    { description: "Subtotal", price: totalPrice },
    { description: "Shipping", price: 40 },
    { description: "Tax", price: 80 },
  ];
  return (
    <div className='cart'>
      <div className='cart-action'>
        <h2>
          Shopping <span className='cart-action-label'>Bag</span>
        </h2>
        {children}
      </div>

      <RenderIf condition={!!cartData.length}>
        <div className='cart-items hide-scroll-bar'>
          {cartData?.map((books) => {
            const pricePerItem = books?.price! * books?.quantity!;
            return (
              <CartItem
                name={books?.Title}
                publisher={books?.Publisher}
                id={books?.id}
                key={books?.id}
                price={pricePerItem}
                quantity={books?.quantity!}
                updateQuantity={(quantity) =>
                  updateCartQuantity(books.id, quantity)
                }
                removeFromCart={() => removeFromCartData(books?.id)}
              />
            );
          })}
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
              <span>${totalPrice + 40 + 80}.00</span>
            </div>
          </div>

          <div className='cart-button'>
            <Button
              variant='primary'
              onClick={() => {
                localStorage.removeItem("cartData");
                setCartData([]);
              }}
              size='medium'
            >
              Checkout
            </Button>
          </div>
        </div>
      </RenderIf>

      <RenderIf condition={!cartData?.length}>
        <p className='cart-empty'>
          Shopping <span>Bag</span> is empty!
        </p>
      </RenderIf>
    </div>
  );
};

export default Cart;
