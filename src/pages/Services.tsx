import React, { useEffect } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ServiceCard } from '../components/ServiceCard';
import { PaintBucket, Ruler, Sofa, Palette, Home, Users, Brush, Lightbulb, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export const Services:React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const services = [
    {
      icon: PaintBucket,
      title: "Interior Painting",
      description: "Transform your spaces with traditional Nepali color schemes and modern finishes. We use eco-friendly paints and authentic techniques."
    },
    {
      icon: Ruler,
      title: "Space Planning",
      description: "Optimize your space according to Vastu Shastra principles, ensuring perfect harmony between traditional beliefs and modern functionality."
    },
    {
      icon: Sofa,
      title: "Furniture Design",
      description: "Custom-made furniture blending Nepali craftsmanship with modern comfort. Each piece tells a story of heritage and innovation."
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description: "Expert advice on color combinations that reflect Nepal's rich heritage, from vibrant festival colors to serene mountain hues."
    },
    {
      icon: Home,
      title: "Renovation",
      description: "Transform your space while preserving traditional elements. We specialize in updating historic properties with modern amenities."
    },
    {
      icon: Users,
      title: "Project Management",
      description: "End-to-end project handling by experienced professionals, ensuring timely delivery and quality craftsmanship."
    }
  ];

  const processSteps = [
    {
      icon: Camera,
      title: "Initial Consultation",
      description: "We begin with a detailed discussion of your vision, preferences, and requirements."
    },
    {
      icon: Brush,
      title: "Design Development",
      description: "Our team creates detailed designs incorporating Nepali elements with modern functionality."
    },
    {
      icon: Lightbulb,
      title: "Implementation",
      description: "Expert craftsmen bring the designs to life with attention to every detail."
    }
  ];

  return (
    <div>
      <PageHeader
        title="Our Services"
        description="Transforming spaces with Nepali heritage and modern design"
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-sage-900 mb-4">Comprehensive Design Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From concept to completion, we offer a full range of interior design services tailored to your needs and inspired by Nepal's rich cultural heritage.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-sage-900 mb-4 text-center">Our Design Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            We follow a structured approach to bring your vision to life, ensuring every project reflects your style and Nepal's rich design heritage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-sage-600" />
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-sage-200" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};