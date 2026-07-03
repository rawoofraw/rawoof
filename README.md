# Abdul Rawoof S.A.K - ML Engineer Portfolio

A modern, responsive, multi-page portfolio built for a Machine Learning Engineer specializing in NLP, LLMs, and MLOps. 

## Tech Stack
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide-React
- **Routing:** React Router DOM

## Running Locally

1. **Install Dependencies:** (Already installed if you used the automated setup)
   ```bash
   npm install
   ```
2. **Start Development Server:**
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to the localhost URL provided (usually `http://localhost:5173`).

## Building for Production

To create a static production build, run:
```bash
npm run build
```
This will generate a `dist` folder containing the optimized static assets.

## Deployment

Because this is a Vite + React Router application, you can easily deploy it to platforms like **Vercel** or **Netlify**.

### Vercel
1. Install the Vercel CLI or connect your GitHub repository to Vercel.
2. Vercel will automatically detect it as a Vite project and use `npm run build` as the build command and `dist` as the output directory.

### Netlify
1. Connect your repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
*(Note: For React Router to work correctly on Netlify, you may need to add a `_redirects` file in your `public` folder with the content: `/* /index.html 200`)*

## Placeholders to Update

Before deploying, ensure you replace the following placeholders:
- **Resume PDF:** Place your actual resume PDF in the `public/` directory and name it `resume.pdf`. The "Download Resume" button on the Home page links to `/resume.pdf`.
- **Project Diagrams:** In `src/pages/Projects.jsx`, there are placeholder SVGs/Icons for architecture diagrams. You can replace the `lucide-react` icon block with an `<img>` tag pointing to actual architectural diagrams of your systems.
