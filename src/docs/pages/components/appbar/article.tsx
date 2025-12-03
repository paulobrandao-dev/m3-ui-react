import { Snippet } from '@/docs/shared/Snippet';
import { Appbar, Font, IconButton } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';

export default function ComponentAppbarArtcile() {
  return (
    <article id="component_appbar_article">
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
          Appbar
        </Font>{' '}
        component provides a consistent header for your application, featuring
        navigation, titles, and actions. It can be configured with different
        variants to suit various screen sizes and contexts.
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
          Appbar
        </Font>{' '}
        component, import it from the library:
      </Font>
      <pre className="js">
        <code>
          <kbd>import</kbd> <samp>Appbar</samp> <kbd>from</kbd>{' '}
          <samp>'m3-ui-react'</samp>;
        </code>
      </pre>
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
          Appbar
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
              The variant of the Appbar. It determines the size and layout of
              the component.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              small (default) | medium | large
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              navAction
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              The navigation action element, typically an{' '}
              <Font variant="code" as="code">
                IconButton
              </Font>
              , displayed on the left.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              React.ReactElement
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              headline
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              The main title text of the Appbar.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              string
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              subtitle
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              The subtitle text displayed below the headline.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              string
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              centeredText
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              If{' '}
              <Font variant="code" as="code">
                true
              </Font>
              , the headline and subtitle are centered.
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
              customContent
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              Custom content that can be displayed in the center of the Appbar,
              replacing the headline and subtitle.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              React.ReactNode
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              actions
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              Action elements displayed on the right side of the Appbar.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              React.ReactNode
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              isScroll
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              If{' '}
              <Font variant="code" as="code">
                true
              </Font>
              , applies styles for a scrolled state, affecting the Appbar's
              appearance.
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
              isFluid
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              If{' '}
              <Font variant="code" as="code">
                true
              </Font>
              , the Appbar's content will span the full width of its container.
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
              ref
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              A ref to the underlying <code>&lt;header&gt;</code> element.
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
              All other standard HTML <code>&lt;header&gt;</code> attributes are
              accepted.
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
        Usage
      </Font>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Small Appbar (Default)
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        This is the most common{' '}
        <Font variant="code" as="code" textColor="secondary">
          variant
        </Font>
        , suitable for most screens.
      </Font>
      <Snippet
        lang="js"
        code={`
<Appbar
  navAction={<IconButton><Icon symbol="menu" /></IconButton>}
  headline="My Application"
  actions={
    <>
      <IconButton><Icon symbol="attach_file" /></IconButton>
      <IconButton><Icon symbol="today" /></IconButton>
      <IconButton><Icon symbol="more_vert" /></IconButton>
    </>
  }
/>
        `}
      >
        <Appbar
          navAction={
            <IconButton>
              <Icon symbol="menu" />
            </IconButton>
          }
          headline="My Application"
          actions={
            <>
              <IconButton>
                <Icon symbol="attach_file" />
              </IconButton>
              <IconButton>
                <Icon symbol="today" />
              </IconButton>
              <IconButton>
                <Icon symbol="more_vert" />
              </IconButton>
            </>
          }
        />
      </Snippet>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Medium Appbar
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        The{' '}
        <Font variant="code" as="code" textColor="secondary">
          medium
        </Font>{' '}
        variant provides more vertical space and is often used for primary
        screens. The headline is larger and appears on a separate line.
      </Font>
      <Snippet
        lang="js"
        code={`
<Appbar
  variant="medium"
  navAction={<IconButton><Icon symbol="arrow_back" /></IconButton>}
  headline="Medium Title"
  isScroll // Example of scrolled state
/>
        `}
      >
        <Appbar
          variant="medium"
          navAction={
            <IconButton>
              <Icon symbol="arrow_back" />
            </IconButton>
          }
          headline="Medium Title"
          isScroll
        />
      </Snippet>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Large Appbar with Subtitle
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        The{' '}
        <Font variant="code" as="code" textColor="secondary">
          large
        </Font>{' '}
        variant is ideal for screens that benefit from a prominent title, such
        as detail pages or immersive experiences.
      </Font>
      <Snippet
        lang="js"
        code={`
<Appbar
  variant="large"
  navAction={<IconButton><Icon symbol="arrow_back" /></IconButton>}
  headline="Large Title"
  subtitle="Optional Subtitle"
  actions={<IconButton><Icon symbol="more_vert" /></IconButton>}
/>
        `}
      >
        <Appbar
          variant="large"
          navAction={
            <IconButton>
              <Icon symbol="arrow_back" />
            </IconButton>
          }
          headline="Large Title"
          subtitle="Optional Subtitle"
          actions={
            <IconButton>
              <Icon symbol="more_vert" />
            </IconButton>
          }
        />
      </Snippet>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Centered Small Appbar
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        You can center the headline and subtitle by using the{' '}
        <Font variant="code" as="code" textColor="secondary">
          centeredText
        </Font>{' '}
        prop. This is typically used on{' '}
        <Font variant="code" as="code" textColor="secondary">
          small
        </Font>{' '}
        Appbars.
      </Font>
      <Snippet
        lang="js"
        code={`
<Appbar
  navAction={<IconButton><Icon symbol="arrow_back" /></IconButton>}
  headline="Centered Title"
  centeredText={true}
  actions={<IconButton><Icon symbol="more_vert" /></IconButton>}
/>
        `}
      >
        <Appbar
          navAction={
            <IconButton>
              <Icon symbol="arrow_back" />
            </IconButton>
          }
          headline="Centered Title"
          centeredText={true}
          actions={
            <IconButton>
              <Icon symbol="more_vert" />
            </IconButton>
          }
        />
      </Snippet>
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Accessibility
      </Font>
      <Font
        variant="body-large"
        as="ul"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        <li>
          The component renders a semantic{' '}
          <Font variant="code" as="code" textColor="secondary">
            &lt;header&gt;
          </Font>{' '}
          element.
        </li>
        <li>
          The container for actions is given{' '}
          <Font variant="code" as="code" textColor="secondary">
            role="toolbar"
          </Font>{' '}
          to group the action controls.
        </li>
        <li>
          Other key containers use{' '}
          <Font variant="code" as="code" textColor="secondary">
            role="presentation"
          </Font>{' '}
          to avoid adding unnecessary semantics to the accessibility tree.
        </li>
        <li>
          When using{' '}
          <Font variant="code" as="code" textColor="secondary">
            IconButton
          </Font>{' '}
          for{' '}
          <Font variant="code" as="code" textColor="secondary">
            navAction
          </Font>{' '}
          and{' '}
          <Font variant="code" as="code" textColor="secondary">
            actions
          </Font>
          , ensure you provide an accessible name via{' '}
          <Font variant="code" as="code" textColor="secondary">
            aria-label
          </Font>{' '}
          or{' '}
          <Font variant="code" as="code" textColor="secondary">
            title
          </Font>{' '}
          for screen reader users.
        </li>
      </Font>
    </article>
  );
}
