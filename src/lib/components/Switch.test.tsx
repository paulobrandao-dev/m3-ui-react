import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { Switch } from './Switch';

describe('Switch component', () => {
  afterEach(cleanup);

  test('should render correctly with default props', () => {
    const { getByRole } = render(<Switch />);
    const switchEl = getByRole('switch');
    expect(switchEl).toBeTruthy();
    expect(switchEl.getAttribute('aria-checked')).toEqual('false');
    expect(switchEl.classList.contains('is-disabled')).toBeFalsy();
  });

  test('should render correctly when checked', () => {
    const { getByRole } = render(<Switch checked />);
    const switchEl = getByRole('switch');
    expect(switchEl.getAttribute('aria-checked')).toEqual('true');
  });

  test('should call onChange handler when clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const { getByRole } = render(<Switch onChange={handleChange} />);
    const switchEl = getByRole('switch');
    await user.click(switchEl);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  test('should toggle state when clicked from checked to unchecked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const { getByRole } = render(<Switch checked onChange={handleChange} />);
    const switchEl = getByRole('switch');
    await user.click(switchEl);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  test('should apply class "is-disable" when props disabled is set', async () => {
    const { getByRole } = render(<Switch disabled />);
    const switchEl = getByRole('switch');
    expect(switchEl.classList.contains('is-disabled')).toBeTruthy();
  });

  test('should display an icon when checked and provided', () => {
    const icon = <div data-testid="icon">Icon</div>;
    const { getByTestId } = render(<Switch checked icon={icon} />);
    expect(getByTestId('icon')).toBeTruthy();
  });

  test('should not display an icon when unchecked, even if provided', () => {
    const icon = <div data-testid="icon">Icon</div>;
    const { queryByTestId } = render(<Switch icon={icon} />);
    expect(queryByTestId('icon')).toBeFalsy();
  });

  test('should apply custom className alongside default class', () => {
    const { getByRole } = render(<Switch className="my-custom-class" />);
    const switchEl = getByRole('switch');
    expect(switchEl.classList.contains('m3-switch')).toBeTruthy();
    expect(switchEl.classList.contains('my-custom-class')).toBeTruthy();
  });

  test('should forward ref to the root div element', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Switch ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.getAttribute('role')).toBe('switch');
  });

  test('should pass through other HTML attributes like data-testid', () => {
    const { getByTestId } = render(<Switch data-testid="my-switch" />);
    expect(getByTestId('my-switch')).toBeTruthy();
  });

  test('should not throw error if onChange is not provided and component is clicked', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<Switch />);
    const switchEl = getByRole('switch');
    const clickAction = async () => await user.click(switchEl);
    await expect(clickAction()).resolves.not.toThrow();
  });
});
