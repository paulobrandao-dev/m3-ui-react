import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Tooltip } from './Tooltip';

// Tooltip.test.tsx

describe('Tooltip component', () => {
  afterEach(cleanup);

  it('renders child and tooltip text', () => {
    const { getByText, getByRole } = render(
      <Tooltip text="Tooltip content">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(getByText('Hover me')).toBeDefined();
    expect(getByRole('tooltip').textContent).toEqual('Tooltip content');
  });

  it('shows tooltip on mouse over and hides on mouse out', () => {
    const { getByText, getByRole } = render(
      <Tooltip text="Tooltip content">
        <button>Hover me</button>
      </Tooltip>,
    );
    const button = getByText('Hover me');
    const tooltip = getByRole('tooltip');

    // Mock showPopover/hidePopover since happy-dom doesn't implement them
    tooltip.showPopover = vi.fn();
    tooltip.hidePopover = vi.fn();

    fireEvent.mouseOver(button);
    expect(tooltip.showPopover).toHaveBeenCalled();

    fireEvent.mouseOut(button);
    expect(tooltip.hidePopover).toHaveBeenCalled();
  });

  it('applies custom className and style', () => {
    const { getByRole } = render(
      <Tooltip
        text="Tooltip content"
        className="custom-class"
        style={{ color: 'red' }}
      >
        <button>Hover me</button>
      </Tooltip>,
    );
    const tooltip = getByRole('tooltip');
    expect(tooltip.className).toContain('custom-class');
    expect(tooltip.style.color).toBe('red');
  });

  it('calls child event handlers if provided', () => {
    const onMouseOver = vi.fn();
    const onMouseOut = vi.fn();
    const { getByText, getByRole } = render(
      <Tooltip text="Tooltip content">
        <button onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          Hover me
        </button>
      </Tooltip>,
    );
    const button = getByText('Hover me');
    const tooltip = getByRole('tooltip');

    // Mock showPopover/hidePopover since happy-dom doesn't implement them
    tooltip.showPopover = vi.fn();
    tooltip.hidePopover = vi.fn();

    fireEvent.mouseOver(button);
    fireEvent.mouseOut(button);
    expect(onMouseOver).toHaveBeenCalled();
    expect(onMouseOut).toHaveBeenCalled();
  });

  it('passes additional props to the tooltip div', () => {
    const { getByRole } = render(
      <Tooltip text="Tooltip" data-testid="tip" aria-label="info">
        <button>Hover me</button>
      </Tooltip>,
    );
    const tooltip = getByRole('tooltip');
    expect(tooltip.getAttribute('data-testid')).toBe('tip');
    expect(tooltip.getAttribute('aria-label')).toBe('info');
  });

  it('sets tooltip position styles on mouse over', () => {
    const { getByText, getByRole } = render(
      <Tooltip text="Tooltip">
        <button>Hover me</button>
      </Tooltip>,
    );
    const button = getByText('Hover me');
    const tooltip = getByRole('tooltip');

    // Mock getBoundingClientRect and mediaQuery
    const rect = {
      top: 10,
      left: 20,
      bottom: 30,
      width: 40,
      height: 20,
      right: 60,
      x: 20,
      y: 10,
      toJSON: () => {},
    };
    button.getBoundingClientRect = vi.fn(() => rect);
    tooltip.showPopover = vi.fn();

    fireEvent.mouseOver(button);

    expect(tooltip.style.marginBlock).toContain('34px auto');
    expect(tooltip.style.marginInline).toContain('40px auto');
    expect(tooltip.style.transformOrigin).toBe('top center');
    expect(tooltip.showPopover).toHaveBeenCalled();
  });

  it('sets tooltip position styles for bottom placement', () => {
    const { getByText, getByRole } = render(
      <Tooltip text="Tooltip">
        <button>Hover me</button>
      </Tooltip>,
    );
    const button = getByText('Hover me');
    const tooltip = getByRole('tooltip');

    // Simulate anchor near bottom
    const rect = {
      top: 100,
      left: 50,
      bottom: 120,
      width: 60,
      height: 20,
      right: 110,
      x: 50,
      y: 100,
      toJSON: () => {},
    };
    button.getBoundingClientRect = vi.fn(() => rect);
    tooltip.showPopover = vi.fn();

    fireEvent.mouseOver(button);

    expect(tooltip.style.marginBlock).toContain('auto 672px');
    expect(tooltip.style.marginInline).toContain('80px auto');
    expect(tooltip.style.transformOrigin).toBe('bottom center');
    expect(tooltip.showPopover).toHaveBeenCalled();
  });
});
