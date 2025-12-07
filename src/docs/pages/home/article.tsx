import ArticleNavigation from '@/docs/shared/ArticleNavigation';
import { Font } from '@/lib';
import { Link } from '../../router';

export default function HomeArticle() {
  return (
    <article id="home_article">
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlockEnd: 'xl' }}
      >
        Introduction
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        M3 UI is an impressive and user-friendly library of components that
        follows the{' '}
        <a href="https://m3.material.io" target="_blank" rel="nofollow">
          Material 3
        </a>{' '}
        design system.
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        It features a vast collection of pre-built UI components to make your
        web app development process a breeze.
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        These components are responsive, accessible, and customizable, ensuring
        your web app looks great across all devices and platforms. With React
        Material, you can build web apps that are stunning, consistent, and
        intuitive.
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        If you're looking for a powerful and modern library of UI components, M3
        UI is worth checking out.
      </Font>
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Installation
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        This library values simplicity and aims to be flexible in both
        server-side and client-side rendering.
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        This solution harnesses the power of CSS variables and classes to
        achieve its goal.
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        First, you need to get the library and only the library. You don't
        require added dependencies to use that.
      </Font>
      <pre className="sh">
        <code>npm i m3-ui-react</code>
      </pre>
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlock: 'lg' }}
      >
        Setup
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        When diving into the library, it's crucial to start by importing the
        main stylesheet file, as CSS is the cornerstone of everything.
      </Font>
      <pre className="js">
        <code>
          <i>// in the RootLayout or (main|index).ts</i>
        </code>
        <code>
          <kbd>import</kbd> <samp>'m3-ui-react/dist/m3-ui.css'</samp>;
        </code>
      </pre>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlock: 'md' }}
      >
        To make use of the <code>&lt;Icon /&gt;</code> component, import the
        icon font stylesheet that matches your chosen style.
      </Font>
      <pre className="js">
        <code>
          <i>// Outlined</i>
        </code>
        <code>
          <kbd>import</kbd>{' '}
          <samp>'m3-ui-react/dist/m3-ui.icon-outlined.css';</samp>
        </code>
        <code>
          <i>// Rounded</i>
        </code>
        <code>
          <kbd>import</kbd>{' '}
          <samp>'m3-ui-react/dist/m3-ui.icon-rounded.css';</samp>
        </code>
        <code>
          <i>// Sharp</i>
        </code>
        <code>
          <kbd>import</kbd>{' '}
          <samp>'m3-ui-react/dist/m3-ui.icon-sharp.css';</samp>
        </code>
      </pre>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlock: 'md' }}
      >
        Now it's time to <Link to="/theming">theme the app</Link> and start
        using it.
      </Font>
      <ArticleNavigation next={{ label: 'Theming', path: '/theming' }} />
    </article>
  );
}
