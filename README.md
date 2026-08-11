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
