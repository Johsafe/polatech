import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SubLayout from '../Layout/SubLayout';

export default function TransactionScreen() {
  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Transactions</title>
          </Helmet>
          <h1 style={{fontSize:"30px",marginBottom:'20px'}}>My TransactionScreen</h1>
          <div>
            <table class="table table-hover" style={{backgroundColor:'none'}}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">order id</th>
                  <th scope="col">phone</th>
                  <th scope="col">Payment id</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">#</th>
                  <td>Dec 14 2021</td>
                  <td>wertyuio67</td>
                  <td>254345678</td>
                  <td>QwTYE</td>
                  <td>ksh. 234</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </Container>
      </SubLayout>
    </div>
  );
}
