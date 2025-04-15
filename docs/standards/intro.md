---
sidebar_position: 1
---

# Development Standards

## WordPress Development Standards

### HTML Standards
- Use semantic HTML elements
- Follow proper nesting structure
- Use lowercase element names
- Use descriptive class names
- Use descriptive IDs
- Use alt attributes for images
- Use title attributes for links
- Use `aria-*` attributes for accessibility

### CSS Standards
- Use Tailwind CSS for styling
- Follow BEM (Block, Element, Modifier) naming convention
- Use variables for colors, fonts, etc.
- Use responsive design principles

### Object-Oriented PHP Structure
- All PHP code should follow object-oriented principles
- Classes should have a single responsibility
- Use namespaces to organize code (e.g., `namespace App\Core`)
- Implement interfaces for contracts between classes
- Use abstract classes for shared functionality

### File Organization
- One class per file with matching filename (e.g., `class Post_Type` in `Post_Type.php`)
- Group related files in directories (Models, Controllers, etc.)
- Separate business logic from presentation
- Follow PSR-4 autoloading standards
- Use composer for dependency management

### WordPress-Specific Practices
- Use hooks (actions/filters) instead of modifying core files
- Register scripts and styles properly with `wp_enqueue_script/style`
- Sanitize inputs and escape outputs (`sanitize_*` and `esc_*` functions)
- Use prepared statements for database queries
- Implement nonces for form submissions

## Timber & Twig Standards

### Component-Based Structure
- Break templates into reusable components
- Pass only required data to components
- Document component parameters with comments

### Twig Best Practices
- Use includes for reusable components: `{% include 'components/button.twig' with {text: 'Submit'} %}`
- Leverage Twig namespaces for organization
- Keep logic in PHP, use Twig for presentation only
- Implement blocks for template inheritance

## JavaScript Standards

### Code Structure
- Code should be well-structured and maintainable
- Use ES6+ features (arrow functions, destructuring, etc.)
- Implement early returns to reduce nesting
- Use descriptive variable names
- Use comments for complex logic
- Use `const` for immutable variables
- Use `let` for mutable variables
- Use ES6+ features (arrow functions, destructuring, etc.)
- Implement early returns to reduce nesting
```javascript
// Good
function validateUser(user) {
  if (!user) return false;
  if (!user.name) return false;
  return true;
}

// Avoid
function validateUser(user) {
  if (user) {
    if (user.name) {
      return true;
    }
  }
  return false;
}
```