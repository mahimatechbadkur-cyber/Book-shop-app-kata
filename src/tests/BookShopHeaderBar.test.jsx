import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BookShopHeaderBar  from '../components/BookShopHeaderBar';
import { textContent, dataTestIds } from './common/constants';


describe('BookShopHeaderBar component', () => {
  it('render header for Bookshop', () => {
    render(<BookShopHeaderBar />);
    const headerBar = screen.getByTestId(dataTestIds.BookShopHeaderBar);
    expect(headerBar).toBeInTheDocument();
    const heading = screen.getByTestId(dataTestIds.BookShopHeaderBarHeading);
    expect(heading).toHaveTextContent(textContent.headingText);
    expect(heading).toBeInTheDocument();
    const discountText = screen.getByTestId(dataTestIds.BookShopHeaderBarDiscountText);
    expect(discountText).toHaveTextContent(textContent.discountText);
    expect(discountText).toBeInTheDocument();
  });
});