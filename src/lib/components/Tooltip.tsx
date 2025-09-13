'use client';

import { clsx } from 'clsx';
import {
  Children,
  cloneElement,
  Fragment,
  HTMLAttributes,
  useCallback,
  useId,
  useMemo,
} from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

export type TooltipProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  text: string;
  children: React.ReactElement;
};

export function Tooltip({
  text,
  children,
  className,
  style,
  ...props
}: TooltipProps) {
  const tooltipId = useId();
  const media = useMediaQuery();

  const element = useMemo(() => {
    return Children.only(children);
  }, [children]);

  const setPositions = useCallback(
    (anchor: HTMLElement, tip: HTMLElement) => {
      const coords = anchor.getBoundingClientRect();
      const isTop = coords.top < 56;
      const top = isTop ? `${Math.round(coords.bottom + 4)}px` : 'auto';
      const bottom = !isTop
        ? `${Math.round(media.height - coords.top + 4)}px`
        : 'auto';
      const marginBlock = `${top} ${bottom}`;
      const marginInline = `${Math.round(coords.left + coords.width / 2)}px auto`;
      const transformOrigin = `${isTop ? 'top' : 'bottom'} center`;
      tip.style.marginBlock = marginBlock;
      tip.style.marginInline = marginInline;
      tip.style.transformOrigin = transformOrigin;
    },
    [media.height],
  );

  return (
    <Fragment key={element.key}>
      {cloneElement(element, {
        ...(element.props as HTMLAttributes<HTMLElement>),
        onMouseOver: e => {
          const props = element.props as HTMLAttributes<HTMLElement>;
          const tip = document.getElementById(tooltipId);
          if (tip) {
            setPositions(e.currentTarget, tip);
            tip.showPopover();
          }
          if (props.onMouseOver) {
            props.onMouseOver(e);
          }
        },
        onMouseOut: e => {
          const props = element.props as HTMLAttributes<HTMLElement>;
          const tip = document.getElementById(tooltipId);
          if (tip) {
            tip.hidePopover();
          }
          if (props.onMouseOut) {
            props.onMouseOut(e);
          }
        },
      } as HTMLAttributes<HTMLElement>)}
      <div
        role="tooltip"
        id={tooltipId}
        popover="manual"
        className={clsx('m3-tooltip', className)}
        style={{ ...style }}
        {...props}
      >
        {text}
      </div>
    </Fragment>
  );
}
