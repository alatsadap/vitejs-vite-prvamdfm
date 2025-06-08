
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import TravelCard from "@/components/TravelCard";
import RoadTimeline from "@/components/RoadTimeline";
import { Button } from "@/components/ui/button";

const travelDestinations = [
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
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    title: "Norwegian Fjords",
    description: "Sailing through the stunning fjords of Norway, surrounded by towering cliffs and waterfalls.",
    date: "July 2022"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    title: "Japanese Cherry Blossoms",
    description: "Experiencing the magical sakura season in Japan, with pink cherry blossoms covering the cities and countryside.",
    date: "April 2022"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "Peruvian Andes",
    description: "Trekking through the ancient Inca trails and visiting Machu Picchu in the heart of the Andes mountains.",
    date: "March 2022"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    title: "Canadian Rockies",
    description: "Exploring the pristine wilderness and turquoise lakes of Banff and Jasper National Parks.",
    date: "September 2021"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    title: "Iceland's Ring Road",
    description: "Road tripping around Iceland's famous Ring Road, discovering waterfalls, glaciers, and volcanic landscapes.",
    date: "August 2021"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    title: "New Zealand Adventures",
    description: "Exploring both islands of New Zealand, from Hobbiton to Milford Sound and everything in between.",
    date: "February 2021"
  }
];

const Travel = () => {
  const [visible, setVisible] = useState(6);
  
  const loadMore = () => {
    setVisible(prev => Math.min(prev + 3, travelDestinations.length));
  };
  
  return (
    <Layout>
      <SectionHeading 
        title="Travel Adventures" 
        subtitle="Places I've visited and experiences that have shaped my world view"
      />

      {/* Road Timeline Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-2">Journey Timeline</h3>
          <p className="text-muted-foreground">Follow my travel journey through time</p>
        </div>
        <RoadTimeline />
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {travelDestinations.slice(0, visible).map((destination) => (
          <TravelCard
            key={destination.id}
            image={destination.image}
            title={destination.title}
            description={destination.description}
            date={destination.date}
          />
        ))}
      </div>
      
      {visible < travelDestinations.length && (
        <div className="mt-10 text-center">
          <Button onClick={loadMore} className="glass hover:bg-primary/20">
            Load More
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default Travel;
