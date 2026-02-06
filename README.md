# Personal Website

This repo contains the code for my personal website, [radamczyk.com](https://radamczyk.com).

This website was built using the Jekyll theme as base with lots of custom SCSS [Tale](https://github.com/chesterhow/tale).

## Local Setup

### Prerequisites

- Ruby `3.1.3` (see `.ruby-version`)
- Bundler `2.x`

If your shell is using the macOS system Ruby, install and use Ruby `3.1.3` first:

```bash
/opt/homebrew/opt/ruby-install/bin/ruby-install ruby 3.1.3 --install-dir ~/.rubies/ruby-3.1.3 --cleanup --no-install-deps
export PATH="$HOME/.rubies/ruby-3.1.3/bin:$PATH"
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
