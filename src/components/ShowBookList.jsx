import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import { bookList, dataTestIds, textContent } from '../common/constants'; 
import Divider from '@mui/material/Divider';
import { getImageURL } from '../utils/getImageURL';

function ShowBookList() {
  const BookList = ({ book}) => (
    <Grid size={{ xs: 12, sm: 4 }} key={book.id} data-testid={dataTestIds.bookListInnerGrid}>
      <Card variant="outlined" data-testid={`${dataTestIds.bookcard}${book.id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={getImageURL(book.title)}
            alt={book.title}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
  return (
    <>
      <Grid data-testid={dataTestIds.showBookList} size={{ xs: 12, md: 8 }} sx={{ border: '1px solid #ccc', bgcolor:'grey.200' }}>
        <Typography variant="h5" sx={{ p: 1, pl: 2, bgcolor:'grey.300' }}>{textContent.bookListHeaderTitle}</Typography>
        <Divider />
        <Grid container spacing={2} sx={{ p: 2 }} data-testid={dataTestIds.bookListParentGrid}>
          {bookList.map((book) => (
            <BookList
              book={book} 
              key ={book.id}
            />
          ))} 
        </Grid>
      </Grid>
    </>
  )
}
export default ShowBookList