import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SubLayout from '../Layout/SubLayout';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

export default function OrdersScreen() {
  useEffect(() => {
    const fetchOrder = async () => {
      try {
      } catch (err) {}
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
          <h1 style={{fontSize:"30px",marginBottom:'20px'}}>My Orders</h1>
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
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">#</th>
                  <td>65543826ef</td>
                  {/* <td>{order.name}</td> */}
                  <td>Otto M.</td>
                  <td>Otto@gmail.com</td>
                  <td>
                    <button>Not Payed</button>
                  </td>
                  <td>SDFGHJKL</td>
                  <td>ksh .564</td>
                  <td>Nov 15 2022</td>
                  <td>
                    <button>Not Delivered</button>
                  </td>
                  <td>
                    <div>
                      <ButtonGroup
                        variant="text"
                        aria-label="text button group"
                        style={{ display: 'flex' }}
                      >
                        <Button>
                          <Link to="/orders/mark">
                            <VisibilityIcon />
                          </Link>
                        </Button>
                      </ButtonGroup>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </SubLayout>
    </div>
  );
}
