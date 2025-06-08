"use client"

import React, { useState } from "react"
import TravelCard from "@/components/TravelCard"
import { Button } from "@/components/ui/button"

interface TravelGridProps {
  destinations: any[]
}

const TravelGrid: React.FC<TravelGridProps> = ({ destinations }) => {
  const [visible, setVisible] = useState(6)
  
  const loadMore = () => {
    setVisible(prev => Math.min(prev + 3, destinations.length))
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.slice(0, visible).map((destination) => (
          <TravelCard
            key={destination.id}
            image={destination.image}
            title={destination.title}
            description={destination.description}
            date={destination.date}
          />
        ))}
      </div>
      
      {visible < destinations.length && (
        <div className="mt-10 text-center">
          <Button onClick={loadMore} className="glass hover:bg-primary/20">
            Load More
          </Button>
        </div>
      )}
    </>
  )
}

export default TravelGrid