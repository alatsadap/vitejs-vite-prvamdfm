
import React from "react";
import { Calendar } from "lucide-react";

interface TravelCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
}

const TravelCard: React.FC<TravelCardProps> = ({ image, title, description, date }) => {
  return (
    <div className="glass overflow-hidden group">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar size={16} className="mr-2" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
