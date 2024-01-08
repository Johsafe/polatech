import Card from '@mui/material/Card';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SubLayout from '../Layout/SubLayout';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

export default function CategoryScreen() {
  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Categories</title>
          </Helmet>
          <h1 style={{fontSize:"30px",marginBottom:'20px'}}>My Categories</h1>

          <Card style={{ display: 'flex', padding: '2rem' }}>
            <div style={{ width: '50%' }}>
              <div style={{ padding: '2rem' }}>
                <div class="mb-2">
                  <label for="name" class="form-label">
                    Category Name
                  </label>
                  <input type="text" class="form-control" id="name" />
                </div>
                <div class="mb-2">
                  <label for="description" class="form-label">
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    id="description"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  style={{ width: '27.5rem', padding: '0.5rem' }}
                  className="btn btn-sm btn-success"
                >
                  Submit
                </button>
              </div>
            </div>

            <div style={{ width: '50%' }}>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <th scope="row">#</th>
                    <td>Lenovo</td>
                    <td>Lenovo Laptops</td>

                    <td>
                      <div>
                        <ButtonGroup
                          variant="text"
                          aria-label="text button group"
                          style={{ display: 'flex' }}
                        >
                          <Button>
                           <Link to="/editCategory"> <EditIcon /></Link>
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
          </Card>
        </Container>
      </SubLayout>
    </div>
  );
}
