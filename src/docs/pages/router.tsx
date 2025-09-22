import { useCallback, useEffect, useMemo, useState } from 'react';
import { navigate } from '../utils';
import routes from './routes';

export function Link({
  to,
  onClick,
  ...props
}: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string;
}) {
  const clickHandler = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      navigate(to);
      if (onClick) onClick(e);
    },
    [onClick, to],
  );

  return <a href={to} onClick={clickHandler} {...props} />;
}

export function Router() {
  const [route, setRoute] = useState<string>(window.location.pathname);
  const content = useMemo(() => routes(route), [route]);

  useEffect(() => {
    const applyRoute = () => {
      setRoute(window.location.pathname);
    };
    window.addEventListener('popstate', applyRoute);
    return () => {
      window.removeEventListener('popstate', applyRoute);
    };
  }, []);

  useEffect(() => {
    const routeChangeHandler = () => {
      setRoute(window.location.pathname);
    };
    document.addEventListener('routechange', routeChangeHandler);
    return () => {
      document.removeEventListener('routechange', routeChangeHandler);
    };
  }, []);

  useEffect(() => {
    document.querySelector('#root')?.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }, [route]);

  return content;
}
