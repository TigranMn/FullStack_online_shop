import { Pagination } from '@mui/material';

type TPagination = {
   currentPage: number;
   onChange: (page: number) => void;
   pages: number;
};

export default function MyPagination({ currentPage, onChange, pages }: TPagination) {
   return (
      <Pagination
         shape='rounded'
         showFirstButton
         showLastButton
         variant='outlined'
         page={currentPage}
         onChange={(_: unknown, page: number) => {
            onChange(page);
         }}
         count={pages}
      />
   );
}
