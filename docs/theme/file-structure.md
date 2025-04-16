---
sidebar_position: 3
---

# File Structure

The Start Digital WordPress theme follows a structured organization to maintain clean code separation and improve maintainability.

```

startdigital/
├── Core Theme Files
│   ├── 404.php               # 404 error page template
│   ├── author.php            # Author archive template
│   ├── footer.php            # Footer template
│   ├── functions.php         # Theme functions and setup
│   ├── header.php            # Header template
│   ├── index.php             # Main template file
│   ├── page.php              # Page template
│   ├── search.php            # Search results template
│   ├── single.php            # Single post template
│   └── style.css             # Main stylesheet with theme information
│
├── Configuration
│   ├── .gitignore            # Git configuration
│   ├── composer.json         # PHP dependencies
│   ├── esbuild.config.js     # JavaScript bundler config
│   ├── package.json          # Node.js dependencies
│   ├── postcss.config.cjs    # PostCSS configuration
│   └── tailwind.config.cjs   # Tailwind CSS configuration
│
├── Assets
│   ├── css/                  #  Development CSS stylesheets
│   │   └── ...
│   │
│   ├── js/                   # Development JavaScript files
│   │   └── ...
│   │
│   └── static/               # Static assets (images, fonts, etc.)
│       ├── style.css         # Compiled stylesheet
│       ├── site.js           # Compiled JavaScript file
│       └── ...
│
├── Templates
│   └── templates/            # Twig template files
|       │           
│       ├── blocks/           # Custom ACF blocks
│       │   ├──...
│       │
│       ├── icons/            # SVG icons transformed into Twig components  
│       │   ├──...
│       │
│       ├── partials/         # Twig partials for reusability
│       │   ├──...
│       │
│       ├── page.twig         # Base template for pages
│       └── ...
|
├── PHP Components
│   ├── helpers/              # Helper functions
│   │   └── acf-mods/         # Advanced Custom Fields modifications
│   │       └── ...
│   │
│   └── php/                  # PHP classes and functions
│       └── ...
│
├── ACF Configuration
│   └── acf-json/             # ACF field group JSON files
│       └── acf_fields.json
│
└── Documentation
├── LICENSE                   # License information
├── README.md                 # Project documentation
└── humans.txt                # Credits and technology colophon
```
