import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Icon } from './Sharp';

describe('Icon component', () => {
  afterEach(cleanup);

  it('should render and apply the material symbol props correctly', () => {
    const result = render(
      <>
        <Icon icon="search" size={20} data-testid="icon_20" />
        <Icon icon="home" weight={300} emphasis="low" data-testid="icon_24" />
        <Icon icon="settings" emphasis="high" size={40} data-testid="icon_40" />
        <Icon icon="favorite" isFilled size={48} data-testid="icon_48" />
      </>,
    );

    const icon_20 = result.getByTestId('icon_20');
    const icon_24 = result.getByTestId('icon_24');
    const icon_40 = result.getByTestId('icon_40');
    const icon_48 = result.getByTestId('icon_48');

    expect(icon_20.className).toEqual('rm-icon');
    expect(icon_20.style.fontVariationSettings).toEqual(
      "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20",
    );
    expect(icon_24.className).toEqual('rm-icon');
    expect(icon_24.style.fontVariationSettings).toEqual(
      "'FILL' 0, 'wght' 300, 'GRAD' -25, 'opsz' 24",
    );
    expect(icon_40.className).toEqual('rm-icon');
    expect(icon_40.style.fontVariationSettings).toEqual(
      "'FILL' 0, 'wght' 400, 'GRAD' 200, 'opsz' 40",
    );
    expect(icon_48.className).toEqual('rm-icon');
    expect(icon_48.style.fontVariationSettings).toEqual(
      "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48",
    );
  });
});
