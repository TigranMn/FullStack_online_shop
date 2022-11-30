import {
   collection,
   doc,
   DocumentData,
   DocumentSnapshot,
   getDoc,
   getDocs,
   limit,
   query,
   QuerySnapshot,
   startAt
} from 'firebase/firestore';
import { db } from '../firebase';
import { TProduct } from '../types';

const getData = async (url: string, currentPage: number = 1) => {
   let querySnapshot = await getDocs(collection(db, url));
   if (url === '/categories') return querySnapshot;
   else {
      querySnapshot = await getDocs(collection(db, url));
      const q = query(
         collection(db, url),
         limit(6),
         startAt(querySnapshot.docs[currentPage * 6 - 6])
      );
      querySnapshot = await getDocs(q);
      return querySnapshot;
   }
};

export const fetchSize = async (url: string) => {
   const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
      collection(db, url)
   );
   return querySnapshot.size;
};

export const getProduct = async (
   url: string,
   id: string
): Promise<TProduct> => {
   const snap: DocumentSnapshot<DocumentData> = await getDoc(doc(db, url, id));
   if (snap.exists()) {
      return snap.data() as TProduct;
   } else {
      throw new Error('Product doesnt exist');
   }
};

export default getData;
