import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Select } from './Select';

describe('Select component', () => {
  afterEach(cleanup);

  const user = userEvent.setup({ pointerEventsCheck: 0 });

  it('renders outlined variant with legend and required marker', () => {
    const { container, getByText } = render(
      <Select label="Choose" required data-testid="select-outlined" />,
    );
    const fieldset = container.querySelector('fieldset');

    expect(fieldset).toBeTruthy();
    expect(fieldset?.classList.contains('m3-select-outlined')).toBeTruthy();
    expect(fieldset?.classList.contains('has-label')).toBeTruthy();

    const legend = getByText('Choose*');
    expect(legend).toBeTruthy();
    expect(legend.tagName).toBe('LEGEND');
  });

  it('renders filled variant with label element', () => {
    const { container } = render(
      <Select variant="filled" label="Email" data-testid="select-filled" />,
    );
    const fieldset = container.querySelector('fieldset');

    expect(fieldset).toBeTruthy();
    expect(fieldset?.classList.contains('m3-select-filled')).toBeTruthy();
    const label = container.querySelector('label');
    expect(label).toBeTruthy();
    expect(label?.textContent).toContain('Email');
  });

  it('renders startNode and endNode and sets active when startNode provided', () => {
    const start = <span data-testid="start">S</span>;
    const end = <span data-testid="end">E</span>;
    const { getByTestId, container } = render(
      <Select label="WithNodes" startNode={start} endNode={end} />,
    );
    const fieldset = container.querySelector('fieldset');

    expect(getByTestId('start')).toBeTruthy();
    expect(getByTestId('end')).toBeTruthy();
    expect(fieldset?.classList.contains('is-active')).toBeTruthy();
  });

  it('shows error icon and has-error class when hasError is true', () => {
    const { container } = render(
      <Select hasError data-testid="select-error" />,
    );
    const fieldset = container.querySelector('fieldset');

    expect(fieldset?.classList.contains('has-error')).toBeTruthy();
    const svg = container.querySelector('.has-error-icon');
    expect(svg).toBeTruthy();
  });

  it('shows selected value for single select', () => {
    const options = [
      { label: 'One', value: 1 },
      { label: 'Two', value: 2 },
    ];
    const { container } = render(
      <Select options={options} value={2} data-testid="select-single" />,
    );
    const input = container.querySelector('input') as HTMLInputElement;

    expect(input).toBeTruthy();
    expect(input.value).toBe('Two');
  });

  it('renders chips for multiple selected values', async () => {
    const onChange = vi.fn();
    const options = [
      { label: 'Red', value: 'red' },
      { label: 'Blue', value: 'blue' },
    ];
    const { getAllByRole } = render(
      <Select
        options={options}
        onChange={onChange}
        multiple
        value={['red', 'blue']}
      />,
    );

    expect(getAllByRole('listitem').length).toBeGreaterThanOrEqual(2);
    const texts = getAllByRole('listitem').map(n => n.textContent?.trim());
    expect(texts).toContain('Red');
    expect(texts).toContain('Blue');
    await user.click(getAllByRole('listitem')[0]);
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(['blue']);
    });
  });

  it('forwards custom dropdownIcon when provided', () => {
    const dd = <span data-testid="custom-dd">v</span>;
    const { getByTestId } = render(
      <Select dropdownIcon={dd} data-testid="select-dd" />,
    );

    expect(getByTestId('custom-dd')).toBeTruthy();
  });

  it('applies aria attributes and disabled', () => {
    const { container } = render(
      <Select label="Aria" options={[]} disabled data-testid="select-aria" />,
    );
    const fieldset = container.querySelector('fieldset');

    expect(fieldset?.getAttribute('role')).toBe('combobox');
    expect(fieldset?.getAttribute('aria-controls')).not.toBeNull();
    expect(fieldset?.getAttribute('aria-labelledby')).not.toBeNull();
    expect(fieldset?.getAttribute('disabled')).not.toBeNull();
  });

  it('calls onChange when option clicked (single)', async () => {
    const onChange = vi.fn();
    const options = [
      { label: 'A', value: 'a' },
      { label: 'B', value: 'b' },
    ];
    const { getByText, getByRole } = render(
      <Select options={options} onChange={onChange} />,
    );

    await user.click(getByRole('combobox'));
    await waitFor(() => {
      expect(getByText('B')).toBeTruthy();
    });
    await user.click(getByText('B'));
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith('b');
    });
  });

  it('calls onChange with array when multiple selection', async () => {
    const onChange = vi.fn();
    const options = [
      { label: 'X', value: 'x' },
      { label: 'Y', value: 'y' },
    ];
    const { getByText, getByRole } = render(
      <Select options={options} onChange={onChange} multiple />,
    );

    await user.click(getByRole('combobox'));
    await waitFor(() => {
      expect(getByText('X')).toBeTruthy();
    });
    await user.click(getByText('X'));
    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
    const calledWith = onChange.mock.calls[0][0];
    expect(Array.isArray(calledWith)).toBeTruthy();
    expect(calledWith).toContain('x');
  });
});
