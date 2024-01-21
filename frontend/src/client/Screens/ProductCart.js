import * as React from "react";
import { Container } from "@mui/material";
import PageHeader from "../Layout/PageHeader";
import PageFooter from "../Layout/pageFooter";
import { Box, Breadcrumbs, Typography } from "@mui/joy";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Avatar from "react-avatar";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
export default function ProductCart() {
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
              Cart
            </Typography>
          </Breadcrumbs>
        </Box>

        <Box>
          <Typography level="h1" component="h1" sx={{ textAlign: "center" }}>
            Shopping Cart
          </Typography>

          <Box>
            <div>
              <div className="orderbody">
                <div style={{ width: "90%" }}>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Title</th>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <ClearIcon />
                        </td>
                        <td>Product Name</td>
                        <Box
                          sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center",
                          }}
                        >
                          <Typography level="body-xs">
                            <Avatar
                              size="40"
                              color={Avatar.getRandomColor("sitebase", [
                                "rgb(233, 150, 150)",
                                "rgb(164, 231, 164)",
                                "rgb(236, 224, 167)",
                                "rgb(174, 185, 233)",
                              ])}
                              round={true}
                              name="Product Name"
                              // src={item.image}
                              // alt={item.title}
                            />
                          </Typography>
                          <div>
                            <Typography level="body-xs">
                              Product Name
                            </Typography>
                            <Typography level="body-xs">Laptop</Typography>
                          </div>
                        </Box>
                        <td>6</td>
                        <td>Ksh.13000</td>
                      </tr>
                      <tr>
                        <td>
                          <ClearIcon />
                        </td>
                        <td>
                          {/* {item.title} */}
                          Product Name
                        </td>
                        <Box
                          sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center",
                          }}
                        >
                          <Typography level="body-xs">
                            <Avatar
                              size="40"
                              color={Avatar.getRandomColor("sitebase", [
                                "rgb(233, 150, 150)",
                                "rgb(164, 231, 164)",
                                "rgb(236, 224, 167)",
                                "rgb(174, 185, 233)",
                              ])}
                              round={true}
                              name="Product Name"
                              // src={item.image}
                              // alt={item.title}
                            />
                          </Typography>
                          <div>
                            <Typography level="body-xs">
                              {/* {item.title} */}
                              Product Name
                            </Typography>
                            <Typography level="body-xs">Laptop</Typography>
                          </div>
                        </Box>
                        <td>6</td>
                        <td>Ksh.13000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="cost">
                  <h3 style={{ fontsize: "20px", fontWeight: "bold" }}>
                    Cart Total
                  </h3>
                  <div className="summary" style={{ width: "300px" }}>
                    <table class="table table-hover">
                      <tbody>
                        <tr>
                          <td>
                            <p>Subtotal</p>
                          </td>
                          <td>26,000</td>
                        </tr>

                        <tr>
                          <td>
                            <p>Shipping</p>
                          </td>
                          <td>Ksh.0</td>
                        </tr>
                        <tr>
                          <td>
                            <p>Grand total</p>
                          </td>
                          <td>26,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <button
                      style={{
                        border: "none",
                        padding: "0.5rem 0",
                        width: "300px",
                        borderRadius: "10px",
                        color: "white",
                        cursor: "pointer",
                        marginTop: "3rem",
                        marginBottom: "1rem",
                        background: "red",
                      }}
                    >
                      Continue Shopping
                    </button>
                    <button
                      style={{
                        border: "none",
                        padding: "0.5rem 0",
                        width: "300px",
                        borderRadius: "10px",
                        color: "white",
                        cursor: "pointer",
                        marginBottom: "1rem",
                        background: "#007563",
                      }}
                    >
                      <Link
                        to="/checkout"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Proceed to Checkout
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Container>
      <PageFooter />
    </div>
  );
}
