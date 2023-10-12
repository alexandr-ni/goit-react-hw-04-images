import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <Gallery>
      {images.map(img => {
        return (
          <ImageGalleryItem
            key={img.id}
            picture={img.webformatURL}
            largeImg={img.largeImageURL}
            tags={img.tags}
            openModal={openModal}
          />
        );
      })}
    </Gallery>
  );
};
