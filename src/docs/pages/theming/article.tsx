import ArticleNavigation from '@/docs/components/ArticleNavigation';
import { Font } from '@/lib';
import { Link } from '../router';

export default function ThemingArticle() {
  return (
    <article id="theming_article">
      <Font
        scale="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        To customize the display of components, define CSS variables using the
        theme utility tool to simplify the process.
      </Font>
      <Font
        scale="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        Select the utility function based on the type of render, provide your
        brand or interface's primary color as a hexadecimal value, specify the
        color scheme as{' '}
        <Font as="var" scale="code" textColor="secondary">
          light
        </Font>{' '}
        or{' '}
        <Font as="var" scale="code" textColor="secondary">
          dark
        </Font>
        , and assign font face names for titles, content, and codes (optional).
      </Font>
      <Font
        scale="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        Once you've done that, the utility will take care of the rest.
      </Font>
      <Font
        scale="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlockEnd: 'xl' }}
      >
        Server-side render
      </Font>
      <Font
        scale="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        For this example, we will consider using the Next.js framework for its
        familiarity.
      </Font>
      <Font
        scale="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        It is best to define these variables within the{' '}
        <Font as="code" scale="code" textColor="secondary">
          RootLayout
        </Font>{' '}
        using the HTML element style tag and calling the function{' '}
        <Font as="code" scale="code" textColor="secondary">
          applyThemeOnHtmlStyleTag
        </Font>
        .
      </Font>
      <pre className="js">
        <code>
          <var>import</var> &#123; applyThemeOnHtmlStyleTag &#125;{' '}
          <var>from</var> <samp>'@paulobrandao/react-material/theme'</samp>;
        </code>
        <code>
          <i>// in the RootLayout component</i>
        </code>
        <code>
          <var>return</var> (
        </code>
        <code className="sp-1">
          &lt;<var>html</var>
        </code>
        <code className="sp-2">
          <b>style</b>=&#123;<b>applyThemeOnHtmlStyleTag</b>(&#123;
        </code>
        <code className="sp-3">
          seedColor: <samp>'#4285F4'</samp>,
        </code>
        <code className="sp-3">
          colorScheme: <samp>'dark'</samp>,
        </code>
        <code className="sp-3">font: &#123;</code>
        <code className="sp-4">
          title: <samp>'"Roboto"'</samp>,
        </code>
        <code className="sp-4">
          content: <samp>'"Roboto"'</samp>,{' '}
          <i>// Web font name needs double quotes</i>
        </code>
        <code className="sp-4">
          code: <samp>'Courier New'</samp>,{' '}
          <i>// Web safe font names won't need double quotes</i>
        </code>
        <code className="sp-3">&#125;,</code>
        <code className="sp-2">&#125;)&#125;</code>
        <code className="sp-1">&gt;</code>
        <code className="sp-2">
          &lt;<var>body</var>&gt;&#123;<ins>children</ins>&#125;&lt;/
          <var>body</var>&gt;
        </code>
        <code className="sp-1">
          &lt;/<var>html</var>&gt;
        </code>
        <code>);</code>
      </pre>
      <Font
        scale="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Client-side
      </Font>
      <Font
        scale="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        Here, call the{' '}
        <Font as="code" scale="code" textColor="secondary">
          applyTheme
        </Font>{' '}
        within the{' '}
        <Font as="samp" scale="code" textColor="secondary">
          (main|index).tsx
        </Font>{' '}
        file.
      </Font>
      <pre className="js">
        <code>
          <var>import</var> &#123; applyTheme &#125; <var>from</var>{' '}
          <samp>'@paulobrandao/react-material/theme'</samp>;
        </code>
        <code>
          <i>// before createRoot</i>
        </code>
        <code>
          <b>applyTheme</b>(&#123;
        </code>
        <code className="sp-1">
          seedColor: <samp>'#4285F4'</samp>,
        </code>
        <code className="sp-1">
          colorScheme: <samp>'light'</samp>,
        </code>
        <code className="sp-1">font: &#123;</code>
        <code className="sp-2">
          title: <samp>'"Roboto"'</samp>,
        </code>
        <code className="sp-2">
          content: <samp>'"Roboto"'</samp>,
        </code>
        <code className="sp-2">
          code: <samp>'Courier New'</samp>,
        </code>
        <code className="sp-1">&#125;,</code>
        <code>&#125;);</code>
      </pre>
      <Font
        scale="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlock: 'md' }}
      >
        All done! It's time to make use of the{' '}
        <Link to="/components">components</Link>.
      </Font>
      <ArticleNavigation
        prev={{ label: 'Introduction', path: '/' }}
        next={{ label: 'Components', path: '/components' }}
      />
    </article>
  );
}
