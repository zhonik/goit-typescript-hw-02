import Modal, { Styles } from 'react-modal';

type ImageModalProps = {
  alt: string;
  src: string;
  modalIsOpen: boolean;
  closeModal: () => void;
};

const customStyles: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.97)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ alt, src, modalIsOpen, closeModal }: ImageModalProps) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        {modalIsOpen && (
          <div>
            <img src={src} alt={alt} />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;
