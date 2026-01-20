import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import BookShopHomePage from '../components/BookShopHomePage';
import { dataTestIds, textContent } from './common/constants';
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
    const addButton = getButton(textContent.addIcon);
    expect(addButton[0]).toBeInTheDocument();
    clickButton(addButton, 0);
    console.log("value is",screen.debug());
    expect(screen.getByTestId(dataTestIds.uniqueItemCount)).toBeInTheDocument();
  });
});