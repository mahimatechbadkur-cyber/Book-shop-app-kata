import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ShowBookList from '../components/ShowBookList';
import { dataTestIds, textContent, bookList } from './common/constants';
import { getImageURL } from  '../utils/getImageURL'

describe('ShowBookList component', () => {
  it('render ShowBookList and other UI elements', () => {
    render(<ShowBookList />);
    expect(screen.getByTestId(dataTestIds.showBookList)).toBeInTheDocument();
    const headerTitle = screen.getByText(textContent.bookListHeaderTitle);
    expect(headerTitle).toBeInTheDocument();
    const innerGrids = screen.getAllByTestId(dataTestIds.bookListInnerGrid);
    expect(innerGrids[0]).toBeInTheDocument();
    const parentGrid = screen.getByTestId(dataTestIds.bookListParentGrid);
    expect(parentGrid).toBeInTheDocument();
    expect(screen.getByRole('separator')).toBeInTheDocument();
    const bookCards = screen.getAllByTestId(new RegExp(dataTestIds.bookcard));
    expect(bookCards).toHaveLength(bookList.length);
  });
  it('verifies each book card displays the correct image and alt text', () => {
    render(<ShowBookList />);

    bookList.forEach((book) => {
      const card = screen.getByTestId(`${dataTestIds.bookcard}${book.id}`);
      expect(card).toBeInTheDocument();
      const image = screen.getByAltText(book.title);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', getImageURL(book.title));
    });
  });
});