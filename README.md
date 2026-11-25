# Ratata

More web standards, less bullshit.

Ratata is an HTML, CSS, and JavaScript boilerplate using just HTML, CSS, and JavaScript. Its main focus is on web standards, accessibility, and performance. [Check it out on CodePen](https://codepen.io/deoostfrees/pen/XWGWbEy).

## Table of Contents

- [Getting Started](#getting-started)
- [Layers](#layers)
- [Variables](#variables)
- [Theme](#theme)
- [Icons](#icons)
- [Credits, Attribution, and Inspiration](#credits-attribution-and-inspiration)
- [Browser Support](#browser-support)

## Getting Started

- [Download the latest release](https://github.com/deoostfrees/Ratata/releases). You may need to copy and paste the contents of the unzipped `Ratata-0.x.x/src` folder into your project directory.
- Install Ratata from GitHub using [npm](https://www.npmjs.com): `npm install ratata`. You may need to copy and paste the contents of the `node_modules/ratata/src` folder into your project directory.

### Layers

Ratata declares its cascade layers up front, so the order does not depend on the order of the imports:

```css
@layer reset, vendor, config, content, layout, components, utilities, print;
```

`vendor` is intentionally empty and reserved for third-party CSS. Because it is declared here, a stylesheet you assign to it keeps its place in the order: your theme in `config` still overrides its tokens, and `content`, `layout` and `components` still override its rules. A layer you declare yourself later would end up above all of these instead.

Inside `content`, the form styles sit in two sublayers: `controls` for the single control files, `states` for the validity rules that have to win over them. Rules written directly in a layer beat its sublayers, so form styles of your own do not have to outweigh either of them.

Your own CSS needs no layer at all. Unlayered styles beat every layer, so a plain `:root { ... }` of yours always wins over Ratata's tokens.

### Variables

The file `_variables.css` in the `src` folder contains variables for all layout, spacing, and typography used in Ratata.

```css
:root {
  /**
   * Spacing
   *
   */
  --scroll-padding-top: calc((100 / 18) * 1rem);
  --scroll-padding-bottom: 0;

  /**
   * Focus
   *
   */
  --focus-outline-offset: calc((2 / 18) * 1rem);
  --focus-outline-style: solid;
  --focus-outline-width: calc((2 / 18) * 1rem);

  /**
   * Layout
   *
   */
  --container-max-width: calc((1848 / 18) * 1rem);
  --container-small-max-width: calc((660 / 18) * 1rem);
  --container-padding-inline: calc((24 / 18) * 1rem);

  /* Grid */
  --grid-gutter-vertical: calc((24 / 18) * 1rem);
  --grid-gutter-horizontal: calc((24 / 18) * 1rem);

  /**
   * Typography
   *
   */
  --base-font-family: -apple-system, blinkmacsystemfont, 'Segoe UI', helvetica, arial, sans-serif;
  --base-font-size: calc((18 / 16) * 1rem);
  --base-font-weight: 400;
  --base-line-height: calc((31 / 18));

  /* b, strong */
  --bold-font-weight: 700;

  /* small */
  --small-font-size: calc((16 / 18) * 1rem);
  --small-line-height: calc((27 / 16));

  /* Blockquote */
  --blockquote-font-size: calc((23 / 18) * 1rem);
  --blockquote-line-height: calc((38 / 23));

  /* Code */
  --code-font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', menlo, consolas, 'DejaVu Sans Mono', monospace;
  --code-font-weight: 400;

  /* Headings */
  --headings-font-family: var(--base-font-family);
  --headings-font-weight: 700;

  /* h1 */
  --h1-font-size: calc((47 / 18) * 1rem);
  --h1-line-height: calc((73 / 47));

  /* h2 */
  --h2-font-size: calc((37 / 18) * 1rem);
  --h2-line-height: calc((58 / 37));

  /* h3 */
  --h3-font-size: calc((29 / 18) * 1rem);
  --h3-line-height: calc((47 / 29));

  /* h4 */
  --h4-font-size: calc((23 / 18) * 1rem);
  --h4-line-height: calc((38 / 23));

  /* h5 */
  --h5-font-size: calc((18 / 18) * 1rem);
  --h5-line-height: calc((31 / 18));

  /* h6 */
  --h6-font-size: calc((16 / 18) * 1rem);
  --h6-line-height: calc((27 / 16));
}
```

### Theme

The default color scheme for light and dark mode lives in `src/css/themes/default/` and is split into three tiers:

- `_colors.css` holds the raw palette: primitives, the neutral and hue scales, and the brand color. Change `--primary-color` to recolor the whole theme, or `--color-neutral-900` for the greys.
- `_semantic.css` says what a color means: surfaces, text, borders, accent and status. Dark mode is declared here with `light-dark()`, once per role instead of once per component.
- `_components.css` says what a component uses, for example `--button-primary-background-color`. It references the semantic tier, never the palette.

Override any token from your own stylesheet. Ratata declares its tokens inside a cascade layer, so an unlayered `:root { ... }` of yours always wins.

### Icons

Icon paths are declared in `src/css/_icons.css`. The custom properties are registered with `@property` on purpose: a relative `url()` in an unregistered custom property would be resolved against the file that consumes it, in a registered one against the file that declares it.

## Credits, Attribution, and Inspiration

- [Stephanie Eckles](https://thinkdobecreate.com)' [Pure CSS Custom Checkbox Style](https://moderncss.dev/pure-css-custom-checkbox-style/)
- [Stephanie Eckles](https://thinkdobecreate.com)' [Pure CSS Custom Styled Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/)
- [Manuel Matuzović](https://matuzo.at)'s [Removing list styles without affecting semantics](https://matuzo.at/blog/2023/removing-list-styles-without-affecting-semantics)
- [David Bushell](https://dbushell.com)'s [CSS Button Styles You Might Not Know](https://dbushell.com/2024/03/10/css-button-styles-you-might-not-know/)
- [Adrian Roselli](https://adrianroselli.com)'s [Progressively Enhanced HTML Accordion](https://adrianroselli.com/2023/08/progressively-enhanced-html-accordion.html)

## Browser Support

Ratata supports the latest, stable releases of all major browsers.
