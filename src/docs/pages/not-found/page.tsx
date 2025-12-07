import CardIcon from '@/docs/shared/CardIcon';
import PageHeader from '@/docs/shared/PageHeader';
import { Content } from '@/lib';

export default function NotFoundPage() {
  return (
    <Content as="main">
      <PageHeader
        title="404"
        description="This page cannot be found."
        isErrorHandler
        element={<CardIcon color="error" icon="error" size={200} />}
      />
    </Content>
  );
}
