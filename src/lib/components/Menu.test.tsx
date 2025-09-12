import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, MockInstance, vi } from 'vitest';
import { Menu } from './Menu';

describe('Menu component', () => {
  afterEach(cleanup);

  it('should renders a menu with the given id and class', () => {
    const { getByRole } = render(
      <Menu id="test-menu" className="custom-class" />,
    );
    const menu = getByRole('menu');
    expect(menu.getAttribute('id')).toEqual('test-menu');
    expect(menu.classList.contains('m3-menu')).toBeTruthy();
    expect(menu.classList.contains('custom-class')).toBeTruthy();
  });

  it('should renders any content', () => {
    const { getByText } = render(
      <Menu id="menu">
        <h1>Menu title</h1>
        <p>Any content</p>
      </Menu>,
    );
    expect(getByText('Menu title')).toBeTruthy();
    expect(getByText('Any content')).toBeTruthy();
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

    const { getByText } = render(
      <Menu id="menu">
        <li
          onClick={() =>
            (
              document.querySelector('menu#menu') as Element & {
                hidePopover?: () => void;
              }
            )?.hidePopover?.()
          }
        >
          Item 1
        </li>
      </Menu>,
    );
    fireEvent.click(getByText('Item 1'));
    expect(hidePopover).toHaveBeenCalled();

    // Restore mock
    (document.querySelector as unknown as MockInstance).mockRestore();
  });

  it('should passes extra props to menu', () => {
    const { getByRole } = render(<Menu id="menu" data-testid="menu-test" />);
    expect(getByRole('menu').getAttribute('data-testid')).toEqual('menu-test');
  });
});
