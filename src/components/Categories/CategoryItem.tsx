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
                  src='https://m.media-amazon.com/images/S/aplus-media/vc/09b95e40-642d-4bc0-926e-5d3243ba4a63.__CR0,0,300,300_PT0_SX300_V1___.jpg'
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
