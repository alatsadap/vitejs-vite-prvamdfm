
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowLeft, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Tips for Solo Travelers",
    date: "May 15, 2023",
    slug: "tips-for-solo-travelers",
    content: `
# 5 Essential Tips for Solo Travelers

Lorem ipsum dolor sit amet, **consectetur adipiscing elit**. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## 1. Plan Your Route but Stay Flexible

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## 2. Pack Light and Smart

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

## 3. Stay Connected

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

## 4. Trust Your Instincts

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

## 5. Embrace the Unexpected

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
    `
  },
  {
    id: 2,
    title: "My Favorite Photography Gear for Travel",
    date: "April 22, 2023",
    slug: "photography-gear-for-travel",
    content: `
# My Favorite Photography Gear for Travel

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; **Mauris viverra veniam** sit amet lacus cursus. Nullam sit amet nisi condimentum erat iaculis auctor.

## Essential Camera Equipment

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

### 1. Camera Body
- Mirrorless cameras are lighter
- Better battery life for long trips
- Weather sealing is important

### 2. Lenses
- 24-70mm for versatility
- 16-35mm for landscapes
- 85mm for portraits

## Accessories That Matter

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

> "The best camera is the one you have with you" - Chase Jarvis

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>
        
        <article className="glass p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-muted-foreground">
              <Calendar size={16} className="mr-2" />
              <span>{post.date}</span>
            </div>
          </header>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index} className="text-2xl font-bold mt-8 mb-4">{line.substring(2)}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={index} className="text-xl font-semibold mt-6 mb-3">{line.substring(3)}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={index} className="text-lg font-medium mt-4 mb-2">{line.substring(4)}</h3>;
              }
              if (line.startsWith('> ')) {
                return <blockquote key={index} className="border-l-4 border-primary pl-4 italic my-4">{line.substring(2)}</blockquote>;
              }
              if (line.startsWith('- ')) {
                return <li key={index} className="ml-4">{line.substring(2)}</li>;
              }
              if (line.trim() === '') {
                return <br key={index} />;
              }
              
              // Handle bold text
              const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              
              return <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: boldText }} />;
            })}
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost;
