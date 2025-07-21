import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Linkedin, User, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">AgroConnect</span>
            </div>
            <p className="text-green-100 mb-4 max-w-md">
              Connecting farmers directly with customers, eliminating middlemen and ensuring fair pricing for everyone. 
              Building a sustainable agricultural ecosystem for the future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-green-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-green-100 hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/farmer-dashboard" className="text-green-100 hover:text-white transition-colors">Join as Farmer</Link></li>
              <li><Link to="/market-trends" className="text-green-100 hover:text-white transition-colors">Market Trends</Link></li>
              <li><Link to="/schemes" className="text-green-100 hover:text-white transition-colors">Government Schemes</Link></li>
              <li><Link to="/guidance" className="text-green-100 hover:text-white transition-colors">Expert Guidance</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-green-100 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/community" className="text-green-100 hover:text-white transition-colors">Community Forum</Link></li>
              <li><Link to="/donate" className="text-green-100 hover:text-white transition-colors">Donate</Link></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Developer Contact Info */}
        <div className="border-t border-green-700 mt-8 pt-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-400 mb-4">Developer Contact Information</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8">
              
              {/* Developer Name */}
              <div className="flex items-center space-x-2 text-green-100">
                <User className="w-5 h-5 text-green-400" />
                <span className="font-medium">Developed by:</span>
                <span>Anala Venkata Hema Nandini</span>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2 text-green-100">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="font-medium">Email:</span>
                <a 
                  href="mailto:nandiniajay193@gmail.com" 
                  className="text-green-300 hover:text-white transition-colors duration-200 hover:underline"
                >
                  nandiniajay193@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center space-x-2 text-green-100">
                <Linkedin className="w-5 h-5 text-green-400" />
                <span className="font-medium">LinkedIn:</span>
                <a 
                  href="https://linkedin.com/in/hema-nandini-anala-a46108289" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-green-300 hover:text-white transition-colors duration-200 hover:underline"
                >
                  linkedin.com/in/hema-nandini-anala-a46108289
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-6 pt-4 border-t border-green-700">
              <p className="text-sm text-green-200">
                © {new Date().getFullYear()} AgroConnect. All rights reserved. | 
                Developed by Anala Venkata Hema Nandini
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;