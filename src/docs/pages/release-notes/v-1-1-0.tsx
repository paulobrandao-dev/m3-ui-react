import { Content, Font } from '@/lib';

export default function Major1Minor1Patch0({
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
        1.1.0
      </Font>
      <Font variant="body-large" as="p">
        This release introduces significant enhancements to the M3 UI React
        library, including new components, improved documentation, enhanced
        hooks, and refined styling. The version marks a major update focused on
        developer experience and component completeness.
      </Font>
      <Font variant="headline-large" as="h2">
        🎉 New Features
      </Font>
      <Font variant="headline-small" as="h3">
        New Components
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>
          <strong>SideSheet:</strong> A comprehensive new component with full
          unit test coverage.
        </li>
        <li>
          <strong>Chip:</strong> Form component with tests and complete styling
        </li>
        <li>
          <strong>Input:</strong> Text field component with comprehensive test
          suite and styling
        </li>
        <li>
          <strong>Select:</strong> Dropdown selection component with enhanced
          documentation and 165 unit tests
        </li>
      </Content>
      <Font variant="headline-small" as="h3">
        Enhanced Components
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>
          <strong>NavLink:</strong> Added disabled state support with updated
          styling
        </li>
        <li>
          <strong>Appbar:</strong> Expanded with detailed documentation, props
          table, and usage examples
        </li>
        <li>
          <strong>Button:</strong> Enhanced with comprehensive documentation and
          better props documentation
        </li>
        <li>
          <strong>CanonicalLayout:</strong> Improved with detailed documentation
          and supporting panels
        </li>
        <li>
          <strong>Card:</strong> Added CardMedia support with extended
          documentation
        </li>
        <li>
          <strong>Icon:</strong> Refined with detailed prop descriptions and
          usage examples
        </li>
        <li>
          <strong>Divider:</strong> Enhanced styling and component updates
        </li>
        <li>
          <strong>Switch:</strong> Improved with better styling and props
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
          Complete component documentation pages for <strong>Appbar</strong>,{' '}
          <strong>Button</strong>, <strong>CanonicalLayout</strong> and{' '}
          <strong>Card</strong>
        </li>
        <li>
          New <strong>useDialogControl</strong> hook documentation with article
          and examples
        </li>
        <li>
          New <strong>Hooks Page</strong> providing overview of available hooks
        </li>
        <li>
          Added <strong>Release Notes</strong> page to track version history
        </li>
        <li>Refactored documentation components with improved navigation</li>
        <li>Added supporting panels and navigation actions for better UX</li>
        <li>Enhanced README with improved clarity and formatting</li>
        <li>
          Created comprehensive Snippet Component for displaying code examples
        </li>
      </Content>
      <Font variant="headline-large" as="h2">
        🪝 Enhanced Hooks
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>
          <strong>useDialogControl:</strong> Refactored and enhanced with
          updated documentation and tests
        </li>
        <li>
          <strong>usePopoverControl:</strong> Improved with additional test
          cases
        </li>
        <li>
          <strong>useScrollBehavior:</strong> Extended with test cases for
          comprehensive coverage
        </li>
        <li>
          <strong>useThemeColors:</strong> New hook with test cases and snapshot
          testing
        </li>
        <li>
          <strong>useMediaQuery:</strong> Enhanced with improved responsive
          behavior
        </li>
      </Content>
      <Font variant="headline-large" as="h2">
        🎨 Styling Enhancements
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>
          New <strong>_keyframes.scss</strong> with animation definitions
        </li>
        <li>
          Expanded <strong>_mixin.scss</strong> with utility mixins
        </li>
        <li>
          New component styles:{' '}
          <strong>
            _chip.scss, _controls.scss, _text-field.scss, _side-sheet.scss
          </strong>
        </li>
        <li>Updated icon button styles</li>
        <li>Improved Appbar styling and consistency</li>
      </Content>
      <Font variant="headline-large" as="h2">
        🔧 Infrastructure & Tooling
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>
          Added <strong>GitHub Actions workflow</strong> for automated library
          publishing and documentation deployment
        </li>
        <li>Enhanced test infrastructure with comprehensive test coverage</li>
        <li>Improved project configuration files</li>
        <li>Added VSCode extension recommendations</li>
      </Content>
      <Font variant="headline-large" as="h2">
        📊 Code Changes Summary
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>
          <strong>134 files</strong> modified
        </li>
        <li>
          <strong>~9,291</strong> insertions
        </li>
        <li>
          <strong>~787</strong> deletions
        </li>
        <li>Significantly expanded test coverage</li>
        <li>Enhanced component prop typing throughout</li>
      </Content>
      <Font variant="headline-large" as="h2">
        🐛 Bug Fixes
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>Fixed spacing property in SupportingNav component</li>
        <li>Corrected export statement in useDialogControl article</li>
        <li>Fixed missing isFluid prop in CanonicalLayout components</li>
        <li>Cleaned up imports in Snippet component</li>
      </Content>
      <Font variant="headline-large" as="h2">
        🚀 Quality Improvements
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>
          Comprehensive test suite additions across all components and hooks
        </li>
        <li>Better type definitions and JSDoc documentation</li>
        <li>Improved code organization and refactoring</li>
        <li>Enhanced CI/CD pipeline with GitHub Actions</li>
      </Content>
      <Font variant="body-large" as="p">
        This release represents a major step forward in component completeness,
        documentation quality, and overall developer experience. The library is
        now production-ready with comprehensive components covering common UI
        patterns following the Material 3 design system.
      </Font>
    </Content>
  );
}
