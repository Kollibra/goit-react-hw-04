import css from './ImageModal.module.css';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
const modalStyle = {
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    height: '50%',
    border: 'none',
  },
};

const ImageModal = ({ onCloseModal, content }) => {
  return (
    <>
      <ReactModal
        isOpen={true}
        onRequestClose={onCloseModal}
        shouldCloseOnEsc={true}
        style={modalStyle}
      >
        <img className={css.img} src={content.urls.regular} width={'100%'} height={'100%'} />
      </ReactModal>
    </>
  );
};
export default ImageModal;