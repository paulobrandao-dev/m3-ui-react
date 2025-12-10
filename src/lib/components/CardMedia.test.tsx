import mockSrc from '@/docs/assets/m3-ui-pattern.webp';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { CardMedia } from './CardMedia';

describe('CardMedia component', () => {
  afterEach(cleanup);

  it('should apply the right align CSS class according to "alignMedia" prop', () => {
    const result = render(
      <CardMedia
        as="img"
        src={mockSrc}
        alignMedia="right-center"
        data-testid="align-media-prop"
      />,
    );
    const media = result.getByTestId('align-media-prop');

    expect(media.classList.contains('is-align-right-center')).toBeTruthy();
  });

  it('should apply the right fit CSS class according to "fitMedia" prop', () => {
    const result = render(
      <CardMedia
        as="img"
        src={mockSrc}
        fitMedia="cover"
        data-testid="fit-media-prop"
      />,
    );
    const media = result.getByTestId('fit-media-prop');

    expect(media.classList.contains('is-fit-cover')).toBeTruthy();
  });

  it('should render a div by default and include base class', () => {
    const { container } = render(<CardMedia data-testid="default" />);
    const media = container.firstElementChild;

    expect(media?.tagName).toBe('DIV');
    expect(media?.classList.contains('m3-card-media')).toBeTruthy();
  });

  it('should apply aspect ratio CSS class when aspectRatio is set', () => {
    const result = render(
      <CardMedia
        as="img"
        src={mockSrc}
        aspectRatio="16:9"
        data-testid="aspect-ratio"
      />,
    );
    const media = result.getByTestId('aspect-ratio');

    expect(media.classList.contains('has-aspect-16x9')).toBeTruthy();
  });
});
