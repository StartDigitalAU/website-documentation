---
sidebar_position: 1
---

# Set Up Your Developer Environment

This guide will help you configure your development environment for wordpress development.

## Create a Developer Directory

```bash
mkdir -p ~/Developer
cd ~/Developer
```

## Essential Tools Installation

### 1. Code Editor

- Trae/VSCode : Download [Trae](https://www.trae.ai/home) or [VSCode](https://code.visualstudio.com/)
- Recommended Extensions:
  - Tailwind CSS IntelliSense
  - Twig Language 2
  - PHP Intelephense
  - Auto Close Tag
  - Auto Rename Tag
  - ESLint
  - Prettier
  - GitLens

### 2. Local Development Environment

- [Laravel Herd](https://herd.laravel.com/) : Install Herd
  - Configure PHP versions (8.1+ recommended)
  - Ensure the memory setting is updated to -1mb and upload to 256mb
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/) : Download & install MySQL  
  - Run the installer and note your root credentials (host, port, user, password)  

### 3. Database Management

- [TablePlus](https://tableplus.com/) : Download TablePlus

  - Configure database connections

## Environment Configuration

### Terminal Setup
- Install Homebrew:

  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

- Install essential tools:

  ```bash
  brew install git node@18 yarn composer wp-cli
  ```
