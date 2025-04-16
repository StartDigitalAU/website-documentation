---
sidebar_position: 2
---

# Theme Framework

Our WordPress theme framework is built on a modern stack of technologies designed to enhance development efficiency, maintainability, and performance.

## Timber & Twig

We use [Timber](https://timber.github.io/docs/) as our templating engine, which allows us to implement the [Twig](https://twig.symfony.com/) templating language in WordPress. This separation of concerns keeps our PHP logic separate from our HTML markup, resulting in:

- Cleaner, more readable templates
- Improved code organization
- Enhanced maintainability
- Better collaboration between developers and designers

Timber transforms WordPress development by allowing us to write templates like this:

```twig
<h1>{{ post.title }}</h1>
<div class="content">{{ post.content }}</div>
```

## Advanced Custom Fields Pro

We leverage ACF Pro to create flexible, reusable components throughout our sites. ACF Pro enables:

- Creation of modular page builder systems
- Reusable Twig components that can be included on any page
- Flexible content fields for dynamic layouts
- Custom block types that editors can easily use
- Consistent data structures across the entire site
  These components are then rendered through our Timber/Twig templates, allowing for clean separation between data and presentation.

## Tailwind CSS

For styling, we leverage Tailwind CSS , a utility-first CSS framework that enables rapid UI development without leaving your HTML. Benefits include:

- Faster development cycles
- Consistent design system
- Reduced CSS file size through PurgeCSS
- Highly customizable design tokens
- Mobile-first responsive design

## Build Tools

### esbuild

We use esbuild as our JavaScript bundler and asset compiler. esbuild provides:

- Extremely fast build times (10-100x faster than webpack)
- Modern JavaScript support (ES6+)
- Built-in minification
- Tree shaking to eliminate unused code
- TypeScript and JSX support
  Our build process optimizes all assets for production, ensuring fast load times and excellent performance scores.

## Development Workflow

This combination of technologies creates a powerful development environment that balances developer experience with end-user performance. The workflow typically involves:

1. Writing PHP logic in WordPress template files
2. Creating ACF field groups for component data
3. Building Twig templates for reusable components
4. Styling with Tailwind utility classes
5. Adding interactivity with JavaScript
6. Building assets with esbuild
   This framework provides a solid foundation for creating modern, performant WordPress themes while maintaining clean, maintainable code.
