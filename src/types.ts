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
   pages: number;
};

export type TCategory = {
   id: string;
   name: string;
   imgUrl: string;
   description: string;
};

export type TUser = {
   id: string;
   email: string;
   token: string;
   name: string;
   lastName: string;
};
