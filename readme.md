# subalaris.github.io

This project uses [Gulp](https://gulpjs.com/) for automating tasks like compiling SCSS, concatenating JavaScript, and live-reloading the browser.

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) comes with Node.js

## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **(Optional) Install Gulp CLI globally:**

   ```bash
   npm install --global gulp-cli
   ```

## Usage

- **Run Gulp tasks:**

  If Gulp CLI is installed globally:
  ```bash
  gulp
  ```

  Or use npx (recommended):
  ```bash
  npx gulp
  ```

This will:
- Compile SCSS files from `src/sass/` to `css/main.css`
- Concatenate JS files from `src/js/` to `js/main.js`
- Start a local server and watch for changes in SCSS, JS, and HTML files
- Automatically reload the browser on changes

## Project Structure

```
src/
  sass/        # SCSS source files
  js/          # JavaScript source files
css/           # Compiled CSS output
js/            # Concatenated JS output
*.html         # HTML files
gulpfile.js    # Gulp configuration
package.json   # Project metadata and dependencies
```

## Troubleshooting

If you see `gulp: command not found`, use `npx gulp` or install Gulp CLI globally.
