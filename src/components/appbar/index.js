import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppBarDesktop from "./appbarDesktop";
import AppBarMobile from "./appbarMobile";

const AppBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <>
        {matches ? (
          <>
            <AppBarMobile matches={matches} />
          </>
        ) : (
          <>
            <AppBarDesktop matches={matches} />
          </>
        )}
      </>
    </div>
  );
};

export default AppBar;
