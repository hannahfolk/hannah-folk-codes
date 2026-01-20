# Hannah Folk - Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/67f1bc4a-2bb6-49e9-9e82-c9a4a2d5b1c1/deploy-status)](https://app.netlify.com/sites/hannahfolkcodes/deploys)
[![MIT License](https://img.shields.io/badge/license-MIT-green)](https://github.com/hannahfolk/portfolio-react/blob/master/LICENSE.txt)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?&logo=linkedin&colorB=555)](https://linkedin.com/in/hannahfolk)

A modern, responsive portfolio website built with React and Vite, featuring a dark/light theme toggle, scroll animations, and an interactive career timeline.

**[View Live Site](https://hannahfolkcodes.com)**

## Features

- **Dark/Light Theme** - Toggle between themes with preference saved to localStorage
- **Responsive Design** - Mobile-first approach using Bootstrap grid system
- **Scroll Animations** - Smooth animations on scroll using AOS library
- **Interactive Timeline** - Visual career history with company logos and tech badges
- **Typewriter Effect** - Dynamic text animation on the home page
- **Contact Form** - Integrated with Formspree for email submissions
- **Single Page Application** - Client-side routing with React Router

## Tech Stack

**Frontend Framework**
- React 16
- React Router DOM
- Styled Components

**Build Tools**
- Vite
- Sass/SCSS

**UI Libraries**
- Bootstrap / React Bootstrap
- Semantic UI React
- Font Awesome
- Iconify

**Animations**
- AOS (Animate On Scroll)
- React Typical
- React Vertical Timeline Component

## Getting Started

### Prerequisites

- Node.js (see `.nvmrc` for version)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/hannahfolk/hannah-folk-codes.git
   cd hannah-folk-codes
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The production build will be output to the `./build` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar/         # Navigation bar
│   ├── Footer/         # Site footer with social links
│   ├── Timeline/       # Career timeline component
│   └── PortfolioModal/ # Modal for project details
├── pages/              # Page components (one per route)
│   ├── Home/           # Landing page with theme toggle
│   ├── About/          # Bio and introduction
│   ├── Skills/         # Technology skills grid
│   ├── Resume/         # Work experience timeline
│   ├── Contact/        # Contact form
│   └── Portfolio/      # Project showcase (coming soon)
├── scss/               # Global styles and theming
│   └── themes/         # Dark and light theme definitions
├── App.jsx             # Main app with router setup
└── index.jsx           # Application entry point
```

## Customization

### Themes

Theme colors are defined in `src/scss/themes/`:
- `theme-dark.scss` - Dark theme (navy/cyan color scheme)
- `theme-light.scss` - Light theme

The active theme is controlled via the `data-theme` attribute on the body element.

### Content

- **Timeline entries** - Edit `src/components/Timeline/timeline.component.jsx`
- **Skills** - Edit `src/pages/Skills/skills.page.jsx`
- **About bio** - Edit `src/pages/About/about.page.jsx`
- **Contact form** - Uses Formspree; update the endpoint in `src/pages/Contact/contact.page.jsx`

## Deployment

This site is deployed on [Netlify](https://www.netlify.com/). The build settings are:
- **Build command:** `npm run build`
- **Publish directory:** `build`

## Contact

Hannah Folk - [hfolk25@gmail.com](mailto:hfolk25@gmail.com)

- LinkedIn: [linkedin.com/in/hannahfolk](https://linkedin.com/in/hannahfolk)
- GitHub: [github.com/hannahfolk](https://github.com/hannahfolk)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.

## Acknowledgements

- [Dorota1997 - React Frontend Dev Portfolio](https://github.com/Dorota1997/react-frontend-dev-portfolio) - Original inspiration
