import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { motion } from 'framer-motion';
import { Palette, Armchair, Users, ArrowRight, Star, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';


export const Home:React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const features = [
    {
      icon: <Palette className="w-8 h-8 text-sage-600" />,
      title: "Nepali Aesthetics",
      description: "Blending traditional Nepali design elements with modern comfort, incorporating authentic materials and patterns"
    },
    {
      icon: <Armchair className="w-8 h-8 text-sage-600" />,
      title: "Custom Furniture",
      description: "Handcrafted pieces inspired by Nepali craftsmanship, using local wood and traditional carving techniques"
    },
    {
      icon: <Users className="w-8 h-8 text-sage-600" />,
      title: "Expert Team",
      description: "Local artisans and international designers working together to create unique, culturally-rich spaces"
    }
  ];

  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Homeowner",
      content: "कोठा transformed our home into a perfect blend of traditional Nepali elements and modern comfort. Their attention to detail is remarkable.",
      rating: 5
    },
    {
      name: "Priya Adhikari",
      role: "Business Owner",
      content: "Working with कोठा for our boutique hotel was an amazing experience. They captured the essence of Nepal perfectly.",
      rating: 5
    },
    {
      name: "Rajesh Thapa",
      role: "Restaurant Owner",
      content: "The team's understanding of both traditional and contemporary design elements made our restaurant stand out.",
      rating: 5
    }
  ];

  return (
    <div>
      <Hero />
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-sage-900 mb-4">Why Choose कोठा Design?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring together Nepal's rich architectural heritage with contemporary design principles to create spaces that tell your story.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-sage-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how we've transformed spaces across Nepal, from modern apartments in Kathmandu to traditional homes in Pokhara.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Thamel Heritage Hotel",
                description: "A boutique hotel that celebrates Nepal's architectural heritage",
                image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
              },
              {
                title: "Pokhara Lake House",
                description: "Modern living with panoramic mountain views",
                image: "https://i.pinimg.com/736x/00/c2/78/00c2783dab41fb6edb0b663d094ba8a5.jpg"
              },
              {
                title: "Patan Residence",
                description: "Traditional elements meet contemporary design",
                image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea"
              }
            ].map((project, item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item * 0.2 }}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-sage-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4">{project.description}</p>
                    <Link to="/portfolio" className="inline-flex items-center text-white hover:text-sage-200">
                      View Project <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with कोठा Design Studio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sage-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">10+</div>
              <div>Years of Experience</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <div>Happy Clients</div>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">200+</div>
              <div>Projects Completed</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">50+</div>
              <div>Design Awards</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};