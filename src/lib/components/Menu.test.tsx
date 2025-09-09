import { describe, it, expect, vi, afterEach, MockInstance } from 'vitest';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Menu } from './Menu';

describe('Menu component', () => {
  const items = [
    {
      label: 'Item 1',
      onClick: vi.fn(),
      isSelected: false,
    },
    {
      label: 'Item 2',
      onClick: vi.fn(),
      isSelected: true,
      startElement: <span data-testid="start">S</span>,
      endElement: <span data-testid="end">E</span>,
    },
  ];

  afterEach(cleanup);

  it('should renders a menu with the given id and class', () => {
    const { getByRole } = render(
      <Menu id="test-menu" items={items} className="custom-class" />,
    );
    const menu = getByRole('menu');
    expect(menu.getAttribute('id')).toEqual('test-menu');
    expect(menu.classList.contains('m3-menu')).toBeTruthy();
    expect(menu.classList.contains('custom-class')).toBeTruthy();
  });

  it('should renders all items as ListItem components', () => {
    const { getByText } = render(<Menu id="menu" items={items} />);
    expect(getByText('Item 1')).toBeTruthy();
    expect(getByText('Item 2')).toBeTruthy();
  });

  it('should renders startElement and endElement for items', () => {
    const { getByTestId } = render(<Menu id="menu" items={items} />);
    expect(getByTestId('start')).toBeTruthy();
    expect(getByTestId('end')).toBeTruthy();
  });

  it('should calls item onClick and hides popover by default', () => {
    // Mock hidePopover on menu element
    const hidePopover = vi.fn();
    vi.spyOn(document, 'querySelector').mockImplementation(selector => {
      if (selector === 'menu#menu') {
        return { hidePopover } as unknown as Element;
      }
      return null;
    });

    const { getByText } = render(<Menu id="menu" items={items} />);
    fireEvent.click(getByText('Item 1'));
    expect(items[0].onClick).toHaveBeenCalled();
    expect(hidePopover).toHaveBeenCalled();

    // Restore mock
    (document.querySelector as unknown as MockInstance).mockRestore();
  });

  it('should does not hide popover if disableCloseOnClick is true', () => {
    const hidePopover = vi.fn();
    vi.spyOn(document, 'querySelector').mockImplementation(selector => {
      if (selector === 'menu#menu') {
        return { hidePopover } as unknown as Element;
      }
      return null;
    });

    const { getByText } = render(
      <Menu id="menu" items={items} disableCloseOnClick />,
    );
    fireEvent.click(getByText('Item 2'));
    expect(items[1].onClick).toHaveBeenCalled();
    expect(hidePopover).not.toHaveBeenCalled();

    (document.querySelector as unknown as MockInstance).mockRestore?.();
  });

  it('should passes extra props to menu', () => {
    const { getByRole } = render(
      <Menu id="menu" items={items} data-testid="menu-test" />,
    );
    expect(getByRole('menu').getAttribute('data-testid')).toEqual('menu-test');
  });
});
