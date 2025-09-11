import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Navlink } from './Navlink';

describe('Navlink component', () => {
  afterEach(cleanup);

  it('should renders label', () => {
    const { getByRole, getByText } = render(
      <Navlink href="/test" label="Home" />,
    );
    const anchor = getByRole('link');

    expect(anchor.classList.contains('m3-navlink'));
    expect(getByText('Home')).toBeTruthy();
  });

  it('should renders with custom className', () => {
    const { getByRole } = render(
      <Navlink href="/test" label="Home" className="custom-class" />,
    );
    const anchor = getByRole('link');

    expect(anchor.classList.contains('custom-class')).toBeTruthy();
  });

  it('should renders icon when provided (vertical)', () => {
    const { getByTestId } = render(
      <Navlink href="/test" label="Home" icon={<span data-testid="icon" />} />,
    );

    expect(getByTestId('icon')).toBeTruthy();
  });

  it('should applies aria-current="page" when isActive', () => {
    const { getByRole } = render(
      <Navlink href="/test" label="Home" isActive />,
    );
    expect(getByRole('link').getAttribute('aria-current')).toEqual('page');
  });

  it('should does not apply aria-current when not isActive', () => {
    const { getByRole } = render(<Navlink href="/test" label="Home" />);
    expect(getByRole('link').hasAttribute('aria-current')).toBeFalsy();
  });

  it('should applies is-horizontal class when isHorizontal', () => {
    const { getByRole } = render(
      <Navlink href="/test" label="Home" isHorizontal />,
    );
    expect(getByRole('link').classList.contains('is-horizontal')).toBeTruthy();
  });

  it('should renders as a custom element when "as" is provided', () => {
    const { getByText } = render(
      <Navlink href="/test" label="Home" as="button" />,
    );
    expect(getByText('Home').closest('button')).toBeTruthy();
  });

  it('should applies is-active class to link-indicator when isActive', () => {
    const { getByText } = render(
      <Navlink href="/test" label="Home" icon={<span />} isActive />,
    );
    const indicator = getByText('', { selector: '.link-indicator' });
    expect(indicator.classList.contains('is-active')).toBeTruthy();
  });

  it('should renders horizontal label class when isHorizontal', () => {
    const { getByText } = render(
      <Navlink href="/test" label="Home" isHorizontal />,
    );
    expect(
      getByText('Home').classList.contains('link-label-horizontal'),
    ).toBeTruthy();
  });

  it('should renders vertical label class when not isHorizontal', () => {
    const { getByText } = render(<Navlink href="/test" label="Home" />);
    expect(getByText('Home').classList.contains('link-label')).toBeTruthy();
  });
});
