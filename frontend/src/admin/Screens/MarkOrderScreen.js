import { LocalShipping, Person, Place, Print } from '@mui/icons-material';
import { Avatar, Card } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


export default function MarkOrderScreen() {
  const styleIcon = {
    fontSize: '4.5rem',
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: '#dddddd',
    padding: '20px',
    color: 'green',
  };
  return (
    <div>
      {/* <SubLayout> */}
        <Container>
          <Helmet>
            <title>Order Details</title>
          </Helmet>

          <div>
            <Link to='/orders'><button
              style={{
                width: '200px',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                cursor: 'pointer',
                background: 'black',
                padding: '7px',
                marginBottom: '1rem',
              }}
            >
              Back To Order
            </button></Link>
            <Card>
              <div className="cardheader">
                <div>
                  <p className="date">Nov 13 2022</p>
                  <p>Order ID: 6363d7e36d07d3fe2ae5f5cf</p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    marginRight: '2rem',
                  }}
                >
                  <div lass="mb-2">
                    <select class="form-select" aria-label=" select example">
                      <option selected>Change Status</option>
                      <option value="1">Processing</option>
                      <option value="2">Delivered</option>
                      <option value="3">Awaiting Payment</option>
                      <option value="4">Shipped</option>
                      <option value="5">Confirmed</option>

                    </select>
                  </div>

                 <button className='btn btn-success'> <Print /></button> 
                </div>
              </div>

              <div>
                <div className="subheader">
                  <div className="orderheaderdetails">
                    <div>
                      <Person style={styleIcon} />
                    </div>
                    <div>
                      <h5>Customer</h5>
                      <p>Mwamuye Joseph</p>
                      <p>Mwamuye@gmail.com</p>
                    </div>
                  </div>
                  <div className="orderheaderdetails">
                    <div>
                      <LocalShipping style={styleIcon} />
                    </div>
                    <div>
                      <h5>Order info</h5>
                      <p>
                        <strong>Shipping: </strong>
                        Mombasa
                      </p>
                      <p>
                        <strong>Pay Method : </strong>
                        Mpesa
                      </p>
                      <p>
                        <strong>Paid: </strong>
                        Not paid
                      </p>
                    </div>
                  </div>
                  <div className="orderheaderdetails">
                    <div>
                      <Place style={styleIcon} />
                    </div>
                    <div>
                      <h5>Deliver to</h5>
                      <p>
                        <strong>Address: </strong>
                        Likoni ,Ujamaa
                      </p>
                      <p>09876,Mombasa</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="orderbody">
                  <div style={{ width: '60%'}}>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <Avatar>P</Avatar>
                          </th>
                          <td>Mango</td>
                          <td>4</td>
                          <td>Ksh.80</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <Avatar>P</Avatar>
                          </th>
                          <td>Mango</td>
                          <td>4</td>
                          <td>Ksh.80</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="cost">
                    <h4>Order Summary</h4>
                    <div className="summary" style={{ width: '300px' }}>
                      <table class="table table-hover">
                        <tbody>
                          <tr>
                            <td>
                              <p>Subtotal</p>
                            </td>
                            <td>Ksh.160</td>
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
                            <td>Ksh.160</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <button
                        style={{
                          border: 'none',
                          padding: '0.5rem 0',
                          width: '300px',
                          borderRadius: '10px',
                          color: 'white',
                          cursor: 'pointer',
                          background: 'green',
                          // padding: '7px',
                          marginBottom: '1rem',
                        }}
                      >
                        Mark As Delivered
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      {/* </SubLayout> */}
    </div>
  );
}
