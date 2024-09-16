import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '@/components/layout/Header';

describe('Header Component', () => {
  test('renders Header with title and SliderToggleBtn', () => {
    render(<Header />);
    const titleElement = screen.getByText('GithubFinder');
    expect(titleElement).toBeInTheDocument();

    const toggleButton = screen.getByRole('checkbox');
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(document.body.classList.contains('dark-theme')).toBe(true);

    fireEvent.click(toggleButton);
    expect(document.body.classList.contains('dark-theme')).toBe(false);
  });
});
