# Leaf Design System - Project Guidelines

This document describes how to apply the **Leaf Design System** (`@herbalifedev/leaf`) in this project. These rules are enforced via Cursor rules and should be followed by all contributors.

## Overview

Leaf is Herbalife's design system. It provides:

- **Components** – Button, Text, InputText, SimpleCard, Brand, and more
- **Design tokens** – CSS variables for colors, typography, spacing, and shapes
- **Styling conventions** – `lf:`-prefixed Tailwind classes

## Typography

### Always use the Text component

Do **not** use raw HTML elements (`<h1>`, `<h2>`, `<p>`, `<span>`) for styled text. Use the Leaf `Text` component instead.

```jsx
import { Text } from '@herbalifedev/leaf'

// Page title
<Text type="heading" size="xlarge" className="lf:text-(--lf-heading-color) lf:mb-4">
  Leaf Design System
</Text>

// Section heading
<Text type="heading" size="large" className="lf:text-(--lf-heading-color) lf:mb-8">
  What's Inside
</Text>

// Body/description text
<Text type="paragraph" size="medium" className="lf:text-(--lf-description-color)">
  Here you can find our design guidelines and resources.
</Text>

// Form/card heading
<Text type="heading" size="medium" className="lf:text-(--lf-heading-color)">
  Login with my credentials
</Text>
```

### Text types and sizes

| Type       | Sizes                          | Design token mapping      |
|------------|---------------------------------|---------------------------|
| `heading`  | xlarge, large, medium, small, xsmall | heading-1 through heading-5 |
| `paragraph`| xlarge, large, medium, small   | body-xlarge, body-large, body-medium |
| `display`  | xlarge, large                   | display-large, display-medium |
| `caption`  | —                              | xs                        |
| `small-title` | large, medium, small        | xl, lg, base              |

## Components

Import components from `@herbalifedev/leaf`:

```jsx
import {
  Text,
  Button,
  OutlinedButton,
  InputText,
  SimpleCard,
  Tag,
  Brand,
} from '@herbalifedev/leaf'
```

Use the component APIs as documented in Leaf/Storybook. Prefer Leaf components over custom implementations.

## Styling

### Tailwind utilities

Use standard Tailwind utilities for layout and spacing. Design tokens are applied via arbitrary values `(--lf-token-name)`.

**Layout:**
- `flex`, `flex-col`, `flex-1`, `grid` – layout
- `items-end`, `items-center`, `justify-between` – alignment

**Spacing (use design tokens):**
- `p-(--lf-spacing-4)` – padding
- `gap-(--lf-spacing-6)` – gap between flex/grid children
- Responsive: `md:p-(--lf-spacing-12)`, `md:gap-(--lf-spacing-10)`

**Sizing:**
- `w-(--lf-max-w-2xl)` – width
- `max-w-(--lf-container-sm)` – max width
- `min-h-(--lf-container-sm)` – min height

**Example from Login.jsx:**

```jsx
<div className="p-(--lf-spacing-4) h-screen w-full flex items-end">
  <div className="flex flex-col gap-(--lf-spacing-6) md:gap-(--lf-spacing-10) lf:bg-(--lf-bg-1) border border-(--lf-border-muted) rounded-(--lf-shape-card) shadow-(--lf-shadow-xl) p-(--lf-spacing-6) md:p-(--lf-spacing-12)">
    <Text type="heading" size="medium" className="max-w-(--lf-container-sm)">
      Login with my credentials
    </Text>
  </div>
</div>
```

### Class prefix

Leaf-specific styling (colors, backgrounds) uses the `lf:` prefix. Layout utilities (`flex`, `grid`, `gap`, `p`) can use tokens directly without `lf:`:

```jsx
<div className="flex flex-col gap-(--lf-spacing-6) lf:bg-(--lf-bg-1) lf:rounded-(--lf-shape-card)">
```

### Design tokens

Use CSS variables instead of hardcoded values when available:

- **Colors**: `--lf-heading-color`, `--lf-paragraph-color`, `--lf-description-color`, `--lf-primary-color`, `--lf-bg-1`, `--lf-bg-2`, `--lf-bg-3`, `--lf-bg-selected`, `--lf-border-muted`
- **Spacing**: `--lf-spacing-4`, `--lf-spacing-6`, `--lf-spacing-10`, `--lf-spacing-12`
- **Sizing**: `--lf-container-sm`, `--lf-max-w-2xl`
- **Shapes**: `--lf-shape-card`
- **Borders**: `--lf-border-muted`
- **Shadows**: `--lf-shadow-xl`
- **Typography**: `--lf-heading-1` through `--lf-heading-5`, `--lf-body-*`

## Cursor rules

Design system rules are stored in `.cursor/rules/leaf-design-system.mdc` and apply automatically when working with `.jsx`, `.tsx`, `.js`, and `.ts` files. The AI assistant will follow these conventions when suggesting or generating code.
