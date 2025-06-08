
import React from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="Learn more about my journey, skills, and interests"
        />

        <div className="glass p-8 mb-10">
          <h3 className="text-xl font-semibold mb-4">Who Am I?</h3>
          <p className="mb-4">
            Hello! I'm Novita, a passionate traveler from Kediri. Exploring new places, meeting people from different backgrounds, 
            and experiencing diverse cultures have always been a big part of who I am.
          </p>
          <p className="mb-4">
            Traveling allows me to see the world from different perspectives, gain meaningful experiences, and create unforgettable memories. 
            Whether it's wandering through bustling cities or discovering hidden gems in nature, I enjoy every moment of the journey.
          </p>
          <p>
            This website is a space where I share my travel stories, personal insights, and favorite destinations with fellow explorers 
            who are just as passionate about seeing the world.
          </p>

        </div>

        <div className="glass p-8 mb-10">
          <h3 className="text-xl font-semibold mb-4">Wishlist Kota di Portugal</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Lisbon", "Porto", "Braga", "Guimarães", "Évora", "Sintra"].map((cities) => (
              <div key={cities} className="glass p-4 text-center hover:bg-primary/10">
                <p>{cities}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="glass p-8">
        <h3 className="text-xl font-semibold mb-4">My Journey</h3>
        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-semibold">2022 - Present</h4>
            <p className="text-muted-foreground mb-1">Exploring Southeast Asia</p>
            <p className="text-sm">
              Traveled across countries like Thailand, Vietnam, and Malaysia — experiencing local cultures, food, and hidden nature spots.
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-semibold">2020 - 2022</h4>
            <p className="text-muted-foreground mb-1">Cultural Discoveries in Indonesia</p>
            <p className="text-sm">
              Explored the beauty of my home country, from the beaches of Bali to the highlands of Toraja, learning traditions and local wisdom.
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-semibold">2018 - 2020</h4>
            <p className="text-muted-foreground mb-1">Solo Backpacking Adventures</p>
            <p className="text-sm">
              Started my solo travel journey, building confidence and independence while exploring places off the beaten path.
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-semibold">2014 - 2018</h4>
            <p className="text-muted-foreground mb-1">Travel Dreams Take Root</p>
            <p className="text-sm">
              The beginning of my passion for travel — inspired by stories, photos, and the desire to see the world with my own eyes.
            </p>
          </div>
        </div>
      </div>

      </div>
    </Layout>
  );
};

export default About;
