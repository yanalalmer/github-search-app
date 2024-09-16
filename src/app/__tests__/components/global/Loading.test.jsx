import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Loading } from '@/components/global/Loading';

describe('Loading Component', () => {
  test('renders Loading component', () => {
    render(<Loading />);
    const loadingElement = screen.getByTestId('loading');
    expect(loadingElement).toBeInTheDocument();
  });
  test('Loading component has correct text', () => {
    render(<Loading />);
    const loadingElement = screen.getByTestId('loading');
    expect(loadingElement).toHaveTextContent('Loading...');
  });
});
