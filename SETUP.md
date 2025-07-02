# Flower Shop Project - Detailed Setup Guide

This document provides detailed technical information to help you set up and run the Flower Shop React Project on another computer.

## System Requirements

- **Operating System**: Windows, macOS, or Linux
- **Node.js**: Version 18.x or higher (recommended)
- **NPM**: Version 8.x or higher
- **Disk Space**: At least 500MB free space

## Complete Setup Process

### 1. Environment Setup

#### Windows
1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Verify installation by opening Command Prompt and running:
   ```
   node --version
   npm --version
   ```

#### macOS
1. Install Node.js using Homebrew:
   ```
   brew install node
   ```
   Or download from [nodejs.org](https://nodejs.org/)
2. Verify installation by running:
   ```
   node --version
   npm --version
   ```

#### Linux
1. Install via package manager:
   ```
   sudo apt update
   sudo apt install nodejs npm
   ```
   Or use NVM (recommended):
   ```
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   nvm install 18
   ```

### 2. Project Setup

1. **Create project folder and transfer files**
   - Transfer all project files to a new folder on the target machine
   - Alternatively, if using version control:
     ```
     git clone <your-repository-url>
     ```

2. **Navigate to the project directory**
   ```
   cd Flower_Shop_React_Project/flower-shop
   ```

3. **Install dependencies**
   ```
   npm install
   ```

4. **Start the development server**
   ```
   npm run dev
   ```
   
5. **Access the website**
   - Open a browser and navigate to http://localhost:5173

### 3. Detailed Project Structure

```
flower-shop/
├── public/                  # Static assets served directly
├── src/
│   ├── assets/              # Project assets
│   ├── components/          
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.jsx   # Navigation and site header
│   │   │   └── Footer.jsx   # Site footer
│   │   └── sections/        # Main page sections
│   │       ├── HeroSection.jsx          # Hero banner
│   │       ├── FeaturedProducts.jsx     # Featured products display
│   │       ├── ServicesSection.jsx      # Services offered section
│   │       ├── PromotionSection.jsx     # Promotional content
│   │       ├── InstagramSection.jsx     # Instagram feed display
│   │       └── NewsletterSection.jsx    # Newsletter signup
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── package-lock.json        # Locked dependencies
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite bundler configuration
└── eslint.config.js         # ESLint configuration
```

## Dependency Details

### Core Dependencies
- **react**: ^19.1.0 - UI library
- **react-dom**: ^19.1.0 - React DOM renderer
- **react-icons**: ^5.5.0 - Icon library

### Development Dependencies
- **vite**: ^7.0.0 - Build tool and dev server
- **@vitejs/plugin-react**: ^4.5.2 - React plugin for Vite
- **tailwindcss**: ^3.3.3 - Utility-first CSS framework
- **postcss**: ^8.5.6 - CSS transformation tool
- **autoprefixer**: ^10.4.21 - PostCSS plugin
- **eslint**: ^9.29.0 - Code linter

## Design & Styling Information

### Tailwind Configuration
The project uses a custom Tailwind configuration in `tailwind.config.js`:
- Custom color palette
- Extended theme settings
- Responsive breakpoints

### Key Design Elements
1. **Hero Section**: Features responsive image sizing with:
   - Max-width constraints for responsive behavior
   - Centered alignment
   - Circular background with padding-based aspect ratio
   - Rounded borders (rounded-3xl class)
   - Border-white for framed appearance
   - Fully rounded buttons (rounded-full class)

2. **Overall UI**:
   - Modern, clean aesthetic
   - Consistent spacing and padding
   - Responsive design for all screen sizes

## Troubleshooting

### Common Issues

1. **Node.js version incompatibility**
   - Solution: Use nvm (Node Version Manager) to install the correct Node.js version

2. **Missing dependencies**
   - Solution: Delete node_modules folder and run `npm install` again

3. **Port conflicts**
   - Solution: Change the port in vite.config.js:
     ```js
     export default defineConfig({
       server: {
         port: 3000 // Change from default 5173
       },
       // other config
     })
     ```

4. **Build errors**
   - Solution: Run `npm run lint` to check for code issues, then fix any reported problems

## Deployment Instructions

### Building for Production
1. Run the build command:
   ```
   npm run build
   ```
2. The optimized files will be generated in the `dist` directory

### Deployment Options

1. **Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Vercel**
   - Connect your GitHub repository
   - Vercel will automatically detect Vite configuration

3. **Manual deployment**
   - Copy the contents of the `dist` directory to your web server
   - Ensure the server is configured to handle single-page applications

## File Backups & Version Control

- Always keep a backup of your project
- Consider using Git for version control:
  ```
  git init
  git add .
  git commit -m "Initial commit"
  ```
- Connect to GitHub/GitLab for remote backup:
  ```
  git remote add origin <your-repository-url>
  git push -u origin main
  ```

## Future Development Notes

- The project structure supports easy addition of new sections
- Component-based architecture allows for reusability
- Consider adding React Router for multi-page navigation if needed
