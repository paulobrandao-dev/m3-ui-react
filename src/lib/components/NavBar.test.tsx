import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { NavBar } from './NavBar';

describe('NavBar component', () => {
  afterEach(cleanup);

  it('should render a nav element with default class', () => {
    const { getByRole } = render(<NavBar />);
    const nav = getByRole('navigation');
    expect(nav.classList.contains('m3-navbar')).toBeTruthy();
  });

  it('should render with a custom className', () => {
    const { getByRole } = render(<NavBar className="custom-class" />);
    const nav = getByRole('navigation');
    expect(nav.classList.contains('custom-class')).toBeTruthy();
  });

  it('should render children correctly', () => {
    const { getByText } = render(
      <NavBar>
        <span>Child Element</span>
      </NavBar>,
    );
    expect(getByText('Child Element')).toBeTruthy();
  });

  it('should apply "is-horizontal" class when isHorizontalLinks is true', () => {
    const { getByRole } = render(<NavBar isHorizontalLinks />);
    const nav = getByRole('navigation');
    expect(nav.classList.contains('is-horizontal')).toBeTruthy();
  });

  it('should not apply "is-horizontal" class when isHorizontalLinks is false or undefined', () => {
    const { getByRole } = render(<NavBar />);
    const nav = getByRole('navigation');
    expect(nav.classList.contains('is-horizontal')).toBeFalsy();
  });

  it('should forward additional props to the nav element', () => {
    const { getByRole } = render(<NavBar id="test-id" />);
    const nav = getByRole('navigation');
    expect(nav.getAttribute('id')).toBe('test-id');
  });

  it('should forward a ref to the nav element', () => {
    const ref = createRef<HTMLElement>();
    render(<NavBar ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('NAV');
  });
});
