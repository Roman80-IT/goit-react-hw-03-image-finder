import ReactModal from 'react-modal';
import { Image } from './Modal.styled';

export const Modal = ({ url, onModalClose, query }) => {
  return (
    <ReactModal
      isOpen={url !== ''}
      onRequestClose={onModalClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.807)',
        },
        content: {
          position: 'fixed',
          right: 0,
          bottom: 0,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'fit-content',
          height: 'fit-content',
          overflow: 'auto',
          padding: 0,
          border: 'transparent',
        },
      }}
    >
      <Image src={url} alt={query}></Image>
    </ReactModal>
  );
};
