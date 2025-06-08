import { notFound } from 'next/navigation'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { ArrowLeft, Calendar } from "lucide-react"
import { client } from "@/lib/sanity"
import { groq } from "next-sanity"
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'

interface BlogPostProps {
  params: {
    slug: string
  }
}

async function getPost(slug: string) {
  try {
    const post = await client.fetch(
      groq`*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        body,
        mainImage {
          asset->{
            _id,
            url
          }
        }
      }`,
      { slug }
    )
    return post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

// Fallback posts for when Sanity is not set up
const fallbackPosts: { [key: string]: any } = {
  "tips-for-solo-travelers": {
    title: "5 Essential Tips for Solo Travelers",
    publishedAt: "2023-05-15",
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ]
      }
    ]
  },
  "photography-gear-for-travel": {
    title: "My Favorite Photography Gear for Travel",
    publishedAt: "2023-04-22",
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus. Nullam sit amet nisi condimentum erat iaculis auctor.'
          }
        ]
      }
    ]
  }
}

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-8">
          <Image
            src={urlForImage(value).url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-medium mt-4 mb-2">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="ml-4">{children}</li>,
    number: ({ children }: any) => <li className="ml-4">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noindex nofollow' : undefined}
          className="text-primary hover:underline"
        >
          {children}
        </a>
      )
    },
  },
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPost(params.slug) || fallbackPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
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
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </header>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.body ? (
              <PortableText value={post.body} components={components} />
            ) : (
              <p>Content coming soon...</p>
            )}
          </div>
        </article>
      </div>
    </Layout>
  )
}