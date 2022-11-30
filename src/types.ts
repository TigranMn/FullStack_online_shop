export type TProduct = {
   id: string | null;
   price: number | null;
   name: string | null;
   gender: string | null;
   imgUrl: string | undefined;
   count: number | null;
   views: number | null;
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
};
