
import React from "react";
import Layout from "@/components/layout/Layout";
import ProfileCard from "@/components/ProfileCard";
import TravelCard from "@/components/TravelCard";
import BlogCard from "@/components/BlogCard";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const travelHighlights = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Swiss Alps Adventure",
    description: "Exploring the breathtaking landscapes of Switzerland with incredible mountain views and charming villages.",
    date: "June 2023"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    title: "Bali Beaches",
    description: "Discovering the pristine beaches and rich culture of Bali, Indonesia's paradise island.",
    date: "October 2022"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Yosemite National Park",
    description: "Hiking through the majestic valleys and mountains of one of America's most beautiful national parks.",
    date: "August 2022"
  }
];

const recentPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    title: "5 Essential Tips for Solo Travelers",
    excerpt: "Traveling alone can be intimidating, but with these tips, you'll be ready to take on the world with confidence.",
    date: "May 15, 2023",
    slug: "tips-for-solo-travelers"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    title: "My Favorite Photography Gear for Travel",
    excerpt: "A comprehensive guide to the camera equipment I use to capture my travel memories around the world.",
    date: "April 22, 2023",
    slug: "photography-gear-for-travel"
  }
];

const Index = () => {
  return (
    <Layout>
      <section className="mb-20">
        <div className="max-w-6xl mx-auto">
          <ProfileCard />
        </div>
      </section>

      <section className="mb-20">
        <SectionHeading 
          title="Travel Highlights" 
          subtitle="Explore some of my favorite destinations from around the world"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelHighlights.map((destination) => (
            <TravelCard
              key={destination.id}
              image={destination.image}
              title={destination.title}
              description={destination.description}
              date={destination.date}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/travel">
            <Button className="bg-white dark:bg-gray-900 border hover:bg-gray-50 dark:hover:bg-gray-800 text-foreground">
              View All Destinations <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section>
        <SectionHeading 
          title="Latest Blog Posts" 
          subtitle="Thoughts, stories and ideas about travel and more"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentPosts.map((post) => (
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
        <div className="mt-10 text-center">
          <Link to="/blog">
            <Button className="bg-white dark:bg-gray-900 border hover:bg-gray-50 dark:hover:bg-gray-800 text-foreground">
              Read All Posts <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
