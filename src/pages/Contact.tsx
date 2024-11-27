import React, { useEffect } from 'react';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, Home, Users } from 'lucide-react';

export const Contact:React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Thamel, Kathmandu, Nepal",
      subDetails: "Near Garden of Dreams"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+977 1 4XXXXXX",
      subDetails: "Mon-Sat, 9:00-18:00"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@nepalikotha.com",
      subDetails: "24/7 online support"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: "Mon - Sat: 9:00 - 18:00",
      subDetails: "Closed on public holidays"
    }
  ];

  const services = [
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description: "Book a free 30-minute consultation with our design experts"
    },
    {
      icon: Calendar,
      title: "Site Visits",
      description: "Schedule an on-site assessment of your space"
    },
    {
      icon: Home,
      title: "Virtual Tours",
      description: "Experience our completed projects through virtual tours"
    },
    {
      icon: Users,
      title: "Meet the Team",
      description: "Connect with our designers and craftsmen"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Get in touch to start your design journey"
        image="https://images.unsplash.com/photo-1600494603989-9650cf6dad51"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-sage-900 mb-4">Let's Create Something Beautiful Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're looking to renovate your home, design a commercial space, or simply want to learn more about our services, we're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sage-500 focus:border-sage-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray -300 rounded-lg focus:ring-sage-500 focus:border-sage-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sage-500 focus:border-sage-500"
                  placeholder="+977 XXXXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sage-500 focus:border-sage-500">
                  <option value="">Select a service</option>
                  <option value="interior-design">Interior Design</option>
                  <option value="renovation">Renovation</option>
                  <option value="consultation">Consultation</option>
                  <option value="furniture">Custom Furniture</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sage-500 focus:border-sage-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-sage-600 text-white py-3 px-6 rounded-lg hover:bg-sage-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <Icon className="w-8 h-8 text-sage-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    <p className="text-gray-600 mb-1">{info.details}</p>
                    <p className="text-sm text-gray-500">{info.subDetails}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-sage-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <div className="space-y-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-white p-2 rounded-lg">
                        <Icon className="w-6 h-6 text-sage-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2704860613254!2d85.31234571506268!3d27.714843982787677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4f7%3A0x58099b8d57ed8a7a!2sThamel%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1645523456789!5m2!1sen!2snp"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};