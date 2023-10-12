import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchImages } from './api';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Modal } from 'components/Modal/Modal';

export const App = () => {
  const [images, setImages] = useState([]);
  const [text, setText] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImg, setLargeImg] = useState('');

  const submitSearchBar = evt => {
    evt.preventDefault();
    setText(`${Date.now()}/${evt.currentTarget.lastElementChild.value}`);
    setImages([]);
    setPage(1);
    setLargeImg('');
  };

  const buttonLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    async function getImages() {
      if (text !== '') {
        try {
          localStorage.setItem('currentText', text.split('/').pop());
          localStorage.setItem('currentPage', page);
          setLoading(true);
          const imgs = await fetchImages();
          if (page === 1) {
            setImages(imgs.hits);
          } else {
            setImages(prevImages => [...prevImages, ...imgs.hits]);
          }
        } catch (error) {
          console.log('ERROR');
        } finally {
          setLoading(false);
        }
      }
    }

    getImages();
  }, [text, page]);

  const onCloseModal = e => {
    if (
      e.target.className ===
      'ReactModal__Content ReactModal__Content--after-open sc-qZruQ cHdZzS'
    ) {
      window.removeEventListener('click', onCloseModal);
      setShowModal(false);
      setLargeImg('');
    }
  };

  const onOpenModal = img => {
    setLargeImg(img);
    setShowModal(true);
    window.addEventListener('click', onCloseModal);
  };

  return (
    <Layout>
      <GlobalStyle />
      <Searchbar onSubmitSearchBar={submitSearchBar} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={onOpenModal} />
      )}
      {images.length > 0 && <Button loadMore={buttonLoadMore} />}
      {loading && <Loader />}
      <Modal
        isOpen={showModal}
        onClick={onCloseModal}
        onRequestClose={onCloseModal}
        largeImg={largeImg}
      />
    </Layout>
  );
};
