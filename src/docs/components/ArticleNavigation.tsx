import { Card, Font } from '@/lib';
import { Link } from '../utils';

type PageItem = {
  label: string;
  path: string;
};

export default function ArticleNavigation({
  prev,
  next,
}: Readonly<{
  prev?: PageItem;
  next?: PageItem;
}>) {
  return (
    <nav
      id="article-nav"
      className={next !== undefined && !prev ? 'align-end' : undefined}
    >
      {prev && (
        <Card
          as={Link}
          variant="outlined"
          flexbox={{
            direction: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            rowGap: 'sm',
          }}
          spacing={{ padding: 'lg' }}
          stateLayer
          to={prev.path}
        >
          <Font scale="label-medium" textColor="secondary">
            Previous page
          </Font>
          <Font scale="label-large" textColor="primary">
            {prev.label}
          </Font>
        </Card>
      )}
      {next && (
        <Card
          as={Link}
          variant="outlined"
          flexbox={{
            direction: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center',
            rowGap: 'sm',
          }}
          spacing={{ padding: 'lg' }}
          stateLayer
          to={next.path}
        >
          <Font scale="label-medium" textColor="secondary">
            Next page
          </Font>
          <Font scale="label-large" textColor="primary">
            {next.label}
          </Font>
        </Card>
      )}
    </nav>
  );
}
