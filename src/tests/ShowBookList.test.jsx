import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import ShowBookList from '../components/ShowBookList';
import { dataTestIds, textContent, bookList, currency } from './common/constants';
import { getImageURL } from  '../utils/getImageURL'
import { getButton } from './utils/utils';
import { CartProvider } from '../context/CartProvider';

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  render(
    <CartProvider>
      <ShowBookList />
    </CartProvider>
  )
});

describe('ShowBookList component', () => {
  it('render ShowBookList and other UI elements', () => {
    expect(screen.getByTestId(dataTestIds.showBookList)).toBeInTheDocument();
    const headerTitle = screen.getByText(textContent.bookListHeaderTitle);
    expect(headerTitle).toBeInTheDocument();
    const innerGrids = screen.getAllByTestId(dataTestIds.bookListInnerGrid);
    expect(innerGrids[0]).toBeInTheDocument();
    const parentGrid = screen.getByTestId(dataTestIds.bookListParentGrid);
    expect(parentGrid).toBeInTheDocument();
    const bookCards = screen.getAllByTestId(new RegExp(dataTestIds.bookcard));
    expect(bookCards[0]).toHaveTextContent(bookList[0].price);
    
  });
  it('verifies each book card displays the correct image and alt text and price with currency', () => {
    bookList.forEach((book) => {
      const card = screen.getByTestId(`${dataTestIds.bookcard}${book.id}`);
      expect(card).toBeInTheDocument();
      const image = screen.getByAltText(book.title);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', getImageURL(book.title));
      const priceElement = screen.getByTestId(`${dataTestIds.bookcard}Price${book.id}`);
      expect(priceElement).toHaveTextContent(`${book.price} ${currency}`);
    });
  });
  it('should render add and drecrease quantity button button', () => {
    const addButton = getButton(textContent.addIcon);
    expect(addButton[0]).toBeInTheDocument();
    const decreaseButton = getButton(textContent.decreaseIcon);
    expect(decreaseButton[0]).toBeInTheDocument();
  });
});