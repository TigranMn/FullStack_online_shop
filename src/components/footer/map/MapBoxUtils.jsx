// import { CountyEnum } from './CountyEnum';
import { mapCountry } from './MapBoxConstats';


function getCountyParams(type ) {
    console.log(mapCountry[type]);
    
   switch (type) {
    case 'AM': return mapCountry[type];
   
    default:
        return null;
   }
}
export default getCountyParams;