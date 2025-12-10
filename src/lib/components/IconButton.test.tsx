import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { IconButton } from '..';

describe('IconButton component', () => {
  afterEach(cleanup);

  it('should apply the CSS class according to the "variant" prop', () => {
    const result = render(
      <>
        <IconButton variant="standard" aria-label="variant-standard">
          <span className="pseudo-icon" />
        </IconButton>
        <IconButton variant="filled" aria-label="variant-filled">
          <span className="pseudo-icon" />
        </IconButton>
        <IconButton variant="outlined" aria-label="variant-outlined">
          <span className="pseudo-icon" />
        </IconButton>
        <IconButton variant="tonal" aria-label="variant-tonal">
          <span className="pseudo-icon" />
        </IconButton>
      </>,
    );

    const standard = result.getByRole('button', { name: 'variant-standard' });
    const filled = result.getByRole('button', { name: 'variant-filled' });
    const outlined = result.getByRole('button', { name: 'variant-outlined' });
    const tonal = result.getByRole('button', { name: 'variant-tonal' });

    expect(standard.classList.contains('m3-icon-button-standard')).toBeTruthy();
    expect(filled.classList.contains('m3-icon-button-filled')).toBeTruthy();
    expect(outlined.classList.contains('m3-icon-button-outlined')).toBeTruthy();
    expect(tonal.classList.contains('m3-icon-button-tonal')).toBeTruthy();
  });

  it('should apply the disable CSS class when it has the "disabled" prop', () => {
    const result = render(
      <IconButton aria-label="disabled-prop" disabled>
        <span className="pseudo-icon" />
      </IconButton>,
    );

    const button = result.getByRole('button', { name: 'disabled-prop' });

    expect(button.hasAttribute('disabled')).toBeTruthy();
  });

  it('should render children content', () => {
    const result = render(
      <IconButton aria-label="with-children">
        <span data-testid="child-span">icon</span>
      </IconButton>,
    );

    expect(result.getByTestId('child-span').textContent).toBe('icon');
  });

  it('should apply size classes (default sm and custom)', () => {
    const result = render(
      <>
        <IconButton aria-label="size-default">
          <span className="pseudo-icon" />
        </IconButton>
        <IconButton aria-label="size-md" size="md">
          <span className="pseudo-icon" />
        </IconButton>
      </>,
    );

    const sizeDefault = result.getByRole('button', { name: 'size-default' });
    const sizeMd = result.getByRole('button', { name: 'size-md' });

    expect(sizeDefault.classList.contains('size-sm')).toBeTruthy();
    expect(sizeMd.classList.contains('size-md')).toBeTruthy();
  });

  it('should apply width modifiers when provided', () => {
    const result = render(
      <>
        <IconButton aria-label="width-narrow" width="narrow">
          <span className="pseudo-icon" />
        </IconButton>
        <IconButton aria-label="width-wide" width="wide">
          <span className="pseudo-icon" />
        </IconButton>
      </>,
    );

    const narrow = result.getByRole('button', { name: 'width-narrow' });
    const wide = result.getByRole('button', { name: 'width-wide' });

    expect(narrow.classList.contains('is-narrow')).toBeTruthy();
    expect(wide.classList.contains('is-wide')).toBeTruthy();
  });

  it('should set aria-pressed when toggleable', () => {
    const active = render(
      <IconButton aria-label="toggle-active" isToggleable isActive>
        <span className="pseudo-icon" />
      </IconButton>,
    ).getByRole('button', { name: 'toggle-active' });

    const inactive = render(
      <IconButton aria-label="toggle-inactive" isToggleable>
        <span className="pseudo-icon" />
      </IconButton>,
    ).getByRole('button', { name: 'toggle-inactive' });

    expect(active.getAttribute('aria-pressed')).toBe('true');
    expect(inactive.getAttribute('aria-pressed')).toBe('false');
  });

  it('should not set aria-pressed when not toggleable', () => {
    const button = render(
      <IconButton aria-label="non-toggle" isActive>
        <span className="pseudo-icon" />
      </IconButton>,
    ).getByRole('button', { name: 'non-toggle' });

    expect(button.getAttribute('aria-pressed')).toBeNull();
  });

  it('should add is-active class when active', () => {
    const button = render(
      <IconButton aria-label="active" isActive>
        <span className="pseudo-icon" />
      </IconButton>,
    ).getByRole('button', { name: 'active' });

    expect(button.classList.contains('is-active')).toBeTruthy();
  });

  it('should merge custom className', () => {
    const button = render(
      <IconButton aria-label="with-class" className="custom-class">
        <span className="pseudo-icon" />
      </IconButton>,
    ).getByRole('button', { name: 'with-class' });

    expect(button.classList.contains('custom-class')).toBeTruthy();
  });

  it('should forward ref to the button element', () => {
    const ref = { current: null as HTMLButtonElement | null };
    render(
      <IconButton aria-label="with-ref" ref={ref}>
        <span className="pseudo-icon" />
      </IconButton>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('BUTTON');
  });
});
