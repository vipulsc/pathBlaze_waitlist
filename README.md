# PathBlaze Waitlist

A modern waitlist management system built with Next.js 15 and TypeScript.

## Features

- Modern UI with Tailwind CSS
- Supabase integration for database
- Email notifications using Resend
- Responsive design
- Interactive animations with Motion
- Analytics integration

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Supabase account (for database)
- Resend API key (for email notifications)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Copy `.env.example` to `.env` and fill in your environment variables:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:3000`

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - React components
- `/lib` - Utility functions and configurations
- `/public` - Static assets

## Environment Variables

Create a `.env` file with the following variables:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
```

## Deployment

The application is built with Next.js 15 and can be deployed to various platforms including:

- Vercel
- Netlify
- AWS
- DigitalOcean

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Supabase
- Resend
- Canvas Confetti
- Lucide React Icons

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
