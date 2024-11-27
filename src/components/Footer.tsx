import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export const Footer:React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Interior Design',
    'Space Planning',
    'Furniture Design',
    'Color Consultation',
    'Renovation',
  ];

  return (
    <footer className="bg-sage-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-nepali mb-6">कोठा Design</h3>
            <p className="text-sage-200 mb-6">
              Bringing Nepali heritage into modern living spaces. We create designs that honor tradition while embracing contemporary comfort.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-sage-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="hover:text-sage-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="hover:text-sage-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sage-200 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-sage-200 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-sage-300" />
                <span className="text-sage-200">
                  Thamel, Kathmandu, Nepal<br />
                  Near Garden of Dreams
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-sage-300" />
                <span className="text-sage-200">+977 1 4XXXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-sage-300" />
                <span className="text-sage-200">info@nepalikotha.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sage-700 mt-12 pt-8 text-center text-sage-300">
          <p>© {new Date().getFullYear()} कोठा Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};