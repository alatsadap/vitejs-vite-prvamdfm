# Novita Intan - Next.js with Sanity CMS

A modern travel blog website built with Next.js 14 and Sanity CMS, featuring a beautiful design and seamless content management.

## Features

- **Next.js 14** with App Router
- **Sanity CMS** for content management
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Dark/Light mode** support
- **Responsive design**
- **Image optimization** with Next.js Image component
- **SEO optimized**

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd novita-intan-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Set up Sanity:
```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Create a new Sanity project
sanity init

# Deploy the schema
sanity deploy
```

4. Create environment variables:
```bash
cp .env.local.example .env.local
```

Update `.env.local` with your Sanity project details:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

5. Run the development server:
```bash
npm run dev
```

6. Start Sanity Studio (in a separate terminal):
```bash
sanity start
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # React components
├── lib/                # Utility functions and Sanity client
└── schemas/            # Sanity schema definitions

schemas/                # Sanity schema files
├── author.ts
├── blockContent.ts
├── category.ts
├── index.ts
└── post.ts
```

## Sanity Setup

1. Go to [sanity.io](https://sanity.io) and create an account
2. Create a new project
3. Copy your project ID and dataset name
4. Update your `.env.local` file
5. Run `sanity deploy` to deploy your schema

## Content Management

Access your Sanity Studio at `http://localhost:3333` to:
- Create and manage blog posts
- Add authors and categories
- Upload and manage images
- Preview content changes

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploy Sanity Studio

```bash
sanity deploy
```

Your studio will be available at `https://your-project-name.sanity.studio`

## Customization

- Update the color scheme in `tailwind.config.ts`
- Modify components in `src/components/`
- Add new Sanity schemas in `schemas/`
- Customize the layout in `src/components/layout/`

## Technologies Used

- **Next.js 14** - React framework
- **Sanity** - Headless CMS
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Radix UI** - Accessible UI components
- **Lucide React** - Icon library

## License

This project is licensed under the MIT License.