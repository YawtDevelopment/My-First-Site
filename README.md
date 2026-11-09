# Hannah Yawt's Portfolio

A responsive, multi-page portfolio built with semantic HTML and a shared stylesheet.

## Accessibility improvements

- Added a keyboard-visible skip link on every page so visitors can bypass repeated navigation.
- Added descriptive page titles, a language declaration, and a main-content landmark to improve page context and navigation.
- Added a distinct accessible name to the main navigation and labeled page sections to clarify their purpose to assistive technology.
- Kept the profile photograph's alternative text descriptive and ensured the visual content has a text equivalent.
- Used a shared dark-green, mint, and off-white palette; foreground and background pairs were selected for WCAG AA contrast, including body text, links, muted text, and button labels.
- Added clear keyboard focus indicators and a reduced-motion preference rule for visitors navigating without a mouse or who prefer less motion.
- Replaced decorative, animated backgrounds with a calm solid background so they do not obscure content or distract from reading.
- Added explicit labels, required-field instructions, autocomplete tokens, and associated inline error descriptions to every contact form field.
- Added a fieldset-free contact form because the name, email, and message fields are separate controls rather than a related choice group; inline errors set `aria-invalid`, are connected by `aria-describedby`, and move focus to the first invalid field after submission.

## Visual design and Gestalt principles

- **Proximity:** I grouped each project and interest's heading, description, and related link inside one card, and used consistent spacing to show that they belong together.
- **Similarity:** I repeated the same card shape, mint accents, typography, and navigation treatment across pages so related content is easy to recognize.
- **Common region:** I used bordered panels to distinguish the hero, contact details, and form from the page background while keeping the palette consistent.

## Validation notes

The four HTML pages are `index.html`, `projects.html`, `about.html`, and `contact.html`. Please run the WAVE browser extension on each published page and the WebAIM Contrast Checker on any palette changes before submission; this repository update cannot provide a live WAVE scan report. The color tokens are centralized at the top of `style.css` to make contrast review and palette updates straightforward.

The contact form provides client-side validation and accessible error feedback, but this static GitHub Pages site has no server or form service and does not send or store submissions; the email link is provided as the working contact method.
