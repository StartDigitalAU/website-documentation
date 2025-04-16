---
sidebar_position: 3
---

# Pushing to a Production Server

This guide walks you through the process of deploying a WordPress website to a production server, including backing up your development site, configuring hosting, setting up DNS, and establishing GitHub deployment workflows.


1. **Backup Development Site**: 
   - Install a backup plugin, [AkeebaBackup](https://www.akeeba.com/products/akeeba-backup-wordpress.html), and create a backup of the development site as a ZIP archive. Save it to your computer.

2. **Create New Hosting within Synergy (if required)**:
   - Upload the website ZIP to the necessary directory and extract it.
   - Create a MySQL® database and user with full permissions.
   - Create FTP details for hosting or use the default hosting FTP account (found within service details on Synergy).

3. **Point Domain DNS to Production Server**:
   - Ensure the domain is pointing directly to the new hosting. If not, set up your local DNS to temporarily point to the hosting to view the website.
      - **Modify Hosts File**:
       1. Open Terminal.
       2. Run the following command to edit the hosts file:
          ```bash
          sudo nano /etc/hosts
          ```
       3. Enter your password when prompted.
       4. Add a new line with the server's IP address followed by the domain name, e.g.:
          ```
          123.456.789.012 domain.com
          ```
       5. Save the changes by pressing `CTRL + O`, then press `Enter`.
       6. Exit the editor by pressing `CTRL + X`.
       7. Flush the DNS cache to apply changes:
          ```bash
          sudo dscacheutil -flushcache
          ```

4. **Continue with WordPress Setup**:
    - Run through the WordPress setup. If using AkeebaBackup, go to `https://domain/installation` and complete the setup.
   - Save the login credentials to Bitwarden.
   - The site will now be set up on new hosting, but you need to link your repository to the hosting for quick deploys.

5. **Configure GitHub Repository**:
   - Paste the FTP password inside `SETTINGS > SECRETS > ACTIONS` in GitHub.
   - Name the secret `PROD_FTP_PASS`.

6. **Prepare Codebase on Local Computer**:
   - If not on the main branch already, switch to the main branch and merge the develop branch into main.
   - Go to your `deploy.yaml` file inside `.github > workflows`.
   - Add the correct FTP details and use `{{ secrets.PROD_FTP_PASS }}` for the password.
   - Ensure the correct directory is added (must end with `/`).
   - Commit to the main branch and view the progress of the commit within the GitHub Actions tab. Resolve any errors if necessary.
   - Once completed successfully, the codebase will be connected to the hosting.

6. **Configure Hosting**:
   - Go to the file manager within the hosting and configure the newly generated `.env` file with the database credentials.