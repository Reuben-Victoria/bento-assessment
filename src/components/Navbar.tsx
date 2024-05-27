import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const modalRef = useRef(null!);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !(modalRef.current as HTMLDivElement).contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleGlobalClick);
    } else {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleGlobalClick);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleGlobalClick);
    };
  }, [isOpen]);

  const totalItemsInBag = cartData?.reduce(
    (accum, currentValue) => accum + (currentValue?.quantity! ?? 0),
    0
  );

  return (
    <nav className='navbar'>
      <div className='navbar-logo' onClick={() => navigate("/")}>
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
                <PopoverButton
                  as='div'
                  className='navbar-list-cart'
                  onClick={() => setIsOpen(!open)}
                >
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
                    ref={modalRef}
                    className='cart-modal'
                  >
                    <Cart>
                      <PopoverButton onClick={() => setIsOpen(!open)}>
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
