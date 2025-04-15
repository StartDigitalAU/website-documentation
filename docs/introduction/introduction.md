---
sidebar_position: 3
---

# Understanding Timber
Timber is essentially a templating engine that splits the HTML and display away from the PHP logic & data. Thus, allowing our PHP files to prepare the data to be added to the timber context to be retrieved & outputted in our TWIG files eg. `<h1>{{ post.title }}</h1>`

## Task 1: Create a template to protect pages from non-admin users
1. Create the files `template-admin-only.php` in the theme root, and `template-admin-only.twig` in `/templates`
2. In the `template-admin-only.php` ensure you have the following to render out the template:

```php
use Timber\Timber;

global $post;

$context = Timber::context();
$timberPost = Timber::get_post($post->ID);
$context['post'] = $timberPost;

// Check if admin & redirect if not logic

$templates = array("template-admin-only.twig");
Timber::render($templates, $context);
```

3. In the `template-admin-only.twig` ensure you have the following to be able to build out the pages using the page builder:

```twig
{% extends 'base.twig' %}

{% block content %}
	{% for block in post.meta('page_builder') %}
		<div data-block="{{ block.acf_fc_layout }}">
			{{ include('blocks/' ~ block.acf_fc_layout ~ '.twig', ignore_missing = true) }}
		</div>
	{% endfor %}
{% endblock %}
```
4. Test & ensure it works when logged in & not logged in

## Task 2: Understanding the page builder blocks

1. Install ACF Pro & sync the page builder fields JSON

2. Create a layout within the page builder field group & name it `Image text`, be sure to add a `WYSIWYG field` & `image field` to that layout block

3. In `/templates/blocks` create a file called `image_text.twig`, ensuring it matches the name of the layout within the page builder ACF field group

4. Within `image_text.twig` create a simple text image 2-column layout & demonstrate retrieving the text & image within twig by using:

```twig
<>
    <div>{{ block.name_of_wysiwyg_field }}</div>
    <img src="{{ get_image(block.name_of_image_field).src }}" alt="{{ block.name_of_image_field.alt }}" />
</>
```