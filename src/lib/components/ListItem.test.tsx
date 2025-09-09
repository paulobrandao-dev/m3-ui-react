import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { ListItem } from './ListItem';

describe('ListItem component', () => {
  afterEach(cleanup);

  it('should renders the headline', () => {
    const { getByText, getByRole } = render(
      <ListItem headline="My Headline" />,
    );
    const item = getByRole('listitem');

    expect(item).toBeTruthy();
    expect(item.classList.contains('m3-list-item')).toBeTruthy();
    expect(getByText('My Headline')).toBeTruthy();
  });

  it('should renders supportingText when provided', () => {
    const { getByText } = render(
      <ListItem headline="Headline" supportingText="Support text" />,
    );
    expect(getByText('Support text')).toBeTruthy();
  });

  it('should does not render supportingText when not provided', () => {
    const { queryByText } = render(<ListItem headline="Headline" />);
    expect(queryByText('item-text-supporting')).toBeFalsy();
  });

  it('should renders startElement and endElement', () => {
    const Start = () => <span data-testid="start">S</span>;
    const End = () => <span data-testid="end">E</span>;
    const { getByTestId } = render(
      <ListItem
        headline="Headline"
        startElement={<Start />}
        endElement={<End />}
      />,
    );
    expect(getByTestId('start')).toBeTruthy();
    expect(getByTestId('end')).toBeTruthy();
  });

  it('should applies is-selected class when isSelected is true', () => {
    const { getByRole } = render(<ListItem headline="Headline" isSelected />);
    const item = getByRole('listitem');

    expect(item.classList.contains('is-selected')).toBeTruthy();
  });

  it('should does not apply is-selected class when isSelected is false', () => {
    const { getByRole } = render(<ListItem headline="Headline" />);
    const item = getByRole('listitem');

    expect(item.classList.contains('is-selected')).toBeFalsy();
  });

  it('should applies custom className', () => {
    const { getByRole } = render(
      <ListItem headline="Headline" className="custom-class" />,
    );
    const item = getByRole('listitem');

    expect(item.classList.contains('custom-class')).toBeTruthy();
  });

  it('should passes extra props to li', () => {
    const { getByRole } = render(
      <ListItem headline="Headline" data-testid="li-test" />,
    );
    expect(getByRole('listitem').getAttribute('data-testid')).toEqual(
      'li-test',
    );
  });
});
