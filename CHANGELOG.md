# Changelog

## [0.9.0] - 2025-10-

### Added

- Grid (WIP)
- Error icon for invalid form fields
- Focus styles for `:focus-visible`
- `themes/default/_semantic.css` for semantic color tokens

### Changed

- **Breaking:** Rename theme switcher
- **Breaking:** Rename `themes/default/_light-dark.css` to `_components.css`
- **Breaking:** Rename the selection tokens from `--focus-*` to `--selection-*`
- Even out the color scales to 20% steps
- Register the icon custom properties with `@property`
- Move the `color-scheme` declarations into `_reset.css`
- Sort the imports in `ratata.css` by layer
- Split `content/_forms.css` into one file per concern
- Use `text-decoration-line` instead of the `text-decoration` shorthand
- Generate the neutral scale from `--color-neutral-900`
- Mix the color scales with `--black` and `--white` instead of the keywords
- Reveal visually hidden content while a child has focus
- Use requestIdleCallback() to load low-priority modules

### Fixed

- Link color on hover in dark mode
- Alert colors in both color schemes
- The accordion icon ignored `prefers-reduced-motion`

### Removed

- **Breaking:** Card component
- **Breaking:** Textmedia component

## [0.8.0] - 2024-10-27

### Added

- Code styles (keyboard input, sample output)
- Description list
- Image related styles (WIP)
- Form validation styles
- Textmedia component (WIP)

### Changed

- **Breaking:** Use light-dark() color function instead media feature query

### Removed

- **Breaking:** Share button

## [0.7.0] - 2024-05-29

### Added

- CSS cascade layers
- List styles

### Changed

- Use CSS `min` instead of `padding` on the `.container` class

## [0.6.0] - 2024-05-14

### Added

- Button with icon style
- Share button

### Changed

- **Breaking:** Use `details` and `summary` instead of JavaScript for accordions

## [0.5.0] - 2024-04-21

### Changed

- Inline/ block quotation

### Added

- Theme switcher

### Removed

In this release, some additional styles have been removed to keep the boilerplate small.

- **Breaking:** Zepra striped table style
- **Breaking:** Vertically aligned card
- **Breaking:** Card with an icon

## [0.4.0] - 2024-03-20

### Changed

- File input button color

### Added

- Breadcrumb

### Fixed

- Fix the print stylesheet to display the URL after links

## [0.3.0] - 2024-03-14

### Changed

- **Breaking:** CSS custom properties for table

### Added

- Narrow container width
- Table style variant
- Code styles
- File input styles

## [0.2.1] - 2024-03-11

### Fixed

- Add missing changes to the changelog

## [0.2.0] - 2024-03-10

### Changed

- **Breaking:** CSS custom properties for colors

### Added

- Container layout
- Table styles
- Card element

### Removed

- Autoprefixer

## [0.1.0] - 2024-02-27

_First release._
