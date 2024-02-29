import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css';
const Loader = () => {
  return (
    <div className={css.loadingContainer}>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#ffffff"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p>LOADING...</p>
    </div>
  );
};
export default Loader;