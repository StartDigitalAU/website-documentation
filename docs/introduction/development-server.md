---
sidebar_position: 4
---

# Pushing to a Development Server

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