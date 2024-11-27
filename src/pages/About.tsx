import React, { useEffect } from 'react';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart, Shield, Target, Smile } from 'lucide-react';

export const About:React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const stats = [
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Clock, value: "200+", label: "Projects Completed" },
    { icon: Heart, value: "50+", label: "Design Awards" }
  ];

  const team = [
    {
      name: "Bigyan Adhikari",
      role: "Principal Designer",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      description: "With over 15 years of experience in traditional Nepali architecture"
    },
    {
      name: "Prakriti Phuyal",
      role: "Interior Architect",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
      description: "Specializes in blending modern design with cultural elements"
    },
    {
      name: "Saroj Budhathoki",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      description: "Ensures seamless execution of every project"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every detail"
    },
    {
      icon: Shield,
      title: "Heritage",
      description: "Preserving Nepal's rich architectural legacy"
    },
    {
      icon: Smile,
      title: "Client Focus",
      description: "Your vision drives our creative process"
    }
  ];

  return (
    <div>
      <PageHeader
        title="About Us"
        description="Creating spaces that celebrate Nepal's rich heritage"
        image="https://images.unsplash.com/photo-1600585152220-90363fe7e115"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in Kathmandu, कोठा Design Studio has been at the forefront of interior design in Nepal for over a decade. Our passion lies in creating spaces that honor Nepal's rich cultural heritage while embracing modern design principles.
            </p>
            <p className="text-gray-600 mb-4">
              We work with local artisans and craftsmen to preserve traditional techniques while incorporating contemporary elements that meet the needs of modern living. Our team of experts brings together years of experience in both traditional Nepali architecture and contemporary design.
            </p>
            <p className="text-gray-600">
              Every project we undertake is a journey of discovery, where we blend the timeless beauty of Nepali craftsmanship with innovative design solutions to create spaces that inspire and delight.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <Icon className="w-8 h-8 text-sage-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-sage-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-sage-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-sage-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};