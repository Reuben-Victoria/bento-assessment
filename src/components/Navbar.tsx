import { Icon } from "@iconify/react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { motion } from "framer-motion";
import { Cart } from "@/pages";
import { useCartData } from "@/context";


const Navbar = () => {
  const { cartData } = useCartData();

  const totalItemsInBag = cartData?.reduce(
    (accum, currentValue) => accum + currentValue?.quantity!,
    0
  );

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Icon icon={"ph:book-fill"} className='navbar-logo-icon' />
        <h1>
          Book <span>Inc</span>
        </h1>
      </div>

      <ul className='navbar-list'>
        <li>
          <Popover className='relative'>
            {({ open }) => (
              <>
                <PopoverButton as='div' className='navbar-list-cart'>
                  <Icon
                    icon='ph:handbag-fill'
                    className='navbar-list-cart-icon'
                  />
                  <span>{totalItemsInBag}</span>
                </PopoverButton>
                {open && <div className='cart-overlay'></div>}
                <Transition
                  leave='transition ease-in duration-200'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <PopoverPanel
                    as={motion.div}
                    initial={{ y: "20%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "tween", duration: 0.3 }}
                    exit={{
                      opacity: 0,
                      y: "20%",
                      transition: { duration: 0.3 },
                    }}
                    className='cart-modal'
                  >
                    <Cart>
                      <PopoverButton>
                        <Icon icon={"ph:x"} />
                      </PopoverButton>
                    </Cart>
                  </PopoverPanel>
                </Transition>
              </>
            )}
          </Popover>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
