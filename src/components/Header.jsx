import * as React from 'react';
import { AppBar, Toolbar } from "@material-ui/core";

const navLinks = [
    { title: `about us`, path: `/service` },
    { title: `contact`, path: `/contact` },
    { title: `propos`, path: `/propos` },
  ]

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar></Toolbar>
        </AppBar>
    );
};

export default Header;