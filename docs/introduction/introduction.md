# How We Create Websites
This task will help you get up to speed on our wordpress theme boilerplate 

## Setting up your environment

1. Create a developer folder under user
2. Download, install & configure [Trae](https://www.trae.ai/home), [Laravel Herd](https://herd.laravel.com/) & [TablePlus](https://tableplus.com/)
3. Install the following extensions for Trae/VSCode: Tailwind CSS IntelliSense, Twig Language 2, PHP Intelephense, Auto Close Tag & Auto Rename Tag

## Pulling down the theme & installing wordpress

1. Clone this theme into your project folder and rename it `git clone https://github.com/StartDigitalAU/boilerroom introductorytask`

2. Run `composer install`

3. Create a new database and name it the same as your project

4. Copy the ENV hashes from the [Roots website](https://roots.io/salts.html) and paste is into your `.env` file

5. Visit your site in the browser and complete the installation steps

6. Start the development server by navigating to the wp-content/themes/startdigital theme and running `npm run dev`

7. Create a new github repository & set the set the remote URL to it `git remote set-url origin https://github.com/StartDigitalAU/introductory-task` & verify the new remote URL with `git remote -v`

8. Push to the new origin
## Understanding Timber

Timber is essentially a templating engine that splits the HTML and display away from the PHP logic & data. Thus, allowing our PHP files to prepare the data to be added to the timber context to be retrieved & outputted in our TWIG files eg. `<h1>{{ post.title }}</h1>`

### Task 1: Create a template to protect pages from non-admin users
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

### Task 2: Understanding the page builder blocks

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
## Pushing to a development server

1. Login to [ventraip](https://ventraip.com.au/) & navigate to the cpanel for `perth.agency`

2. Create a new domain eg. `intro.startdigital.com.au`, untick `Share document root` and change the document root to something simple like `intro`

3. Login to cloudflare, navigate to the DNS for startdigital.com.au & create an A record that points to the servers IP address, ensure the name is the same as the domain created within cpanel

4. Go in to `MySQL® Databases` within cpanel and create a new database, database user & add that user to the database

5. Go in to the `File Manager` within cpanel and find the `intro` folder and extract the [wordpress core](https://wordpress.org/download/) within the folder

6. Navigate to the domain eg. `intro.startdigital.com.au` and set up wordpress as per normal

7. Install the plugin WP Migrate on both the local site and development site

8. Click Migrate, Find & Replace 'http://' with 'https://'

9. Select all besides themes and migrate across

10. Edit the `deploy.yaml` Within your `.github/workflows`, by changing the server-dir to the domain document root we created before eg `intro/`

11. Within ventraip click manage on the `perth.agency` and find the username and password, enter the username in to the `deploy.yaml` and then in the girhub repo, go to settings > Secrets & Variables > Repository Secret & create a `DEV_FTP_PASS` secret containing the ftps password

12. Push the changes to github and monitor the action to see if it built on the server