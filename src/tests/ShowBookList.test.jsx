import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ShowBookList from '../components/ShowBookList';
import { dataTestIds, textContent } from './common/constants';


describe('ShowBookList component', () => {
  it('render ShowBookList', () => {
    render(<ShowBookList />);
    expect(screen.getByTestId(dataTestIds.showBookList)).toBeInTheDocument();
    const headerTitle = screen.getByText(textContent.bookListHeaderTitle);
    expect(headerTitle).toBeInTheDocument();
    const innerGrid = screen.getByTestId(dataTestIds.bookListInnerGrid);
    expect(innerGrid).toBeInTheDocument();
  });
});