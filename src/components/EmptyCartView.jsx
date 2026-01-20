import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { dataTestIds, textContent } from '../common/constants';

function EmptyCartView() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh" 
        textAlign="center"
        p={3}
        data-testid= {dataTestIds.emptyCartView}
      >
        <Box
          sx={{
            backgroundColor: '#f1f4f9',
            borderRadius: '50%',
            p: 4,
            mb: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ShoppingCartOutlinedIcon sx={{ fontSize: 80, color: '#90a4ae' }} data-testid={dataTestIds.emptyCartShoppingCartIcon} />
        </Box>
        <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          {textContent.emptyCartText}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {textContent.emptyCartSubtitle}
        </Typography>
      </Box>
    </>
  )
}

export default EmptyCartView
