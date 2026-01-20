import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EmptyCartView  from '../components/EmptyCartView';
import { dataTestIds,textContent } from './common/constants';

describe('EmptyCartView component', () => {
  it('should render EmptyCartView and other UI elements when cart is empty', () => {
    render(<EmptyCartView />);
    expect(screen.getByTestId(dataTestIds.emptyCartView)).toBeInTheDocument();
    expect(screen.getByText(textContent.emptyCartText).textContent).toBe(textContent.emptyCartText);
    expect(screen.getByText(textContent.emptyCartSubtitle).textContent).toBe(textContent.emptyCartSubtitle);
    expect(screen.getByTestId(dataTestIds.emptyCartShoppingCartIcon)).toBeInTheDocument();  
  });
});