import React, { useState } from 'react';
import { BookOpen, Video, Download, Search, Calendar, User, Star, ExternalLink } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorType: 'expert' | 'farmer';
  category: string;
  readTime: number;
  publishDate: string;
  rating: number;
  image: string;
  tags: string[];
}

const GuidancePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const articles: Article[] = [
    {
      id: '1',
      title: 'Complete Guide to Organic Farming: From Soil to Harvest',
      excerpt: 'Learn the fundamentals of organic farming, including soil preparation, natural pest control, and certification processes.',
      author: 'Dr. Rajesh Verma',
      authorType: 'expert',
      category: 'organic-farming',
      readTime: 12,
      publishDate: '2024-01-15',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['organic', 'soil-health', 'certification']
    },
    {
      id: '2',
      title: 'Water Management Techniques for Sustainable Agriculture',
      excerpt: 'Discover efficient irrigation methods, rainwater harvesting, and drought-resistant farming practices.',
      author: 'Priya Sharma',
      authorType: 'expert',
      category: 'water-management',
      readTime: 8,
      publishDate: '2024-01-12',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['irrigation', 'water-conservation', 'sustainability']
    },
    {
      id: '3',
      title: 'Crop Rotation Strategies for Maximum Yield',
      excerpt: 'Understanding the science behind crop rotation and how to implement effective rotation schedules.',
      author: 'Amit Patel',
      authorType: 'farmer',
      category: 'crop-management',
      readTime: 10,
      publishDate: '2024-01-10',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['rotation', 'yield', 'planning']
    },
    {
      id: '4',
      title: 'Natural Pest Control Methods That Actually Work',
      excerpt: 'Effective biological and organic pest control techniques to protect your crops without harmful chemicals.',
      author: 'Dr. Sunita Devi',
      authorType: 'expert',
      category: 'pest-control',
      readTime: 15,
      publishDate: '2024-01-08',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['pest-control', 'organic', 'natural-methods']
    },
    {
      id: '5',
      title: 'Digital Marketing for Farmers: Selling Direct to Consumers',
      excerpt: 'Learn how to use social media, online platforms, and digital tools to market your produce directly.',
      author: 'Ravi Kumar',
      authorType: 'farmer',
      category: 'marketing',
      readTime: 6,
      publishDate: '2024-01-05',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['marketing', 'digital', 'direct-sales']
    },
    {
      id: '6',
      title: 'Climate-Smart Agriculture: Adapting to Changing Weather',
      excerpt: 'Strategies to make your farm resilient to climate change and extreme weather conditions.',
      author: 'Dr. Meera Joshi',
      authorType: 'expert',
      category: 'climate-adaptation',
      readTime: 11,
      publishDate: '2024-01-03',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['climate-change', 'adaptation', 'resilience']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'organic-farming', name: 'Organic Farming' },
    { id: 'water-management', name: 'Water Management' },
    { id: 'crop-management', name: 'Crop Management' },
    { id: 'pest-control', name: 'Pest Control' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'climate-adaptation', name: 'Climate Adaptation' }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getAuthorBadge = (authorType: string) => {
    return authorType === 'expert' 
      ? 'bg-purple-100 text-purple-800' 
      : 'bg-green-100 text-green-800';
  };

  const expertResources = [
    {
      title: 'Agricultural Extension Services',
      description: 'Connect with local agricultural extension officers for personalized guidance.',
      contact: '+91 98765 43210',
      type: 'phone'
    },
    {
      title: 'Soil Testing Labs',
      description: 'Find certified soil testing laboratories in your area.',
      contact: 'soiltest@agroconnect.com',
      type: 'email'
    },
    {
      title: 'Weather Advisory Services',
      description: 'Get real-time weather updates and farming advisories.',
      contact: 'weather.agroconnect.com',
      type: 'website'
    },
    {
      title: 'Organic Certification Bodies',
      description: 'List of authorized organic certification agencies.',
      contact: 'certification@agroconnect.com',
      type: 'email'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Expert Guidance & Resources</h1>
            <p className="text-xl text-green-100 mb-8">
              Access expert advice, tutorials, and resources to improve your farming practices
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-3 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for farming guides, tips, and resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Articles */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map(article => (
                <article key={article.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getAuthorBadge(article.authorType)}`}>
                        {article.authorType === 'expert' ? '👨‍🔬 Expert' : '🌾 Farmer'}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{article.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-green-600 cursor-pointer">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <span>{article.readTime} min read</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-1">
                        <span>Read More</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Featured Resources */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Featured Resources</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <Video className="w-6 h-6 text-green-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Video Tutorials</h3>
                      <p className="text-sm text-gray-600">Step-by-step farming guides</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Download className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">PDF Guides</h3>
                      <p className="text-sm text-gray-600">Downloadable farming manuals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Research Papers</h3>
                      <p className="text-sm text-gray-600">Latest agricultural research</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Contacts */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Expert Resources</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {expertResources.map((resource, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                      <div className="flex items-center space-x-2 text-sm">
                        {resource.type === 'phone' && <span className="text-green-600">📞</span>}
                        {resource.type === 'email' && <span className="text-blue-600">✉️</span>}
                        {resource.type === 'website' && <span className="text-purple-600">🌐</span>}
                        <span className="text-gray-700">{resource.contact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Popular Topics</h2>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {['organic', 'irrigation', 'pest-control', 'soil-health', 'marketing', 'certification', 'climate-change', 'yield'].map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 text-sm rounded-full transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-green-600 text-white rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-2">Stay Updated</h2>
                <p className="text-green-100 text-sm mb-4">
                  Get the latest farming tips and expert advice delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
                  />
                  <button className="w-full bg-white text-green-600 py-2 px-4 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidancePage;