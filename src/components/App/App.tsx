import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import css from './App.module.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { getPhotos } from '../../photos-api';
import { ModalImg, Photo } from './App.types';

const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadbtn, setLoadbtn] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<ModalImg>({
    alt: '',
    src: '',
  });

  useEffect(() => {
    if (!query) return;

    const fetchPhotos = async (): Promise<void> => {
      setLoading(true);

      try {
        setError(null);
        setLoadbtn(false);
        const { results, total_pages } = await getPhotos(query, page);
        setPhotos((prevPhoto) => [...prevPhoto, ...results]);
        setLoadbtn(page < total_pages);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Something went wrong!');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [page, query]);

  const onHandleSubmit = (value: string): void => {
    setQuery(value);
    setPhotos([]);
    setPage(1);
    setError(null);
    setLoadbtn(false);
  };

  const onLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (img: ModalImg): void => {
    setModalIsOpen(true);
    setModalImg(img);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
    setModalImg({
      alt: '',
      src: '',
    });
  };

  return (
    <div>
      <SearchBar onSubmit={onHandleSubmit} />
      <div className={css.container}>
        {photos.length > 0 && <ImageGallery images={photos} openModal={openModal} />}
        {error && <ErrorMessage message={error} />}
        <Loader loading={loading} />
        {loadbtn && <LoadMoreBtn onClick={onLoadMore} />}
        <ImageModal {...modalImg} closeModal={closeModal} modalIsOpen={modalIsOpen} />
      </div>
    </div>
  );
};

export default App;
