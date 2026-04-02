---
name: commit-and-deploy
description: Commits changes, merges work from feature branches into main, and pushes main to origin as the only deploy trigger. Use when the user asks to commit, ship, deploy, consolidate branches into main, or sync work so production reflects the latest merged code.
---

# Commit and deploy (git workflow)

## When to apply

Use this skill for **end-of-task git housekeeping**: commit work, **land every branch’s changes on `main`**, and **push `main`** so the only publication pipeline (e.g. GitHub Pages, CI) runs off **`main`**—not off `develop` or feature branches.

## Assumptions

- **`main`** is the **single branch that deploys** (configure hosting/Actions to track **`main`** only).
- **`develop`** (if it exists) is optional bookkeeping: keep it aligned **from `main` after** merges—never treat pushing `develop` as a deploy.
- Remote is **`origin`**. Commands run from the repo root.

## Workflow

### 1. Commit on the working branch

1. `git status` — confirm changed files.
2. `git add` what belongs in this commit (or all project changes if the user asked to “commit the work”).
3. `git commit` with a **Conventional-Commit-style** message when appropriate:
   - Example: `feat(home): Leaf tokens, Shortcuts, clickable cards`

### 2. Move branch work onto **`main`**

Consolidate **all** work that should ship (one feature branch or several):

1. `git checkout main` → `git pull origin main`.
2. For each branch that contains work to release (e.g. `feature/xyz`, `chore/abc`, **`develop`** if it has commits not in `main`):
   - `git merge <branch> -m "Merge branch '<branch>' into main"`
   - Resolve conflicts on **`main`**; retest if needed.
3. If the user only named one branch, merge that branch into **`main`**; if they asked to “take everything,” merge every outstanding feature branch (and **`develop`** if ahead of **`main`**) in a sensible order until **`main`** includes all intended commits.

Do **not** rely on **`develop`** as the integration gate unless the user explicitly wants that extra step; the **target of truth for deploy is always `main`**.

### 3. Deploy: push **`main`** only

1. **`git push origin main`** (from an account with access to the repo owner’s remote — e.g. **gab-hl** for `gab-hl/leaf-sample-vite`).

That push updates GitHub when **Pages** is configured on that repo. For **this** project, static files live in **`docs/`** on **`main`**: changing only **`src/`** is not enough. Before pushing, run **`npm run build:pages`** (requires **`NPM_TOKEN`** for the Leaf package per **`.npmrc`**), then commit **`docs/`** with the **`main`** changes. See [README.md](../../../README.md) § *GitHub Pages*.

Pushing feature branches or **`develop`** does **not** update the live site unless hosting is explicitly wired to those branches.

### 4. Optional: keep **`develop`** in sync with **`main`**

If the team keeps **`develop` for history or open PRs:

1. `git checkout develop` → `git pull origin develop`.
2. `git merge main -m "Merge branch 'main' into develop"` (or reset **`develop`** to **`main`** only if the team policy allows and the user asks).
3. `git push origin develop`.

This updates **`develop`**; it is **not** a deploy step.

## Checklist

```
- [ ] Changes committed on the feature branch(es)
- [ ] main pulled; each relevant branch merged into main; conflicts resolved
- [ ] If UI/app changed: `npm run build:pages`; `docs/` committed
- [ ] `origin/main` pushed (deploy trigger on **gab-hl** repo)
- [ ] If used: develop updated from main and pushed
- [ ] User left on branch they expect (usually main)
```

## Anti-patterns

- Do **not** describe **`git push develop`** as deploying the site when policy is **main-only deploy**.
- Do **not** force-push **`main`** unless the user explicitly requests it and understands the impact.
- Do **not** skip **`git push origin main`** when the user asked to deploy or “get work live”—local merges without pushing **`main`** are incomplete.
- Do **not** push **`main`** with **`src/`** changes but a stale **`docs/`** folder for this repo—the site will not reflect the app until **`npm run build:pages`** and a commit update **`docs/`**.

## Related project docs

- GitHub Pages or build steps: see [README.md](../../../README.md) at the repo root.
