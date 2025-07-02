# Complete Setup Commands for Flower Shop React Project

This guide provides every command needed to set up the Flower Shop React project from scratch, including installing all dependencies and configuring the project.

## Initial Project Setup

### 1. Create a new Vite React project
```bash
# Navigate to your desired parent directory
cd /path/to/your/projects

# Create a new Vite project with React template
npm create vite@latest Flower_Shop_React_Project -- --template react

# Navigate to the project directory
cd Flower_Shop_React_Project

# Rename the inner directory for clarity
mv vite-project flower-shop

# Navigate into the working directory
cd flower-shop
```

### 2. Install base dependencies
```bash
# Install the base dependencies
npm install
```

## Adding Tailwind CSS

### 1. Install Tailwind CSS and its dependencies
```bash
# Install Tailwind CSS, PostCSS, and Autoprefixer
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS configuration
npx tailwindcss init -p
```

### 2. Configure Tailwind CSS
```bash
# Edit tailwind.config.js to include your project files
# The file should look like this:
```

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F7942",
        secondary: "#F9A826",
        light: "#F8F9FA",
        dark: "#212529"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}
```

### 3. Add Tailwind directives to CSS
```bash
# Edit src/index.css to include Tailwind directives
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Your custom CSS here */
```

## Installing Additional Dependencies

### 1. Install React Icons
```bash
# Install React Icons for UI elements
npm install react-icons
```

### 2. Install ESLint for code quality (optional but recommended)
```bash
# Install ESLint and its React plugins
npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

## Project Structure Setup

### 1. Create project directories
```bash
# Create necessary directories
mkdir -p src/components/layout src/components/sections src/assets/images
```

### 2. Create layout components
```bash
# Create Header.jsx
touch src/components/layout/Header.jsx

# Create Footer.jsx
touch src/components/layout/Footer.jsx
```

### 3. Create section components
```bash
# Create section components
touch src/components/sections/HeroSection.jsx
touch src/components/sections/FeaturedProducts.jsx
touch src/components/sections/ServicesSection.jsx
touch src/components/sections/PromotionSection.jsx
touch src/components/sections/InstagramSection.jsx
touch src/components/sections/NewsletterSection.jsx
```

### 4. Update App.jsx to import components
```bash
# Edit App.jsx to import and use your components
```

## Development and Testing

### 1. Start the development server
```bash
# Start the Vite development server
npm run dev
```

### 2. Access the development site
Open your browser and navigate to http://localhost:5173

## Building for Production

### 1. Create production build
```bash
# Build the project for production
npm run build
```

### 2. Preview production build (optional)
```bash
# Preview the production build locally
npm run preview
```

## Git Version Control

### 1. Initialize Git repository
```bash
# Initialize Git in your project root
git init

# Add all files to Git
git add .

# Make initial commit
git commit -m "Initial project setup"
```

### 2. Connect to GitHub
```bash
# Create a GitHub repository first, then:
git remote add origin https://github.com/yourusername/flower-shop-react.git
git branch -M main
git push -u origin main
```

## Updating Dependencies

### Check for outdated packages
```bash
# Check for outdated dependencies
npm outdated

# Update dependencies to their latest versions
npm update
```

## Troubleshooting Commands

### 1. Clear npm cache
```bash
# Clear npm cache if you encounter dependency issues
npm cache clean --force
```

### 2. Reinstall node modules
```bash
# Remove node_modules and reinstall
rm -rf node_modules
npm install
```

### 3. Check for port conflicts
```bash
# On Windows
netstat -ano | findstr :5173

## Additional Configurations

### 1. Custom Vite port
Create or edit `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 // Change default port from 5173 to 3000
  }
})
```

### 2. Environment variables
Create `.env` file in project root:
```
VITE_API_URL=https://your-api-url.com
```

Access in components with:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```
