import React from 'react'
import { Grid, Typography, Divider } from '@mui/material';
import { dataTestIds, textContent } from '../common/constants';

function ViewCartItems() {
  return (
    <>
      <Grid size= {{ xs: 12, md: 4 }} sx= {{ border: '1px solid #ccc', bgcolor:'grey.200' }} data-testid ={dataTestIds.viewCartItemsPage}>
        <Typography variant= "h5" sx= {{ p:1, pl:2, bgcolor: 'grey.300' }} >{textContent.cartItemListHeaderTitle}</Typography>
        <Divider />
      </Grid>
      
    </>
  )
}
export default ViewCartItems