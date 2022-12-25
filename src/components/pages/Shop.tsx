//Components
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import CategoriesList from '../Categories/CategoriesList';


export default function Shop() {
   return <CategoriesList />;
}
