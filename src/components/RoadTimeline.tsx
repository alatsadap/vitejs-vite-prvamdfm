"use client"

import React, { useEffect, useRef, useState } from "react"
import { MapPin, Calendar } from "lucide-react"
import Image from "next/image"

interface TimelineItem {
  id: number
  destination: string
  country: string
  date: string
  description: string
  image: string
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    destination: "Swiss Alps",
    country: "Switzerland",
    date: "June 2023",
    description: "Breathtaking mountain views and charming villages",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
  },
  {
    id: 2,
    destination: "Bali",
    country: "Indonesia", 
    date: "October 2022",
    description: "Pristine beaches and rich cultural heritage",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
  },
  {
    id: 3,
    destination: "Yosemite",
    country: "USA",
    date: "August 2022",
    description: "Majestic valleys and towering granite cliffs",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    id: 4,
    destination: "Norwegian Fjords",
    country: "Norway",
    date: "July 2022",
    description: "Stunning fjords surrounded by waterfalls",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716"
  },
  {
    id: 5,
    destination: "Kyoto",
    country: "Japan",
    date: "April 2022",
    description: "Cherry blossoms and ancient temples",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
  }
]

const RoadTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0')
            setVisibleItems(prev => [...new Set([...prev, id])])
          }
        })
      },
      { threshold: 0.3 }
    )

    const items = timelineRef.current?.querySelectorAll('.timeline-item')
    items?.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={timelineRef} className="relative max-w-4xl mx-auto py-8">
      {/* Road Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full opacity-80"></div>
      
      {timelineData.map((item, index) => (
        <div
          key={item.id}
          data-id={item.id}
          className={`timeline-item relative flex items-center mb-12 transition-all duration-700 ${
            visibleItems.includes(item.id) 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          {/* Timeline Dot */}
          <div className={`absolute left-6 w-6 h-6 rounded-full border-4 border-white transition-all duration-500 ${
            visibleItems.includes(item.id) 
              ? 'bg-primary scale-110 shadow-lg' 
              : 'bg-muted scale-100'
          }`}>
            <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
              visibleItems.includes(item.id) 
                ? 'animate-ping bg-primary opacity-20' 
                : ''
            }`}></div>
          </div>

          {/* Content Card */}
          <div className={`ml-16 glass p-6 w-full group hover:scale-[1.02] transition-all duration-300 ${
            visibleItems.includes(item.id) ? 'animate-scale-in' : ''
          }`}>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0 relative">
                <Image
                  src={item.image}
                  alt={item.destination}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {item.destination}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin size={14} />
                      {item.country}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {item.date}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* End Marker */}
      <div className="relative flex items-center justify-center">
        <div className="absolute left-6 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
          <MapPin size={16} className="text-white" />
        </div>
        <div className="ml-16 glass p-4 text-center">
          <p className="text-sm text-muted-foreground">More adventures coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export default RoadTimeline