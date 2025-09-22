import { Button, Card, Content, Font } from '@/lib';
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
        component is a fundamental interactive element designed to trigger
        actions when clicked. It's built as a flexible and accessible
        client-side component that adheres to Material 3 design principles. It
        supports various visual styles, sizes, and can include an icon.
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
          <kbd>import</kbd> <samp>Button</samp> <kbd>from</kbd>{' '}
          <samp>'m3-ui-react'</samp>;
        </code>
      </pre>
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
      <Font variant="body-large" as="p" spacing={{ paddingInline: 'lg' }}>
        Here are some examples of how to use the{' '}
        <Font variant="code" as="code" textColor="secondary">
          Button
        </Font>{' '}
        component in different scenarios.
      </Font>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Basic Button
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        The most basic usage of a button requires only a text{' '}
        <Font variant="code" as="code" textColor="secondary">
          children
        </Font>{' '}
        prop.
      </Font>
      <pre className="js">
        <code>
          &lt;<em>Button</em>&gt;Click me&lt;/<em>Button</em>&gt;
        </code>
      </pre>
      <Card
        variant="outlined"
        flexbox={{
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        spacing={{ marginBlock: 'md', padding: 'lg' }}
      >
        <Button>Click me</Button>
      </Card>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Variants
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
        component comes in five visual variants to suit different levels of
        emphasis. The default variant is{' '}
        <Font variant="code" as="code" textColor="secondary">
          text
        </Font>
        .
      </Font>
      <pre className="js">
        <code>
          <kbd>import</kbd> &#123; Button &#125; <kbd>from</kbd>{' '}
          <samp>'m3-ui-react'</samp>;
        </code>
        <code></code>
        <code>
          <em>function</em> <b>ButtonVariants</b>() &#123;
        </code>
        <code className="sp-1">
          <kbd>return</kbd> (
        </code>
        <code className="sp-2">&lt;&gt;</code>
        <code className="sp-3">
          &lt;<em>Button</em> <b>variant</b>=<samp>"text"</samp>&gt;Text&lt;/
          <em>Button</em>
          &gt;
        </code>
        <code className="sp-3">
          &lt;<em>Button</em> <b>variant</b>=<samp>"outlined"</samp>
          &gt;Outlined&lt;/
          <em>Button</em>
          &gt;
        </code>
        <code className="sp-3">
          &lt;<em>Button</em> <b>variant</b>=<samp>"tonal"</samp>&gt;Tonal&lt;/
          <em>Button</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>Button</em> <b>variant</b>=<samp>"filled"</samp>
          &gt;Filled&lt;/
          <em>Button</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>Button</em> <b>variant</b>=<samp>"elevated"</samp>
          &gt;Elevated&lt;/
          <em>Button</em>
          &gt;
        </code>
        <code className="sp-2">&lt;/&gt;</code>
        <code className="sp-1">);</code>
        <code>&#125;</code>
      </pre>
      <Card
        variant="outlined"
        flexbox={{
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'lg',
          wrap: 'active',
        }}
        spacing={{ marginBlock: 'md', padding: 'lg' }}
      >
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="tonal">Tonal</Button>
        <Button variant="filled">Filled</Button>
        <Button variant="elevated">Elevated</Button>
      </Card>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Sizes
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        You can adjust the button size using the{' '}
        <Font variant="code" as="code" textColor="secondary">
          size
        </Font>{' '}
        prop. The default size is{' '}
        <Font variant="code" as="code" textColor="secondary">
          sm
        </Font>
        .
      </Font>
      <pre className="js">
        <code>
          <kbd>import</kbd> &#123; Button &#125; <kbd>from</kbd>{' '}
          <samp>'m3-ui-react'</samp>;
        </code>
        <code></code>
        <code>
          <em>function</em> <b>ButtonSizes</b>() &#123;
        </code>
        <code className="sp-1">
          <kbd>return</kbd> (
        </code>
        <code className="sp-2">&lt;&gt;</code>
        <code className="sp-3">
          &lt;<em>Button</em> <b>size</b>=<samp>"xs"</samp>&gt;Extra Small&lt;/
          <em>Button</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>Button</em> <b>size</b>=<samp>"sm"</samp>&gt;Small&lt;/
          <em>Button</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>Button</em> <b>size</b>=<samp>"md"</samp>&gt;Medium&lt;/
          <em>Button</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>Button</em> <b>size</b>=<samp>"lg"</samp>&gt;Large&lt;/
          <em>Button</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>Button</em> <b>size</b>=<samp>"xl"</samp>&gt;Extra Large&lt;/
          <em>Button</em>&gt;
        </code>
        <code className="sp-2">&lt;/&gt;</code>
        <code className="sp-1">);</code>
        <code>&#125;</code>
      </pre>
      <Card
        variant="outlined"
        flexbox={{
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'lg',
          wrap: 'active',
        }}
        spacing={{ marginBlock: 'md', padding: 'lg' }}
      >
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </Card>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        With an Icon
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        To add a visual cue, you can pass a React node (like the{' '}
        <Font variant="code" as="code" textColor="secondary">
          Icon
        </Font>{' '}
        component from this library) to the{' '}
        <Font variant="code" as="code" textColor="secondary">
          icon
        </Font>{' '}
        prop.
      </Font>
      <pre className="js">
        <code>
          <kbd>import</kbd> &#123; Button, Icon &#125; <kbd>from</kbd>{' '}
          <samp>'m3-ui-react'</samp>;
        </code>
        <code></code>
        <code>
          <em>function</em> <b>ButtonWithIcon</b>() &#123;
        </code>
        <code className="sp-1">
          <kbd>return</kbd> (
        </code>
        <code className="sp-2">
          &lt;<em>Button</em> <b>icon</b>=&#123;&lt;<em>Icon</em> <b>symbol</b>=
          <samp>"add_shopping_cart"</samp> /&gt;&#125;&gt;
        </code>
        <code className="sp-3">Add to cart</code>
        <code className="sp-2">
          &lt;/<em>Button</em>&gt;
        </code>
        <code className="sp-1">);</code>
        <code>&#125;</code>
      </pre>
      <Card
        variant="outlined"
        flexbox={{
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'lg',
          wrap: 'active',
        }}
        spacing={{ marginBlock: 'md', padding: 'lg' }}
      >
        <Button icon={<Icon symbol="add_shopping_cart" />}>Add to cart</Button>
      </Card>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Disable state
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        The button can be disabled by passing the standard HTML{' '}
        <Font variant="code" as="code" textColor="secondary">
          disabled
        </Font>
        attribute. This will prevent user interaction and apply a disabled
        visual style.
      </Font>
      <pre className="js">
        <code>
          &lt;<em>Button</em> disabled&gt;I am disabled&lt;/<em>Button</em>&gt;
        </code>
      </pre>
      <Card
        variant="outlined"
        flexbox={{
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'lg',
          wrap: 'active',
        }}
        spacing={{ marginBlock: 'md', padding: 'lg' }}
      >
        <Button disabled>I am disabled</Button>
      </Card>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Ref forwarding
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        The component supports{' '}
        <Font variant="code" as="code" textColor="secondary">
          ref
        </Font>{' '}
        forwarding. You can pass a{' '}
        <Font variant="code" as="code" textColor="secondary">
          ref
        </Font>{' '}
        to get direct access to the underlying{' '}
        <Font variant="code" as="code" textColor="secondary">
          &lt;button&gt;
        </Font>{' '}
        DOM element.
      </Font>
      <pre className="js">
        <code>
          <kbd>import</kbd> &#123; Button &#125; <kbd>from</kbd>{' '}
          <samp>'m3-ui-react'</samp>;
        </code>
        <code>
          <kbd>import</kbd> &#123; useRef, useEffect &#125; <kbd>from</kbd>{' '}
          <samp>'react'</samp>;
        </code>
        <code></code>
        <code>
          <em>function</em> <b>FocusableButton</b>() &#123;
        </code>
        <code className="sp-1">
          <em>const</em> buttonRef = <b>useRef</b>
          &lt;<u>HTMLButtonElement</u>&gt;(null);
        </code>
        <code></code>
        <code className="sp-1">
          <b>useEffect</b>(() =&gt; &#123;
        </code>
        <code className="sp-2">
          <i>// Focus the button on component mount</i>
        </code>
        <code className="sp-2">buttonRef.current?.focus();</code>
        <code className="sp-1">&#125;, []);</code>
        <code></code>
        <code className="sp-1">
          <kbd>return</kbd> &lt;<em>Button</em> <b>ref</b>
          =&#123;buttonRef&#125;&gt;I'm focused!&lt;/<em>Button</em>&gt;;
        </code>
        <code>&#125;</code>
      </pre>
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        API Reference
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
      <Content as="div" scrollable={{ horizontal: 'auto', vertical: 'hidden' }}>
        <table className="component-reference">
          <thead>
            <tr>
              <Font
                variant="title-small"
                as="th"
                textAlign="left"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                Prop
              </Font>
              <Font
                variant="title-small"
                as="th"
                textAlign="left"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                Type
              </Font>
              <Font
                variant="title-small"
                as="th"
                textAlign="left"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                Default
              </Font>
              <Font
                variant="title-small"
                as="th"
                textAlign="left"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                Descripition
              </Font>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Font
                variant="code"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                children
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                string
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                Required
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                The text label for the button. Note that this prop only accepts
                a string.
              </Font>
            </tr>
            <tr>
              <Font
                variant="code"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                variant
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                <code>text</code> | <code>outlined</code> | <code>tonal</code> |{' '}
                <code>filled</code> | <code>elevated</code>
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                <code>text</code>
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                The visual style of the button.
              </Font>
            </tr>
            <tr>
              <Font
                variant="code"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                size
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                <code>xs</code> | <code>sm</code> | <code>md</code> |{' '}
                <code>lg</code> | <code>xl</code>
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                <code>sm</code>
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                The size of the button.
              </Font>
            </tr>
            <tr>
              <Font
                variant="code"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                icon
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                <code>ReactNode</code>
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                undefined
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                An optional icon element to be displayed before the button's
                text label.
              </Font>
            </tr>
            <tr>
              <Font
                variant="code"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                ...props
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                <code>ButtonHTMLAttributes</code>
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                undefined
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                All other standard HTML <code>&lt;button&gt;</code> attributes
                are accepted, such as <code>onClick</code>,{' '}
                <code>disabled</code>, <code>type</code>, <code>className</code>
                ,<code>aria-label</code>, etc.
              </Font>
            </tr>
          </tbody>
        </table>
      </Content>
    </article>
  );
}
