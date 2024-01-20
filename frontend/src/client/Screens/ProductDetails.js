import { Box, Button, Typography } from "@mui/joy";
import { Container, Divider } from "@mui/material";
import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Table from "@mui/joy/Table";
import PageHeader from "../Layout/PageHeader";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Breadcrumbs } from "@mui/joy";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Link from "@mui/joy/Link";
import PageFooter from "../Layout/pageFooter";

export default function ProductDetails() {
  const [index, setIndex] = React.useState(0);
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
            <img
              src="https://smartbuy.co.ke/wp-content/uploads/2021/08/dell-vostro-3500-i5-11th-gen-300x300.jpg"
              alt="Dell"
            />
          </Box>
          <Box>
            <Typography variant="h5" component="div">
              Dell Laptops
            </Typography>
            <Typography level="h2" component="h2">
              Dell Vostro 3500 i5 11TH Gen, 4GB Ram, 1TB HDD
            </Typography>
            <Typography variant="h5" component="div">
              Availability: (Only <b>1</b> left in stock!)
            </Typography>
            <Divider sx={{ marginTop: "10px", marginBottom: "20px" }} />
            <div style={{ marginLeft: "20px" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li> Brand:Dell</li>
              </Typography>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li>Condition:Brand New</li>
              </Typography>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li> Ram: 4 GB</li>
              </Typography>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li>Storage: 1 TB HDD</li>
              </Typography>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li> Display Size: 15.6 inch</li>
              </Typography>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li> Graphic Card:Intel Iris Xe</li>
              </Typography>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li>processor:11TH Gen Intel Core i5</li>
              </Typography>

              <Typography
                variant="h5"
                component="div"
                sx={{ color: "black", fontWeight: 600 }}
              >
                <li>Operating System: Window 10 pro</li>
              </Typography>
            </div>
            <div style={{ display: "flex", gap: "200px", alignItems: "center", marginTop: "20px", }}>
              <div>
                <Typography
                  level="h1"
                  component="h1"
                  sx={{ color: "red", fontWeight: 500 }}
                >
                  KSh63,999
                </Typography>
              </div>
              <div>
                <Button
                  size="sm"
                  variant="soft"
                  color="neutral"
                  startDecorator={<AddShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
              </div>
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
                  <TabPanel value={0}>
                    The dell vostro 3500 i5 laptop is the perfect choice for
                    shoppers looking to find a high-performance, yet affordable
                    device. This computer has the power you need for
                    productivity and everyday use. It is a great laptop for
                    business users. Reviewers have given the Vostro 3500 good
                    marks, especially for its very affordable price tag. The
                    laptop also offers a variety of ports and connection
                    options, making it perfect for users who need to keep
                    multiple devices connected at the same time. If you’re
                    looking for an affordable and reliable laptop for work or
                    school, the Dell Vostro 3500 should be at the top of your
                    list.
                  </TabPanel>
                  <TabPanel value={1}>
                    <Table
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
                    </Table>
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
