import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import SubLayout from "../Layout/SubLayout";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PaidIcon from "@mui/icons-material/Paid";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 250,
  color: theme.palette.text.primary,
}));

export default function DashboardScreen() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState([]);
  const [orderCount, setOrderCount] = useState([]);
  const [OutofStockCount, setOutofStockCount] = useState([]);
  const [totalSales, setTotalSales] = useState([]);

  useEffect(() => {
    //get out-of-stock products
    const fetchProducts = async () => {
      try {
        const fetched = await fetch(`http://localhost:8000/stats/out-of-stock`);
        const jsonData = await fetched.json();
        setProducts(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
    //get product count
    const fetchproductCount = async () => {
      try {
        const fetched = await fetch(
          `http://localhost:8000/stats/total-product-count`
        );
        const jsonData = await fetched.json();
        setProductCount(jsonData);
        console.log(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
    //get items sold count
    const fetchOrderCount = async () => {
      try {
        const fetched = await fetch(`http://localhost:8000/stats/total-sold`);
        const jsonData = await fetched.json();
        setOrderCount(jsonData);
        console.log(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
    //get out of stock count
    const fetchOutofStockCount = async () => {
      try {
        const fetched = await fetch(
          `http://localhost:8000/stats/out-of-stock-count`
        );
        const jsonData = await fetched.json();
        setOutofStockCount(jsonData);
        console.log(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
    //get total amount after sales
    const fetchTotalSales = async () => {
      try {
        const fetched = await fetch(
          `http://localhost:8000/stats/total-amount-sold`
        );
        const jsonData = await fetched.json();
        setTotalSales(jsonData);
        console.log(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchProducts();
    fetchproductCount();
    fetchOrderCount();
    fetchOutofStockCount();
    fetchTotalSales();
  }, []);
  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Dashboard</title>
          </Helmet>
          <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>
            My Dashboard
          </h1>
          <div style={{ display: "flex", top: "0" }}>
            <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
              <StyledPaper
                sx={{
                  my: 1,
                  mx: "auto",
                  p: 2,
                }}
              >
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar style={{ background: "rgb(174, 185, 233)" }}>
                      <PaidIcon style={{ color: "blue" }} />
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography>Total sales</Typography>
                    <Typography>Ksh.{totalSales}</Typography>
                  </Grid>
                </Grid>
              </StyledPaper>
            </Box>

            <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
              <StyledPaper
                sx={{
                  my: 1,
                  mx: "auto",
                  p: 2,
                }}
              >
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar style={{ background: "rgb(236, 224, 167)" }}>
                      <ShoppingBasketIcon style={{ color: "orange" }} />
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography>Product Sold</Typography>
                    <Typography>{orderCount}</Typography>
                  </Grid>
                </Grid>
              </StyledPaper>
            </Box>

            <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
              <StyledPaper
                sx={{
                  my: 1,
                  mx: "auto",
                  p: 2,
                }}
              >
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar style={{ background: " rgb(164, 231, 164)" }}>
                      <LocalMallIcon style={{ color: "green" }} />
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography>Total Product</Typography>
                    <Typography>{productCount}</Typography>
                  </Grid>
                </Grid>
              </StyledPaper>
            </Box>

            <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
              <StyledPaper
                sx={{
                  my: 1,
                  mx: "auto",
                  p: 2,
                }}
              >
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar style={{ background: "rgb(233, 150, 150)" }}>
                      <ProductionQuantityLimitsIcon style={{ color: "red" }} />
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography>Out of stock</Typography>
                    <Typography>{OutofStockCount}</Typography>
                  </Grid>
                </Grid>
              </StyledPaper>
            </Box>
          </div>
          <Divider style={{ marginBottom: "20px", marginTop: "10px" }} />
          <div>
            <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>
              Products Out of Stock
            </h1>
            <div>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Brand</th>
                    <th scope="col">InStock</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {products.map((product) => (
                  <tbody key={product.id}>
                    <tr>
                      <th scope="row">
                        <Avatar>
                          <img
                            src={product.image}
                            style={{
                              width: "100%",
                              height: "90px",
                            }}
                            alt={product.title}
                          />
                        </Avatar>
                      </th>
                      <td>{product.title}</td>
                      <td>{product.brand}</td>
                      <td>{product.inStock}</td>
                      <td>{product.price}</td>
                      <td>
                        <div>
                          <Button>
                            <EditIcon />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </Container>
      </SubLayout>
    </div>
  );
}
