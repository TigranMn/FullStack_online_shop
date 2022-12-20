import { Link } from 'react-router-dom';
//Styles
import {
   Category,
   CategoryDetail,
   CategoryContent,
   CategoryImageBox,
   CategoryImage,
   CategoryInfo
} from './styles';

type TCategoryItemProps = {
   category: {
      name: string;
      imgUrl: string;
      description: string;
      id: string;
   };
};

const CategoryItem = ({ category }: TCategoryItemProps) => {
   return (
      <Link to={`/shop/${category.name.toLowerCase()}`}>
         <Category>
            <CategoryContent></CategoryContent>
            <CategoryImageBox>
               <CategoryImage
                  src={category.imgUrl}
                  alt={category.name}
               />
            </CategoryImageBox>
            <CategoryInfo>
               <CategoryDetail variant='h5' className='category-name'>
                  {category.name}
               </CategoryDetail>
            </CategoryInfo>
         </Category>
      </Link>
   );
};

export default CategoryItem;
