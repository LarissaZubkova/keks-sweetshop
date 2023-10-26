export type CakeCard = {
  id: string;
  title: string;
  category: string;
  type: string;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
}


export type CakeFullCard = {
    id: string;
    title: string;
    category: string;
    type: string;
    description: string;
    price: number;
    previewImage: string;
    previewImageWebp: string;
    images: string[];
    weight: number;
    rating: number;
    isFavorite: boolean;
    isNew: boolean;
    reviewCount: number;
}
