import { Icon } from "@iconify/react";



const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Icon icon={"ph:book-fill"} className='navbar-logo-icon' />
        <h1>
          Book <span>Inc</span>
        </h1>
      </div>

      <ul className='navbar-list'>
        <li className='navbar-list-cart'>
          <Icon icon='ph:handbag-fill' className='navbar-list-cart-icon' />
          <span>0</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
