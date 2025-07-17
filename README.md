# GateBell - Smart Community Management

A modern, responsive homepage for GateBell, a smart community management platform. Built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern SaaS design with clean UI/UX
- 📱 Fully responsive and mobile-friendly
- ⚡ Built with Next.js 14 and React 18
- 🎯 Tailwind CSS for styling
- 🔧 TypeScript for type safety
- 📦 Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gatebell
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
gatebell/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage component
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Key Components

### Navigation
- Responsive navigation bar with mobile menu
- Smooth transitions and hover effects
- Call-to-action buttons

### Hero Section
- Compelling headline with gradient background
- Dual call-to-action buttons
- Social proof elements
- Mockup preview

### Features Section
- Grid layout showcasing key features
- Icon-based feature cards
- Hover effects and animations

### Call-to-Action Section
- High-contrast design for conversion
- Multiple action buttons
- Engaging copy

### Footer
- Organized link sections
- Company branding
- Copyright information

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### Typography
The project uses Inter font family, which can be changed in the Tailwind config or by importing different fonts.

### Content
All text content is easily editable in the `app/page.tsx` file. Replace placeholder text with your actual content.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **PostCSS** - CSS processing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@gatebell.com or create an issue in the repository. 