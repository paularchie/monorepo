import { render } from '@testing-library/react';
import { Button } from './button';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  test('renders button with text', () => {
    const buttonText = 'button text';
    const { baseElement } = render(<Button text={buttonText} />);

    expect(baseElement.textContent).toBe('button text');
  });

  test('renders disabled button', () => {
    const { rerender, getByRole } = render(<Button text="button" />);
    const button = getByRole('button');

    expect(button).not.toBeDisabled();

    rerender(<Button text="button" disabled={true} />);
    expect(button).toBeDisabled();
  });

  test('renders button with icons', () => {
    const { rerender, queryByAltText } = render(
      <Button text="search" leftIcon={<img src="/" alt="search icon" />} />
    );
    let icon = queryByAltText('search icon');
    expect(icon).toBeInTheDocument();

    rerender(
      <Button text="search" rightIcon={<img src="/" alt="search icon" />} />
    );
    icon = queryByAltText('search icon');
    expect(icon).toBeInTheDocument();
  });

  test('triggers onClick handler', async () => {
    const spy = jest.fn();
    const { getByRole } = render(<Button text="button" onClick={spy} />);

    await userEvent.click(getByRole('button'));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
