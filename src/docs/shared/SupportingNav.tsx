import { Content, useMediaQuery } from '@/lib';

export default function SupportingNav({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const media = useMediaQuery();

  return (
    <Content
      as="nav"
      flexbox={{
        direction: media.isLessThanMedium ? 'row' : 'column',
        gap: 'sm',
        alignSelf: media.isLessThanMedium ? 'center' : 'flex-start',
      }}
      spacing={{ paddingBlock: 'sm' }}
      scrollable={{
        vertical: 'hidden',
        horizontal: media.isLessThanExpanded ? 'auto' : 'hidden',
      }}
      className="supporting-nav"
    >
      {children}
    </Content>
  );
}
