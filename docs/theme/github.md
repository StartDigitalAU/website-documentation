---
sidebar_position: 6
---

# Using GitHub

This guide outlines the recommended workflow for collaborating on our WordPress theme using GitHub. Following these steps ensures a clean, reviewable development process and maintains the integrity of the main branch.

---

## 1. Clone the Boilerplate Theme

First, clone the boilerplate repository to your local machine (see [Cloning the Boilerplate Theme & Installing WordPress](../introduction/boilerplate)):

```bash
cd ~/Developer
git clone https://github.com/StartDigitalAU/boilerroom your-project-name
cd your-project-name
```

## 2. Set Up the Remote Repository

If you are starting a new project, create a new repository on GitHub and set it as your remote:

```bash
git remote set-url origin https://github.com/StartDigitalAU/your-project-repo
```

## 3. Create a Development Branch
Always create a new branch for your work. Use a descriptive branch name related to your feature or fix:

```bash
git checkout -b feature/your-feature-name
```

## 4. Make and Commit Your Changes

Work on your feature or bugfix. When ready, stage and commit your changes:

```bash
git add .
git commit -m "Describe your changes here"
```

## 5. Push Your Branch to GitHub

Push your development branch to the remote repository:

```bash
git push -u origin feature/your-feature-name
```

## 6. Open a Pull Request

- Go to your repository on GitHub.
- Click "Compare & pull request" for your branch.
- Add a clear description of your changes and assign the lead developer for review.

## 7. Code Review & Merge

- The lead developer will review your pull request.
- Once approved, the branch can be merged into main (or the appropriate base branch).
- After merging, delete the feature branch to keep the repository clean.

## 8. Keeping Your Branch Up to Date

If other changes are merged into main while you are working, update your branch:

```bash
git checkout main
git pull origin main
git checkout feature/your-feature-name
git merge main
# Resolve any conflicts, then:
git add .
git commit -m "Resolve merge conflicts"
git push
```

## Summary

- Never commit directly to main.
- Always use feature branches and pull requests for all changes.
- Request a review from the lead developer before merging.
- Keep your branch up to date with the latest changes from main.
  Following this workflow ensures a smooth, collaborative, and high-quality development process for our WordPress themes.
