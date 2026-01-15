# Product Guidelines - Personal Website

## Content & Voice
- **Tone:** Professional and authoritative. The writing should be clear, objective, and precise, particularly when documenting technical procedures or security configurations.
- **Link Management:** Use descriptive link labels that provide context about the destination (avoid generic phrases like "click here").

## Technical Documentation Standards
- **Standardized Structure:** Use consistent headers (H2, H3), bulleted lists, and numbered steps to ensure tutorials are easy to scan and follow.
- **Snippet Integrity:** Code snippets must be complete, accurately formatted using Jekyll's syntax highlighting, and verified for "copy-paste" usability.
- **Visual Context:** Complement complex technical instructions with high-quality screenshots and diagrams to improve comprehension.
- **References:** Where applicable, include a 'References' or 'Further Reading' section at the end of technical guides to cite sources and provide additional depth.

## Design & Aesthetics
- **Theme Fidelity:** Adhere strictly to the minimalist, typography-driven aesthetic of the "Tale" theme.
- **User Experience:** Prioritize a distraction-free reading environment. External links should open in a new tab to maintain the user's current session on the site.

## Development & Maintenance
- **SCSS Architecture:** Maintain a modular SCSS structure, following the established pattern of organizing styles into specific partials within `_sass/tale/`.
- **Front Matter Consistency:** Every post must include comprehensive YAML front matter, including `title`, `date`, `tags`, and `categories`, to support proper indexing and navigation.
- **Performance:** Optimize all visual assets (images, webp) for the web. SCSS should be compressed during the build process to ensure fast page loads.
