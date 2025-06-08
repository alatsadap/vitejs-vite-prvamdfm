import Layout from "@/components/layout/Layout"
import ProfileCard from "@/components/ProfileCard"
import TravelCard from "@/components/TravelCard"
import BlogCard from "@/components/BlogCard"
import SectionHeading from "@/components/SectionHeading"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { client } from "@/lib/sanity"
import { groq } from "next-sanity"

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
]

async function getRecentPosts() {
  try {
    const posts = await client.fetch(
      groq`*[_type == "post"] | order(publishedAt desc)[0...2] {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        mainImage {
          asset->{
            _id,
            url
          }
        }
      }`
    )
    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function Home() {
  const recentPosts = await getRecentPosts()

  // Fallback posts if Sanity is not set up yet
  const fallbackPosts = [
    {
      _id: "1",
      title: "5 Essential Tips for Solo Travelers",
      excerpt: "Traveling alone can be intimidating, but with these tips, you'll be ready to take on the world with confidence.",
      publishedAt: "2023-05-15",
      slug: { current: "tips-for-solo-travelers" },
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
        }
      }
    },
    {
      _id: "2",
      title: "My Favorite Photography Gear for Travel",
      excerpt: "A comprehensive guide to the camera equipment I use to capture my travel memories around the world.",
      publishedAt: "2023-04-22",
      slug: { current: "photography-gear-for-travel" },
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
        }
      }
    }
  ]

  const postsToShow = recentPosts.length > 0 ? recentPosts : fallbackPosts

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
          <Link href="/travel">
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
          {postsToShow.map((post) => (
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
        <div className="mt-10 text-center">
          <Link href="/blog">
            <Button className="bg-white dark:bg-gray-900 border hover:bg-gray-50 dark:hover:bg-gray-800 text-foreground">
              Read All Posts <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}