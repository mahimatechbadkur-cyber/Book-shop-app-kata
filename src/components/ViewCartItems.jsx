import React from 'react'
import { Grid, Typography, Divider } from '@mui/material';
import { dataTestIds, textContent } from '../common/constants';
import { useCart } from '../context/CartProvider';

function ViewCartItems() {
  const { cart } = useCart();
  return (
    <>
      <Grid size= {{ xs: 12, md: 4 }} sx= {{ border: '1px solid #ccc', bgcolor:'grey.200' }} data-testid ={dataTestIds.viewCartItemsPage}>
        <Typography variant= "h5" sx= {{ p:1, pl:2, bgcolor: 'grey.300' }} >{textContent.cartItemListHeaderTitle}</Typography>
        <Divider />
        {cart.length > 0 ? <Typography data-testid = {dataTestIds.uniqueItemCount}>{cart.length}</Typography>  : textContent.emptyCartText }
      </Grid>
      
    </>
  )
}
export default ViewCartItems