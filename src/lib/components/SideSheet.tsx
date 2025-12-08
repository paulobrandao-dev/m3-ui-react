'use client';

import { clsx } from 'clsx';
import { useCallback, useEffect, useId, useMemo, useState } from 'react';
import { usePopoverControl } from '../hooks/usePopoverControl';
import { Appbar } from './Appbar';
import { Content } from './Content';
import { IconButton } from './IconButton';

/**
 * Props for the SideSheet component.
 *
 * @property {('standard' | 'modal')} variant - The variant of the side sheet.
 *   - `standard`: A standard side sheet that is part of the main UI.
 *   - `modal`: A modal side sheet that appears over the content.
 * @property {boolean} [isOpen] - If `true`, the side sheet is visible.
 * @property {{ icon: React.ReactElement; onClose: () => void; ariaLabel?: string; }} [closeAction] - An action to close the side sheet, typically an `IconButton`.
 * @property {string} [headline] - A title for the side sheet, displayed in the header.
 * @property {React.Ref<HTMLElement>} [ref] - A ref to the underlying `aside` element.
 */
export type SideSheetProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'popover'
> & {
  variant: 'standard' | 'modal';
  isOpen?: boolean;
  closeAction?: {
    icon: React.ReactElement;
    onClose: () => void;
    ariaLabel?: string;
  };
  headline?: string;
  ref?: React.Ref<HTMLElement>;
};

/**
 * The `SideSheet` component provides supplementary content that is anchored to the side of the screen.
 * It can be used as a standard, persistent element or as a modal overlay.
 *
 * @example
 * ```tsx
 * import { useState } from 'react';
 * import { SideSheet, Button } from 'm3-ui-react';
 * import { Icon } from 'm3-ui-react/icon';
 *
 * export default function MySideSheet() {
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   return (
 *     <>
 *       <Button onClick={() => setIsOpen(true)}>Open Side Sheet</Button>
 *       <SideSheet
 *         variant="modal"
 *         isOpen={isOpen}
 *         headline="My Side Sheet"
 *         closeAction={{
 *           icon: <Icon symbol="close" />,
 *           onClose: () => setIsOpen(false),
 *         }}
 *       >
 *         <p>This is the content of the side sheet.</p>
 *       </SideSheet>
 *     </>
 *   );
 * }
 * ```
 *
 * @param {SideSheetProps} props - The props for the `SideSheet` component.
 * @returns {React.ReactElement} The rendered `SideSheet` component.
 */
export function SideSheet({
  variant,
  isOpen,
  id,
  closeAction,
  headline,
  ref,
  className,
  children,
  style,
  ...props
}: SideSheetProps) {
  const uuid = useId();
  const idRef = useMemo(() => id ?? uuid, [id, uuid]);
  const [stickyStyles, setStickyStyles] = useState<React.CSSProperties>({});
  const { hidePopover, showPopover } = usePopoverControl(idRef);

  const getStickyStyles = useCallback(() => {
    if (variant !== 'standard' || !isOpen) {
      setStickyStyles({});
      return;
    }
    const self = document.getElementById(idRef);
    if (!self) return;
    const top = self.offsetTop;
    setStickyStyles({
      top,
      height: `calc(100dvh - ${top}px)`,
    });
  }, [idRef, variant, isOpen]);

  useEffect(() => {
    getStickyStyles();
  }, [getStickyStyles]);

  useEffect(() => {
    if (variant === 'modal') {
      if (isOpen) showPopover();
      else hidePopover();
    }
  }, [idRef, isOpen, variant, showPopover, hidePopover]);

  return (
    <aside
      ref={ref}
      id={idRef}
      className={clsx(
        'm3-side-sheet',
        {
          'is-standard': variant === 'standard',
          'is-open': variant === 'standard' && isOpen,
        },
        className,
      )}
      popover={variant === 'modal' ? 'manual' : undefined}
      style={{
        ...style,
        ...stickyStyles,
      }}
      {...props}
    >
      {(closeAction?.icon !== undefined || headline !== undefined) && (
        <Appbar
          variant="small"
          headline={headline}
          actions={
            closeAction ? (
              <IconButton
                onClick={closeAction.onClose}
                aria-label={closeAction.ariaLabel}
              >
                {closeAction.icon}
              </IconButton>
            ) : undefined
          }
          className="toolbar"
        />
      )}
      <Content
        scrollable={{ horizontal: 'hidden', vertical: 'auto' }}
        spacing={{ paddingInline: 'xl' }}
        role="presentation"
      >
        {children}
      </Content>
    </aside>
  );
}
