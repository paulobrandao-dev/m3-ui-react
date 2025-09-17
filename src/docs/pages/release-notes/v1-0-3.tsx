import { Content, Font } from '@/lib';

export default function Major1Minor0Patch3({
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
        1.0.3
      </Font>
      <Font variant="body-large" as="p">
        This is a major update with a complete project restructuring, focusing
        on improved organization, documentation, and testing.
      </Font>
      <Font variant="headline-large" as="h2">
        Key Changes:
      </Font>
      <Content
        as="ul"
        flexbox={{ direction: 'column', gap: 'md' }}
        spacing={{ paddingInline: 'xl' }}
      >
        <li>
          <strong>Project Renaming:</strong> The project has been renamed from
          <code>react-material</code> to <code>m3-ui-react</code>.
        </li>
        <li>
          <strong>New Documentation:</strong> A new documentation website has
          been added, built with Vite.
        </li>
        <li>
          <strong>Project Structure:</strong> <code>The src</code> directory has
          been reorganized into <code>docs</code>,<code>lib</code>, and{' '}
          <code>styles</code> for better separation of concerns.
        </li>
        <li>
          <strong>Build Process:</strong> The build process has been updated to
          use Vite, with new configurations for the documentation and icon sets.
        </li>
        <li>
          <strong>Components:</strong>
          <Content as="ul" spacing={{ paddingInline: 'xl' }}>
            <li>
              <strong>New:</strong> <code>CanonicalLayout</code>,{' '}
              <code>CardMedia</code>,<code>Content</code>, <code>Font</code>,{' '}
              <code>ListItem</code>, <code>Menu</code>, <code>Switch</code>, and{' '}
              <code>Tooltip</code>.
            </li>
            <li>
              <strong>Removed:</strong> <code>Box</code> and{' '}
              <code>Navdrawer</code>
            </li>
            <li>
              <strong>Renamed:</strong> <code>Navbar</code> to{' '}
              <code>NavBar</code>, <code>Navlink</code>
              to <code>NavLink</code>, and <code>Navrail</code> to{' '}
              <code>NavRail</code>.
            </li>
          </Content>
        </li>
        <li>
          <strong>Hooks:</strong>
          <Content as="ul" spacing={{ paddingInline: 'xl' }}>
            <li>
              <strong>New:</strong> <code>useMediaQuery</code> and{' '}
              <code>useScrollBehavior</code>.
            </li>
            <li>
              <strong>Moved:</strong> <code>useDialogControl</code> and
              <code>usePopoverControl</code> have been moved to{' '}
              <code>src/lib/hooks</code>.
            </li>
          </Content>
        </li>
        <li>
          <strong>Icons:</strong> The icon sets (Outlined, Rounded, Sharp) have
          been moved to <code>src/lib/icon</code>.
        </li>
        <li>
          <strong>Styling:</strong> The SCSS files have been reorganized into a
          more modular structure, and new stylesheets have been added for the
          new components.
        </li>
        <li>
          <strong>Testing:</strong> Tests are now co-located with the components
          they test, and new tests have been added for the new components.
        </li>
        <li>
          <strong>Dependencies:</strong> The <code>package.json</code> file has
          been updated with the new name, version, and dependencies.
        </li>
      </Content>
      <Font variant="body-large" as="p">
        Overall, this update represents a significant improvement in the
        project's architecture and maintainability, providing a solid foundation
        for future development.
      </Font>
    </Content>
  );
}
