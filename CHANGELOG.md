# CHANGELOG

## 🏷️ 1.1.0

This release introduces significant enhancements to the M3 UI React library, including new components, improved documentation, enhanced hooks, and refined styling. The version marks a major update focused on developer experience and component completeness.

### 🎉 New Features

#### New Components

- **SideSheet:** A comprehensive new component with full unit test coverage.
- **Chip:** Form component with tests and complete styling
- **Input:** Text field component with comprehensive test suite and styling
- **Select:** Dropdown selection component with enhanced documentation and 165 unit tests

#### Enhanced Components

- **NavLink:** Added disabled state support with updated styling
- **Appbar:** Expanded with detailed documentation, props table, and usage examples
- **Button:** Enhanced with comprehensive documentation and better props documentation
- **CanonicalLayout:** Improved with detailed documentation and supporting panels
- **Card:** Added `CardMedia` support with extended documentation
- **Icon:** Refined with detailed prop descriptions and usage examples
- **Divider:** Enhanced styling and component updates
- **Switch:** Improved with better styling and props

### 📚 Documentation Improvements

- Complete component documentation pages for `Appbar`, `Button`, `CanonicalLayout` and `Card`
- New `useDialogControl` hook documentation with article and examples
- New Hooks Page providing overview of available hooks
- Added Release Notes page to track version history
- Refactored documentation components with improved navigation
- Added supporting panels and navigation actions for better UX
- Enhanced `README` with improved clarity and formatting
- Created comprehensive Snippet Component for displaying code examples

### 🪝 Enhanced Hooks

- **useDialogControl:** Refactored and enhanced with updated documentation and tests
- **usePopoverControl:** Improved with additional test cases
- **useScrollBehavior:** Extended with test cases for comprehensive coverage
- **useThemeColors:** New hook with test cases and snapshot testing
- **useMediaQuery:** Enhanced with improved responsive behavior

### 🎨 Styling Enhancements

- New `_keyframes.scss` with animation definitions
- Expanded `_mixin.scss` with utility mixins
- New component styles: `_chip.scss`, `_controls.scss`, `_text-field.scss`, `_side-sheet.scss`
- Updated icon button styles
- Improved `Appbar` styling and consistency

### 🔧 Infrastructure & Tooling

- Added GitHub Actions workflow for automated library publishing and documentation deployment
- Enhanced test infrastructure with comprehensive test coverage
- Improved project configuration files
- Added VSCode extension recommendations

### 📊 Code Changes Summary

- 134 files modified
- ~9,291 insertions
- ~787 deletions
- Significantly expanded test coverage
- Enhanced component prop typing throughout

### 🐛 Bug Fixes

- Fixed spacing property in SupportingNav component
- Corrected export statement in useDialogControl article
- Fixed missing isFluid prop in CanonicalLayout components
- Cleaned up imports in Snippet component

### 🚀 Quality Improvements

- Comprehensive test suite additions across all components and hooks
- Better type definitions and JSDoc documentation
- Improved code organization and refactoring
- Enhanced CI/CD pipeline with GitHub Actions

This release represents a major step forward in component completeness, documentation quality, and overall developer experience. The library is now production-ready with comprehensive components covering common UI patterns following the Material 3 design system.

## 🏷️ 1.0.3

This is a major update with a complete project restructuring, focusing on improved organization, documentation, and testing.

### Key Changes

- **Project Renaming:** The project has been renamed from `react-material` to `m3-ui-react`.
- **New Documentation:** A new documentation website has been added, built with Vite.
- **Project Structure:** The `src` directory has been reorganized into `docs`,`lib`, and `styles` for better separation of concerns.
- **Build Process:** The build process has been updated to use Vite, with new configurations for the documentation and icon sets.
- **Components:**
  - **New:** `CanonicalLayout`, `CardMedia`, `Content`, `Font`, `ListItem`, `Menu`, `Switch`, and `Tooltip`.
  - **Removed:** `Box` and `Navdrawer`
  - **Renamed:** `Navbar` to `NavBar`, `Navlink`to `NavLink`, and `Navrail` to `NavRail`.
- **Hooks:**
  - **New:** `useMediaQuery` and `useScrollBehavior`.
  - **Moved:** `useDialogControl` and `usePopoverControl` have been moved to `src/lib/hooks`.
- **Icons:** The icon sets (`Outlined`, `Rounded`, `Sharp`) have been moved to `src/lib/icon`.
- **Styling:** The SCSS files have been reorganized into a more modular structure, and new stylesheets have been added for the new components.
- **Testing:** Tests are now co-located with the components they test, and new tests have been added for the new components.
- **Dependencies:** The package.json file has been updated with the new name, version, and dependencies.

Overall, this update represents a significant improvement in the project's architecture and maintainability, providing a solid foundation for future development.
