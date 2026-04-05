# FOSSEE Workshop Booking — UI Redesign

A modern, mobile-first React redesign of the [FOSSEE Workshop Booking](https://github.com/FOSSEE/workshop_booking) platform by IIT Bombay.

## Live Demo
>

## Before & After

| Before | After |
|--------|-------|
| Basic Django templates, no mobile support | Responsive React SPA with dark theme |
| Plain Bootstrap tables | Card-based layout with search & filters |
| No visual hierarchy | Clear typography, color system, animations |

>

---

## Design Principles

**1. Mobile-first layout**
The original site had no responsive design. Since the task specified students access this primarily on mobile, every component was built mobile-first using CSS Grid with `auto-fill` and `minmax()`, fluid typography with `clamp()`, and a hamburger nav for small screens.

**2. Visual hierarchy through typography and color**
I chose DM Sans for body text (readable at small sizes) and Space Mono for code/numbers (gives a technical, academic feel appropriate for IIT Bombay). A single strong accent color (orange `#f97316`) guides the eye to key actions.

**3. Consistency through a design token system**
All colors, spacing, fonts, and border radii are defined as CSS variables in `index.css`. This means changing the accent color site-wide takes one line — maintainable and scalable.

**4. Accessibility**
- Semantic HTML (`nav`, `main`, `footer`, `button`, `label`)
- All images have `alt` text
- Form inputs have associated `label` elements with `htmlFor`
- Keyboard navigable — focus states visible on all interactive elements
- ARIA labels on the hamburger toggle button

**5. Performance**
- No heavy UI libraries — pure CSS for all animations
- Google Fonts loaded with `display=swap` to avoid render blocking
- Images use `object-fit` to avoid layout shift
- React Router for client-side navigation (no full page reloads)

---

## Responsiveness

- **Navbar**: Collapses to hamburger menu below 768px with smooth slide-down animation
- **Cards**: CSS Grid with `auto-fill minmax(280px, 1fr)` — naturally reflows on any screen
- **Typography**: `clamp()` for fluid font sizes between mobile and desktop
- **Forms**: Single column on mobile, two-column grid on tablet+
- **Tables**: Horizontally scrollable with `overflow-x: auto` on small screens
- **Footer**: Stacks vertically on mobile

---

## Trade-offs

| Decision | Trade-off |
|----------|-----------|
| No UI component library (MUI/Ant) | More CSS to write, but faster load time and full design control |
| Dark theme only | Simpler to implement well; no theme toggle needed for this scope |
| Demo data instead of real API | Frontend-only prototype; real version would connect to Django REST API |
| CSS Modules not used | Plain CSS files are simpler for a project this size |

---

## Challenges

**Biggest challenge: Responsive navbar with accessible hamburger menu**

The original site used Bootstrap's navbar which handles this automatically. Building it from scratch in React required managing:
- `useState` for open/closed toggle
- `useEffect` with an outside-click listener to close the menu
- CSS transforms for the animated hamburger → X transition
- Fixed positioning that doesn't conflict with page content

I approached it by first building the desktop layout, then progressively overriding styles in a `@media (max-width: 768px)` block.

---

## Pages Built

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats strip, workshop cards, how-it-works, CTA |
| About | `/about` | FOSSEE mission, APJ Kalam quote, all 12 FLOSS tools, activities |
| Workshops | `/workshops` | Searchable, filterable list of all workshop types |
| Workshop Detail | `/workshops/:id` | Full details, terms, what to expect |
| Internships | `/internships` | All internship programs with open/closed filter |
| Events | `/events` | Upcoming and past events with tab navigation |
| Statistics | `/statistics` | Impact numbers, bar chart by tool, recent workshops table |
| Propose | `/propose` | Form to request a workshop at your college |
| Login | `/login` | Auth form with demo credentials |
| Register | `/register` | Coordinator registration with validation |

---

## Tech Stack

- **React 18** — UI library
- **React Router v6** — Client-side routing
- **Plain CSS** — Styling with CSS custom properties (no Tailwind/Bootstrap)
- **Google Fonts** — DM Sans + Space Mono
- **Create React App** — Project scaffold

---

## Setup Instructions
```bash
# 1. Clone the repository
git clone https://github.com/manasvikhare19/fossee-workshop-ui.git

# 2. Enter the project folder
cd fossee-workshop-ui

# 3. Install dependencies
npm install

# 4. Start the development server
npm start

# 5. Open in browser
# http://localhost:3000
```

### Demo Login Credentials
| Username | Password | Role |
|----------|----------|------|
| manasvi_khare | manasvi | Coordinator |
| instructor1 | demo123 | Instructor |

---

## Project Structure
