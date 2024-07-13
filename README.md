# Ratata

More web standards, less bullshit.

Ratata is a HTML, CSS and JavaScript boilerplate using just HTML, CSS and JavaScript. It's main focus is on web standards, accessibility and performance. [Check it out on CodePen](https://codepen.io/deoostfrees/pen/XWGWbEy).

## Table of contents

- [Getting Started](#getting-started)
- [Credits, Attribution and Inspiration](#credits-attribution-and-inspiration)
- [Browser Support](#browser-support)

## Getting Started

- [Download the latest release](https://github.com/deoostfrees/Ratata/releases). You may need to copy and paste the contents of the unzipped `Ratata-0.x.x/src` folder into your project directory.
- Install Ratata from GitHub using [npm](https://www.npmjs.com): `npm install ratata`. You may need to copy and paste the contents of the `node_modules/ratata/src` folder into your project directory.

### Variables

The file `_variables.css` in the `src` folder contains variables for all layout, spacing and typography used in Ratata.

```css
:root {
  /**
   * Spacing
   *
   */
  --scroll-padding-top: calc((100 / 18) * 1rem);
  --scroll-padding-bottom: 0;

  /**
   * Layout
   *
   */
  --container-max-width: calc((1848 / 18) * 1rem);
  --container-small-max-width: calc((660 / 18) * 1rem);
  --container-padding-inline: calc((24 / 18) * 1rem);

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
}
```

A default color scheme for light and dark mode can be found in `src/themes/`.

## Credits, Attribution and Inspiration

- [Stephanie Eckles](https://thinkdobecreate.com)' [Pure CSS Custom Checkbox Style](https://moderncss.dev/pure-css-custom-checkbox-style/)
- [Stephanie Eckles](https://thinkdobecreate.com)' [Pure CSS Custom Styled Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/)
- [Manuel Matuzović](https://matuzo.at)'s [Removing list styles without affecting semantics](https://matuzo.at/blog/2023/removing-list-styles-without-affecting-semantics)
- [David Bushell](https://dbushell.com)'s [CSS Button Styles You Might Not Know](https://dbushell.com/2024/03/10/css-button-styles-you-might-not-know/)
- [Adrian Roselli](https://adrianroselli.com)'s [Progressively Enhanced HTML Accordion](https://adrianroselli.com/2023/08/progressively-enhanced-html-accordion.html)

## Browser Support

Ratata supports the latest, stable releases of all major browsers.
