# Hannah Yawt's Portfolio

A responsive, multi-page portfolio built with semantic HTML and a shared stylesheet.

## Accessibility results

The reported accessibility results across all published HTML pages are **0 WAVE Errors**, **0 WAVE Contrast Errors**, and an **AIM Score of 10/10**.

## Accessibility fixes

- Added a keyboard-visible skip link and semantic header, navigation, main, and footer landmarks on each portfolio page so keyboard and assistive-technology users can move through the site efficiently.
- Added descriptive page titles, a language declaration, labeled page sections, and an accessible name for the main navigation so each page's purpose and structure are clear to assistive technology.
- Kept descriptive alternative text for the profile photograph so visitors who cannot see the image receive its meaningful content.
- Added visible keyboard-focus indicators and a reduced-motion preference so keyboard users can locate their focus and motion-sensitive visitors can avoid unnecessary animation.
- Used the shared dark-green, mint, and off-white palette with WCAG-compliant text and control contrast so content remains legible across the site.
- Added four required contact fields with explicit matching labels and IDs, autocomplete attributes, and a fieldset with a descriptive legend so the form controls are clearly named and grouped.
- Added custom `novalidate` form validation with inline polite live-region errors, `aria-describedby` associations, and `aria-invalid` state updates so errors are announced and connected to the fields without browser tooltips.
- Kept clear instructions that the static contact form does not send or store submissions and provided an email link as the working contact method.

## WebAIM Contrast Results

The following foreground/background pairs use the hex values from `style.css`; ratios are rounded to two decimal places using the WCAG relative-luminance contrast formula.

| Use | Foreground | Background | Contrast ratio | WCAG status |
| --- | --- | --- | ---: | --- |
| Body text | `#F2F7F4` | `#07120F` | 17.69:1 | Pass AAA |
| Headings | `#F2F7F4` | `#10211B` | 15.45:1 | Pass AAA |
| Mint accents and links | `#8FFFC0` | `#10211B` | 13.73:1 | Pass AAA |
| Primary button label | `#07120F` | `#8FFFC0` | 15.72:1 | Pass AAA |
| Form error messages | `#FFB4AB` | `#172B23` | 8.82:1 | Pass AAA |

## Visual design and Gestalt principles

- **Proximity:** I grouped each project's or interest's heading, description, and related link inside one card, and used consistent spacing to show that they belong together.
- **Similarity:** I repeated the same card shape, mint accents, typography, and navigation treatment across pages so related content is easy to recognize.
- **Common region:** I used bordered panels to distinguish the hero, contact details, and form from the page background while keeping the palette consistent.

## Contact form

The contact form provides client-side validation and accessible error feedback, but this static GitHub Pages site has no server or form service and does not send or store submissions; use the email link on the contact page to reach me.
