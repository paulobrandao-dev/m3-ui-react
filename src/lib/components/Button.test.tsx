import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Button } from './Button';

describe('Button component', () => {
  afterEach(cleanup);

  it('should apply the right CSS class according to the "variant" prop', () => {
    const result = render(
      <>
        <Button label="Default" />
        <Button label="Elevated" variant="elevated" />
        <Button label="Filled" variant="filled" />
        <Button label="Outlined" variant="outlined" />
        <Button label="Tonal" variant="tonal" />
      </>,
    );

    const allDefault = result.getByRole('button', { name: 'Default' });
    const elevated = result.getByRole('button', { name: 'Elevated' });
    const filled = result.getByRole('button', { name: 'Filled' });
    const outlined = result.getByRole('button', { name: 'Outlined' });
    const tonal = result.getByRole('button', { name: 'Tonal' });

    expect(allDefault.classList.contains('rm-button__text')).toBeTruthy();
    expect(elevated.classList.contains('rm-button__elevated')).toBeTruthy();
    expect(filled.classList.contains('rm-button__filled')).toBeTruthy();
    expect(outlined.classList.contains('rm-button__outlined')).toBeTruthy();
    expect(tonal.classList.contains('rm-button__tonal')).toBeTruthy();
  });

  it('should render the right element according to "as" prop', () => {
    const result = render(
      <Button label="Link" as="a" variant="text" data-testid="button_text" />,
    );

    const text = result.getByTestId('button_text');

    expect(text.tagName).toEqual('A');
    expect(text.classList.contains('rm-button__text')).toBeTruthy();
  });

  it('should apply the disable CSS class when it has the "disabled" prop', () => {
    const result = render(<Button label="Disabled" disabled />);

    const button = result.getByRole('button', { name: 'Disabled' });

    expect(button.classList.contains('rm-button__disabled')).toBeTruthy();
  });
});
