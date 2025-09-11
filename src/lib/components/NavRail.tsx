import { clsx } from 'clsx';

export type NavRailProps = React.HTMLAttributes<HTMLElement> & {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  isExpanded?: boolean;
  ref?: React.Ref<HTMLElement>;
};

export function NavRail({
  header,
  footer,
  isExpanded,
  ref,
  children,
  className,
  ...props
}: NavRailProps) {
  return (
    <nav
      className={clsx('m3-navrail', { 'is-expanded': isExpanded }, className)}
      ref={ref}
      {...props}
    >
      {header && <header>{header}</header>}
      <div role="presentation">{children}</div>
      {footer && <footer>{footer}</footer>}
    </nav>
  );
}
