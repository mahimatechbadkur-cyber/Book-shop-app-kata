import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import { dataTestIds, textContent } from './common/constants';
import ViewCartItems from '../components/ViewCartItems';
import { useCart } from '../context/CartProvider';
import { bookList } from '../common/constants';
import { CartProvider } from '../context/CartProvider';
import { clickButton, getButton } from './utils/utils';

afterEach(() => {
  cleanup();
});

const renderComponent = (item) => {
  render(
    <CartProvider>
      <CartAdder item={item} />
      <ViewCartItems />
    </CartProvider>
  );
};

const CartAdder = ({ item }) => {
  const { addToCart } = useCart();
  return <button onClick={() => addToCart(item)}>{textContent.addIcon}</button>;
};

describe('ViewCartItems component', () => {

  it('render ViewCartItems', () => {
    render(
      <CartProvider>
        <ViewCartItems />
      </CartProvider>
    );
    expect(screen.getByTestId(dataTestIds.viewCartItemsPage)).toBeInTheDocument();
    const headerTitle = screen.getByText(textContent.cartItemListHeaderTitle);
    expect(headerTitle).toBeInTheDocument();
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });
  it('should display "Your cart is empty" by default', () => {
    render(
      <CartProvider>
        <ViewCartItems />
      </CartProvider>
    );
    expect(screen.getByText(textContent.emptyCartText)).toBeInTheDocument();
  });

  it('should display the correct item count after adding an item', () => {
    renderComponent(bookList[0]);
    const addButton = getButton(textContent.addIcon);
    expect(addButton[0]).toBeInTheDocument();
    clickButton(addButton, 0);
    const count = screen.getByTestId(dataTestIds.uniqueItemCount);
    expect(count).toHaveTextContent('1');
  });
  it('maintains count of 1 when adding the same item multiple times', () => {
    renderComponent(bookList[0]);
    const addButton = getButton(textContent.addIcon);
    expect(addButton[0]).toBeInTheDocument();
    clickButton(addButton, 0);
    clickButton(addButton, 0);
    const countElement = screen.getByTestId(dataTestIds.uniqueItemCount);
    expect(countElement).toHaveTextContent('1');
  });
});