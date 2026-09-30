# Plan

A long-term TypeScript refresher and a public record of how I write components. One component at a time, starting simple. Not tied to any job opportunity.

## Ground rules

- I write everything under `src/components/`. Claude sets up tooling and reviews, and never edits component files; it points at lines and I change them.
- No component libraries, headless kits, Tailwind or CSS-in-JS.
- Fake data only. No client code, names, data or screenshots.
- Every commit is public: imperative mood, a subject that says what changed, a body that says why.

## Backlog

In rough order; pick the next one when the last is done.

1. **Tabs or Toggle** — first, small component. Controlled and uncontrolled API, correct roles, keyboard support.
2. **Selection table with bulk-action bar** — a fake deployment queue (service, environment, status, duration, triggered by) with retry, cancel and promote. Roving tabindex, `aria-multiselectable`, Shift-click ranges, Escape clears, a live region for the count, focus returning correctly when the bar closes. The bar enters and exits with interruptible transform/opacity motion that honors `prefers-reduced-motion`.
3. **Command palette** — generic over item type, portal, focus trap, typeahead, keyboard navigation, grouped results.

Later:

- Portfolio slideshow rewrite, or something similar.
- Streaming UI spike.

## What each component should show

1. Types that model the domain: discriminated unions for state, constrained generics, `as const` with derived types, `satisfies`, no `any`.
2. An API that composes: controlled and uncontrolled, `onValueChange`-style callbacks, subcomponents over prop sprawl, refs on focusable elements.
3. Accessibility from knowledge: roles, states, keyboard model and focus management.
4. Motion, where there is any, that handles exit, is interruptible and respects reduced motion.
5. Two or three behavioral tests. No snapshots.
6. Hygiene: `pnpm check` and CI green, stories for each state, a README line on what it proves.

## Pairing rhythm

One drill per session, no more than one a day.

1. **Build, 45 minutes, timed.** I start from a blank file and narrate as if in an interview. Claude watches and stays silent unless I ask.
2. **Review, 15 minutes.** Claude reviews against the six points above, citing `file:line`. At most five findings, most important first.
3. **Fix and commit.** I make the changes myself, then commit.

A component can take several drills. Stop at the time box even if it's unfinished, and note where to resume.
