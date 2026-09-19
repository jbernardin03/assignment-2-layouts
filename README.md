# Campus Event Guide – Phoenix University

## Project Description

The **Phoenix University Campus Event Guide** is a responsive website created for the Office of Student Engagement. Its purpose is to help students discover upcoming campus activities, learn more about a featured event, and quickly find contact information. The intended audience is current Phoenix University students who want to get involved in clubs, performances, and social events.

The site includes:

- `index.html` – Home page with hero content, upcoming events grid, and an about section.
- `event.html` – Featured event details page for “Open Mic Night.”
- `css/styles.css` – Shared external stylesheet.
- `images/` – Local images referenced by the pages.

## Layout Decisions

### Flexbox Usage

- **Header navigation**  
  Flexbox aligns the logo/tagline and navigation horizontally with spacing and wrapping on smaller screens.
- **Hero section**  
  Flexbox places text and image side by side while allowing wrapping.
- **Footer**  
  Flexbox arranges footer content and allows wrapping.
- **Related events**  
  Flexbox with `flex-wrap` creates compact cards that wrap when space is limited.

### Grid Usage

- **Upcoming events grid**  
  CSS Grid lays out event cards with responsive columns and wide-card spans.
- **Event details layout**  
  CSS Grid creates a two-column layout for main content and sidebar on desktop, collapsing to one column on smaller screens.

## Responsive Design

### Breakpoints

- **768px**  
  - Header becomes vertical  
  - Event layout becomes one column  
  - Wide cards stop spanning two columns
- **480px**  
  - Reduced padding  
  - Footer becomes vertical

### Testing

Tested using browser dev tools at multiple viewport widths to confirm wrapping, grid behavior, and readability.

## Semantic HTML

Semantic elements used:

- `header` – Introductory site content and navigation
- `nav` – Navigation links
- `main` – Primary page content
- `section` – Logical content grouping
- `article` – Self-contained event cards
- `aside` – Supplemental sidebar information
- `figure` + `figcaption` – Images with descriptive captions
- `time` – Machine-readable event dates

## Sources
-https://landezine.com/university-of-new-mexico-smith-plaza-by-surfacedesign/ 
    -For Plaza Photo
-https://donyc.com/p/top-open-mic-spots-in-nyc
    -Open Mic Night Photo
-https://alleghenycampus.com/11838/features/student-involvement-fair-offers-new-experiences/
    -Club Fair Photo
-https://stock.adobe.com/search?k=board+game+night
    -Game Night Photo
-https://www.liberty.edu/news/2016/02/09/students-celebrate-different-cultures-during-global-focus-week/
    -Culture Festival Photo
-https://admissions.usf.edu/hubfs/blogs/Admit-A-Bull/images/blog-post/040120-how-being-a-volunteer-supports-more-than-the-community/how-being-a-volunteer-supports-more-than-the-community-inline.jpg
    -Volunteer Photo

### Images

Placeholder filenames for locally stored, appropriately licensed images:

- campus-plaza.jpg  
- open-mic-night.jpg  
- club-fair.jpg  
- game-night.jpg  
- volunteer-day.jpg  
- culture-festival.jpg  

### Fonts

System UI font stack; no external fonts used.

### Borrowed Content
