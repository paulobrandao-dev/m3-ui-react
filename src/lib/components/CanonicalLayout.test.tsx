import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { CanonicalLayout } from './CanonicalLayout';

describe('CanonicalLayout component', () => {
  afterEach(cleanup);

  it('sould apply the CSS class for feed variant', () => {
    const result = render(<CanonicalLayout as="main" variant="feed" />);
    const layout = result.getByRole('main');

    expect(layout.classList.contains('m3-layout-feed')).toBeTruthy();
  });

  it('sould apply the CSS class for list-detail variant', () => {
    const result = render(<CanonicalLayout as="main" variant="list-detail" />);
    const layout = result.getByRole('main');

    expect(layout.classList.contains('m3-layout-list-detail')).toBeTruthy();
  });

  it('sould apply the CSS class for supporting-pane variant', () => {
    const result = render(
      <CanonicalLayout as="main" variant="supporting-pane" />,
    );
    const layout = result.getByRole('main');

    expect(layout.classList.contains('m3-layout-supporting-pane')).toBeTruthy();
  });

  it('should apply the fluid CSS class when it has the "isFluid" prop', () => {
    const result = render(<CanonicalLayout as="main" variant="feed" isFluid />);
    const layout = result.getByRole('main');

    expect(layout.classList.contains('is-fluid')).toBeTruthy();
  });

  it('should apply the spacing CSS classes according to the "spacing" prop', () => {
    const result = render(
      <CanonicalLayout
        as="main"
        variant="list-detail"
        spacing={{ marginBlock: 'md', marginInline: 'auto', padding: 'md' }}
      />,
    );
    const layout = result.getByRole('main');

    expect(layout.classList.contains('margin-block-md')).toBeTruthy();
    expect(layout.classList.contains('margin-inline-auto')).toBeTruthy();
    expect(layout.classList.contains('padding-md')).toBeTruthy();
  });

  it('should apply the gap CSS class according to the "gap" prop', () => {
    const result = render(
      <CanonicalLayout
        as="main"
        variant="supporting-pane"
        gap={{ gap: 'lg' }}
      />,
    );
    const layout = result.getByRole('main');

    expect(layout.classList.contains('gap-lg')).toBeTruthy();
  });
});
