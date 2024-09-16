import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SliderToggleBtn, PrimaryBtn } from '@/components/global/Buttons';

describe('Buttons Component', () => {
  test('renders SliderToggleBtn and toggles theme', () => {
    render(<SliderToggleBtn />);
    const toggleButton = screen.getByRole('checkbox');
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(document.body.classList.contains('dark-theme')).toBe(true);

    fireEvent.click(toggleButton);
    expect(document.body.classList.contains('dark-theme')).toBe(false);
  });

  test('renders PrimaryBtn with text', () => {
    const buttonText = 'Click Me';
    render(<PrimaryBtn text={buttonText} />);
    const primaryButton = screen.getByRole('button', { name: buttonText });
    expect(primaryButton).toBeInTheDocument();
    expect(primaryButton).toHaveTextContent(buttonText);
  });
});
