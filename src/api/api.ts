import { User } from 'firebase/auth';
import {
   collection,
   doc,
   DocumentData,
   DocumentSnapshot,
   getDoc,
   getDocs,
   limit,
   Query,
   query,
   QuerySnapshot,
   startAt,
   where
} from 'firebase/firestore';
import { db } from '../firebase';
import { TProduct } from '../types';

const getData = async (url: string): Promise<QuerySnapshot<DocumentData>> => {
   const querySnapshot = await getDocs(collection(db, url));
   return querySnapshot;
};

export const getPageProducts = async (
   url: string,
   page: number,
   itemCount: number
): Promise<QuerySnapshot<DocumentData>> => {
   let querySnapshot = await getDocs(collection(db, url));
   const q: Query<DocumentData> = query(
      collection(db, url),
      limit(itemCount),
      startAt(querySnapshot.docs[(page - 1) * itemCount])
   );
   querySnapshot = await getDocs(q);
   return querySnapshot;
};

export const fetchSize = async (url: string): Promise<number> => {
   const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, url));
   return querySnapshot.size;
};

export const getUser = async (user: User) => {
   const q: Query<DocumentData> = query(collection(db, 'users'), where('id', '==', user.uid));
   const data: QuerySnapshot<DocumentData> = await getDocs(q);
   return data.docs[0].data();
};

export const getProduct = async (url: string, id: string): Promise<TProduct> => {
   const snap: DocumentSnapshot<DocumentData> = await getDoc(doc(db, url, id));
   if (snap.exists()) {
      return snap.data() as TProduct;
   } else {
      throw new Error('Product doesnt exist');
   }
};

export default getData;
