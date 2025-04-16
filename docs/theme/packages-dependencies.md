---
sidebar_position: 4
---

# Packages & Dependencies

Our WordPress theme development relies on a carefully selected set of packages and dependencies to streamline development, optimize performance, and enhance functionality. Here's an overview of the key technologies we use:

## Build System

Our build system is configured to handle both development and production environments efficiently:

### NPM Scripts

We use a comprehensive set of NPM scripts to manage our build process:

- `npm run dev` : Starts the development environment with file watching and browser sync
- `npm run build` : Creates optimized production assets

### JavaScript Build Tools

- esbuild : A blazingly fast JavaScript bundler that significantly reduces build times
- cross-env : Ensures environment variables work consistently across platforms
- concurrently : Allows multiple npm scripts to run simultaneously

## CSS Processing

We use PostCSS with several plugins to process our CSS:

- postcss : Transforms CSS with JavaScript plugins
- postcss-import : Enables @import rules in CSS
- postcss-nested : Provides nesting capabilities similar to Sass
- autoprefixer : Automatically adds vendor prefixes
- cssnano : Minifies CSS for production

## Frontend Libraries

Several key libraries enhance our frontend capabilities:

- Tailwind CSS : Our utility-first CSS framework
- @tailwindcss/typography : Provides sensible typography defaults
- GSAP : Advanced animation library for smooth, performant animations
- Swiper : Feature-rich slider library for complex carousel needs

## Development Tools

- Browser-Sync : Provides live reloading and device synchronization
- Prettier : Ensures consistent code formatting
- prettier-plugin-twig-melody : Extends Prettier to format Twig templates

## PHP Dependencies (via Composer)

### Timber

Timber is installed via Composer and serves as our templating engine, allowing us to use Twig templates in WordPress. This creates a clean separation between PHP logic and presentation markup.

### Twig

Twig is a modern template engine for PHP that comes bundled with Timber. It provides a syntax that is both powerful and elegant, making our templates more readable and maintainable.

## Workflow Integration

Our package.json configuration is designed to create a seamless development experience:

1. During development ( npm run dev ), files are watched for changes and automatically compiled
2. Browser-Sync provides instant feedback by refreshing the browser when files change
3. For production ( npm run build ), assets are minified and optimized
   This comprehensive toolset allows us to build modern, performant WordPress themes while maintaining a clean, efficient development workflow.
