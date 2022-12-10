export const useLiked = (likedProducts: string[], productId: string): boolean => {
   return likedProducts.includes(productId);
};
