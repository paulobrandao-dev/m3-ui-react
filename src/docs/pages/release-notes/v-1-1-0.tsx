import { Content, Font } from '@/lib';

export default function Major1Minor1Patch0({
  isActive,
}: Readonly<{ isActive?: boolean }>) {
  if (!isActive) return null;

  return (
    <Content
      as="article"
      flexbox={{ direction: 'column', gap: 'md' }}
      spacing={{ padding: 'lg' }}
    >
      <Font variant="display-medium" as="h1">
        1.1.0
      </Font>
      <Font variant="body-large" as="p">
        In progress...
      </Font>
    </Content>
  );
}
