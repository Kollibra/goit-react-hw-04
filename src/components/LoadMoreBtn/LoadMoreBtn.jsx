import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.btnContainer}>
      <button className={css.loadMoreBtn} onClick={onClick} type="click">
        Load More
      </button>
    </div>
  );
};
export default LoadMoreBtn;