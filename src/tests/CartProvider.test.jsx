import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartProvider, useCart } from '../context/CartProvider';
import { expect, describe, it, vi } from 'vitest'; 


const CartTester = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();
  
  return (
    <div>
      <p data-testid="cart-count">{cart.length}</p>
      <button onClick={() => addToCart({ id: 1, name: 'Product A' })}>Add A</button>
      <button onClick={() =>decreaseQuantity(1)}>Decrease A</button>
      <button onClick={() => removeFromCart(1)}>Remove A</button>
      <ul>
        {cart.map(item => (
          <li key={item.id} data-testid={`item-${item.id}`}>
            {item.name} - Qty: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

describe('CartProvider Logic', () => {
  it('should handle add and drecrease quantity logic', async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <CartTester />
      </CartProvider>
    );
    expect(screen.getByTestId('cart-count')).toHaveTextContent('0');
    await user.click(screen.getByText('Add A'));
    expect(screen.getByTestId('cart-count')).toHaveTextContent('1');
    expect(screen.getByTestId('item-1')).toHaveTextContent('Qty: 1');
    await user.click(screen.getByText('Add A'));
    expect(screen.getByTestId('item-1')).toHaveTextContent('Qty: 2');
    await user.click(screen.getByText('Decrease A'));
    expect(screen.getByTestId('item-1')).toHaveTextContent('Qty: 1');
  });

  it('removeFromCart removes item regardless of quantity', async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <CartTester />
      </CartProvider>
    );

    await user.click(screen.getByText('Add A'));
    await user.click(screen.getByText('Add A')); 

    expect(screen.getByTestId('cart-count')).toHaveTextContent('1');
    await user.click(screen.getByText('Remove A'));
    expect(screen.getByTestId('cart-count')).toHaveTextContent('0');
    expect(screen.queryByText('Book A')).not.toBeInTheDocument();
  });
  
  it('throws error when used outside of CartProvider', () => {
    
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => render(<CartTester />)).toThrow('useCart must be used within a CartProvider');
    
    consoleSpy.mockRestore();
  });
});
