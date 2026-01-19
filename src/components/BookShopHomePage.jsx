import Grid from '@mui/material/Grid';
import ShowBookList from './ShowBookList';
import ViewCartItems from './ViewCartItems';
import { dataTestIds } from '../common/constants';

function BookShopHomePage() {
  return (
    <>
      <Grid data-testid ={dataTestIds.bookShopHomePage} container spacing={1} sx={{pt:1}}>
        <ShowBookList />
        <ViewCartItems />
      </Grid>
    </>
  )
}

export default BookShopHomePage