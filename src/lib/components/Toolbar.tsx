import { clsx } from 'clsx';

export type ToolbarProps<E extends React.ElementType> = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  as?: E;
  startNode?: React.ReactNode;
  centerNode?: React.ReactNode;
  endNode?: React.ReactNode;
  bgColor?:
    | 'surface'
    | 'surface-container'
    | 'primary'
    | 'primary-container'
    | 'secondary'
    | 'secondary-container'
    | 'tertiary'
    | 'tertiary-container'
    | 'inverse-surface';
  dockedAt?: 'top' | 'left' | 'right' | 'bottom';
  elevation?: 1 | 2;
  ref?: React.Ref<HTMLDivElement>;
};

const CSS_PREFIX = 'rm-toolbar';

export function Toolbar<E extends React.ElementType>({
  as,
  startNode,
  centerNode,
  endNode,
  bgColor,
  dockedAt,
  elevation,
  ref,
  className,
  ...props
}: ToolbarProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof ToolbarProps<E>>) {
  const Surface = as ?? 'div';

  return (
    <Surface
      ref={ref}
      className={clsx(
        CSS_PREFIX,
        {
          [`${CSS_PREFIX}__color-${bgColor}`]: bgColor !== undefined,
          [`${CSS_PREFIX}__vertical`]:
            dockedAt === 'left' || dockedAt === 'right',
          [`${CSS_PREFIX}__docked-${dockedAt}`]: dockedAt !== undefined,
          [`${CSS_PREFIX}__elevation-${elevation}`]: elevation !== undefined,
        },
        className,
      )}
      {...props}
    >
      {startNode && (
        <div role="presentation" className={`${CSS_PREFIX}__start`}>
          {startNode}
        </div>
      )}
      {centerNode && (
        <div role="presentation" className={`${CSS_PREFIX}__center`}>
          {centerNode}
        </div>
      )}
      {endNode && (
        <div role="presentation" className={`${CSS_PREFIX}__end`}>
          {endNode}
        </div>
      )}
    </Surface>
  );
}
