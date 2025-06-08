
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    title: "5 Essential Tips for Solo Travelers",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    date: "May 15, 2023",
    slug: "tips-for-solo-travelers",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    title: "My Favorite Photography Gear for Travel",
    excerpt: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus. Nullam sit amet nisi condimentum erat iaculis auctor.",
    date: "April 22, 2023",
    slug: "photography-gear-for-travel",
    content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus. Nullam sit amet nisi condimentum erat iaculis auctor. Sed dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    title: "Digital Nomad Life: Working From Paradise",
    excerpt: "Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices.",
    date: "March 8, 2023",
    slug: "digital-nomad-life",
    content: "Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3",
    title: "Budget Travel: How to See the World for Less",
    excerpt: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
    date: "February 14, 2023",
    slug: "budget-travel-tips",
    content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    title: "Cultural Immersion: Living Like a Local",
    excerpt: "Suspendisse id sem consectetuer libero luctus adipiscing. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus.",
    date: "January 20, 2023",
    slug: "cultural-immersion-guide",
    content: "Suspendisse id sem consectetuer libero luctus adipiscing. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    title: "Mountain Adventures: Hiking Safety Guide",
    excerpt: "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.",
    date: "December 15, 2022",
    slug: "mountain-hiking-safety",
    content: "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt."
  }
];

const Blog = () => {
  const [visible, setVisible] = useState(4);
  
  const loadMore = () => {
    setVisible(prev => Math.min(prev + 2, blogPosts.length));
  };

  return (
    <Layout>
      <SectionHeading 
        title="Blog Posts" 
        subtitle="Thoughts, stories and experiences from my travels and adventures"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.slice(0, visible).map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
      
      {visible < blogPosts.length && (
        <div className="mt-10 text-center">
          <Button onClick={loadMore} className="glass hover:bg-primary/20">
            Load More Posts
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default Blog;
