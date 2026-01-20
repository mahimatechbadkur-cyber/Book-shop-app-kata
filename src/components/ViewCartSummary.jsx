import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { textContent,currency, dataTestIds } from "../common/constants"
import { useCart } from '../context/CartProvider';
import { calculateCartTotals } from '../utils/calculateCartTotals';


function ViewCartSummary() {
  const { cart } = useCart();
  const bestPrice = calculateCartTotals(cart)
  const { subTotal, discount, total} = bestPrice
  return (
    <>
      <Box sx={{ m: 1 }} data-testid = {dataTestIds.viewCartSummaryPage}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', pb: 1 }} data-testid={dataTestIds.orderSummaryText}>
          {textContent.orderSummaryText}
        </Typography>
        <Typography variant="body2" data-testid={dataTestIds.cartSubtotalText}>
          {textContent.subtotalText}: {subTotal} {currency}
        </Typography>
        <Typography variant="body2" data-testid={dataTestIds.cartDiscountText}>
          {textContent.discountedPriceText}: {discount} {currency}
        </Typography>
        <Typography variant="body2" sx={{ pb: 2 }} data-testid={dataTestIds.cartTotalAmountText}>
          {textContent.totalAmountText}: {total} {currency}
        </Typography>
      </Box>
    </>
  )
}
export default ViewCartSummary
