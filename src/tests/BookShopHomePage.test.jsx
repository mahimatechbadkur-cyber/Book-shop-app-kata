import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BookShopHomePage from '../components/BookShopHomePage';
import { dataTestIds } from './common/constants';

describe('BookShopHomePage component', () => {
  it('renders BookshopHomePage', () => {
    render(
      <BookShopHomePage />
    );

    expect(screen.getByTestId(dataTestIds.bookShopHomePage)).toBeInTheDocument();
    expect(screen.getByTestId(dataTestIds.showBookList)).toBeInTheDocument();
    expect(screen.getByTestId(dataTestIds.viewCartItemsPage)).toBeInTheDocument();
  });
});