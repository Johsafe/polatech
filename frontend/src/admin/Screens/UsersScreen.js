import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import SubLayout from "../Layout/SubLayout";

export default function UsersScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetched = await fetch(`http://localhost:8000/authenicate/users`);
        const jsonData = await fetched.json();
        setUsers(jsonData);
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
                  <th scope="col">firstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Email</th>
                  <th scope="col">phone</th>
                </tr>
              </thead>

              {users.map((user) => (
                <tbody key={user.id}>
                  <tr>
                    <th scope="row">#</th>
                    <td>{user.fname}</td>
                    <td>{user.sname}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
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
