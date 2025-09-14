'use client';

import { clsx } from 'clsx';
import { useCallback, useEffect, useId, useMemo, useState } from 'react';
import { usePopoverControl } from '../hooks/usePopoverControl';
import { Appbar } from './Appbar';
import { Content } from './Content';
import { IconButton } from './IconButton';

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
  const { hidePopover, showPopover } = usePopoverControl();

  const getStickyStyles = useCallback(() => {
    if (variant !== 'standard' || !isOpen) {
      setStickyStyles({});
      return;
    }
    const self = document.getElementById(idRef);
    if (!self) return;
    setStickyStyles({
      top: self.getBoundingClientRect().y,
    });
  }, [idRef, variant, isOpen]);

  useEffect(() => {
    getStickyStyles();
  }, [getStickyStyles]);

  useEffect(() => {
    if (variant === 'modal') {
      if (isOpen) showPopover(idRef);
      else hidePopover(idRef);
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
      >
        {children}
      </Content>
    </aside>
  );
}
