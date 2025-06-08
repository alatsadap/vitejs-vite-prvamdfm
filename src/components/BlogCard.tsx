
import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, excerpt, date, slug }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border rounded-xl overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{excerpt}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar size={16} className="mr-2" />
            <span>{date}</span>
          </div>
          <Link 
            to={`/blog/${slug}`}
            className="flex items-center text-primary hover:underline transition-colors"
          >
            Read More <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
