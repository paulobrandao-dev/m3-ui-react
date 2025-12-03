import { Snippet } from '@/docs/shared/Snippet';
import { CanonicalLayout, Card, Content, Font, ListItem } from '@/lib';
import { useState } from 'react';

const ITEMS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Fusce facilisis urna ut accumsan blandit.',
  'Integer vel neque congue, viverra quam sit amet, rhoncus urna.',
];

export default function ComponentCanonicalLayoutArtcile() {
  const [currentItem, setItem] = useState<number>(0);

  return (
    <article id="component_layout_article">
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
          CanonicalLayout
        </Font>{' '}
        component provides a set of standardized, responsive page structures
        based on Material Design 3's canonical layouts. These layouts are
        designed to create consistent and user-friendly experiences for common
        screen patterns like list/detail views, feeds, and pages with supporting
        content.
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
          CanonicalLayout
        </Font>{' '}
        component, import it from the library:
      </Font>
      <pre className="js">
        <code>
          <kbd>import</kbd> &#123; <samp>CanonicalLayout</samp> &#125;{' '}
          <kbd>from</kbd> <samp>'m3-ui-react'</samp>;
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
          CanonicalLayout
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
              The layout variant to apply.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              'list-detail' | 'supporting-pane' | 'feed'
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
              The HTML element type to render. Can be any valid HTML tag name
              (e.g., 'div', 'main') or a React component.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              React.ElementType&lt;'section'&gt;
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
              An object to control the padding of the layout container.
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
              gap
            </Font>
            <Font
              as="td"
              variant="body-medium"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              An object to control the gap between the layout's direct children.
            </Font>
            <Font
              as="td"
              variant="code"
              spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
            >
              MaterialGapProps
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
              If <code>true</code>, the layout will span the full width of its
              container.
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
        List-Detail Layout
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        This variant is ideal for master-detail interfaces, where selecting an
        item from a list displays its details in an adjacent pane.
      </Font>
      <Snippet
        lang="js"
        code={`
<CanonicalLayout variant="list-detail" gap={{ gap: 'md' }}>
  <Card variant="elevated" spacing={{ paddingBlock: 'sm' }}>
    {ITEMS.map((item, index) => (
      <ListItem
        key={item}
        onClick={() => setItem(index)}
        isSelected={currentItem === index}
        headline={\`Item \${index + 1}\`}
      />
    ))}
  </Card>
  <Card
    variant="outlined"
    flexbox={{ direction: 'column', gap: 'sm' }}
    spacing={{ padding: 'lg' }}
  >
    <Font variant="headline-large" as="h2">
      Details for Item {currentItem + 1}
    </Font>
    <Font variant="body-large">{ITEMS[currentItem]}</Font>
  </Card>
</CanonicalLayout>
        `}
      >
        <CanonicalLayout variant="list-detail" gap={{ gap: 'md' }}>
          <Card variant="elevated" spacing={{ paddingBlock: 'sm' }}>
            {ITEMS.map((item, index) => (
              <ListItem
                key={item}
                onClick={() => setItem(index)}
                isSelected={currentItem === index}
                headline={`Item ${index + 1}`}
              />
            ))}
          </Card>
          <Card
            variant="outlined"
            flexbox={{ direction: 'column', gap: 'sm' }}
            spacing={{ padding: 'lg' }}
          >
            <Font variant="headline-large" as="h2">
              Details for Item {currentItem + 1}
            </Font>
            <Font variant="body-large" as="p">
              {ITEMS[currentItem]}
            </Font>
          </Card>
        </CanonicalLayout>
      </Snippet>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Supporting-Pane Layout
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        Use this layout to display primary content alongside supplementary
        information, such as comments, metadata, or related links.
      </Font>
      <Snippet
        lang="js"
        code={`
<CanonicalLayout
  as="main"
  variant="supporting-pane"
  gap={{ gap: 'lg' }}
>
  <Content as="article">
    <Font variant="display-medium" as="h1">
      Article Title
    </Font>
    <Font variant="body-large" as="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      faucibus eros maximus sem laoreet, ac ultrices diam egestas.
      Phasellus tincidunt, quam vitae pellentesque semper, neque libero
      gravida ex, sit amet maximus ipsum nulla at felis. Quisque velit
      turpis, viverra eget diam nec, facilisis facilisis est. Vivamus
      dignissim in nunc in commodo. Morbi vehicula nunc nec lorem
      lacinia, quis scelerisque neque tristique. Vestibulum vitae dui at
      ante laoreet mollis. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit.
    </Font>
  </Content>
  <Card
    variant="filled"
    flexbox={{
      direction: 'column',
      gap: 'sm',
      alignItems: 'flex-start',
    }}
    spacing={{ padding: 'lg' }}
  >
    <Font variant="title-large" as="h3">
      Related Info
    </Font>
    <Font variant="body-medium" as="p">
      Additional context or actions.
    </Font>
  </Card>
</CanonicalLayout>
        `}
      >
        <CanonicalLayout
          as="section"
          variant="supporting-pane"
          gap={{ gap: 'lg' }}
        >
          <Content as="article">
            <Font variant="display-medium" as="h1">
              Article Title
            </Font>
            <Font variant="body-large" as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              faucibus eros maximus sem laoreet, ac ultrices diam egestas.
              Phasellus tincidunt, quam vitae pellentesque semper, neque libero
              gravida ex, sit amet maximus ipsum nulla at felis. Quisque velit
              turpis, viverra eget diam nec, facilisis facilisis est. Vivamus
              dignissim in nunc in commodo. Morbi vehicula nunc nec lorem
              lacinia, quis scelerisque neque tristique. Vestibulum vitae dui at
              ante laoreet mollis. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Font>
          </Content>
          <Card
            variant="filled"
            flexbox={{
              direction: 'column',
              gap: 'sm',
              alignItems: 'flex-start',
            }}
            spacing={{ padding: 'lg' }}
          >
            <Font variant="title-large" as="h3">
              Related Info
            </Font>
            <Font variant="body-medium" as="p">
              Additional context or actions.
            </Font>
          </Card>
        </CanonicalLayout>
      </Snippet>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Feed Layout
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        This variant arranges content in a grid, perfect for feeds of dynamic
        content like social media posts or news articles.
      </Font>
      <Snippet
        lang="js"
        code={`
<CanonicalLayout variant="feed" gap={{ gap: 'sm' }}>
  {ITEMS.map((item, index) => (
    <Card
      key={index}
      variant="elevated"
      flexbox={{
        direction: 'column',
        alignItems: 'flex-start',
        gap: 'md',
      }}
      spacing={{ padding: 'lg' }}
    >
      <Font variant="headline-large" as="h2">
        Item #{index + 1}
      </Font>
      <Font variant="body-medium" as="p">
        {item}
      </Font>
    </Card>
  ))}
</CanonicalLayout>
        `}
      >
        <CanonicalLayout variant="feed" gap={{ gap: 'sm' }}>
          {ITEMS.map((item, index) => (
            <Card
              key={index}
              variant="elevated"
              flexbox={{
                direction: 'column',
                alignItems: 'flex-start',
                gap: 'md',
              }}
              spacing={{ padding: 'lg' }}
            >
              <Font variant="headline-large" as="h2">
                Item #{index + 1}
              </Font>
              <Font variant="body-medium" as="p">
                {item}
              </Font>
            </Card>
          ))}
        </CanonicalLayout>
      </Snippet>
    </article>
  );
}
