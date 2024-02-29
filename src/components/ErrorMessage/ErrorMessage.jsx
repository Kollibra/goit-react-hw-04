import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.errorContainer}>
      <p className={css.error}>...Oops... something wrong...</p>
    </div>
  );
};

export default ErrorMessage;