import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Icon } from "@iconify/react";

type BookCardType = {
  books: Partial<BookType>;
  addToBag: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const BookCard: React.FC<BookCardType> = ({ books, addToBag }) => {
  const navigate = useNavigate();
  return (
    <div className='card' onClick={() => navigate(`/${books?.id}`)}>
      <div className='card-details'>
        <div className='card-wrapper'>
          <div className='card-wrapper-image'>
            <img src={"./book.jpeg"} alt='book' />
          </div>

          <div className='card-details-book'>
            <div>
              <h4 className='card-title clamped-text'>{books?.Title}</h4>
              <p className='card-author'>{books?.Publisher}</p>
            </div>
            <p className='card-notes clamped-text' title={books?.Notes![0]}>
              {books?.Notes![0]}
            </p>
          </div>
        </div>

        <p className='card-details-year'>{books?.Year}</p>
      </div>
      <div className='card-actions'>
        <Button
          size='small'
          variant='outlined'
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();
            addToBag(e);
          }}
        >
          <div>
            <Icon icon={"ph:heart"} className='icon-card' />
            <span>Add to Bag</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
