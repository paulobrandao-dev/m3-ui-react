import { Card, Content, Font } from '@/lib';
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
    <Content
      as="nav"
      flexbox={{
        direction: 'row',
        alignItems: 'center',
        justifyContent:
          next !== undefined && !prev ? 'flex-end' : 'space-between',
        gap: 'sm',
      }}
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
          style={{ flexBasis: '50%' }}
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
          style={{ flexBasis: '50%' }}
        >
          <Font scale="label-medium" textColor="secondary">
            Next page
          </Font>
          <Font scale="label-large" textColor="primary">
            {next.label}
          </Font>
        </Card>
      )}
    </Content>
  );
}
