import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { NavRail } from './NavRail';

describe('NavRail component', () => {
  afterEach(cleanup);

  it('should render with children', () => {
    const { getByText } = render(<NavRail>Child content</NavRail>);
    expect(getByText('Child content')).toBeTruthy();
  });

  it('should apply the base class "m3-navrail"', () => {
    const { getByRole } = render(<NavRail />);
    const rail = getByRole('navigation');

    expect(rail.classList.contains('m3-navrail')).toBeTruthy();
  });

  it('should render a header when the header prop is provided', () => {
    const { getByText } = render(<NavRail header="Header content" />);

    expect(getByText('Header content')).toBeTruthy();
    expect(getByText('Header content').tagName).toBe('HEADER');
  });

  it('should render a footer when the footer prop is provided', () => {
    const { getByText } = render(<NavRail footer="Footer content" />);
    expect(getByText('Footer content')).toBeTruthy();
    expect(getByText('Footer content').tagName).toBe('FOOTER');
  });

  it('should apply the "is-expanded" class when isExpanded is true', () => {
    const { getByRole } = render(<NavRail isExpanded />);
    const rail = getByRole('navigation');

    expect(rail.classList.contains('is-expanded')).toBeTruthy();
  });

  it('should apply custom className', () => {
    const { getByRole } = render(<NavRail className="custom-class" />);
    const rail = getByRole('navigation');

    expect(rail.classList.contains('m3-navrail')).toBeTruthy();
    expect(rail.classList.contains('custom-class')).toBeTruthy();
  });

  it('should forward the ref to the nav element', () => {
    const ref = React.createRef<HTMLElement>();
    render(<NavRail ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current?.tagName).toBe('NAV');
  });

  it('should pass down other HTML attributes', () => {
    const { getByTestId } = render(
      <NavRail data-testid="nav-rail" aria-label="Main navigation" />,
    );
    const navRail = getByTestId('nav-rail');

    expect(navRail).toBeTruthy();
    expect(navRail.getAttribute('aria-label')).toEqual('Main navigation');
  });

  it('should use variant="standard" by default and not set popover attribute', () => {
    const { getByRole } = render(<NavRail />);
    const rail = getByRole('navigation');

    expect(rail.getAttribute('popover')).toBeNull();
  });

  it('should set popover="manual" when variant="modal"', () => {
    const { getByRole } = render(<NavRail variant="modal" />);
    const rail = getByRole('navigation');

    expect(rail.getAttribute('popover')).toEqual('manual');
  });

  it('should apply the "is-expanded" class when variant="modal"', () => {
    const { getByRole } = render(<NavRail variant="modal" />);
    const rail = getByRole('navigation');

    expect(rail.classList.contains('is-expanded')).toBeTruthy();
  });

  it('should apply the "is-expanded" class when both isExpanded and variant="standard"', () => {
    const { getByRole } = render(<NavRail variant="standard" isExpanded />);
    const rail = getByRole('navigation');

    expect(rail.classList.contains('is-expanded')).toBeTruthy();
    expect(rail.getAttribute('popover')).toBeNull();
  });
});
