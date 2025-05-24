import { FC } from 'react';
import { ModalImg, Photo } from '../App/App.types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

type ImageGalleryProps = {
  images: Photo[];
  openModal: (img: ModalImg) => void;
};

const ImageGallery = ({ images, openModal }: ImageGalleryProps) => {
  return (
    <ul className={css.galleryList}>
      {images.map((image) => (
        <li key={image.id} className={css.galleryItem}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
