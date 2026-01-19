import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { textContent } from '../common/constants'; 

function BookShopHeaderBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} data-testid={ 'BookShopHeaderBar' }>
        <AppBar position="static">
          <Typography  variant="h5" sx={{ flexGrow: 1, p:1, textAlign: 'center'}} data-testid={ 'BookShopHeaderBarHeading' }>
            {textContent.headingText}
          </Typography>
          <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, pl:2, bgcolor:'black' }} data-testid={ 'BookShopHeaderBarDiscountText' }>
            {textContent.discountText}
          </Typography>
        </AppBar>
      </Box>
    </>
  )
}

export default BookShopHeaderBar
