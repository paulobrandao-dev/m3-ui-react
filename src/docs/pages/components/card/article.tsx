import { Snippet } from '@/docs/shared/Snippet';
import { Button, Card, Content, Font } from '@/lib';

export default function ComponentCardArtcile() {
  return (
    <article id="component_card_article">
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlockEnd: 'xl' }}
      >
        Overview
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        The{' '}
        <Font variant="code" as="code" textColor="secondary">
          Card
        </Font>{' '}
        component is a versatile container for content and actions. It can be
        used to display information in a structured and visually appealing way.
      </Font>
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Import
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        To use the{' '}
        <Font variant="code" as="code" textColor="secondary">
          Card
        </Font>{' '}
        component, import it from the library:
      </Font>
      <Snippet lang="js" code="import { Card } from 'm3-ui-react';" />
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Props
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        The{' '}
        <Font variant="code" as="code" textColor="secondary">
          Card
        </Font>{' '}
        component accepts the following props:
      </Font>
      <table className="component-reference">
        <thead>
          <tr>
            <Font
              as="th"
              variant="title-small"
              spacing={{ paddingInline: 'lg', paddingBlock: 'xs' }}
            >
              Prop
            </Font>
            <Font
              as="th"
              variant="title-small"
              spacing={{ paddingInline: 'lg', paddingBlock: 'xs' }}
            >
              Description
            </Font>
            <Font
              as="th"
              variant="title-small"
              spacing={{ paddingInline: 'lg', paddingBlock: 'xs' }}
            >
              Type
            </Font>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              variant
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              The variant of the card.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              'elevated' | 'filled' | 'outlined'
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              as
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              The HTML element to render the card as. Defaults to{' '}
              <code>div</code>.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              React.ElementType&lt;'div'&gt;
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              stateLayer
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              If <code>true</code>, a semi-opaque overlay (state layer) is
              applied on hover and press, providing visual feedback for
              interactive cards
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              boolean
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              spacing
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              An object to control the padding and marging of the card
              container.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              MaterialSpacingProps
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              flexbox
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              An object to apply flexbox properties (direction, justify, align
              and gap) to the card, turning it into a flex container
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              MaterialFlexboxProps
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              grid
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              An object to apply grid properties (columns, gap spacing) to the
              card, turning it into a grid container
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              MaterialGridProps
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              ref
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              A ref to the underlying element.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              React.Ref&lt;HTMLElement&gt;
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              ...props
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              colSpan={2}
            >
              All other standard HTML attributes are accepted.
            </Font>
          </tr>
        </tbody>
      </table>
      <Font
        variant="headline-large"
        as="h2"
        spacing={{
          paddingInline: 'lg',
          paddingBlock: 'xl',
          marginBlockStart: 'md',
        }}
      >
        Usage Examples
      </Font>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Elevated Card (Default)
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        This is the default style, using a shadow to lift the card off the
        background. It's great for creating a sense of depth and focus.
      </Font>
      <Snippet
        lang="js"
        code={`
<Card spacing={{ padding: 'lg' }}>
  <Font variant="title-large" as="h3">
    Elevated Card
  </Font>
  <Font variant="body-large" as="p">
    This card has a shadow and appears to float above the content.
  </Font>
</Card>
        `}
      >
        <Card spacing={{ padding: 'lg' }}>
          <Font variant="title-large" as="h3">
            Elevated Card
          </Font>
          <Font variant="body-large" as="p">
            This card has a shadow and appears to float above the content.
          </Font>
        </Card>
      </Snippet>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Interactive Outlined Card
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        The{' '}
        <Font variant="code" as="code" textColor="secondary">
          outlined
        </Font>{' '}
        variant provides a clean, modern look. By adding the{' '}
        <Font variant="code" as="code" textColor="secondary">
          stateLayer
        </Font>{' '}
        prop and an{' '}
        <Font variant="code" as="code" textColor="secondary">
          onClick
        </Font>{' '}
        handler, the card becomes an interactive target.
      </Font>
      <Snippet
        lang="js"
        code={`
<Card
  as="button"
  variant="outlined"
  stateLayer
  spacing={{ padding: 'md' }}
  onClick={() => alert('Card clicked!')}
>
  <Font
    variant="title-large"
    textAlign="left"
    textColor="primary"
    as="h3"
  >
    Clickable Outlined Card
  </Font>
  <Font variant="body-large" textAlign="left" as="p">
    This card has a border and shows a ripple effect on click.
  </Font>
</Card>
      `}
      >
        <Card
          as="button"
          variant="outlined"
          stateLayer
          spacing={{ padding: 'md' }}
          onClick={() => alert('Card clicked!')}
        >
          <Font
            variant="title-large"
            textAlign="left"
            textColor="primary"
            as="h3"
          >
            Clickable Outlined Card
          </Font>
          <Font variant="body-large" textAlign="left" as="p">
            This card has a border and shows a ripple effect on click.
          </Font>
        </Card>
      </Snippet>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Filled Card with Flexbox Layout
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        The{' '}
        <Font variant="code" as="code" textColor="secondary">
          filled
        </Font>{' '}
        variant is more subtle and works well on colored backgrounds. Here, we
        use the{' '}
        <Font variant="code" as="code" textColor="secondary">
          flexbox
        </Font>{' '}
        prop to easily arrange content.
      </Font>
      <Snippet
        lang="js"
        code={`
<Card
  variant="filled"
  spacing={{ padding: 'lg' }}
  flexbox={{ direction: 'column', gap: 'sm' }}
>
  <Font variant="title-large" as="h3">
    Filled Card with Flex
  </Font>
  <Font variant="body-large" as="p">
    Content is arranged in a column with a small gap.
  </Font>
  <Content
    as="footer"
    flexbox={{ direction: 'row', justifyContent: 'flex-end' }}
    spacing={{ paddingBlockStart: 'md' }}
  >
    <Button variant="filled">Action</Button>
  </Content>
</Card>
        `}
      >
        <Card
          variant="filled"
          spacing={{ padding: 'lg' }}
          flexbox={{ direction: 'column', gap: 'md' }}
        >
          <Font variant="title-large" as="h3">
            Filled Card with Flex
          </Font>
          <Font variant="body-large" as="p">
            Content is arranged in a column with a small gap.
          </Font>
          <Content
            as="footer"
            flexbox={{ direction: 'row', justifyContent: 'flex-end' }}
            spacing={{ paddingBlockStart: 'md' }}
          >
            <Button variant="filled">Action</Button>
          </Content>
        </Card>
      </Snippet>
    </article>
  );
}
