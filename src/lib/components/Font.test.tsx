import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Font } from './Font';

describe('Font component', () => {
  afterEach(cleanup);

  it('should render span element as default', () => {
    const result = render(<Font variant="body-large">Sample text</Font>);
    const text = result.getByText('Sample text');

    expect(text.tagName).toEqual('SPAN');
    expect(text.classList.contains('m3-font-body-large')).toBeTruthy();
  });

  it('should render the right element according to "as" prop', () => {
    const result = render(
      <Font as="h1" variant="display-large">
        Sample heading
      </Font>,
    );
    const heading = result.getByRole('heading', { level: 1 });

    expect(heading.tagName).toEqual('H1');
    expect(heading.classList.contains('m3-font-display-large')).toBeTruthy();
  });

  it('should apply the text align CSS class according to "textAlign" prop', () => {
    const result = render(
      <>
        <Font as="h2" variant="title-large" textAlign="center">
          Lorem ipsum dolor sit amet
        </Font>
        <Font
          as="p"
          variant="label-large"
          textAlign="right"
          data-testid="align-right"
        >
          {new Date().toLocaleDateString('en-US')}
        </Font>
        <Font
          as="p"
          variant="body-medium"
          textAlign="left"
          data-testid="align-left"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          lacinia metus commodo, tristique dolor sit amet, molestie risus. Morbi
          est quam, tincidunt vel mi interdum, tincidunt pellentesque lorem.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Donec eu nibh at dolor semper condimentum. In
          aliquam justo diam, et porta libero ullamcorper vitae. Curabitur eget
          dui id enim semper efficitur in ac nisl. Duis a porttitor felis, quis
          porta justo. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Donec venenatis convallis nunc,
          in convallis orci tincidunt tempor. Pellentesque euismod mi quis dui
          aliquet, ac pulvinar orci laoreet. Phasellus quis volutpat odio, in
          pellentesque nisl. Aenean mauris tortor, tristique nec ante vel,
          cursus consectetur enim.
        </Font>
        <Font
          as="p"
          variant="body-small"
          textAlign="justify"
          data-testid="align-justify"
        >
          Suspendisse nulla lacus, ultrices ut felis vel, tincidunt viverra
          nisl. Aliquam ac congue nibh, quis tincidunt leo. Ut faucibus a tortor
          non molestie. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Donec finibus dolor non massa
          malesuada tempor. Suspendisse sollicitudin massa at dignissim
          pulvinar. Sed ut auctor tellus. Fusce tristique ex vel maximus
          lacinia. Duis id luctus felis, sed ornare ligula.
        </Font>
      </>,
    );
    const title = result.getByRole('heading', { level: 2 });
    const date = result.getByTestId('align-right');
    const atLeft = result.getByTestId('align-left');
    const justify = result.getByTestId('align-justify');

    expect(title.classList.contains('is-align-center')).toBeTruthy();
    expect(date.classList.contains('is-align-right')).toBeTruthy();
    expect(atLeft.classList.contains('is-align-left')).toBeTruthy();
    expect(justify.classList.contains('is-align-justify')).toBeTruthy();
  });

  it('should apply the transform CSS class according to "textTransform" prop', () => {
    const result = render(
      <>
        <Font
          variant="title-medium"
          textTransform="lowercase"
          data-testid="transform-lowercase"
        >
          Sample text A
        </Font>
        <Font
          variant="title-small"
          textTransform="capitalize"
          data-testid="transform-capitalize"
        >
          Sample text B
        </Font>
        <Font
          variant="label-medium"
          textTransform="uppercase"
          data-testid="transform-uppercase"
        >
          Sample text C
        </Font>
      </>,
    );
    const lowercase = result.getByTestId('transform-lowercase');
    const capitalize = result.getByTestId('transform-capitalize');
    const uppercase = result.getByTestId('transform-uppercase');

    expect(lowercase.classList.contains('is-transform-lowercase')).toBeTruthy();
    expect(
      capitalize.classList.contains('is-transform-capitalize'),
    ).toBeTruthy();
    expect(uppercase.classList.contains('is-transform-uppercase')).toBeTruthy();
  });

  it('should apply the color CSS class according to the "textColor" prop', () => {
    const result = render(
      <>
        <Font as="h1" variant="display-medium" textColor="primary">
          Sample text A
        </Font>
        <Font as="h2" variant="display-small" textColor="secondary">
          Sample text B
        </Font>
        <Font as="h3" variant="headline-large" textColor="tertiary">
          Sample text C
        </Font>
        <Font as="h4" variant="headline-medium" textColor="reverse">
          Sample text D
        </Font>
        <Font as="h5" variant="headline-small" textColor="error">
          Sample text E
        </Font>
      </>,
    );
    const h1 = result.getByRole('heading', { level: 1 });
    const h2 = result.getByRole('heading', { level: 2 });
    const h3 = result.getByRole('heading', { level: 3 });
    const h4 = result.getByRole('heading', { level: 4 });
    const h5 = result.getByRole('heading', { level: 5 });

    expect(h1.classList.contains('is-color-primary')).toBeTruthy();
    expect(h2.classList.contains('is-color-secondary')).toBeTruthy();
    expect(h3.classList.contains('is-color-tertiary')).toBeTruthy();
    expect(h4.classList.contains('is-color-reverse')).toBeTruthy();
    expect(h5.classList.contains('is-color-error')).toBeTruthy();
  });

  it('should apply the spacing CSS classes according to the "spacing" prop', () => {
    const result = render(
      <Font
        variant="label-small"
        data-testid="spacing-prop"
        spacing={{
          marginBlock: 'xl',
          marginInline: 'auto',
          paddingBlock: 'sm',
          paddingInline: 'lg',
        }}
      >
        Sample text
      </Font>,
    );
    const text = result.getByTestId('spacing-prop');

    expect(text.classList.contains('margin-block-xl')).toBeTruthy();
    expect(text.classList.contains('margin-inline-auto')).toBeTruthy();
    expect(text.classList.contains('padding-block-sm')).toBeTruthy();
    expect(text.classList.contains('padding-inline-lg')).toBeTruthy();
  });

  it('should apply the flexbox CSS classes according to the "flexbox" prop', () => {
    const result = render(
      <Font
        variant="code"
        flexbox={{
          direction: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        Sample text
      </Font>,
    );
    const text = result.getByText('Sample text');

    expect(text.classList.contains('is-flexbox')).toBeTruthy();
    expect(text.classList.contains('flex-direction-column')).toBeTruthy();
    expect(text.classList.contains('flex-align-items-flex-start')).toBeTruthy();
    expect(text.classList.contains('flex-justify-content-center')).toBeTruthy();
  });
});
