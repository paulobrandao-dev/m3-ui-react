import PageHeader from '@/docs/shared/PageHeader';
import { Content } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';

export default function NotFoundPage() {
  return (
    <Content as="main">
      <PageHeader
        title="404"
        description="This page cannot be found."
        isErrorHandler
        element={
          <Icon
            icon="error"
            size={200}
            isFilled
            style={{ color: 'var(--color-on-error-container)' }}
          />
        }
      />
    </Content>
  );
}
