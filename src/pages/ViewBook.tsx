import { useParams } from "react-router-dom";
import { Button, RenderIf } from "@/components";
import { useGetBookById } from "@/hooks";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useCartData } from "@/context";

const Tags = ({ tag }: { tag: string }) => {
  return <div className='tag'>{tag}</div>;
};

const SkeletonLoader = () => {
  return (
    <div className='skeleton-view-book'>
      <div className='skeleton-view-book-info'>
        <div className='skeleton-view-book-name skeleton-line'></div>
        <div className='skeleton-view-book-review'>
          <div className='skeleton-view-book-price skeleton-line'></div>
          <div className='skeleton-view-book-rating'>
            <div className='skeleton-view-book-rating-stars skeleton-line'></div>
            <div className='skeleton-view-book-rating-reviews skeleton-line'></div>
          </div>
        </div>
        <div className='skeleton-view-book-publisher'>
          <div className='skeleton-line'></div>
          <div className='skeleton-line'></div>
          <div className='skeleton-line'></div>
        </div>
        <div className='skeleton-view-book-notes'>
          <div className='skeleton-line'></div>
          <div className='skeleton-line'></div>
          <div className='skeleton-line'></div>
        </div>
        <div className='skeleton-view-book-stock skeleton-line'></div>
        <div className='skeleton-view-book-villains'>
          <div className='skeleton-view-book-villains-title skeleton-line'></div>
          <div className='skeleton-view-book-villains-tags'>
            <div className='skeleton-line'></div>
            <div className='skeleton-line'></div>
            <div className='skeleton-line'></div>
          </div>
        </div>
        <div className='skeleton-view-book-button skeleton-line'></div>
        <div className='skeleton-view-book-guarantee skeleton-line'></div>
      </div>
      <div className='skeleton-view-book-image skeleton-line'></div>
    </div>
  );
};

const ViewBook = () => {
  const { id } = useParams();
  const { data, isPending } = useGetBookById(id!);
  const { addToCart } = useCartData();
  return (
    <>
      <RenderIf condition={!!isPending}>
        <SkeletonLoader />
      </RenderIf>

      <RenderIf condition={!isPending}>
        <div className='view'>
          <div className='view-info'>
            <h2 className='view-name'>{data?.Title}</h2>
            <div className='view-review'>
              <p>$50</p>
              <div className='view-rating'>
                <div className='view-rating-icons'>
                  {Array.from({ length: 4 }, (_, index) => {
                    return <Icon icon={"ph:star-fill"} key={index} />;
                  })}
                  <Icon icon={"ph:star-half-fill"} />
                </div>

                <span>1624 reviews</span>
              </div>
            </div>
            <div className='view-publisher'>
              <p className='view-publisher-name'>{data?.Publisher}</p>
              <span>{data?.Year}</span>
              <span>{data?.ISBN}</span>
            </div>
            <p className='view-notes'>
              {data?.Notes[0] !== ""
                ? data?.Notes?.map((notes) => {
                    return <span>{notes}</span>;
                  })
                : "---"}
            </p>
            <div className='view-stock'>
              <Icon icon={"ph:check-bold"} className='view-stock-icon' />
              <p>In stock and ready to ship</p>
            </div>

            <div className='view-villains'>
              <h4>Villains</h4>
              <div className='view-tags'>
                {data?.villains?.map((items, index) => {
                  return <Tags tag={items?.name} key={index} />;
                })}
              </div>
            </div>
            <Button
              variant='primary'
              size='medium'
              onClick={() => addToCart(data!)}
            >
              Add to bag
            </Button>
            <div className='view-guarantee'>
              <Icon icon='ph:shield-check' className='view-guarantee-icon' />
              <p> Lifetime Guarantee</p>
            </div>
          </div>
          <div className='view-image'>
            <img src='./book.jpeg' alt='Book' />
          </div>
        </div>
      </RenderIf>
    </>
  );
};

export default ViewBook;
