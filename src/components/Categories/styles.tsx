import { styled } from '@mui/material/styles';
import {  Box, Typography } from '@mui/material';

export const Category = styled(Box)(({theme})=>({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem",
    margin: "2rem 1rem",
    border: "2px solid rgb(40, 34, 66)",
    borderRadius: "8px",
    // [theme.breakpoints.down("sm")] : {
        
    // }
}))


export const CategoryName = styled(Typography)(({theme})=>({
    fontFamily: " 'Montez' , 'Cursive'",
     [theme.breakpoints.down("sm")] : {
        fontSize: "20px",
        fontWeight: "bold"
    }
}))



