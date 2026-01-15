# Specification - Project Maintenance and Optimization

## Overview
This track focuses on the foundational maintenance of the personal website. It includes updating the project's dependencies to ensure security and performance, optimizing visual assets to improve page load times, and auditing post metadata for consistency and SEO.

## Objectives
- **Modernize Dependencies:** Update Ruby gems and any other project dependencies to their latest stable versions.
- **Image Optimization:** Convert existing heavy image formats (JPG/PNG) to WebP where appropriate to reduce asset size without sacrificing quality.
- **Metadata Audit:** Ensure all Jekyll posts have consistent YAML front matter (tags, categories, descriptions) for better site navigation and SEO.
- **Build Validation:** Ensure the site builds correctly and passes existing HTML-Proofer checks after all changes.

## Success Criteria
- All Ruby gems are updated and the site builds without errors.
- Key images are converted to WebP and correctly referenced in posts/layouts.
- Every post in `_posts/` has a consistent set of required front matter fields.
- GitHub Actions build passes successfully.
