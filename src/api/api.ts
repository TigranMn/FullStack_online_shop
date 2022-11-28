import {
   collection,
   getDocs,
   limit,
   query,
   startAfter,
   startAt
} from 'firebase/firestore';
import { db } from '../firebase';

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

export const getSize = async (url: string) => {
   const querySnapshot = await getDocs(collection(db, url));
   return querySnapshot.size;
};

export default getData;
