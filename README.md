# Engineering Portfolio

A modern, responsive portfolio website built with Next.js to showcase your projects, skills, and experience.

## Features

- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Fast Performance** - Built with Next.js for optimal speed
- ✅ **Easy to Customize** - Update your info, projects, and styling with ease
- ✅ **SEO Optimized** - Built-in Next.js SEO features
- ✅ **Modern UI** - Clean, professional design

## Pages Included

1. **Home** - Hero section with call-to-action buttons
2. **About** - Your background and skills
3. **Projects** - Showcase your work with project cards
4. **Contact** - Contact form and social links

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your computer. Download it from [nodejs.org](https://nodejs.org/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Spmjr-11/spmjr-portfoli.git
   cd spmjr-portfoli
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Go to [http://localhost:3000](http://localhost:3000)
   - You should see your portfolio website!

## Customization Guide

### Update Your Information

1. **Home Page** - Edit `app/page.js`
   - Change your name and headline
   - Update the subtitle and description

2. **About Page** - Edit `app/about/page.js`
   - Add your background information
   - Update your skills (Frontend, Backend, Tools)

3. **Projects Page** - Edit `app/projects/page.js`
   - Update the `projects` array with your projects
   - Add project titles, descriptions, technologies, and links

4. **Contact Page** - Edit `app/contact/page.js`
   - Update your email address
   - Add your LinkedIn and GitHub profile URLs

### Styling

- All styles are in `app/globals.css`
- Colors, fonts, and spacing can be easily customized
- The site uses CSS Grid and Flexbox for responsive design

### Add Project Images

1. Place images in the `public/images/` folder
2. Update the image paths in `app/projects/page.js`

## Deployment

### Deploy to Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com/)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Your site will be live at a Vercel URL

### Deploy to GitHub Pages

See [Next.js GitHub Pages deployment guide](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

## Project Structure

```
spmjr-portfoli/
├── app/
│   ├── layout.js           # Root layout with navbar/footer
│   ├── page.js             # Home page
│   ├── globals.css         # All styling
│   ├── about/
│   │   └── page.js         # About page
│   ├── projects/
│   │   └── page.js         # Projects page
│   └── contact/
│       └── page.js         # Contact page
├── components/
│   ├── Navbar.js           # Navigation component
│   ├── ProjectCard.js      # Project card component
│   ├── ContactForm.js      # Contact form component
│   └── Footer.js           # Footer component
├── public/
│   └── images/             # Store project images here
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
└── README.md               # This file
```

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Technologies Used

- **React 18** - UI library
- **Next.js 14** - React framework
- **CSS3** - Styling
- **JavaScript** - Programming language

## Tips for Success

1. **Add High-Quality Images** - Use clear screenshots or mockups of your projects
2. **Write Clear Descriptions** - Explain what each project does and the problem it solves
3. **Include Relevant Technologies** - List the tech stack for each project
4. **Keep It Updated** - Add new projects and update your skills regularly
5. **Test on Mobile** - Make sure everything looks good on mobile devices

## Need Help?

- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- React documentation: [react.dev](https://react.dev)
- GitHub Issues: [Create an issue](https://github.com/Spmjr-11/spmjr-portfoli/issues)

## License

Free to use for personal and commercial projects.

---

**Made with ❤️ for your engineering portfolio**
