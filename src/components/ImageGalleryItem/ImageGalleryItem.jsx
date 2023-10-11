import { motion } from 'framer-motion';

import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  tags,
  onImageClick,
}) => {
  return (
    <motion.li
      onClick={() => onImageClick(largeImageURL)}
      whileHover={{ scale: 1.02 }}
    >
      <Image src={webformatURL} alt={tags} />
    </motion.li>
  );
};
