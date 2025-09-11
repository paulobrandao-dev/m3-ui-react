import { clsx } from 'clsx';

export type NavBarProps = React.HTMLAttributes<HTMLElement> & {
  isHorizontalLinks?: boolean;
  ref?: React.Ref<HTMLElement>;
};

export function NavBar({
  isHorizontalLinks,
  ref,
  children,
  className,
  ...props
}: NavBarProps) {
  return (
    <nav
      className={clsx(
        'm3-navbar',
        { 'is-horizontal': isHorizontalLinks },
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </nav>
  );
}
