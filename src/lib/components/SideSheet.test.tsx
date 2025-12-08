import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { SideSheet } from './SideSheet';

const mockShowPopover = vi.fn();
const mockHidePopover = vi.fn();

vi.mock('../hooks/usePopoverControl', () => ({
  usePopoverControl: () => ({
    showPopover: mockShowPopover,
    hidePopover: mockHidePopover,
  }),
}));

describe('SideSheet component', () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('should render standard variant correctly', () => {
    const { getByRole } = render(<SideSheet variant="standard" />);
    const sideSheet = getByRole('complementary'); // <aside> has a default role of complementary
    expect(sideSheet).toBeTruthy();
    expect(sideSheet.classList.contains('m3-side-sheet')).toBeTruthy();
    expect(sideSheet.classList.contains('is-standard')).toBeTruthy();
    expect(sideSheet.classList.contains('is-open')).toBeFalsy();
  });

  it('should apply "is-open" class when isOpen is true for standard variant', () => {
    const { getByRole } = render(<SideSheet variant="standard" isOpen />);
    const sideSheet = getByRole('complementary');
    expect(sideSheet.classList.contains('is-open')).toBeTruthy();
  });

  it('should render modal variant with popover attribute', () => {
    const { getByRole } = render(<SideSheet variant="modal" />);
    const sideSheet = getByRole('complementary');

    expect(sideSheet.getAttribute('popover')).toEqual('manual');
  });

  it('should control popover visibility for modal variant', () => {
    const { rerender } = render(
      <SideSheet variant="modal" isOpen={false} id="test-modal" />,
    );

    // On initial render with isOpen={false}, hidePopover should be called.
    expect(mockHidePopover).toHaveBeenCalledTimes(1);
    expect(mockShowPopover).not.toHaveBeenCalled();

    // When isOpen becomes true, showPopover should be called.
    rerender(<SideSheet variant="modal" isOpen={true} id="test-modal" />);
    expect(mockShowPopover).toHaveBeenCalledTimes(1);
    expect(mockHidePopover).toHaveBeenCalledTimes(1);

    // When isOpen becomes false again, hidePopover should be called again.
    rerender(<SideSheet variant="modal" isOpen={false} id="test-modal" />);
    expect(mockHidePopover).toHaveBeenCalledTimes(2);
    expect(mockShowPopover).toHaveBeenCalledTimes(1);
  });

  it('should render headline when provided', () => {
    const { getByText } = render(
      <SideSheet variant="standard" headline="My Headline" />,
    );
    expect(getByText('My Headline')).toBeTruthy();
  });

  it('should render close button and handle click', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    const closeIcon = <div data-testid="close-icon">X</div>;
    const { getByRole } = render(
      <SideSheet
        variant="standard"
        closeAction={{
          icon: closeIcon,
          onClose: handleClose,
          ariaLabel: 'Close',
        }}
      />,
    );

    const closeButton = getByRole('button', { name: 'Close' });
    expect(closeButton).toBeTruthy();
    await user.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should render children correctly', () => {
    const { getByText } = render(
      <SideSheet variant="standard">
        <div>Child Content</div>
      </SideSheet>,
    );
    expect(getByText('Child Content')).toBeTruthy();
  });

  it('should apply custom className', () => {
    const { getByRole } = render(
      <SideSheet variant="standard" className="my-custom-class" />,
    );
    const sideSheet = getByRole('complementary');
    expect(sideSheet.classList.contains('m3-side-sheet')).toBeTruthy();
    expect(sideSheet.classList.contains('my-custom-class')).toBeTruthy();
  });

  it('should forward ref to the aside element', () => {
    const ref = React.createRef<HTMLElement>();
    render(<SideSheet variant="standard" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current?.tagName).toBe('ASIDE');
  });

  it('should pass through other HTML attributes', () => {
    const { getByTestId } = render(
      <SideSheet variant="standard" data-testid="my-side-sheet" />,
    );
    expect(getByTestId('my-side-sheet')).toBeTruthy();
  });

  it('should apply sticky styles for standard variant when open', () => {
    const mockElement = document.createElement('aside');
    const getElementByIdSpy = vi
      .spyOn(document, 'getElementById')
      .mockReturnValue(mockElement);
    const getBoundingClientRectSpy = vi
      .spyOn(mockElement, 'getBoundingClientRect')
      .mockReturnValue({
        top: 56,
        y: 56,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
        x: 0,
        toJSON: () => {},
      } as DOMRect);

    const { getByRole } = render(
      <SideSheet variant="standard" isOpen id="sticky-sheet" />,
    );
    const sideSheet = getByRole('complementary');
    expect(sideSheet.style.top).toBe('0px');

    getElementByIdSpy.mockRestore();
    getBoundingClientRectSpy.mockRestore();
  });

  it('should not apply sticky styles for modal variant', () => {
    const { getByRole } = render(<SideSheet variant="modal" isOpen />);
    const sideSheet = getByRole('complementary');
    expect(sideSheet.style.top).toBeFalsy();
  });

  it('should not apply sticky styles for closed standard variant', () => {
    const { getByRole } = render(
      <SideSheet variant="standard" isOpen={false} />,
    );
    const sideSheet = getByRole('complementary');
    expect(sideSheet.style.top).toBeFalsy();
  });
});
