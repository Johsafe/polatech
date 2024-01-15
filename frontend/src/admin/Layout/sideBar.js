// import { Dehaze, Home, ShoppingBasket } from '@material-ui/icons'
import HomeIcon from "@mui/icons-material/Home";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PaidIcon from "@mui/icons-material/Paid";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Avatar, Box, Divider, IconButton, Typography } from "@mui/joy";

export default function SideBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <HomeIcon />,
    },
    {
      path: "/product",
      name: "Products",
      icon: <LocalMallIcon />,
    },
    {
      path: "/orders",
      name: "Orders",
      icon: <ShoppingBasketIcon />,
    },
    {
      path: "/transaction",
      name: "Transaction",
      icon: <PaidIcon />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <PeopleIcon />,
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <div className="box">
        <div style={{ width: isOpen ? "60px" : "250px" }} className="sidebar">
          <div className="top_section">
            <h1 style={{ display: isOpen ? "none" : "block" }} className="logo">
              Logo
            </h1>
            <div style={{ marginLeft: isOpen ? "0" : "50px" }} className="bars">
              <MenuOpenIcon onClick={toggle} style={{ fontSize: "2rem" }} />
            </div>
          </div>
          {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "none" : "block" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
          ))}
          {/* <Divider />
              <Box sx={{ display: "flex", gap: 1, alignItems: "center",bottom:0,marginBottom:0 }}>
                <Avatar
                  variant="outlined"
                  size="sm"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                />
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography level="title-sm">Mwamuye Joseph</Typography>
                  <Typography level="body-xs">admin@gmail.com</Typography>
                </Box>
                <IconButton size="sm" variant="plain" color="neutral">
                  <LogoutRoundedIcon />
                </IconButton>
              </Box> */}
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
