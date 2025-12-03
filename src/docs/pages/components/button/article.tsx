import { Snippet } from '@/docs/shared/Snippet';
import { Button, Font } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';

export default function ComponentButtonArtcile() {
  return (
    <article id="component_button_article">
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
          Button
        </Font>{' '}
        component is a fundamental interactive element that allows users to
        trigger actions, make choices, and navigate within an application. It's
        designed to be highly versatile, with multiple visual styles to indicate
        different levels of emphasis, from high-emphasis filled buttons to
        low-emphasis text buttons.
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
          Button
        </Font>{' '}
        component, import it from the library:
      </Font>
      <pre className="js">
        <code>
          <kbd>import</kbd> &#123; <samp>Button</samp> &#125; <kbd>from</kbd>{' '}
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
          Button
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
              children
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              The content of the button.
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
              variant
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              The variant of the button.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              text (default) | outlined | tonal | filled | elevated
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              size
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              The size of the button.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              xs | sm (default) | md | lg | xl
            </Font>
          </tr>
          <tr>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              icon
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              An icon to be displayed before the text.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              ReactNode
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
              A ref to the underlying <code>&lt;button&gt;</code> element.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              React.Ref&lt;HTMLButtonElement&gt;
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
              All other standard HTML <code>&lt;button&gt;</code> attributes are
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
        Usage Examples
      </Font>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Filled Button (High Emphasis)
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        Use for the most important action on a screen
      </Font>
      <Snippet
        lang="js"
        code={`
<Button
  variant="filled"
  icon={<Icon symbol="add" />}
  onClick={() => alert('Item added!')}
>
  Add to cart
</Button>
        `}
      >
        <Button
          variant="filled"
          icon={<Icon symbol="add" />}
          onClick={() => alert('Item added!')}
        >
          Add to cart
        </Button>
      </Snippet>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Outlined Button (Medium Emphasis)
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        Use for important actions that are not the primary call to action.
      </Font>
      <Snippet
        lang="js"
        code={`
<Button variant="outlined">
  View details
</Button>
        `}
      >
        <Button variant="outlined">View details</Button>
      </Snippet>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Text Button (Low Emphasis)
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        Use for less prominent actions, often in dialogs or cards.
      </Font>
      <Snippet
        lang="js"
        code={`
<Button variant="text" size="lg">
  Learn more
</Button>
        `}
      >
        <Button variant="text" size="lg">
          Learn more
        </Button>
      </Snippet>
    </article>
  );
}
