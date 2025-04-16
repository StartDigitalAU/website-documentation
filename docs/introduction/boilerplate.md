---
sidebar_position: 2
---

# Cloning the Boilerplate Theme & Installing WordPress

This guide will walk you through setting up our WordPress boilerplate theme for local development.

## Prerequisites

Before starting, ensure you have:

- Laravel Herd installed and running
- Composer installed globally
- Node.js (v18+) and npm installed
- Git configured with your credentials

## Getting Started

### Step 1: Clone the Boilerplate Theme

1. Open your terminal
2. Navigate to your project directory:
   ```bash
   cd ~/Developer
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/StartDigitalAU/boilerroom introductorytask
   ```
3. Navigate into the project:
   ```bash
   cd introductorytask
   ```

### Step 2: Install PHP Dependencies

1. Install Composer dependencies:
   ```bash
   composer install
   ```
   This will install all required PHP packages, WordPress core files and the theme's node dependencies.

### Step 3: Database Setup

1. Open TablePlus or your preferred database client
2. Create a new MySQL database:
   - Name: introductorytask (or your project name)
   - Charset: utf8mb4
   - Collation: utf8mb4_unicode_ci
3. Update your .env file with database credentials:
   ```bash
   DB_NAME=introductorytask
   DB_USER=root
   DB_PASSWORD=password
   DB_HOST=localhost
   ```

### Step 4: Configure Security Keys

1. Visit the [Roots Salts Generator](https://roots.io/salts.html)
2. Copy the generated security keys
3. Paste them into your .env file, replacing the placeholder values

### Step 5: WordPress Installation

1. Start your local server using Laravel Herd
2. Open your browser and navigate to:
   ```bash
   http://introductorytask.test
   ```
3. Complete the WordPress installation wizard:
   - Site Title: Your Project Name
   - Username: Choose a secure username
   - Password: Generate a strong password
   - Email: Your work email address

### Step 6: Start Development Server

1. Navigate to the theme directory:
   ```bash
   cd wp-content/themes/startdigital
   ```
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   This will compile assets and watch for changes.

### Step 7: Set Up Version Control

1. Create a new GitHub repository
2. Update the remote URL:
   ```bash
   git remote set-url origin https://github.com/StartDigitalAU/introductory-task
   ```
 
3. Verify the new remote:
   ```bash
   git remote -v
   ```
4. Push your initial commit:
   ```bash
   git push -u origin main
   ```

## Boilerroom npx Command
Now in the future you can create a new project & database by running the following command in your terminal:
```bash
npx create-boilerroom-app <project-name>
```