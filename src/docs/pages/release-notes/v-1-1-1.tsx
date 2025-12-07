import { Content, Font } from '@/lib';

export default function Major1Minor1Patch1({
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
        1.1.1
      </Font>
      <Font variant="body-large" as="p">
        Working in progress...
      </Font>
      <Font variant="headline-large" as="h2">
        🎉 Changes
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      ></Content>
    </Content>
  );
}
