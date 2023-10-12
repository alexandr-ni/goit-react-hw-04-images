import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export const ImageGalleryItem = ({ picture, largeImg, tags, openModal }) => {
  return (
    <GalleryItem>
      <GalleryItemImage
        src={picture}
        alt={tags}
        onClick={() => openModal(largeImg)}
      />
    </GalleryItem>
  );
};
