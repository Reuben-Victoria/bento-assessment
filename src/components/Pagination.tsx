import Button from "./Button";

import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  /**
   * current page
   */
  page: number;
  total_pages: number;
  /**
   * meta
   * @default - { page: 1 }
   */
  /**
   * on page change
   * @param page
   * @default 1
   */
  setLimit: (limit: number) => void;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  page = 1,
  total_pages,
  onPageChange,
  setLimit,
}: Props) => {
  const pages = [10, 25, 50, 100];


  return (
    <div className='pagination'>
      <div className='pagination-rows'>
        <p className='pagination-text'>Items per page</p>
        <select
          data-testid='pagination-limit'
          onChange={(e) => {
            onPageChange(1);
            setLimit(+e.target.value);
          }}
          className='pagination-select'
        >
          {pages.map((page) => (
            <option key={page} value={page} data-testid={`limit-${page}`}>
              {page}
            </option>
          ))}
        </select>
      </div>
      <div className='pagination-buttons'>
        <p className='pagination-page-info'>
          Page {`${page}`} of{" "}
          {isNaN(total_pages) ? 0 : total_pages}
        </p>
        <Button
          className='pagination-button'
          type='button'
          data-testid='pagination-prev'
          variant='outlined'
          size='small'
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          <Icon icon='ph:caret-left' fontSize={"16"} />
        </Button>
        <Button
          className='pagination-button'
          type='button'
          size='small'
          data-testid='pagination-next'
          disabled={total_pages === page}
          variant='primary'
          onClick={() => onPageChange(page + 1)}
        >
          <Icon icon='ph:caret-right' fontSize={"16"} />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
