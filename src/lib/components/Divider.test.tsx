import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Divider } from './Divider';

describe('Divider component', () => {
  afterEach(cleanup);

  it('should render the HR element as default', () => {
    const result = render(<Divider data-testid="default" />);
    const hr = result.getByTestId('default');

    expect(hr.classList.contains('m3-divider')).toBeTruthy();
    expect(hr.tagName).toEqual('HR');
  });

  it('should render the element according to "as" props', () => {
    const result = render(<Divider as="div" data-testid="as-prop" />);
    const hr = result.getByTestId('as-prop');

    expect(hr.tagName).toEqual('DIV');
  });

  it('should apply the vertical CSS class when it had the "isVertical" prop', () => {
    const result = render(<Divider data-testid="vertical-prop" isVertical />);
    const hr = result.getByTestId('vertical-prop');

    expect(hr.classList.contains('is-vertical')).toBeTruthy();
  });
});
