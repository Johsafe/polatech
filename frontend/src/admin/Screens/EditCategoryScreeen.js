import { Card } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SubLayout from '../Layout/SubLayout';

export default function EditCategoryScreeen() {
  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Edit Categories</title>
          </Helmet>

          <div
            style={{
              display: 'flex',
              gap: '5rem',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom:'20px'
            }}
          >
            <Link to="/category">
              {' '}
              <button className="btn btn-danger">Go to Categories</button>
            </Link>
            <div>
              <h1 style={{fontweight:'bold',fontSize:'30px'}}>Edit Categories</h1>
            </div>
          </div>

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
          </Card>
        </Container>
      </SubLayout>
    </div>
  );
}
