import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Content } from './Content';

describe('Content component', () => {
  afterEach(cleanup);

  it('should render the right element according to "as" prop', () => {
    const result = render(<Content as="section" data-testid="as-prop" />);
    const section = result.getByTestId('as-prop');

    expect(section.tagName).toEqual('SECTION');
    expect(section.classList.contains('m3-content')).toBeTruthy();
  });

  it('should apply the spacing CSS classes according to "spacing" prop', () => {
    const result = render(
      <Content
        data-testid="spacing-prop"
        spacing={{ marginBlock: 'xl', marginInline: 'auto', padding: 'lg' }}
      />,
    );
    const content = result.getByTestId('spacing-prop');

    expect(content.classList.contains('margin-block-xl')).toBeTruthy();
    expect(content.classList.contains('margin-inline-auto')).toBeTruthy();
    expect(content.classList.contains('padding-lg')).toBeTruthy();
  });

  it('should apply the flexbox CSS classes according to "flexbox" prop', () => {
    const result = render(
      <Content
        data-testid="flexbox-prop"
        flexbox={{
          direction: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      />,
    );
    const content = result.getByTestId('flexbox-prop');

    expect(content.classList.contains('flex-direction-column')).toBeTruthy();
    expect(
      content.classList.contains('flex-align-items-flex-start'),
    ).toBeTruthy();
    expect(
      content.classList.contains('flex-justify-content-center'),
    ).toBeTruthy();
  });

  it('should apply the grid CSS classes accordint to "grid" prop', () => {
    const result = render(
      <Content
        data-testid="grid-prop"
        grid={{ columns: 4, columnGap: 'sm' }}
      />,
    );
    const content = result.getByTestId('grid-prop');

    expect(content.classList.contains('grid-columns-4')).toBeTruthy();
    expect(content.classList.contains('grid-column-gap-sm')).toBeTruthy();
  });

  it('should apply the overflow CSS classes according to "scrollable" prop', () => {
    const result = render(
      <Content
        data-testid="scrollable-prop"
        scrollable={{ horizontal: 'hidden', vertical: 'auto' }}
      />,
    );
    const content = result.getByTestId('scrollable-prop');

    expect(content.classList.contains('is-scrollable-x-hidden')).toBeTruthy();
    expect(content.classList.contains('is-scrollable-y-auto')).toBeTruthy();
  });
});
