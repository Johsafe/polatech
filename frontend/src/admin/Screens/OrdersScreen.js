import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import SubLayout from "../Layout/SubLayout";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";

export default function OrdersScreen() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const fetched = await fetch(`http://localhost:8000/order/orders`);
        const jsonData = await fetched.json();
        setOrders(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchOrder();
  }, []);
  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Orders</title>
          </Helmet>
          <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>My Orders</h1>
          <div>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Order id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Paid</th>
                  <th scope="col">Tranx_id</th>
                  <th scope="col">Total</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {orders.map((order) => (
                <tbody>
                  <tr>
                    <th scope="row">#</th>
                    <td>{order.id}</td>
                    {/* <td>{order.name}</td> */}
                    <td>{order.shippingAddress.fullName}</td>
                    <td></td>
                    <td>
                      <button>{order.isPaid}</button>
                    </td>
                    <td></td>
                    <td>{order.totalAmount}</td>
                    <td>{order.mobile}</td>
                    <td>
                      <button>{order.orderStatus}</button>
                    </td>
                    <td>
                      <div>
                        <ButtonGroup
                          variant="text"
                          aria-label="text button group"
                          style={{ display: "flex" }}
                        >
                          <Button>
                            <Link to={`/${order.id}/orders/mark`}>
                              <VisibilityIcon />
                            </Link>
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
