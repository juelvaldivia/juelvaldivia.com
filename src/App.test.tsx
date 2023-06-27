import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bienvenido a la web de Juel/i);
  expect(linkElement).toBeInTheDocument();
});
