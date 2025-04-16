---
sidebar_position: 4
---

# Pushing to a Development Server

This guide walks through the process of setting up a development server environment using VentraIP, configuring DNS with Cloudflare, and establishing automated deployments with GitHub Actions.

1. **Login to VentraIP**:
   - Access [VentraIP](https://ventraip.com.au/) and navigate to the cPanel for `perth.agency`.

2. **Create a New Domain**:
   - In cPanel, create a new domain, e.g., `intro.startdigital.com.au`.
   - Untick `Share document root` and set the document root to a simple name like `intro`.

3. **Configure DNS in Cloudflare**:
   - Log in to Cloudflare and navigate to the DNS settings for startdigital.com.au.
   - Create an A record that points to the server's IP address. Ensure the name matches the domain created within cPanel.

4. **Set Up MySQL Database**:
   - In cPanel, go to `MySQL® Databases`.
   - Create a new database, a database user, and add the user to the database.

5. **Upload WordPress Core**:
   - Access the `File Manager` in cPanel, find the `intro` folder, and extract the [WordPress core](https://wordpress.org/download/) within the folder.

6. **Install WordPress**:
   - Navigate to the domain, e.g., `intro.startdigital.com.au`, and proceed with the standard WordPress setup.

7. **Install WP Migrate Plugin**:
   - Install the WP Migrate plugin on both the local site and the development site.

8. **Migrate Content**:
   - Click Migrate, and create a find and replace rule for 'http://' with 'https://'.
   - Select all options except themes and proceed with the migration.

9. **Edit GitHub Workflow**:
   - Modify the `deploy.yaml` file within your `.github/workflows` directory.
   - Change the `server-dir` to the domain document root created earlier, e.g., `intro/`.

10. **Configure FTP Credentials**:
    - In VentraIP, click manage on `perth.agency` to find the username and password.
    - Enter the username into the `deploy.yaml`.
    - In the GitHub repository, go to Settings > Secrets & Variables > Repository Secret, and create a `DEV_FTP_PASS` secret containing the FTP password.

11. **Deploy Changes**:
    - Push the changes to GitHub and monitor the GitHub Actions to ensure the deployment is successful on the server.