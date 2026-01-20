import React from 'react'
import { Grid, Typography, Divider } from '@mui/material';
import { dataTestIds, textContent, currency} from '../common/constants';
import { useCart } from '../context/CartProvider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import EmptyCartView from './EmptyCartView';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';


function ViewCartItems() {
  const { cart, removeFromCart } = useCart();
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
        <CardActions>
          <Button  onClick={()=>removeFromCart(cartItem.id)} size="small"  startIcon={<CloseIcon  size="small"/>} sx={{p:0, pl:1}} data-testid={dataTestIds.removeFromCartButton}>{textContent.removeCartButtonTitle}</Button>
        </CardActions>
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
        ): <EmptyCartView /> }
      </Grid>
      
    </>
  )
}
export default ViewCartItems