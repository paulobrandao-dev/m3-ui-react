import CardLink from '@/docs/shared/CardLink';
import SupportingNav from '@/docs/shared/SupportingNav';

export default function HookDialogControlPanel() {
  return (
    <SupportingNav>
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
    </SupportingNav>
  );
}
