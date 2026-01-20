import {fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/react';

export const clickButton = (elements, ...indices) => 
  indices.forEach(i => fireEvent.click(elements[i]));

export const getButton = (label) => {
  const dynamicRegex = new RegExp(label, 'i');
  const buttons = screen.getAllByRole('button', { name: dynamicRegex });  
  return buttons
};
