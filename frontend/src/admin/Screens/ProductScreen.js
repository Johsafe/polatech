import Avatar from '@mui/material/Avatar';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SubLayout from '../Layout/SubLayout';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ButtonGroup from '@mui/material/ButtonGroup';
export default function ProductScreen() {
  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Products</title>
          </Helmet>
          <div style={{ display: 'flex', justifyContent: 'space-between',marginBottom:'20px' }}>
            <h1 style={{fontSize:"30px"}}>My Products</h1>
            <div>
              <Link to="/add">
                {' '}
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
              <tbody>
                <tr>
                  <th scope="row">
                    <Avatar>L</Avatar>
                  </th>
                  <td>Pavillion</td>
                  <td>Lenovo</td>
                  <td>20</td>
                  <td>ksh 70000</td>
                  <td>
                    <div>
                      <ButtonGroup
                        variant="text"
                        aria-label="text button group"
                        style={{ display: 'flex' }}
                      >
                        {/* <Button>One</Button> */}
                        <Button>
                          <Link to="/edit">
                            <EditIcon />
                          </Link>
                        </Button>
                        <Button>
                          <DeleteIcon style={{ color: 'red' }} />
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
