# FOSSEE Workshop Booking - UI Redesign

This is my submission for the FOSSEE Python Screening Task.
I redesigned the existing workshop booking website using React.

Original repository: https://github.com/FOSSEE/workshop_booking

---

## How to run this project

1. Clone the repository
   git clone https://github.com/manasvikhare19/fossee-workshop-ui.git

2. Go into the folder
   cd fossee-workshop-ui

3. Install dependencies
   npm install

4. Start the app
   npm start

5. Open http://localhost:3000 in your browser

---

## Pages in this project

 Home - hero section, stats, workshop cards, how it works
 
 About - FOSSEE mission, APJ Kalam quote, all FLOSS tools
 
 Workshops - searchable and filterable list of workshops
 
 Workshop Detail - full info about a specific workshop
 
 Internships - all internship programs with open/closed status
 
 Events - upcoming and past events
 
 Statistics - impact numbers and workshop data
 
 Propose - form to request a workshop at your college
 
 Login - with demo credentials (manasvi_khare / manasvi)
 
 Register - coordinator registration form with validation

---

## What design principles guided my improvements?

The original site had no visual hierarchy and was hard to read
on mobile. I focused on three things:

1. Mobile first - since students mostly use phones, I built
   every component to work on small screens first and then
   adjusted for larger screens.

2. Clear structure - I used consistent spacing, font sizes,
   and a single accent color (orange) so the user always knows
   what to click next.

3. Readable typography - I chose DM Sans for body text because
   it is clean and easy to read at small sizes.

---

## How did I ensure responsiveness?

 1. The navbar collapses into a hamburger menu on mobile
 2. Cards use CSS Grid with auto-fill so they reflow automatically
  on any screen size
 3. Font sizes use clamp() so they scale between mobile and desktop
 4. Forms go single column on mobile and two columns on tablet
 5. Tables scroll horizontally on small screens

---

## Trade-offs between design and performance

1. I did not use any UI library like Bootstrap or Material UI.
  This means I had to write more CSS but the page loads faster
  because there are no heavy libraries.

2. I used Google Fonts which adds a small load time but makes
  the typography much better. I added display=swap so it does
  not block the page from loading.

3. The site uses demo data instead of a real API. In a real
  version this would connect to the Django backend.

---

## What was the most challenging part?

Building the responsive navbar from scratch was the hardest part.
The original site used Bootstrap which handles this automatically.
I had to:
1. Use useState to track if the menu is open or closed
2. Add a click listener to close the menu when clicking outside
3. Animate the hamburger icon turning into an X using CSS
4. Make sure the menu does not overlap page content on mobile

I solved it by first building the desktop version and then
writing a separate media query block for mobile.

---

## Screenshots

### Before (Original Site)
![Original login page](./screenshots/before-login.png)
![Original statistics page](./screenshots/before-statistics.png)

### After (My Redesign)
![New home page](./screenshots/after-home.png)
![New login page](./screenshots/after-login.png)
![New workshops page](./screenshots/after-workshops.png)
![New statistics page](./screenshots/after-statistics.png)

---

## Tech used

 React 18
 
 React Router v6
 
 Plain CSS with CSS variables
 
 Google Fonts (DM Sans + Space Mono)
