import Button from "./Button";
import { Icon } from "@iconify/react";

const BookCard = () => {
  return (
    <div className='card'>
      <div className='card-details'>
        <div className='card-details-book'>
          <h4 className='card-title'>The Shining</h4>
          <p className='card-author'>Stephen King</p>
        </div>
        <p className="card-details-year">2023</p>
      </div>
      <div className='card-actions'>
        <Button size='small' variant='primary'>
          <Icon icon={"ph:books"} className="icon-card"/>
          <span>Read More</span>
        </Button>
        <Button size='small' variant='outlined'>
          <Icon icon={"ph:heart"} className="icon-card"/>
          <span>Favorite</span>
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
