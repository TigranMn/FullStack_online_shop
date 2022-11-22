export type TProduct = {
  id: string;
  price: number;
  name: string;
  gender: string;
  imgUrl: string;
  count: number;
};

export type TProductState = {
  isLoading: boolean;
  isError: boolean;
  products: TProduct[];
};

export type TCategory = {
  id: string;
  name: string;
};
