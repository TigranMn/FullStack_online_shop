import { AppBarContainer, AppBarHeader } from "../../styles/appbar";
import { IconButton, Box, TextField, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import Actions from "./actions";

const AppBarMobile = ({ matches }) => {
  const [language, setLanguage] = useState("am");
  return (
    <AppBarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <AppBarHeader textAlign="center" variant="h4">
        elite shop
      </AppBarHeader>
      <Box width={"90px"}>
        <TextField
          size="small"
          select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <MenuItem value="am">ARM </MenuItem>
          <MenuItem value="rus">RUS</MenuItem>
          <MenuItem value="en">ENG</MenuItem>
        </TextField>
      </Box>
      <Actions matches={matches} />
    </AppBarContainer>
  );
};

export default AppBarMobile;
