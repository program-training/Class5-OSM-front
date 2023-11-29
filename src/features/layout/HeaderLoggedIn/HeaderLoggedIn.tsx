import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import HeaderLogo from "./HeaderLogo";
import NavigationMenu from "./NavigationMenu";
import UserMenu from "./UserMenu";
import { Box } from "@mui/material";

const HeaderLoggedIn = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex" }}>
            <HeaderLogo />
            <NavigationMenu
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
              handleOpenNavMenu={handleOpenNavMenu}
            />
          </Box>
          <Box>
            <UserMenu
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
              handleOpenUserMenu={handleOpenUserMenu}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderLoggedIn;
