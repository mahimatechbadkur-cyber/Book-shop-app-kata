import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import ViewCartSummary from '../components/ViewCartSummary'; 
import { dataTestIds, currency, bookList} from './common/constants';
import { CartProvider } from '../context/CartProvider';
import { useCart } from '../context/CartProvider';
import { textContent } from './common/constants';
import { clickButton, getButton } from './utils/utils';


const renderComponent = (item) => {
  render(
    <CartProvider>
      <CartAdder item={item} />
      <ViewCartSummary />
    </CartProvider>
  );
};

afterEach(() => {
  cleanup();
});
const CartAdder = ({ item }) => {
  const { addToCart } = useCart();
  return <button onClick={() => addToCart(item)}>{textContent.addIcon}</button>;
};
describe('ViewCartSummary component', () => {
  it('renders ViewCartSummary with subtotal, discount and total ', () => {
    render(
      <CartProvider> 
        <ViewCartSummary />
      </CartProvider>
    )
    expect(screen.getByTestId(dataTestIds.viewCartSummaryPage)).toBeInTheDocument();
    expect(screen.getByTestId(dataTestIds.orderSummaryText)).toHaveTextContent(textContent.orderSummaryText)
    expect(screen.getByTestId(dataTestIds.cartSubtotalText)).toHaveTextContent(`0 ${currency}`);
    expect(screen.getByTestId(dataTestIds.cartDiscountText)).toHaveTextContent(`0 ${currency}`);
    expect(screen.getByTestId(dataTestIds.cartTotalAmountText)).toHaveTextContent(`0 ${currency}`);
  });
  it('renders a items with no discount', () => {
    renderComponent(bookList[0]);
    const addButton = getButton(textContent.addIcon);
    expect(addButton[0]).toBeInTheDocument()
    clickButton(addButton, 0);
    expect(screen.getByTestId(dataTestIds.cartSubtotalText)).toHaveTextContent('50 EUR');
    expect(screen.getByTestId(dataTestIds.cartDiscountText)).toHaveTextContent('0 EUR');
    expect(screen.getByTestId(dataTestIds.cartTotalAmountText)).toHaveTextContent('50 EUR');
  });
});