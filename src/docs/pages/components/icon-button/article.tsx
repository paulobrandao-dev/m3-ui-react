import { Card, Content, Font, IconButton, useThemeColors } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useState } from 'react';

export default function ComponentIconButtonArticle() {
  const colors = useThemeColors();
  const [isToggleActive, toggle] = useState<boolean>(false);

  return (
    <article id="component_icon-button_article">
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
          IconButton
        </Font>{' '}
        component is a clickable button that displays an icon. It's a versatile
        component that can be used in various parts of your application, such as
        in toolbars, menus, or as standalone actions.
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
          IconButton
        </Font>{' '}
        component, import it from the library:
      </Font>
      <pre className="js">
        <code>
          <kbd>import</kbd> <samp>IconButton</samp> <kbd>from</kbd>{' '}
          <samp>'m3-ui-react'</samp>;
        </code>
      </pre>
      <Font
        variant="headline-small"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        When to use
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        Use{' '}
        <Font variant="code" as="code" textColor="secondary">
          IconButton
        </Font>{' '}
        when you need a button with an icon instead of text. It's perfect for
        actions that are universally understood through icons, like "close",
        "delete", "add", etc.
      </Font>
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
          IconButton
        </Font>{' '}
        component in different scenarios.
      </Font>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Basic IconButton
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        The most basic usage of a icon button requires only a ReactElement as{' '}
        <Font variant="code" as="code" textColor="secondary">
          children
        </Font>{' '}
        prop.
      </Font>
      <pre className="js">
        <code>
          &lt;<em>IconButton</em>&gt;
        </code>
        <code className="sp-1">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"add"</samp> /&gt;
        </code>
        <code>
          &lt;/<em>IconButton</em>&gt;
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
        <IconButton>
          <Icon symbol="add" />
        </IconButton>
      </Card>
      <Card
        variant="filled"
        as="blockquote"
        flexbox={{ direction: 'row', gap: 'lg', alignItems: 'center' }}
        spacing={{ padding: 'lg' }}
      >
        <Icon
          symbol="warning"
          isFilled
          style={{ color: colors.tertiary.color }}
        />
        <Font variant="body-medium" as="p">
          The example above uses the Icon component from this library, but you
          can use any other icon component, SVG, or image. The important thing
          is that it needs to be a unique element.
        </Font>
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
          IconButton
        </Font>{' '}
        component comes in four visual variants to suit different levels of
        emphasis. The default variant is{' '}
        <Font variant="code" as="code" textColor="secondary">
          standard
        </Font>
        .
      </Font>
      <pre className="js">
        <code>
          <kbd>import</kbd> &#123; IconButton &#125; <kbd>from</kbd>{' '}
          <samp>'m3-ui-react'</samp>;
        </code>
        <code>
          <kbd>import</kbd> &#123; Icon &#125; <kbd>from</kbd>{' '}
          <samp>'m3-ui-react/icon'</samp>;
        </code>
        <code></code>
        <code>
          <em>function</em> <b>IconButtonVariants</b>() &#123;
        </code>
        <code className="sp-1">
          <kbd>return</kbd> (
        </code>
        <code className="sp-2">&lt;&gt;</code>
        <code className="sp-3">
          &lt;<em>IconButton</em> <b>variant</b>=<samp>"standard"</samp>
          &gt;
        </code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"search"</samp> /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>IconButton</em> <b>variant</b>=<samp>"outlined"</samp>
          &gt;
        </code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"settings"</samp> /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>IconButton</em> <b>variant</b>=<samp>"filled"</samp>
          &gt;
        </code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"send"</samp> /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>IconButton</em> <b>variant</b>=<samp>"tonal"</samp>
          &gt;
        </code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"save"</samp> /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
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
        <IconButton variant="standard">
          <Icon symbol="search" />
        </IconButton>
        <IconButton variant="outlined">
          <Icon symbol="settings" />
        </IconButton>
        <IconButton variant="filled">
          <Icon symbol="send" />
        </IconButton>
        <IconButton variant="tonal">
          <Icon symbol="save" />
        </IconButton>
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
          <kbd>import</kbd> &#123; IconButton &#125; <kbd>from</kbd>{' '}
          <samp>'m3-ui-react'</samp>;
        </code>
        <code>
          <kbd>import</kbd> &#123; Icon &#125; <kbd>from</kbd>{' '}
          <samp>'m3-ui-react/icon'</samp>;
        </code>
        <code></code>
        <code>
          <em>function</em> <b>IconButtonSizes</b>() &#123;
        </code>
        <code className="sp-1">
          <kbd>return</kbd> (
        </code>
        <code className="sp-2">&lt;&gt;</code>
        <code className="sp-3">
          &lt;<em>IconButton</em> <b>size</b>=<samp>"xs"</samp>&gt;
        </code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"play_arrow"</samp> <b>size</b>
          =&#123;
          <var>20</var>&#125; /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>IconButton</em> <b>size</b>=<samp>"sm"</samp>&gt;
        </code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"play_arrow"</samp> <b>size</b>
          =&#123;
          <var>24</var>&#125; /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>IconButton</em> <b>size</b>=<samp>"md"</samp>&gt;
        </code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"play_arrow"</samp> <b>size</b>
          =&#123;
          <var>24</var>&#125; /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>IconButton</em> <b>size</b>=<samp>"lg"</samp>&gt;
        </code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"play_arrow"</samp> <b>size</b>
          =&#123;
          <var>32</var>&#125; /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>IconButton</em> <b>size</b>=<samp>"xl"</samp>&gt;
        </code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"play_arrow"</samp> <b>size</b>
          =&#123;
          <var>40</var>&#125; /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
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
        <IconButton size="xs">
          <Icon symbol="play_arrow" size={20} />
        </IconButton>
        <IconButton size="sm">
          <Icon symbol="play_arrow" size={24} />
        </IconButton>
        <IconButton size="md">
          <Icon symbol="play_arrow" />
        </IconButton>
        <IconButton size="lg">
          <Icon symbol="play_arrow" size={32} />
        </IconButton>
        <IconButton size="xl">
          <Icon symbol="play_arrow" size={40} />
        </IconButton>
      </Card>
      <Card
        variant="filled"
        as="blockquote"
        flexbox={{ direction: 'row', gap: 'lg', alignItems: 'center' }}
        spacing={{ padding: 'lg' }}
      >
        <Icon
          symbol="warning"
          isFilled
          style={{ color: colors.tertiary.color }}
        />
        <Font variant="body-medium" as="p">
          Note that the icon size varies with the button size, as outlined in
          the Material Design guidelines.
        </Font>
      </Card>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Width
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        You can adjust the button width using the{' '}
        <Font variant="code" as="code" textColor="secondary">
          width
        </Font>{' '}
        prop. The default size is{' '}
        <Font variant="code" as="code" textColor="secondary">
          standard
        </Font>
        .
      </Font>
      <pre className="js">
        <code>
          <kbd>import</kbd> &#123; IconButton &#125; <kbd>from</kbd>{' '}
          <samp>'m3-ui-react'</samp>;
        </code>
        <code>
          <kbd>import</kbd> &#123; Icon &#125; <kbd>from</kbd>{' '}
          <samp>'m3-ui-react/icon'</samp>;
        </code>
        <code></code>
        <code>
          <em>function</em> <b>IconButtonWidths</b>() &#123;
        </code>
        <code className="sp-1">
          <kbd>return</kbd> (
        </code>
        <code className="sp-2">&lt;&gt;</code>
        <code className="sp-3">
          &lt;<em>IconButton</em> <b>variant</b>=<samp>"outlined"</samp>{' '}
          <b>width</b>=<samp>"narrow"</samp>&gt;
        </code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"more_vert"</samp> <b>size</b>
          =&#123;
          <var>24</var>&#125; /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>IconButton</em> <b>variant</b>=<samp>"filled"</samp>{' '}
          <b>width</b>=<samp>"standard"</samp>&gt;
        </code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"save"</samp> <b>size</b>
          =&#123;
          <var>24</var>&#125; /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>IconButton</em> <b>variant</b>=<samp>"tonal"</samp>{' '}
          <b>width</b>=<samp>"wide"</samp>&gt;
        </code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"pause"</samp> <b>size</b>
          =&#123;
          <var>24</var>&#125; /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
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
        <IconButton variant="outlined" width="narrow">
          <Icon symbol="more_vert" />
        </IconButton>
        <IconButton variant="filled" width="standard">
          <Icon symbol="save" />
        </IconButton>
        <IconButton variant="tonal" width="wide">
          <Icon symbol="pause" />
        </IconButton>
      </Card>
      <Font
        variant="headline-small"
        as="h3"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Toggleable button
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        Toggle icon buttons can illustrate binary actions that switch between
        active and inactive states, like a favorite or a bookmark. It can be
        achieved by using two specific props:{' '}
        <Font variant="code" as="code" textColor="secondary">
          isToggleable
        </Font>{' '}
        and{' '}
        <Font variant="code" as="code" textColor="secondary">
          isActive
        </Font>
        .
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        The prop{' '}
        <Font variant="code" as="code" textColor="secondary">
          isToggleable
        </Font>{' '}
        enables the functionality, and the{' '}
        <Font variant="code" as="code" textColor="secondary">
          isActive
        </Font>{' '}
        prop manages the active state.
      </Font>
      <pre className="js">
        <code>
          <kbd>import</kbd> &#123; IconButton &#125; <kbd>from</kbd>{' '}
          <samp>'m3-ui-react'</samp>;
        </code>
        <code>
          <kbd>import</kbd> &#123; Icon &#125; <kbd>from</kbd>{' '}
          <samp>'m3-ui-react/icon'</samp>;
        </code>
        <code>
          <kbd>import</kbd> &#123; useState &#125; <kbd>from</kbd>{' '}
          <samp>'react'</samp>;
        </code>
        <code></code>
        <code>
          <em>function</em> <b>IconButtonToggleable</b>() &#123;
        </code>
        <code className="sp-1">
          <em>const</em> [isActive, toggleButton] = <b>useState</b>(
          <var>false</var>);
        </code>
        <code className="sp-1"></code>
        <code className="sp-1">
          <kbd>return</kbd> (
        </code>
        <code className="sp-2">&lt;&gt;</code>
        <code className="sp-3">
          &lt;<em>IconButton</em>
        </code>
        <code className="sp-4">
          <b>variant</b>=<samp>"standard"</samp>
        </code>
        <code className="sp-4">
          <b>isToggleable</b>
        </code>
        <code className="sp-4">
          <b>isActive</b>=&#123;isActive&#125;
        </code>
        <code className="sp-4">
          <b>onClick</b>=&#123;() =&gt; <b>toggleButton</b>(<ins>current</ins>{' '}
          =&gt; <kbd>!</kbd>
          <ins>current</ins>)&#125;
        </code>
        <code className="sp-3">&gt;</code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"bookmark"</samp> /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>IconButton</em>
        </code>
        <code className="sp-4">
          <b>variant</b>=<samp>"outlined"</samp>
        </code>
        <code className="sp-4">
          <b>isToggleable</b>
        </code>
        <code className="sp-4">
          <b>isActive</b>=&#123;isActive&#125;
        </code>
        <code className="sp-4">
          <b>onClick</b>=&#123;() =&gt; <b>toggleButton</b>(<ins>current</ins>{' '}
          =&gt; <kbd>!</kbd>
          <ins>current</ins>)&#125;
        </code>
        <code className="sp-3">&gt;</code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"bookmark"</samp> /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>IconButton</em>
        </code>
        <code className="sp-4">
          <b>variant</b>=<samp>"tonal"</samp>
        </code>
        <code className="sp-4">
          <b>isToggleable</b>
        </code>
        <code className="sp-4">
          <b>isActive</b>=&#123;isActive&#125;
        </code>
        <code className="sp-4">
          <b>onClick</b>=&#123;() =&gt; <b>toggleButton</b>(<ins>current</ins>{' '}
          =&gt; <kbd>!</kbd>
          <ins>current</ins>)&#125;
        </code>
        <code className="sp-3">&gt;</code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"bookmark"</samp> /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
        </code>
        <code className="sp-3">
          &lt;<em>IconButton</em>
        </code>
        <code className="sp-4">
          <b>variant</b>=<samp>"filled"</samp>
        </code>
        <code className="sp-4">
          <b>isToggleable</b>
        </code>
        <code className="sp-4">
          <b>isActive</b>=&#123;isActive&#125;
        </code>
        <code className="sp-4">
          <b>onClick</b>=&#123;() =&gt; <b>toggleButton</b>(<ins>current</ins>{' '}
          =&gt; <kbd>!</kbd>
          <ins>current</ins>)&#125;
        </code>
        <code className="sp-3">&gt;</code>
        <code className="sp-4">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"bookmark"</samp> /&gt;
        </code>
        <code className="sp-3">
          &lt;/<em>IconButton</em>&gt;
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
        <IconButton
          variant="standard"
          isToggleable
          isActive={isToggleActive}
          onClick={() => toggle(current => !current)}
        >
          <Icon symbol="bookmark" />
        </IconButton>
        <IconButton
          variant="outlined"
          isToggleable
          isActive={isToggleActive}
          onClick={() => toggle(current => !current)}
        >
          <Icon symbol="bookmark" />
        </IconButton>
        <IconButton
          variant="tonal"
          isToggleable
          isActive={isToggleActive}
          onClick={() => toggle(current => !current)}
        >
          <Icon symbol="bookmark" />
        </IconButton>
        <IconButton
          variant="filled"
          isToggleable
          isActive={isToggleActive}
          onClick={() => toggle(current => !current)}
        >
          <Icon symbol="bookmark" />
        </IconButton>
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
          &lt;<em>IconButton</em> <b>disabled</b>&gt;
        </code>
        <code className="sp-1">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"save"</samp> /&gt;
        </code>
        <code>
          &lt;/<em>IconButton</em>&gt;
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
        <IconButton disabled>
          <Icon symbol="save" />
        </IconButton>
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
          <kbd>import</kbd> &#123; IconButton &#125; <kbd>from</kbd>{' '}
          <samp>'m3-ui-react'</samp>;
        </code>
        <code>
          <kbd>import</kbd> &#123; Icon &#125; <kbd>from</kbd>{' '}
          <samp>'m3-ui-react/icon'</samp>;
        </code>
        <code>
          <kbd>import</kbd> &#123; useEffect, useRef &#125; <kbd>from</kbd>{' '}
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
          <kbd>return</kbd> (
        </code>
        <code className="sp-2">
          &lt;<em>IconButton</em> <b>ref</b>=&#123;buttonRef&#125;&gt;
        </code>
        <code className="sp-3">
          &lt;<em>Icon</em> <b>symbol</b>=<samp>"send"</samp> /&gt;
        </code>
        <code className="sp-2">
          &lt;/<em>IconButton</em>&gt;
        </code>
        <code className="sp-1">);</code>
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
          IconButton
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
                ReactElement
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
                The icon element to be displayed inside the button. Note that
                this prop only accepts a unique element.
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
                <code>standard</code> | <code>outlined</code> |{' '}
                <code>tonal</code> | <code>filled</code>
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                <code>standard</code>
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
                width
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                <code>standard</code> | <code>narrow</code> | <code>wide</code>
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                <code>standard</code>
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                The width of the button.
              </Font>
            </tr>
            <tr>
              <Font
                variant="code"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                isToggleable
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                <code>boolean</code>
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                <code>false</code>
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                Whether the button can be toggled between active and inactive
                states.
              </Font>
            </tr>
            <tr>
              <Font
                variant="code"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                isActive
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                <code>boolean</code>
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                <code>false</code>
              </Font>
              <Font
                variant="body-medium"
                as="td"
                spacing={{ paddingInline: 'lg', paddingBlock: 'sm' }}
              >
                The current state of the button, used with{' '}
                <code>isToggleable</code>.
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
