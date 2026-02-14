# Louis Frankland Portfolio

A modern, responsive portfolio website showcasing UI development and design work. Built with GatsbyJS, deployed on GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and Yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/lfrankland/lfrankland.github.io.git
cd lfrankland.github.io

# Install dependencies
yarn install
```

### Development

```bash
# Start development server (runs on http://localhost:8000)
yarn start

# Build for production
yarn build

# Preview production build
yarn serve
```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn start` / `yarn develop` | Start local development server with hot reload |
| `yarn build` | Create optimised production build |
| `yarn serve` | Serve the production build locally |
| `yarn deploy` | Build and deploy to GitHub Pages (master branch) |
| `yarn format` | Format code using Prettier |
| `yarn clean` | Clear Gatsby cache and build directories |

## 🛠️ Tech Stack

- **Framework**: [GatsbyJS](https://www.gatsbyjs.org) (v5) - Static site generator with React
- **Styling**: [Styled Components](https://styled-components.com/) (v6) - CSS-in-JS solution
- **UI Components**: React 19
- **Typography**: Typography.js
- **Image Optimisation**: Gatsby Image Plugin with Sharp
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## 📦 Project Structure

```
├── src/
│   ├── pages/              # Page components (auto-routed by Gatsby)
│   │   ├── index.js
│   │   ├── contact.js
│   │   ├── enable-lms.js
│   │   ├── enable-audit.js
│   │   └── vc-patterns.js
│   ├── images/             # Image assets
│   └── components/         # Reusable React components
├── public/                 # Static build output
├── gatsby-config.js        # Gatsby configuration
├── package.json            # Project dependencies
└── README.md               # This file
```

## 🎨 Features

- Responsive design that works on all devices
- Optimised images with automatic generation of multiple sizes
- Fast performance with static site generation
- PWA capabilities (offline support)
- SEO-friendly with metadata and structured data
- Styled components for maintainable CSS-in-JS

## 🔧 Configuration

### Site Metadata
Site metadata is configured in `gatsby-config.js`:
- Site title, description, and URL
- Author information
- Social media links (Twitter, etc.)

### Theme
- Primary color: `#9d3493` (purple)
- The theme can be customised in styled components throughout the site

### Build Optimisation
- Image processing with 100% quality baseline
- Stripped metadata for optimised images
- Component display names for debugging

## 📝 Customisation

### Adding Pages
1. Create a new `.js` file in `src/pages/`
2. Export a React component as default
3. Gatsby automatically creates a route

### Adding Images
1. Place images in `src/images/`
2. Use Gatsby Image Plugin for optimisation:
```jsx
import { StaticImage } from 'gatsby-plugin-image'

export const MyImage = () => (
  <StaticImage src="../images/my-image.png" alt="Description" />
)
```

## 🚀 Deployment

The site is automatically deployed to GitHub Pages:

```bash
yarn deploy
```

This builds the site and deploys to the `master` branch while keeping source code on `develop`.

## 📄 License

Licensed under the 0BSD license. See the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using GatsbyJS
