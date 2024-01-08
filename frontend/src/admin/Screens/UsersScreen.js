import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import SubLayout from "../Layout/SubLayout";

export default function UsersScreen() {
  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Users</title>
          </Helmet>
          <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>
            My Users Screen
          </h1>
          <div>
            <table
              class="table table-hover"
              style={{ backgroundColor: "none" }}
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">#</th>
                  <td>Jose</td>
                  <td>Jose@gmail.com</td>
                  <td>254345678</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </SubLayout>
    </div>
  );
}
