import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Input } from './Input';

describe('Input component', () => {
  afterEach(cleanup);

  it('renders outlined variant with legend and required marker', () => {
    const { container, getByText } = render(
      <Input label="Name" required data-testid="input-outlined" />,
    );
    const fieldset = container.querySelector('fieldset');

    expect(fieldset).toBeTruthy();
    expect(fieldset?.classList.contains('m3-input-outlined')).toBeTruthy();
    expect(fieldset?.classList.contains('has-label')).toBeTruthy();

    // legend should render with required marker
    const legend = getByText('Name*');
    expect(legend).toBeTruthy();
    expect(legend.tagName).toBe('LEGEND');
  });

  it('renders filled variant with label element', () => {
    const { container } = render(
      <Input variant="filled" label="Email" data-testid="input-filled" />,
    );
    const fieldset = container.querySelector('fieldset');

    expect(fieldset).toBeTruthy();
    expect(fieldset?.classList.contains('m3-input-filled')).toBeTruthy();
    // filled variant should render a <label> inside
    const label = container.querySelector('label');
    expect(label).toBeTruthy();
    expect(label?.textContent).toContain('Email');
  });

  it('renders startNode and endNode and sets active class when startNode provided (outlined)', () => {
    const start = <span data-testid="start">S</span>;
    const end = <span data-testid="end">E</span>;
    const { getByTestId, container } = render(
      <Input label="WithNodes" startNode={start} endNode={end} />,
    );
    const fieldset = container.querySelector('fieldset');

    expect(getByTestId('start')).toBeTruthy();
    expect(getByTestId('end')).toBeTruthy();
    // outlined variant with startNode must be active
    expect(fieldset?.classList.contains('is-active')).toBeTruthy();
  });

  it('shows error icon and has-error class when hasError is true', () => {
    const { container } = render(<Input hasError data-testid="input-error" />);
    const fieldset = container.querySelector('fieldset');

    expect(fieldset?.classList.contains('has-error')).toBeTruthy();
    // error icon svg should be present
    const svg = container.querySelector('.has-error-icon');
    expect(svg).toBeTruthy();
  });

  it('forwards value and calls onChange for controlled input', () => {
    const onChange = vi.fn();
    const { container } = render(
      <Input value="abc" onChange={onChange} data-testid="input-controlled" />,
    );
    const input = container.querySelector('input') as HTMLInputElement;

    expect(input).toBeTruthy();
    expect(input.value).toBe('abc');

    fireEvent.change(input, { target: { value: 'def' } });
    expect(onChange).toHaveBeenCalled();
    // controlled value remains 'abc' unless parent updates it
    expect(input.value).toBe('abc');
  });

  it('applies disabled to fieldset and input', () => {
    const { container } = render(
      <Input disabled data-testid="input-disabled" />,
    );
    const fieldset = container.querySelector('fieldset');
    const input = container.querySelector('input') as HTMLInputElement;

    expect(fieldset).toBeTruthy();
    // fieldset has disabled attribute when disabled prop passed
    expect(fieldset?.getAttribute('disabled')).not.toBeNull();
    expect(input.disabled).toBeTruthy();
  });
});
