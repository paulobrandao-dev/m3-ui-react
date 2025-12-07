import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox component', () => {
  afterEach(cleanup);

  it('renders unchecked by default', () => {
    const { getByTestId } = render(<Checkbox data-testid="cb-default" />);
    const input = getByTestId('cb-default') as HTMLInputElement;

    expect(input).toBeTruthy();
    expect(input.checked).toBeFalsy();
    expect(input.disabled).toBeFalsy();
    // wrapper should not have the checked class
    expect(input.parentElement?.classList.contains('is-checked')).toBeFalsy();
  });

  it('renders with defaultChecked true', () => {
    const { getByTestId } = render(
      <Checkbox defaultChecked data-testid="cb-default-checked" />,
    );
    const input = getByTestId('cb-default-checked') as HTMLInputElement;

    expect(input.checked).toBeTruthy();
    expect(input.parentElement?.classList.contains('is-checked')).toBeTruthy();
    // SVG indicator should be present when checked
    expect(input.parentElement?.querySelector('svg')).toBeTruthy();
  });

  it('renders controlled checked prop', () => {
    const { getByTestId } = render(
      <Checkbox checked data-testid="cb-controlled" />,
    );
    const input = getByTestId('cb-controlled') as HTMLInputElement;

    expect(input.checked).toBeTruthy();
    expect(input.parentElement?.classList.contains('is-checked')).toBeTruthy();
  });

  it('renders disabled state', () => {
    const { getByTestId } = render(
      <Checkbox disabled data-testid="cb-disabled" />,
    );
    const input = getByTestId('cb-disabled') as HTMLInputElement;

    expect(input.disabled).toBeTruthy();
    expect(input.parentElement?.classList.contains('is-disabled')).toBeTruthy();
  });

  it('calls onChange when clicked (uncontrolled)', () => {
    const onChange = vi.fn();
    const { getByTestId } = render(
      <Checkbox onChange={onChange} data-testid="cb-click" />,
    );
    const input = getByTestId('cb-click') as HTMLInputElement;

    fireEvent.click(input);
    expect(onChange).toHaveBeenCalled();
    // uncontrolled checkbox toggles checked state
    expect(input.checked).toBeTruthy();
  });

  it('calls onChange when clicked (controlled) but value remains controlled', () => {
    const onChange = vi.fn();
    const { getByTestId } = render(
      <Checkbox
        checked
        onChange={onChange}
        data-testid="cb-click-controlled"
      />,
    );
    const input = getByTestId('cb-click-controlled') as HTMLInputElement;

    fireEvent.click(input);
    expect(onChange).toHaveBeenCalled();
    // controlled prop keeps checkbox checked
    expect(input.checked).toBeTruthy();
  });
});
