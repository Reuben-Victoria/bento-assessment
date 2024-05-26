import React from "react";
import Button from "./Button";
import book from "@/assets/book.jpeg";
import { Icon } from "@iconify/react";

interface BookCardType {
  title: string;
  year: number;
  author: string;
  notes: string[];
  addToBag: () => void;
}

const BookCard: React.FC<BookCardType> = ({ title, year, author, notes, addToBag }) => {
  return (
    <div className='card'>
      <div className='card-details'>
        <div className='card-wrapper'>
          <div className='card-wrapper-image'>
            <img src={book} alt='book' />
          </div>

          <div className='card-details-book'>
            <div>
              <h4 className='card-title clamped-text'>{title}</h4>
              <p className='card-author'>{author}</p>
            </div>
            <p className='card-notes clamped-text' title={notes[0]}>
              {notes[0]}
            </p>
          </div>
        </div>

        <p className='card-details-year'>{year}</p>
      </div>
      <div className='card-actions'>
        <Button size='small' variant='outlined' onClick={addToBag}>
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
