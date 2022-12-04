export type TProduct = {
   id: string;
   price: number;
   name: string;
   gender: string;
   imgUrl: string;
   count: number;
   views: number;
   brand : string; 
   quantity : string
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
   id: string | null;
   email: string | null;
   token: string | null;
   name: string | null;
   lastName: string | null;
   basket: string[];
   likedProducts: string[];
};
