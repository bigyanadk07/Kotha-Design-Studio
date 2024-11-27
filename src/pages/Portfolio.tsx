import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'framer-motion';

export const Portfolio:React.FC = () => {
  const categories = ['All', 'Residential', 'Commercial', 'Historical'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: "Kathmandu Valley Residence",
      category: "Residential",
      description: "A modern home incorporating traditional Newari architecture elements",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      details: "3,500 sq ft | 4 months completion"
    },
    {
      title: "Thamel Boutique Hotel",
      category: "Commercial",
      description: "Luxury meets tradition in this boutique hotel design",
      image: "https://i.pinimg.com/736x/77/10/ad/7710ad902005a5fa0b2cb373bfcaa39b.jpg",
      details: "12 rooms | Heritage renovation"
    },
    {
      title: "Pokhara Lakeside Villa",
      category: "Residential",
      description: "Contemporary design with panoramic lake views",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      details: "4,200 sq ft | Sustainable design"
    },
    {
      title: "Patan Heritage Home",
      category: "Historical",
      description: "Careful restoration of a 100-year-old Newari house",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
      details: "Historical preservation | Modern amenities"
    },
    {
      title: "Bhaktapur Restaurant",
      category: "Commercial",
      description: "Traditional dining experience in a contemporary setting",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      details: "200 seating capacity | Cultural themes"
    },
    {
      title: "Mountain View Retreat",
      category: "Residential",
      description: "Luxury mountain home with traditional touches",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      details: "5,000 sq ft | Panoramic views"
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div>
      <PageHeader
        title="Our Portfolio"
        description="Showcasing our finest work across Nepal"
        image="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-sage-600 text-white'
                  : 'bg-sage-100 text-sage-600 hover:bg-sage-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-sage-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sage-100 mb-2">{project.description}</p>
                  <p className="text-sm text-sage-200">{project.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};