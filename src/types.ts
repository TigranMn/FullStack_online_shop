export type TProduct = {
   id: string;
   price: number;
   name: string;
   gender: string;
   imgUrl: string;
   count: number;
   views: number;
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

export type TUser = {
   id: string;
   email: string;
   token: string;
};
