import { motion } from 'framer-motion';

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
      <img src={webformatURL} alt={tags} />
    </motion.li>
  );
};
