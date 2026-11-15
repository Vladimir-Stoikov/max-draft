import { afterEach, expect, test, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Button from './Button';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

test('renders the provided text', () => {
  render(<Button>Accept</Button>);

  const button = screen.getByRole('button', { name: 'Accept' });

  expect(button).toBeInTheDocument();
});

test('disables the button when disabled is passed', () => {
  render(<Button disabled>Accept</Button>);

  const button = screen.getByRole('button', { name: 'Accept' });

  expect(button).toBeDisabled();
});

test('calls onClick when clicked', async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();

  render(<Button onClick={handleClick}>Accept</Button>);

  const button = screen.getByRole('button', { name: 'Accept' });

  await user.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('does not call onClick when disabled', async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();

  render(
    <Button onClick={handleClick} disabled>
      Accept
    </Button>,
  );

  const button = screen.getByRole('button', { name: 'Accept' });

  await user.click(button);

  expect(handleClick).not.toHaveBeenCalled();
});

test('does not call onClick when isLoading', async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();

  render(
    <Button onClick={handleClick} isLoading>
      Accept
    </Button>,
  );

  const button = screen.getByRole('button', { name: 'Accept' });

  await user.click(button);

  expect(handleClick).not.toHaveBeenCalled();
});

test('uses button type by default', () => {
  render(<Button>Accept</Button>);

  const button = screen.getByRole('button', { name: 'Accept' });

  expect(button).toHaveAttribute('type', 'button');
});

test('preserves the provided type', () => {
  render(<Button type='submit'>Accept</Button>);

  const button = screen.getByRole('button', { name: 'Accept' });

  expect(button).toHaveAttribute('type', 'submit');
});
