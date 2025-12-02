import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Chip } from './Chip';

describe('Chip component', () => {
  afterEach(cleanup);

  it('renders with label and default props', () => {
    const { getByTestId, getByText } = render(
      <Chip label="Tag" data-testid="chip-default" />,
    );
    const btn = getByTestId('chip-default');

    expect(btn).toBeTruthy();
    expect(btn.tagName).toBe('BUTTON');
    expect(btn.classList.contains('m3-chip')).toBeTruthy();
    expect(btn.getAttribute('aria-pressed')).toBeNull();
    // label should render inside a span via Font
    const label = getByText('Tag');
    expect(label).toBeTruthy();
    expect(label.tagName).toBe('SPAN');
  });

  it('applies selected and elevated states', () => {
    const { getByTestId } = render(
      <Chip label="Selected" isSelected isElevated data-testid="chip-states" />,
    );
    const btn = getByTestId('chip-states');

    expect(btn.getAttribute('aria-pressed')).toBe('true');
    expect(btn.classList.contains('is-elevated')).toBeTruthy();
  });

  it('renders startNode and endNode', () => {
    const start = <span data-testid="start">S</span>;
    const end = <span data-testid="end">E</span>;
    const { getByTestId } = render(
      <Chip label="WithNodes" startNode={start} endNode={end} />,
    );

    expect(getByTestId('start')).toBeTruthy();
    expect(getByTestId('end')).toBeTruthy();
  });

  it('calls onClick and forwards extra props and className', () => {
    const onClick = vi.fn();
    const { getByTestId } = render(
      <Chip
        label="Click"
        onClick={onClick}
        className="extra-class"
        data-testid="chip-click"
        data-foo="bar"
      />,
    );
    const btn = getByTestId('chip-click');

    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalled();
    expect(btn.classList.contains('extra-class')).toBeTruthy();
    expect(btn.getAttribute('data-foo')).toBe('bar');
    expect(btn.getAttribute('type')).toBe('button');
  });
});
