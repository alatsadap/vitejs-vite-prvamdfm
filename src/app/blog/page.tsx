import Layout from "@/components/layout/Layout"
import SectionHeading from "@/components/SectionHeading"
import BlogGrid from "@/components/BlogGrid"
import { client } from "@/lib/sanity"
import { groq } from "next-sanity"

async function getBlogPosts() {
  try {
    const posts = await client.fetch(
      groq`*[_type == "post"] | order(publishedAt desc) {
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

export default async function Blog() {
  const posts = await getBlogPosts()

  // Fallback posts if Sanity is not set up yet
  const fallbackPosts = [
    {
      _id: "1",
      title: "5 Essential Tips for Solo Travelers",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
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
      excerpt: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus. Nullam sit amet nisi condimentum erat iaculis auctor.",
      publishedAt: "2023-04-22",
      slug: { current: "photography-gear-for-travel" },
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
        }
      }
    },
    {
      _id: "3",
      title: "Digital Nomad Life: Working From Paradise",
      excerpt: "Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices.",
      publishedAt: "2023-03-08",
      slug: { current: "digital-nomad-life" },
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828"
        }
      }
    },
    {
      _id: "4",
      title: "Budget Travel: How to See the World for Less",
      excerpt: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
      publishedAt: "2023-02-14",
      slug: { current: "budget-travel-tips" },
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3"
        }
      }
    },
    {
      _id: "5",
      title: "Cultural Immersion: Living Like a Local",
      excerpt: "Suspendisse id sem consectetuer libero luctus adipiscing. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus.",
      publishedAt: "2023-01-20",
      slug: { current: "cultural-immersion-guide" },
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828"
        }
      }
    },
    {
      _id: "6",
      title: "Mountain Adventures: Hiking Safety Guide",
      excerpt: "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.",
      publishedAt: "2022-12-15",
      slug: { current: "mountain-hiking-safety" },
      mainImage: {
        asset: {
          url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
        }
      }
    }
  ]

  const postsToShow = posts.length > 0 ? posts : fallbackPosts

  return (
    <Layout>
      <SectionHeading 
        title="Blog Posts" 
        subtitle="Thoughts, stories and experiences from my travels and adventures"
      />
      
      <BlogGrid posts={postsToShow} />
    </Layout>
  )
}