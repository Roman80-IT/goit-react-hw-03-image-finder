import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ image, onImageClick }) => {
  return (
    <ul>
      {image.map(({ largeImageURL, webformatURL, tags, id }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          onImageClick={onImageClick}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};
