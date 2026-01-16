# Implementation Plan - Project Maintenance and Optimization

## Phase 1: Environment & Dependencies [checkpoint: c041d74]
Goal: Ensure the project is running on the latest stable dependencies.

- [x] Task: Audit and update Ruby gems in `Gemfile` and `tale.gemspec` [commit: 59e8d43]
    - [x] Run `bundle update`
    - [x] Verify local build with `bundle exec jekyll build`
- [x] Task: Conductor - User Manual Verification 'Environment & Dependencies' (Protocol in workflow.md)

## Phase 2: Asset Optimization [checkpoint: 828dc97]
Goal: Improve site performance by optimizing images.

- [x] Task: Convert existing post images in `assets/img/posts/` to WebP format (Verified already WebP)
- [x] Task: Update image references in `_posts/` to point to the new WebP versions (Verified already WebP)
- [x] Task: Optimize profile image and favicons [commit: 9f74d13]
- [x] Task: Conductor - User Manual Verification 'Asset Optimization' (Protocol in workflow.md)

## Phase 3: Metadata Consistency
Goal: Audit and fix post metadata for SEO and site features.

- [x] Task: Define a standard set of required YAML front matter fields (title, date, tags, categories, description) [commit: 10d35e6]
- [x] Task: Audit all files in `_posts/` and add missing fields [commit: 10d35e6]
- [x] Task: Ensure all tags and categories follow a consistent naming convention [commit: 10d35e6]
- [x] Task: Run final build and validation with HTML-Proofer [commit: 10d35e6]
- [x] Task: Conductor - User Manual Verification 'Metadata Consistency' (Protocol in workflow.md)
