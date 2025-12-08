import ArticleNavigation from '@/docs/shared/ArticleNavigation';
import { Font } from '@/lib';
import { Link } from '../../router';
import { Snippet } from '@/docs/shared/Snippet';

export default function ThemingArticle() {
  return (
    <article id="theming_article">
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        To customize the display of components, define CSS variables using the
        theme utility tool to simplify the process.
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        Select the utility function based on the type of render, provide your
        brand or interface's primary color as a hexadecimal value, specify the
        color scheme as{' '}
        <Font as="var" variant="code" textColor="secondary">
          light
        </Font>{' '}
        or{' '}
        <Font as="var" variant="code" textColor="secondary">
          dark
        </Font>
        , and assign font face names for titles, content, and codes (optional).
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        Once you've done that, the utility will take care of the rest.
      </Font>
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlockEnd: 'xl' }}
      >
        Server-side render
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        For this example, we will consider using the Next.js framework for its
        familiarity.
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        It is best to define these variables within the{' '}
        <Font as="code" variant="code" textColor="secondary">
          RootLayout
        </Font>{' '}
        using the HTML element style tag and calling the function{' '}
        <Font as="code" variant="code" textColor="secondary">
          applyThemeOnHtmlStyleTag
        </Font>
        .
      </Font>
      <Snippet
        lang="js"
        code={`
import { applyThemeOnHtmlStyleTag } from 'm3-ui-react/theme';
// in the RootLayout component
return (
  <html
    style={applyThemeOnHtmlStyleTag({
      seedColor: '#4285F4',
      colorScheme: 'dark',
      font: {
        title: '"Roboto"',
        content: '"Roboto"', // Web font name needs double quotes
        code: 'Courier New', // Web safe font names won't need double quotes
      },
    })}
  >
    <body>{children}</body>
  </html>
);
        `}
      />
      <Font
        variant="headline-large"
        as="h2"
        spacing={{ paddingInline: 'lg', paddingBlock: 'xl' }}
      >
        Client-side
      </Font>
      <Font
        variant="body-large"
        as="p"
        spacing={{ paddingInline: 'lg', marginBlockEnd: 'md' }}
      >
        Here, call the{' '}
        <Font as="code" variant="code" textColor="secondary">
          applyTheme
        </Font>{' '}
        within the{' '}
        <Font as="samp" variant="code" textColor="secondary">
          (main|index).tsx
        </Font>{' '}
        file.
      </Font>
      <Snippet
        lang="js"
        code={`
import { applyTheme } from 'm3-ui-react/theme';
// before createRoot
applyTheme({
  seedColor: '#4285F4',
  colorScheme: 'light',
  font: {
    title: '"Roboto"',
    content: '"Roboto"',
    code: 'Courier New',
  },
});
        `}
      />
      <Font
        variant="body-large"
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
