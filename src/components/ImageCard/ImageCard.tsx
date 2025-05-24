import { ModalImg, Photo } from '../App/App.types';
import css from './ImageCard.module.css';

type ImageCardProps = {
  image: Photo;
  openModal: (img: ModalImg) => void;
};

const ImageCard = ({ image, openModal }: ImageCardProps) => {
  const { urls, alt_description, color } = image;
  return (
    <div className={css.imageThumb} style={{ backgroundColor: color, borderColor: color }}>
      <img
        className={css.img}
        src={urls.small}
        alt={alt_description === typeof 'string' ? alt_description : ''}
        onClick={() =>
          openModal({
            alt: alt_description === typeof 'string' ? alt_description : '',
            src: urls.regular,
          })
        }
      />
    </div>
  );
};

export default ImageCard;
