import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import BookShopHomePage from '../components/BookShopHomePage';
import { dataTestIds, textContent, bookList, currency } from './common/constants';
import { clickButton, getButton } from './utils/utils';
import { CartProvider } from '../context/CartProvider';

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  render(
    <CartProvider>
      <BookShopHomePage />
    </CartProvider>
  );
});

describe('BookShopHomePage component', () => {
  it('renders BookshopHomePage', () => { 
    expect(screen.getByTestId(dataTestIds.bookShopHomePage)).toBeInTheDocument();
    expect(screen.getByTestId(dataTestIds.showBookList)).toBeInTheDocument();
    expect(screen.getByTestId(dataTestIds.viewCartItemsPage)).toBeInTheDocument();
  });

  it('item should get added to cart on add button click and show cartItem and summary', () => {
    expect(screen.getByText(textContent.emptyCartText)).toBeInTheDocument();
    expect(screen.getByText(textContent.emptyCartSubtitle).textContent).toBe(textContent.emptyCartSubtitle);
    const addButton = getButton(textContent.addIcon);
    expect(addButton[0]).toBeInTheDocument();
    clickButton(addButton, 0);
    const title = screen.getByTestId(`${dataTestIds.cartItem}Title1`);
    expect(title).toHaveTextContent(bookList[0].title);
    const price = screen.getByTestId(`${dataTestIds.cartItem}Price1`);
    expect(price).toHaveTextContent(bookList[0].price + ' ' + currency);
    const itemCards = screen.getAllByTestId(new RegExp(dataTestIds.cartItem));
    expect(itemCards[0]).toHaveTextContent(bookList[0].title);
    expect(screen.getByText(`${textContent.quantityText}: 1`, { exact: false })).toBeInTheDocument();
    expect(screen.getByTestId(dataTestIds.cartSubtotalText)).toHaveTextContent('50 EUR');
    expect(screen.getByTestId(dataTestIds.cartDiscountText)).toHaveTextContent('0 EUR');
    expect(screen.getByTestId(dataTestIds.cartTotalAmountText)).toHaveTextContent('50 EUR');
  });
  it('item quantity should get decreased on decrease button click',  async() => {
    const addButton = getButton(textContent.addIcon);
    expect(addButton[0]).toBeInTheDocument();
    clickButton(addButton, 0);
    clickButton(addButton, 0);
    expect(screen.getByText(`${textContent.quantityText}: 2`, { exact: false })).toBeInTheDocument();
    const decreaseButton = getButton(textContent.decreaseIcon);
    expect(decreaseButton[0]).toBeInTheDocument();
    clickButton(decreaseButton, 0);
    expect(screen.getByText(`${textContent.quantityText}: 1`, { exact: false })).toBeInTheDocument();
  });
  it('item should get removed from cart on remove button click',  () => {
    const addButton = getButton(textContent.addIcon);
    expect(addButton[0]).toBeInTheDocument();
    clickButton(addButton, 0);
    expect(screen.getByText(`${textContent.quantityText}: 1`, { exact: false })).toBeInTheDocument();
    const removeBtn = screen.getAllByTestId(dataTestIds.removeFromCartButton);
    expect(removeBtn[0]).toBeInTheDocument();
    clickButton(removeBtn, 0);
    expect(screen.getByText(textContent.emptyCartText)).toBeInTheDocument();
  });
});


