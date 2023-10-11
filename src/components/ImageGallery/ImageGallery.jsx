import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ image, onImageClick }) => {
  return (
    <List>
      {image.map(({ largeImageURL, webformatURL, tags, id }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          onImageClick={onImageClick}
        ></ImageGalleryItem>
      ))}
    </List>
  );
};
