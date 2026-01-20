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

  it('item should get added to cart on add button click', () => {
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
  });
});