import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import SubLayout from "../Layout/SubLayout";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ButtonGroup from "@mui/material/ButtonGroup";
// import { toast } from 'react-toastify';
// import axios from 'axios';

export default function ProductScreen() {
  const Info = JSON.parse(localStorage.getItem("Info"));

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetched = await fetch(`http://localhost:8000/product`);
        const jsonData = await fetched.json();
        setProducts(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchProducts();
  }, []);
  
  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Products</title>
          </Helmet>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <h1 style={{ fontSize: "30px" }}>My Products</h1>
            <div>
              <Link to="/add">
                {" "}
                <button className="btn btn-success">Add Product</button>
              </Link>
            </div>
          </div>
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
                        <ButtonGroup
                          variant="text"
                          aria-label="text button group"
                          style={{ display: "flex" }}
                        >
                          {/* <Button>One</Button> */}
                          <Button>
                            <Link to="/edit">
                              <EditIcon />
                            </Link>
                          </Button>
                          <Button>
                            <DeleteIcon style={{ color: "red" }} />
                          </Button>
                        </ButtonGroup>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </Container>
      </SubLayout>
    </div>
  );
}
