import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Appbar } from './Appbar';

describe('Appbar component', () => {
  afterEach(cleanup);

  it('should renders with default props (small variant)', () => {
    const { getByRole } = render(<Appbar data-testid="appbar" />);
    const appbar = getByRole('banner');

    expect(appbar.classList.contains('m3-appbar')).toBeTruthy();
    expect(appbar.classList.contains('is-small')).toBeTruthy();
  });

  it('should renders headline and subtitle in small variant', () => {
    const { getByText } = render(
      <Appbar headline="Title" subtitle="Subtitle" />,
    );
    // Headline and subtitle should be rendered in the first toolbar-row
    expect(getByText('Title').tagName).toBe('H1');
    expect(getByText('Subtitle').tagName).toBe('P');
  });

  it('should renders headline and subtitle below toolbar-row for medium variant', () => {
    const { getByText, container } = render(
      <Appbar
        variant="medium"
        headline="Medium Title"
        subtitle="Medium Subtitle"
      />,
    );
    // Headline and subtitle should be rendered in hgroup after toolbar-row
    const hgroups = container.querySelectorAll('hgroup');
    expect(hgroups.length).toBe(1);
    expect(hgroups[0].classList.contains('toolbar-row')).toBeTruthy();
    expect(getByText('Medium Title').tagName).toBe('H1');
    expect(getByText('Medium Subtitle').tagName).toBe('P');
  });

  it('should renders headline and subtitle below toolbar-row for large variant', () => {
    const { getByText, container } = render(
      <Appbar
        variant="large"
        headline="Large Title"
        subtitle="Large Subtitle"
      />,
    );
    const hgroups = container.querySelectorAll('hgroup');
    expect(hgroups.length).toBe(1);
    expect(hgroups[0].classList.contains('toolbar-row')).toBeTruthy();
    expect(getByText('Large Title').tagName).toBe('H1');
    expect(getByText('Large Subtitle').tagName).toBe('P');
  });

  it('should renders navAction and actions', () => {
    const nav = <button data-testid="nav-btn">Nav</button>;
    const actions = <button data-testid="action-btn">Action</button>;
    const { getByTestId, getByRole } = render(
      <Appbar navAction={nav} actions={actions} />,
    );
    expect(getByTestId('nav-btn')).toBeTruthy();
    expect(getByTestId('action-btn')).toBeTruthy();
    expect(getByRole('toolbar')).toBeTruthy();
  });

  it('should renders customContent', () => {
    const custom = <span data-testid="custom-content">Custom</span>;
    const { getByTestId } = render(<Appbar customContent={custom} />);
    expect(getByTestId('custom-content')).toBeTruthy();
  });

  it('should applies centeredText, isScroll, isFluid', () => {
    const { getByRole, getByText } = render(
      <Appbar
        headline="Centered"
        subtitle="Sub"
        centeredText
        isScroll
        isFluid
        variant="medium"
      />,
    );
    const header = getByRole('banner');
    expect(header).toBeTruthy();
    // Both toolbar-row and hgroup should have is-fluid
    expect(header.querySelectorAll('.toolbar-row.is-fluid').length).toBe(2);
    // Headline and subtitle should have textAlign center
    expect(
      getByText('Centered').classList.contains('is-align-center'),
    ).toBeTruthy();
    expect(getByText('Sub').classList.contains('is-align-center')).toBeTruthy();
  });

  it('should passes extra props and className', () => {
    const { getByRole } = render(
      <Appbar data-testid="appbar" className="extra-class" />,
    );
    const header = getByRole('banner');
    expect(header).toBeTruthy();
    expect(header.classList.contains('extra-class')).toBeTruthy();
    expect(header?.getAttribute('data-testid')).toBe('appbar');
  });
});
