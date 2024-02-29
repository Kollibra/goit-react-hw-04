import { useState, useEffect } from 'react';
// import searchImages from '../api';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageModal from './ImageModal/ImageModal';

const App = () => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [btnLoadMore, setBtnLoadMore] = useState(false);

  const onSubmit = query => {
    if (query === searchValue) {
      return;
    }
    setSearchValue(query);
    setImages([]);
    setPage(1);
  };
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await searchImages(searchValue, page);
        const { results, total_pages } = data;
        setImages(prev => [...prev, ...results]);
        setBtnLoadMore(total_pages && total_pages !== page);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    if (searchValue === '') {
      return;
    }
    setLoader(true);
    fetchImages();
  }, [page, searchValue]);

  const onClick = () => {
    setPage(page + 1);
  };

  const onOpenModal = content => {
    setModalContent(content);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />

      {images.length > 0 && (
        <ImageGallery items={images} onModalOpen={onOpenModal} />
      )}
      {error && <ErrorMessage />}

      {loader && <Loader />}
      {btnLoadMore && <LoadMoreBtn onClick={onClick} />}

      {showModal && (
        <ImageModal onCloseModal={onCloseModal} content={modalContent} />
      )}
    </>
  );
};

export default App;