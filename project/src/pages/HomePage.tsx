import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Leaf, Users, TrendingUp, Shield, Heart, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Fresh Organic Vegetables',
      subtitle: 'Direct from Farm to Your Table',
      discount: '20% OFF'
    },
    {
      url: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Premium Quality Fruits',
      subtitle: 'Handpicked by Local Farmers',
      discount: '15% OFF'
    },
    {
      url: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Organic Dairy Products',
      subtitle: 'Pure & Natural Goodness',
      discount: '25% OFF'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                    {image.discount}
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{image.title}</h1>
                  <p className="text-xl md:text-2xl mb-8">{image.subtitle}</p>
                  <Link
                    to="/shop"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Shop Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="w-12 h-12 text-green-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">Welcome to AgroConnect</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Bridging the gap between farmers and customers, eliminating middlemen to ensure fair pricing 
            and fresh produce. Join our community-driven platform that supports sustainable agriculture 
            and empowers local farmers.
          </p>
          
          {/* Quick Navigation Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              to="/register"
              className="bg-green-600 hover:bg-green-700 text-white p-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              <Leaf className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Join as Farmer</h3>
              <p className="text-green-100">
                List your crops, connect with customers, and get fair prices for your produce
              </p>
            </Link>
            
            <Link
              to="/shop"
              className="bg-blue-600 hover:bg-blue-700 text-white p-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              <Users className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Shop as Customer</h3>
              <p className="text-blue-100">
                Buy fresh, organic produce directly from local farmers at fair prices
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose AgroConnect?</h2>
            <p className="text-xl text-gray-600">Empowering farmers and customers through direct connections</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Lab-certified organic produce with quality guarantees</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Transparent pricing without middleman markups</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600">Supporting local farmers and sustainable agriculture</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh & Healthy</h3>
              <p className="text-gray-600">Farm-fresh produce delivered to your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Registered Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">50+</div>
              <div className="text-gray-600">Crop Varieties</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of farmers and customers who trust AgroConnect for their agricultural needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Register Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;