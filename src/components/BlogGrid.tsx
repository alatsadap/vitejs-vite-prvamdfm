"use client"

import React, { useState } from "react"
import BlogCard from "@/components/BlogCard"
import { Button } from "@/components/ui/button"

interface BlogGridProps {
  posts: any[]
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  const [visible, setVisible] = useState(4)
  
  const loadMore = () => {
    setVisible(prev => Math.min(prev + 2, posts.length))
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.slice(0, visible).map((post) => (
          <BlogCard
            key={post._id}
            image={post.mainImage?.asset?.url || "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"}
            title={post.title}
            excerpt={post.excerpt}
            date={new Date(post.publishedAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
            slug={post.slug?.current || post.slug}
          />
        ))}
      </div>
      
      {visible < posts.length && (
        <div className="mt-10 text-center">
          <Button onClick={loadMore} className="glass hover:bg-primary/20">
            Load More Posts
          </Button>
        </div>
      )}
    </>
  )
}

export default BlogGrid