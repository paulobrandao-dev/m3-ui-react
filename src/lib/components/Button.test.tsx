import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Button } from './Button';

describe('Button component', () => {
  afterEach(cleanup);

  it('should apply the right CSS class according to the "variant" prop', () => {
    const result = render(
      <>
        <Button>Default</Button>
        <Button variant="elevated">Elevated</Button>
        <Button variant="filled">Filled</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="tonal">Tonal</Button>
      </>,
    );

    const allDefault = result.getByRole('button', { name: 'Default' });
    const elevated = result.getByRole('button', { name: 'Elevated' });
    const filled = result.getByRole('button', { name: 'Filled' });
    const outlined = result.getByRole('button', { name: 'Outlined' });
    const tonal = result.getByRole('button', { name: 'Tonal' });

    expect(allDefault.classList.contains('m3-button-text')).toBeTruthy();
    expect(elevated.classList.contains('m3-button-elevated')).toBeTruthy();
    expect(filled.classList.contains('m3-button-filled')).toBeTruthy();
    expect(outlined.classList.contains('m3-button-outlined')).toBeTruthy();
    expect(tonal.classList.contains('m3-button-tonal')).toBeTruthy();
  });

  it('should apply the disable CSS class when it has the "disabled" prop', () => {
    const result = render(<Button disabled>Disabled</Button>);

    const button = result.getByRole('button', { name: 'Disabled' });

    expect(button.hasAttribute('disabled')).toBeTruthy();
  });
});
