import { Card, Content, Font } from '@/lib';
import { Link } from '../router';
import { BASE_PATH } from '../constants';

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
          to={`${BASE_PATH}${prev.path}`}
          style={{ flexBasis: '50%' }}
        >
          <Font variant="label-medium" textColor="secondary">
            Previous page
          </Font>
          <Font variant="label-large" textColor="primary">
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
          to={`${BASE_PATH}${next.path}`}
          style={{ flexBasis: '50%' }}
        >
          <Font variant="label-medium" textColor="secondary">
            Next page
          </Font>
          <Font variant="label-large" textColor="primary">
            {next.label}
          </Font>
        </Card>
      )}
    </Content>
  );
}
