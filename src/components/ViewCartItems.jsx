import React from 'react'
import { Grid, Typography, Divider } from '@mui/material';
import { dataTestIds, textContent, currency} from '../common/constants';
import { useCart } from '../context/CartProvider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


function ViewCartItems() {
  const { cart } = useCart();
  const GetCartList = ({ cartItem }) => (
    <Card sx={{ display: 'flex', bgcolor:'grey.100', m: 1 }} key={cartItem.id} data-testid={`${dataTestIds.cartItem}${cartItem.id}`} >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{
          padding: 2,
          pb: 0,
          pt: 1,           
          "&:last-child": { 
            paddingBottom: 0   
          } 
        }}> 
          <Typography component="div" variant="subtitle1" sx={{ fontWeight: 'bold'}} data-testid= {`${dataTestIds.cartItem}Title${cartItem.id}`}>
            {cartItem.title}
          </Typography>
          <Stack direction="row" sx={{ mt:1 }}>
            <Typography component="div" variant="subtitle2" data-testid= {`${dataTestIds.cartItem}Price${cartItem.id}`}>
              {cartItem.price} {currency}
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ color: 'text.secondary',ml:4 }}
            >
              {`${textContent.quantityText}: ${cartItem.quantity}`}
            </Typography>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
  return (
    <>
      <Grid size= {{ xs: 12, md: 4 }} sx= {{ border: '1px solid #ccc', bgcolor:'grey.200' }} data-testid ={dataTestIds.viewCartItemsPage}>
        <Typography variant= "h5" sx= {{ p:1, pl:2, bgcolor: 'grey.300' }} >{textContent.cartItemListHeaderTitle}</Typography>
        <Divider />
        {cart.length > 0 ? (
          <>
            {cart.map((cartItem) => (
              <GetCartList cartItem={cartItem} key={cartItem.id} />
            ))}
          </>
        ): textContent.emptyCartText }
      </Grid>
      
    </>
  )
}
export default ViewCartItems