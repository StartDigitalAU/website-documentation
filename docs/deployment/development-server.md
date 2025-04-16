---
sidebar_position: 1
---

# Pushing to a Development Server

 Follow these steps to create a new subdomain, configure DNS settings, set up the database, and deploy your WordPress site. This process ensures a smooth transition from local development to a staging environment where you can test your site before pushing to production.


1. **Login to VentraIP**: 
   - Access [VentraIP](https://ventraip.com.au/) and navigate to the cPanel for `perth.agency`.

2. **Create a New Domain**: 
   - In cPanel, create a new domain, e.g., `sitename.startdigital.com.au`.
   - Untick `Share document root` and set the document root to a simple name like `sitename`.

3. **Configure DNS in Cloudflare**: 
   - Log in to Cloudflare and navigate to the DNS settings for startdigital.com.au.
   - Create an A record with the name as `sitename` and the IPv4 address as the IP address listed on cPanel.
   - Ensure the name matches the domain created within cPanel and proxy is turned off.

4. **Set Up MySQL Database**: 
   - In cPanel, go to `MySQL® Databases`.
   - Create a new database, a database user, and add the user to the database with all permissions.

5. **Upload WordPress Core**: 
   - Access the `File Manager` in cPanel, locate the `sitename` folder.
   - Upload and extract the [WordPress core](https://wordpress.org/download/) into this folder.

6. **Install WordPress**: 
   - Navigate to the domain, e.g., `sitename.startdigital.com.au`, and proceed with the standard WordPress setup.

7. **Install WP Migrate Plugin**: 
   - Install the WP Migrate plugin on both the local site and the development site.

8. **Migrate Content**: 
   - On the local site, navigate to Tools > WP Migrate and select 'push'.
   - Create a find and replace rule for 'http://' with 'https://'.
   - Select all options except themes and proceed with the migration.

9. **Edit GitHub Workflow**: 
   - Modify the `deploy.yaml` file within your `.github/workflows` directory.
   - Change the `server-dir` to the domain document root created earlier, e.g., `sitename/`.

10. **Configure FTP Credentials**: 
    - In VentraIP, click manage on `perth.agency` to find the username and password.
    - Enter the username into the `deploy.yaml`.
    - In the GitHub repository, go to Settings > Secrets & Variables > Repository Secret, and create a `DEV_FTP_PASS` secret containing the FTP password.

11. **Deploy Changes**: 
    - Push the changes to GitHub and monitor the GitHub Actions to ensure the deployment is successful on the server.