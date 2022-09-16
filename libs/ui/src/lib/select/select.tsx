import { Select as MantineSelect } from '@mantine/core';

type SelectData = {
  label: string;
  value: string;
};

export type SelectProps = {
  label?: string;
  placeholder?: string;
  data: SelectData[];
  value?: string;
  searchable?: boolean;
  nothingFound?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string | boolean;
};

export function Select({
  label,
  placeholder,
  data,
  value,
  searchable,
  nothingFound,
  disabled,
  readOnly,
  error
}: SelectProps) {
  return (
    <MantineSelect
      label={label}
      placeholder={placeholder}
      data={data}
      value={value}
      searchable={searchable}
      nothingFound={nothingFound}
      disabled={disabled}
      readOnly={readOnly}
      error={error}
    />
  );
}

export default Select;
