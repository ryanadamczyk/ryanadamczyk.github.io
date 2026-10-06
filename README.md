# Personal Website

This repo contains the code for my personal website, [radamczyk.com](https://radamczyk.com).

This website was built using the Jekyll theme as base with lots of custom SCSS [Tale](https://github.com/chesterhow/tale).

## Local Setup

### Prerequisites

- Ruby `4.0.6` (see `.ruby-version`)
- Bundler `2.x`

On macOS with Homebrew, install Ruby and ensure Homebrew's bin directory appears
before `/usr/bin` in your shell `PATH`:

```bash
brew install ruby
export PATH="/opt/homebrew/bin:$PATH"
```

Confirm the active interpreter matches the project before installing dependencies:

```bash
ruby --version
```

### Install dependencies

```bash
bundle install
```

### Run locally

```bash
bundle exec jekyll serve --livereload
```

Site will be available at `http://127.0.0.1:4000`.

### Build for production

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## Content and images

Article summaries use the `description` in each post's front matter. Keep these
descriptions specific to the project and its demonstrated results. Historical
scope notices remain in the articles instead of taking over the listings.

The post template shows the original publication date and `last_modified_at`
when present. Use `last_reviewed_at` only after actually checking the technical
instructions; a copy or image update is not a technical revalidation.

Use `_includes/article_image.html` for article screenshots, with descriptive
alt text and the asset's intrinsic width and height. It adds lazy loading and
asynchronous decoding. The Power Automate overview is an editable SVG at
`assets/img/posts/pa_flow.svg`; it summarizes the documented flow rather than
claiming a live deployment or verified capacity enforcement.

The social image is a 1200 × 630 JPEG. Favicons are generated from the square
`assets/img/favicons/favicon.svg` monogram: 16 × 16, 32 × 32, an ICO with multiple
sizes, and a 180 × 180 Apple touch icon.

## Security and analytics

The site's CSP is defined in `_config.yml` and emitted immediately after the
charset declaration, before any scripts or styles. The meta policy restricts
resources, embedded frames, plugins, and form destinations. It intentionally
omits `frame-ancestors`, which browsers ignore in a meta policy. See the
[CSP specification](https://www.w3.org/TR/CSP3/#meta-element).

GitHub Pages serves static files and does not provide a repository setting for
custom HTTP response headers. `_headers`, `.htaccess`, and additional meta tags
cannot enforce anti-framing protection on this deployment. To finish that
protection, configure a reverse proxy/CDN or a host that supports response
headers to send the following **HTTP headers** on HTML responses:

```text
Content-Security-Policy: frame-ancestors 'none';
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

The small HTTP CSP above works alongside the existing meta CSP; multiple
policies are enforced together. Keep the meta policy until a delivery-level
policy also carries its resource restrictions. Verify the deployed response
with `curl -I https://www.radamczyk.com/` after configuring the proxy. These
headers are recommendations for the delivery layer, not headers activated by
this repository.

Only the deploy job receives `pages: write` and `id-token: write`; the build job
has read permissions. Production analytics loads from a local initializer,
which checks Global Privacy Control and Do Not Track before contacting Google
Analytics. Google signals and advertising personalization signals are disabled
in that initializer. The footer links to `/privacy/` for disclosure of analytics,
hosting, fonts, and contact behavior.

The Analytics origins in the CSP follow Google's guidance for
[Analytics without Ads features](https://developers.google.com/tag-platform/security/guides/csp#google_analytics).
