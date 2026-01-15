# Implementation Plan - Project Maintenance and Optimization

## Phase 1: Environment & Dependencies
Goal: Ensure the project is running on the latest stable dependencies.

- [~] Task: Audit and update Ruby gems in `Gemfile` and `tale.gemspec`
    - [ ] Run `bundle update`
    - [ ] Verify local build with `bundle exec jekyll build`
- [ ] Task: Conductor - User Manual Verification 'Environment & Dependencies' (Protocol in workflow.md)

## Phase 2: Asset Optimization
Goal: Improve site performance by optimizing images.

- [ ] Task: Convert existing post images in `assets/img/posts/` to WebP format
- [ ] Task: Update image references in `_posts/` to point to the new WebP versions
- [ ] Task: Optimize profile image and favicons
- [ ] Task: Conductor - User Manual Verification 'Asset Optimization' (Protocol in workflow.md)

## Phase 3: Metadata Consistency
Goal: Audit and fix post metadata for SEO and site features.

- [ ] Task: Define a standard set of required YAML front matter fields (title, date, tags, categories, description)
- [ ] Task: Audit all files in `_posts/` and add missing fields
- [ ] Task: Ensure all tags and categories follow a consistent naming convention
- [ ] Task: Run final build and validation with HTML-Proofer
- [ ] Task: Conductor - User Manual Verification 'Metadata Consistency' (Protocol in workflow.md)
