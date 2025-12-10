import { Content, Font } from '@/lib';

export default function Major1Minor1Patch1({
  isActive,
}: Readonly<{ isActive?: boolean }>) {
  if (!isActive) return null;

  return (
    <Content
      as="article"
      flexbox={{ direction: 'column', gap: 'md' }}
      spacing={{ padding: 'lg' }}
    >
      <Font variant="display-medium" as="h1">
        1.1.1
      </Font>
      <Font variant="body-large" as="p">
        This patch release focuses on improving test coverage, enhancing
        documentation, and refining navigation components with better
        responsiveness and animations.
      </Font>
      <Font variant="headline-large" as="h2">
        🧪 Testing Enhancements
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>
          <strong>Comprehensive Test Coverage:</strong> Added extensive unit
          tests across multiple components and hooks:
          <Content
            as="ul"
            flexbox={{ direction: 'column', gap: 'md' }}
            spacing={{ paddingInline: 'xl' }}
          >
            <li>
              <strong>IconButton:</strong> 107+ new test cases covering all
              variants, sizes, widths, toggle states, and accessibility features
            </li>
            <li>
              <strong>Input:</strong> Enhanced test suite with 62+ additional
              tests for variant behavior, error states, fullWidth, and active
              state validation
            </li>
            <li>
              <strong>CanonicalLayout:</strong> New tests for element rendering
              via <code>as</code> prop
            </li>
            <li>
              <strong>CardMedia:</strong> Added tests for default rendering and
              aspect ratio classes
            </li>
            <li>
              <strong>useMediaQuery:</strong> Extended coverage with tests for
              large (1200-1399px) and extra-large (≥1400px) screen sizes, plus
              medium portrait orientation
            </li>
            <li>
              <strong>useScrollBehavior:</strong> Added test for fallback to
              <code>document.body</code> when element selector returns null
            </li>
            <li>
              <strong>Theme utilities:</strong> Comprehensive tests for
              <code>applyThemeColorScheme</code> and{' '}
              <code>toggleThemeColorScheme</code>
              with and without callbacks, plus font preservation
            </li>
          </Content>
        </li>
      </Content>
      <Font variant="headline-large" as="h2">
        ✨ Component Enhancements
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>
          <strong>NavRail:</strong> Added <code>variant</code> prop with
          'standard' and 'modal' options
          <Content
            as="ul"
            flexbox={{ direction: 'column', gap: 'md' }}
            spacing={{ paddingInline: 'xl' }}
          >
            <li>
              Modal variant displays as a popover with{' '}
              <code>popover="manual"</code>
            </li>
            <li>Automatic expansion when variant is 'modal'</li>
            <li>Enhanced JSDoc documentation</li>
            <li>Complete test coverage for variant behaviors</li>
          </Content>
        </li>
        <li>
          <strong>SideSheet:</strong> Improved styling with better layout and
          presentation
          <Content
            as="ul"
            flexbox={{ direction: 'column', gap: 'md' }}
            spacing={{ paddingInline: 'xl' }}
          >
            <li>
              Removed unused <code>ref</code> prop from internal Content
              component
            </li>
            <li>Enhanced animations and transitions</li>
          </Content>
        </li>
      </Content>
      <Font variant="headline-large" as="h2">
        📚 Documentation Improvements
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>
          <strong>Release Notes Page:</strong> Enhanced with responsive
          SideSheet for better note handling
        </li>
        <li>
          <strong>Navigation:</strong> Added Changelog link to main navigation
          and rail
        </li>
        <li>
          <strong>Code Examples:</strong> Replaced traditional code blocks with
          Snippet component in Home and Theming articles for improved
          readability
        </li>
        <li>
          <strong>Component Visibility:</strong> Improved toggles for navigation
          components
        </li>
      </Content>
      <Font variant="headline-large" as="h2">
        🎨 Styling Refinements
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>
          <strong>NavRail:</strong> Enhanced styles with improved responsiveness
          and animations
          <Content
            as="ul"
            flexbox={{ direction: 'column', gap: 'md' }}
            spacing={{ paddingInline: 'xl' }}
          >
            <li>New keyframe animations for smooth transitions</li>
            <li>Better mobile and desktop layout support</li>
          </Content>
        </li>
        <li>
          <strong>NavLink:</strong> Minor styling improvements
        </li>
        <li>
          <strong>SideSheet:</strong> Adjusted styles for better presentation
        </li>
      </Content>
      <Font variant="headline-large" as="h2">
        🔧 Infrastructure & Configuration
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>
          <strong>Node.js:</strong> Updated to version 20.x in CI/CD workflow
        </li>
        <li>
          <strong>NPM:</strong> Added registry authentication for publishing
        </li>
        <li>
          <strong>Package:</strong> Updated homepage URL for correct
          documentation link
        </li>
        <li>
          <strong>Dependencies:</strong> General dependency updates
        </li>
      </Content>
      <Font variant="headline-large" as="h2">
        📊 Code Changes Summary
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>34 files modified </li>
        <li>~941 insertions</li>
        <li>~226 deletions</li>
        <li>
          Significantly improved test coverage across components and hooks
        </li>
        <li>Enhanced component prop typing and documentation</li>
      </Content>
      <Font variant="headline-large" as="h2">
        🐛 Bug Fixes
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>
          Fixed homepage URL in package.json to point to correct documentation
        </li>
        <li>Removed unused ref prop from Content component</li>
        <li>Corrected styling issues in navigation components</li>
      </Content>
      <Font variant="body-large" as="p">
        This release strengthens the library's quality through comprehensive
        testing while adding valuable enhancements to navigation components. The
        improvements ensure better reliability and developer experience.
      </Font>
    </Content>
  );
}
