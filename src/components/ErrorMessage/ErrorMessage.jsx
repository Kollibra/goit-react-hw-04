import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.errorContainer}>
      <p className={css.error}>...Ups...</p>
    </div>
  );
};

export default ErrorMessage;