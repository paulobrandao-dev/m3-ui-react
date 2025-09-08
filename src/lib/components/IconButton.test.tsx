import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { IconButton } from '..';

describe('IconButton component', () => {
  afterEach(cleanup);

  it('should apply the CSS class according to the "variant" prop', () => {
    const result = render(
      <>
        <IconButton
          variant="standard"
          aria-label="variant-standard"
          icon={<span className="pseudo-icon" />}
        />
        <IconButton
          variant="filled"
          aria-label="variant-filled"
          icon={<span className="pseudo-icon" />}
        />
        <IconButton
          variant="outlined"
          aria-label="variant-outlined"
          icon={<span className="pseudo-icon" />}
        />
        <IconButton
          variant="tonal"
          aria-label="variant-tonal"
          icon={<span className="pseudo-icon" />}
        />
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
      <IconButton
        aria-label="disabled-prop"
        icon={<span className="pseudo-icon" />}
        disabled
      />,
    );

    const button = result.getByRole('button', { name: 'disabled-prop' });

    expect(button.hasAttribute('disabled')).toBeTruthy();
  });
});
