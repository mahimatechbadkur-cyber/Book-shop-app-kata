import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import ViewCartSummary from '../components/ViewCartSummary'; 
import { dataTestIds, currency } from './common/constants';
import { CartProvider } from '../context/CartProvider';
import { textContent } from './common/constants';
import { clickButton, getButton } from './utils/utils';
import BookShopHomePage from '../components/BookShopHomePage';


const renderComponent = () => {
  render(
    <CartProvider>
      <BookShopHomePage />
    </CartProvider>
  );
};

afterEach(() => {
  cleanup();
});

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
    renderComponent();
    const addButton = getButton(textContent.addIcon);
    expect(addButton[0]).toBeInTheDocument()
    clickButton(addButton, 0);
    expect(screen.getByTestId(dataTestIds.cartSubtotalText)).toHaveTextContent('50 EUR');
    expect(screen.getByTestId(dataTestIds.cartDiscountText)).toHaveTextContent('0 EUR');
    expect(screen.getByTestId(dataTestIds.cartTotalAmountText)).toHaveTextContent('50 EUR');
  });
  it('calculates 25% discount for 5 different books (single quantities)', async () => {
    renderComponent();
    const addButton = getButton(textContent.addIcon);
    expect(addButton[0]).toBeInTheDocument()
    clickButton(addButton, 0,1,2,3,4);
    expect(screen.getByTestId(dataTestIds.cartSubtotalText)).toHaveTextContent('250 EUR');
    expect(screen.getByTestId(dataTestIds.cartDiscountText)).toHaveTextContent('62.5 EUR');
    expect(screen.getByTestId(dataTestIds.cartTotalAmountText)).toHaveTextContent('187.5 EUR');
  });
  it('calculates discount for 5 different books with multiple quantities', async () => {
    renderComponent();
    const addButton = getButton(textContent.addIcon);
    expect(addButton[0]).toBeInTheDocument()
    clickButton(addButton, 0,1,2,3,4);
    clickButton(addButton, 0,1,2);
    expect(screen.getByTestId(dataTestIds.cartSubtotalText)).toHaveTextContent('400 EUR');
    expect(screen.getByTestId(dataTestIds.cartDiscountText)).toHaveTextContent('80 EUR');
    expect(screen.getByTestId(dataTestIds.cartTotalAmountText)).toHaveTextContent('320 EUR');
  });

  it('calculates 20% discount for 4 different books', () => {
    renderComponent();
    const addButton = getButton(textContent.addIcon);
    expect(addButton[0]).toBeInTheDocument()
    clickButton(addButton, 0,1,2,3); 
    expect(screen.getByTestId(dataTestIds.cartSubtotalText)).toHaveTextContent('200 EUR');
    expect(screen.getByTestId(dataTestIds.cartDiscountText)).toHaveTextContent('40 EUR');
  });

  it('calculates 10% discount for 3 different books', () => {
    renderComponent();
    const addButton = getButton(textContent.addIcon);
    expect(addButton[0]).toBeInTheDocument()
    clickButton(addButton, 0, 1, 2);
    expect(screen.getByTestId(dataTestIds.cartSubtotalText)).toHaveTextContent('150 EUR');
    expect(screen.getByTestId(dataTestIds.cartDiscountText)).toHaveTextContent('15 EUR');
  });

  it('calculates 5% discount for 2 different books', () => {
    renderComponent();
    const addButton = getButton(textContent.addIcon);
    expect(addButton[0]).toBeInTheDocument()
    clickButton(addButton, 0, 1);
    expect(screen.getByTestId(dataTestIds.cartSubtotalText)).toHaveTextContent('100 EUR');
    expect(screen.getByTestId(dataTestIds.cartDiscountText)).toHaveTextContent('5 EUR');
    expect(screen.getByTestId(dataTestIds.cartTotalAmountText)).toHaveTextContent('95 EUR');
  });
});