import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Card } from '..';

describe('Card component', () => {
  afterEach(cleanup);

  it('should apply the right CSS class according to the "variant" prop', () => {
    const result = render(
      <>
        <Card data-testid="variant-filled" variant="filled">
          <h1>Card elevated</h1>
        </Card>
        <Card data-testid="variant-outlined" variant="outlined">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis
            vel risus non pharetra. Fusce ultrices eget est et maximus. Sed
            laoreet, mi a vehicula semper, lacus turpis feugiat erat, euismod
            feugiat enim purus nec purus. Sed sodales ligula sed nibh tempor
            interdum. Quisque ac interdum lacus. In euismod sit amet augue ac
            tincidunt. Donec sit amet cursus elit. Donec id quam vitae mauris
            fringilla blandit. Aliquam consequat tellus velit, at tempor ipsum
            elementum vel. Mauris interdum dui erat, ut vestibulum risus
            facilisis vitae. Quisque rutrum ipsum blandit massa tristique, eget
            pretium mauris rutrum. Aenean mi orci, dictum nec tristique sit
            amet, malesuada at ex. Nunc lectus est, auctor eget blandit eget,
            sagittis et nisi.
          </p>
        </Card>
        <Card data-testid="variant-elevated" variant="elevated">
          <address>author@example.com</address>
        </Card>
      </>,
    );

    const header = result.getByTestId('variant-filled');
    const content = result.getByTestId('variant-outlined');
    const footer = result.getByTestId('variant-elevated');

    expect(header.classList.contains('m3-card-filled')).toBeTruthy();
    expect(content.classList.contains('m3-card-outlined')).toBeTruthy();
    expect(footer.classList.contains('m3-card-elevated')).toBeTruthy();
  });

  it('should render the right element according to the "as" prop', () => {
    const result = render(
      <Card as="section" data-testid="as-prop">
        <h1>Section title</h1>
      </Card>,
    );

    const card = result.getByTestId('as-prop');

    expect(card.tagName).toEqual('SECTION');
  });

  it('should apply the CSS classes according to the "spacing" prop', () => {
    const result = render(
      <Card
        data-testid="spacing-prop"
        spacing={{ marginBlock: 'xl', marginInline: 'auto', padding: 'lg' }}
      >
        <h1>Spacing prop</h1>
      </Card>,
    );

    const card = result.getByTestId('spacing-prop');

    expect(card.classList.contains('margin-block-xl')).toBeTruthy();
    expect(card.classList.contains('margin-inline-auto')).toBeTruthy();
    expect(card.classList.contains('padding-lg')).toBeTruthy();
  });

  it('should apply the CSS classes according to "flexbox" prop', () => {
    const result = render(
      <Card
        data-testid="flexbox-prop"
        flexbox={{
          direction: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: 'md',
        }}
      >
        <h1>Flexbox</h1>
      </Card>,
    );

    const card = result.getByTestId('flexbox-prop');

    expect(card.classList.contains('is-flexbox')).toBeTruthy();
    expect(card.classList.contains('flex-direction-column')).toBeTruthy();
    expect(card.classList.contains('flex-align-items-flex-start')).toBeTruthy();
    expect(
      card.classList.contains('flex-justify-content-flex-start'),
    ).toBeTruthy();
    expect(card.classList.contains('flex-gap-md')).toBeTruthy();
  });

  it('should apply the CSS classes according to "grid" prop', () => {
    const result = render(
      <Card
        data-testid="grid-prop"
        grid={{ columns: 4, columnGap: 'sm', rowGap: 'xs' }}
      >
        <h1>Grid</h1>
      </Card>,
    );

    const card = result.getByTestId('grid-prop');

    expect(card.classList.contains('is-grid')).toBeTruthy();
    expect(card.classList.contains('grid-columns-4')).toBeTruthy();
    expect(card.classList.contains('grid-column-gap-sm')).toBeTruthy();
    expect(card.classList.contains('grid-row-gap-xs')).toBeTruthy();
  });

  it('should apply the CSS class when it has "stateLayer" prop', () => {
    const result = render(
      <Card as="button" stateLayer>
        <span>Card button</span>
      </Card>,
    );

    const cardButton = result.getByRole('button', { name: 'Card button' });

    expect(cardButton.tagName).toEqual('BUTTON');
    expect(cardButton.classList.contains('has-state-layer')).toBeTruthy();
  });
});
