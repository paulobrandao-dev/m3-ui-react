import CardLink from '@/docs/shared/CardLink';
import { CanonicalLayout, Content, Font } from '@/lib';

export default function SectionOthers({
  isFluidContent,
}: Readonly<{ isFluidContent: boolean }>) {
  return (
    <Content
      as="section"
      flexbox={{ direction: 'column', gap: 'xl' }}
      spacing={{
        paddingBlock: 'xl',
        marginInline: 'auto',
      }}
      style={{ maxWidth: !isFluidContent ? 1199 : undefined }}
    >
      <Font as="h2" variant="headline-large">
        Others
      </Font>
      <CanonicalLayout
        as="nav"
        variant="feed"
        gap={{ gap: 'sm' }}
        spacing={{ marginInline: 'auto' }}
        isFluid={isFluidContent}
      >
        <CardLink
          link="/components/appbar"
          name="Appbar"
          icon="toolbar"
          description="App bars are positioned at the top of the screen, helping users navigate products."
        />
      </CanonicalLayout>
    </Content>
  );
}
