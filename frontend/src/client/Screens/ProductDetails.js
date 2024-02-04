import { Box, Button, Typography } from "@mui/joy";
import { Container, Divider } from "@mui/material";
import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
// import Table from "@mui/joy/Table";
import PageHeader from "../Layout/PageHeader";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Breadcrumbs } from "@mui/joy";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Link from "@mui/joy/Link";
import PageFooter from "../Layout/pageFooter";
import { base_url, getError } from "../../admin/Utils/Utils";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductDetails() {
  const [index, setIndex] = React.useState(0);

  // const navigate = useNavigate();

  const params = useParams();
  const { slug } = params;

  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetched = await fetch(`${base_url}product/${slug}`);
        const jsonData = await fetched.json();
        setProduct(jsonData);
      } catch (err) {
        toast.error(getError(err));
      }
    };

    fetchProducts();
  }, [slug]);

  
  console.log(product)

  //add to cart function
  const addToCart = async () => {};
  return (
    <div>
      <PageHeader />
      <Container>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon fontSize="sm" />}
            sx={{ pl: 0 }}
          >
            <Link
              underline="hover"
              color="neutral"
              href="#some-link"
              fontSize={18}
              fontWeight={500}
            >
              Home
            </Link>
            <Typography color="primary" fontWeight={500} fontSize={18}>
              Laptops
            </Typography>
            <Typography color="primary" fontWeight={500} fontSize={18}>
              Laptops Details
            </Typography>
          </Breadcrumbs>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "& > *": {
              m: 1,
            },
          }}
        >
          <Box>
            <img src={product.image} alt={product.title} />
          </Box>
          <Box>
            <Typography variant="h5" component="div">
              {product.category}
            </Typography>
            <Typography level="h2" component="h2">
              {product.title}
            </Typography>

            {product.inStock > 0 ? (
              <Typography variant="h5" component="div">
                Availability: (Only <b>{product.inStock}</b> left in stock!)
              </Typography>
            ) : (
              <Typography variant="h5" component="div" sx={{ color: "red" }}>
                Out Of Stock
              </Typography>
            )}

            <Divider sx={{ marginTop: "10px", marginBottom: "20px" }} />
            <div style={{ marginLeft: "20px" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li> Brand: {product.brand}</li>
              </Typography>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li>Condition: {product.condition}</li>
              </Typography>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li> Ram: {product.ram_size}</li>
              </Typography>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li>Storage: {product.storage}</li>
              </Typography>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li> Display Size: {product.screen_size}</li>
              </Typography>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li> Graphic Card: {product.graphic_card}</li>
              </Typography>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li>processor: {product.processor}</li>
              </Typography>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li>Operating System: Window 10 pro</li>
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                gap: "200px",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <div>
                <Typography
                  level="h1"
                  component="h1"
                  sx={{ color: "red", fontWeight: 500 }}
                >
                  KSh {product.price}
                </Typography>
              </div>

              {product.inStock > 0 && (
                <div>
                  <Button
                    onClick={addToCart}
                    size="sm"
                    variant="soft"
                    color="neutral"
                    startDecorator={<AddShoppingCartIcon />}
                  >
                    Add to Cart
                  </Button>
                </div>
              )}       
            </div>

            <Box
              sx={{
                flexGrow: 1,
                m: -2,
                overflowX: "hidden",
                marginTop: "30px",
                width: "800px",
              }}
            >
              <Tabs
                aria-label="Pipeline"
                value={index}
                onChange={(event, value) => setIndex(value)}
              >
                <TabList
                  sx={{
                    pt: 1,
                    justifyContent: "center",
                    [`&& .${tabClasses.root}`]: {
                      flex: "initial",
                      bgcolor: "transparent",
                      "&:hover": {
                        bgcolor: "transparent",
                      },
                      [`&.${tabClasses.selected}`]: {
                        color: "primary.plainColor",
                        "&::after": {
                          height: 2,
                          borderTopLeftRadius: 3,
                          borderTopRightRadius: 3,
                          bgcolor: "primary.500",
                        },
                      },
                    },
                  }}
                >
                  <Tab indicatorInset sx={{ fontSize: "20px" }}>
                    Description
                  </Tab>
                  <Tab indicatorInset sx={{ fontSize: "20px" }}>
                    Specification
                  </Tab>
                </TabList>
                <Box
                  sx={(theme) => ({
                    "--bg": theme.vars.palette.background.surface,
                    background: "var(--bg)",
                    boxShadow: "0 0 0 100vmax var(--bg)",
                    clipPath: "inset(0 -100vmax)",
                  })}
                >
                  <TabPanel value={0}> {product.description}</TabPanel>
                  <TabPanel value={1}>
                    {/* <Table
                      aria-label="basic table"
                      sx={{ width: "600px", alignItems: "center" }}
                    >
                      <tbody sx={{ marginLeft: "50px" }}>
                        <tr>
                          <td>Core type</td>
                          <td>Core i5</td>
                        </tr>
                        <tr>
                          <td>Laptop brand</td>
                          <td>Dell</td>
                        </tr>

                        <tr>
                          <td>CPU manufacturer</td>
                          <td>Intel</td>
                        </tr>
                      </tbody>
                    </Table> */}
                  </TabPanel>
                </Box>
              </Tabs>
            </Box>
          </Box>
        </Box>
      </Container>
      <PageFooter />
    </div>
  );
}
