export type ModalImg = {
  alt: string;
  src: string;
};

export type Photo = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  color: string;
};

export type PhotoApiResponse = {
  results: Photo[];
  total_pages: number;
  total: number;
};
