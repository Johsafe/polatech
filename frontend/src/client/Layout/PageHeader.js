import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container } from "@mui/material";
import LaptopIcon from "@mui/icons-material/Laptop";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 8px",
  },
}));

export default function PageHeader() {
  return (
    <div style={{backgroundColor:'#007563',padding:'10px',color:'white'}}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <div>
            <h4 style={{fontWeight:'550'}}>Welcome to Asgard Systems – Delivery Countrywide</h4>
          </div>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button sx={{fontSize:"11px",color:'white'}}>
              <LocationOnOutlinedIcon sx={{fontSize:"17px"}} /> <p>Store Locator</p>
            </Button>
            <Button sx={{fontSize:"11px",color:'white'}}>
              <LocalShippingOutlinedIcon sx={{fontSize:"17px"}}/> Track Your Order
            </Button>
            <Button sx={{fontSize:"11px",color:'white'}}> 
              <PermIdentityIcon sx={{fontSize:"17px"}}/> My Account
            </Button>
            <Button sx={{fontSize:"11px",color:'white'}}>Refund and Return Policy</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "& > *": {
                m: 1,
              },
            }}
          >
            <div>
              {/*logo */}
              <img
                src="https://www.asgardsys.co.il/wp-content/uploads/2022/08/AsgardsSystems-01.png"
                width="180px"
                alt="Asgard"
              />
            </div>
            <div>
              <Box
                className="SearchAndFilters-tabletUp"
                sx={{
                  borderRadius: "sm",
                  py: 2,
                  display: { xs: "none", sm: "flex" },
                  flexWrap: "wrap",
                  gap: 1.5,
                  "& > *": {
                    minWidth: { xs: "120px", md: "160px" },
                  },
                  width: "700px",
                }}
              >
                <FormControl sx={{ flex: 1 ,color:'white'}} size="sm">
                  {/* <FormLabel>Search for Products</FormLabel> */}
                  <Input
                    size="sm"
                    placeholder="Search For Products"
                    startDecorator={<SearchIcon />}
                  />
                </FormControl>
              </Box>
            </div>
            <div>
              {/* <ShoppingBagOutlinedIcon/> <h2>Ksh. 0</h2> */}
              <IconButton aria-label="cart">
                <StyledBadge
                  badgeContent={4}
                  color="secondary"
                  sx={{ marginRight: "20px" ,color:'white'}}
                >
                  <ShoppingCartIcon sx={{ fontSize: "30px" ,color:'white'}} />
                </StyledBadge>
                <h2 style={{color:'white',fontWeight:'550'}}>Ksh. 0</h2>
              </IconButton>
            </div>
          </Box>
          <Box>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <ul>
                <LaptopIcon />
                Laptop
              </ul>
              <ul>
                <DesktopMacOutlinedIcon />
                Desktop
              </ul>
              <ul>
                <PrintOutlinedIcon />
                Printer
              </ul>
              <ul>
                <DesktopMacOutlinedIcon />
                Monitor
              </ul>
              <ul>
                <StorageOutlinedIcon />
                Computer Accessories
              </ul>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
