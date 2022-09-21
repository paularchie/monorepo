import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './select';

const props = {
  label: 'label text',
  placeholder: 'placeholder text',
  data: [
    { value: 'v-1', label: 'value 1' },
    { value: 'v-2', label: 'value 2' },
    { value: 'v-3', label: 'value 3' },
    { value: 'v-4', label: 'value 4' }
  ]
};

describe('<Select />', () => {
  test('renders label', () => {
    const { getByLabelText } = render(<Select {...props} />);
    expect(getByLabelText(props.label)).toBeDefined();
  });

  test('displays placeholder text', () => {
    const { getByPlaceholderText } = render(<Select {...props} />);
    expect(getByPlaceholderText(props.placeholder)).toBeDefined();
  });

  test('renders list of options', async () => {
    const { getByPlaceholderText, getAllByRole } = render(
      <Select {...props} />
    );

    await userEvent.click(getByPlaceholderText(props.placeholder));

    const options = getAllByRole('option');
    expect(options.length).toBe(props.data.length);

    options.forEach((option, index) => {
      expect(option.textContent).toEqual(props.data[index].label);
    });
  });

  test('selects an option', async () => {
    const { getByPlaceholderText, getByText } = render(<Select {...props} />);

    const input = getByPlaceholderText(props.placeholder) as HTMLInputElement;

    await userEvent.click(getByPlaceholderText(props.placeholder));

    const optionLabel = props.data[2].label;
    await userEvent.click(getByText(optionLabel));

    expect(input.value).toBe(optionLabel);
  });

  test('filters list of options', async () => {
    const { getByPlaceholderText, getAllByRole } = render(
      <Select {...props} searchable nothingFound="No options" />
    );

    const optionIndex = 3;

    const input = getByPlaceholderText(props.placeholder);
    await userEvent.type(input, props.data[optionIndex].label);

    const options = getAllByRole('option');
    expect(options.length).toBe(1);
    expect(options[0].textContent).toBe(props.data[optionIndex].label);
  });

  test('displays nothing found message if no matching option has been found', async () => {
    const { getByPlaceholderText, getByText, queryAllByRole } = render(
      <Select {...props} searchable nothingFound="No options" />
    );

    const input = getByPlaceholderText(props.placeholder);
    await userEvent.type(input, 'abc');

    const options = queryAllByRole('option');
    expect(options.length).toBe(0);
    expect(getByText('No options')).toBeDefined();
  });

  test('displays error message', async () => {
    const errorMessage = 'some error message';
    const { getByRole } = render(<Select {...props} error={errorMessage} />);

    expect(getByRole('alert').textContent).toBe(errorMessage);
  });

  test('renders disabled input', () => {
    const { getByPlaceholderText } = render(<Select {...props} disabled />);

    const input = getByPlaceholderText(props.placeholder);
    expect(input).toBeDisabled();
  });

  test('read-only input should not be editable', async () => {
    const { getByPlaceholderText, queryAllByRole } = render(
      <Select {...props} readOnly />
    );

    const input = getByPlaceholderText(props.placeholder);
    await userEvent.click(input);

    expect(queryAllByRole('option').length).toBe(0);
  });
});
