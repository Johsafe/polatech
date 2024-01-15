import Card from '@mui/material/Card';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AddProduct() {



  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div>    
        <Container>
          <Helmet>
            <title>Add Product</title>
          </Helmet>
          <div style={{ display: 'flex' ,gap:'5rem',alignItems:'center',justifyContent:'space-between',marginBottom:'20px'}}>
          <Link to='/product'> <button className="btn btn-danger">Go to Products</button></Link>
          <div><h1 style={{fontSize:"30px"}}>Add New Product</h1></div>
          <button className="btn btn-success"  type="submit" onClick={()=> document
              .getElementById('exampleForm')
              .dispatchEvent(new Event('submit', { cancelable: true }))
          }
        >Add Product</button>
          </div>
          

          <Card>
            <div style={{ display: 'flex' }}>
              <div style={{ padding: '2rem', width:'50%' }}  id="exampleForm" onSubmit={handleSubmit}>
                <div>
                  <div class="mb-2">
                    <label for="name" class="form-label">
                      Product Name
                    </label>
                    <input type="text" class="form-control" id="name" />
                  </div>
                  <div class="mb-2">
                    <label for="price" class="form-label">
                      Price
                    </label>
                    <input type="number" class="form-control" id="price" />
                  </div>
                  <div class="mb-2">
                    <label for="stock" class="form-label">
                      InStock
                    </label>
                    <input type="number" class="form-control" id="stock" />
                  </div>
                  <div class="mb-2">
                    <label for="category" class="form-label">
                      Category
                    </label>
                    <input type="text" class="form-control" id="category" />
                  </div>
                  {/* <div lass="mb-2">
                  <label for="category" class="form-label">
                      Category
                    </label>
                  <select
                    class="form-select"
                    aria-label=" select example"
                    
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  </div> */}
                  <div class="mb-2">
                    <label for="description" class="form-label">
                      Description
                    </label>
                    <textarea
                      class="form-control"
                      id="description"
                      rows="2"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <div class="mb-1">
                    <label for="image" class="form-label">
                      Image
                    </label>
                    <input type="file" class="form-control" id="image" />
                  </div>
                </div>
            </div>
            </div>
          </Card>
        </Container>
     
    </div>
  );
}
