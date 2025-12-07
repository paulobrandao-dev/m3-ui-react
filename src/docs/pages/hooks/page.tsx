import { useSettings } from '@/docs/settings/hook';
import CardIcon from '@/docs/shared/CardIcon';
import CardLink from '@/docs/shared/CardLink';
import PageHeader from '@/docs/shared/PageHeader';
import { CanonicalLayout, Content } from '@/lib';
import { useEffect } from 'react';

export default function HooksPage() {
  const { isFluidContent, setSubtitle } = useSettings();

  useEffect(() => {
    setSubtitle('Hooks');

    return () => {
      setSubtitle(undefined);
    };
  }, [setSubtitle]);

  return (
    <Content as="main">
      <PageHeader
        title="Hooks"
        description="Functions to simplify your logic and improve code readability"
        element={
          <CardIcon color="primary" size={200} isFilled icon="phishing" />
        }
      />
      <CanonicalLayout
        as="nav"
        variant="feed"
        gap={{ gap: 'sm' }}
        spacing={{ marginInline: 'auto', paddingBlock: 'xl' }}
        isFluid={isFluidContent}
      >
        <CardLink
          link="/hooks/use-dialog-control"
          name="useDialogControl"
          icon="picture_in_picture_center"
          description="A hook to control a native dialog element."
        />
        <CardLink
          link="/hooks/use-media-query"
          name="useMediaQuery"
          icon="responsive_layout"
          description="A hook that provides a set of media queries to create responsive layouts."
        />
        <CardLink
          link="/hooks/use-popover-control"
          name="usePopoverControl"
          icon="arrow_drop_down_circle"
          description="A hook to control an element with the `popover` attribute."
        />
        <CardLink
          link="/hooks/use-scroll-behavior"
          name="useScrollBehavior"
          icon="unfold_more"
          description="A hook that tracks the scroll behavior of an element and provides flags for scroll direction and position."
        />
        <CardLink
          link="/hooks/use-theme-colors"
          name="useThemeColors"
          icon="colors"
          description="A comprehensive set of theme colors based on Material Design 3."
        />
      </CanonicalLayout>
    </Content>
  );
}
