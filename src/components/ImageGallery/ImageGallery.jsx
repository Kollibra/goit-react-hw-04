import ImageCard from './ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items, onModalOpen }) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <li
          key={item.id}
          className={css.galleryItem}
          onClick={() => {
            
            onModalOpen(item);
          }}
        >
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;