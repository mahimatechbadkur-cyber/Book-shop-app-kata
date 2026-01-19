import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { dataTestIds, textContent } from './common/constants';
import ViewCartItems from '../components/ViewCartItems';


describe('ViewCartItems component', () => {
  it('render ViewCartItems', () => {
    render(<ViewCartItems />);
    expect(screen.getByTestId(dataTestIds.viewCartItemsPage)).toBeInTheDocument();
    const headerTitle = screen.getByText(textContent.cartItemListHeaderTitle);
    expect(headerTitle).toBeInTheDocument();
  });
});