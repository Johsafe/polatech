import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="Phone Number"
            label="Phone Number"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
       </Grid>
    </React.Fragment>
  );
}