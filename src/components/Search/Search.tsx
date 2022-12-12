import { TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';

type TSearchProps = {
   handleSearch: (text: string) => void;
};

function Search({ handleSearch }: TSearchProps) {
   const [text, setText] = useState<string>('');

   const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      setText(text);
      handleSearch(text);
   };

   return (
      <TextField
         id="standard-basic"
         label="Search"
         variant="standard"
         value={text}
         onChange={(e) => {
            handleOnChange(e as ChangeEvent<HTMLInputElement>);
         }}
      />
   );
}

export default Search;
