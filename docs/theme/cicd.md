---
sidebar_position: 5
---

# CI/CD Pipeline
Our WordPress theme development uses GitHub Actions to automate the deployment process. This ensures consistent, reliable deployments and reduces manual intervention.

## Overview of Our GitHub Actions Workflow
Our CI/CD pipeline is configured in a GitHub Actions workflow file that handles building and deploying our WordPress themes. Here's a detailed breakdown of how it works:

### Trigger Events
The pipeline is triggered by:

- Pushes to the main branch
- Manual triggers via GitHub's workflow dispatch feature
```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:
 ```

### Build Process
The workflow runs on an Ubuntu environment and performs the following steps:

1. Code Checkout : Retrieves the latest code from the repository
2. Build Project : Executes a series of commands to prepare the project for deployment:
   - Installs PHP dependencies via Composer
   - Navigates to the theme directory
   - Installs Node.js dependencies
   - Builds production-ready assets (CSS, JavaScript)
   - Finalizes PHP dependencies
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: 🚚 Get latest code
        uses: actions/checkout@v2

      - name: 🔨 Build Project
        run: |
          composer install --no-scripts
          cd wp-content/themes/startdigital
          npm install
          npm run build
          composer install
 ```

### Deployment
After building, the workflow deploys the project to our hosting environment:

1. FTP Deployment : Uses the FTP-Deploy-Action to securely transfer files to our hosting server
2. Configuration : Connects to our server using FTPS protocol with credentials stored as GitHub Secrets
```yaml
      - name: 📂 Sync files
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with:
          server: ftp.perth.agency
          username: perthage
          password: ${{ secrets.DEV_FTP_PASS }}
          server-dir: directory/
          protocol: ftps # Required for some hosts.
 ```

## Benefits of Our CI/CD Pipeline
- Consistency : Every deployment follows the same process
- Automation : Reduces manual deployment steps and human error
- Security : Sensitive credentials are stored as GitHub Secrets
- Efficiency : Only changed files are transferred to the server
- Reliability : Failed builds are caught before deployment
## Setting Up for New Projects
When setting up a new project, you'll need to:

1. Configure the appropriate server-dir path in the workflow file
2. Add the FTP password as a repository secret named DEV_FTP_PASS or PROD_FTP_PASS depending on the environment
3. Ensure the repository has the correct branch structure (typically main for production)
This automated pipeline significantly streamlines our development workflow and ensures that our websites are deployed efficiently and reliably.