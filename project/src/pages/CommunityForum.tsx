import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Reply, Search, Plus, Calendar, User } from 'lucide-react';

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  authorType: 'farmer' | 'customer' | 'expert';
  category: string;
  likes: number;
  replies: number;
  createdAt: string;
  tags: string[];
}

const CommunityForum = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);

  const forumPosts: ForumPost[] = [
    {
      id: '1',
      title: 'Best practices for organic tomato farming',
      content: 'I\'ve been growing tomatoes for 5 years and want to share some tips that have worked well for me. First, soil preparation is crucial...',
      author: 'Rajesh Kumar',
      authorType: 'farmer',
      category: 'farming-tips',
      likes: 24,
      replies: 8,
      createdAt: '2024-01-15',
      tags: ['organic', 'tomatoes', 'tips']
    },
    {
      id: '2',
      title: 'How to identify fresh vegetables when buying?',
      content: 'As a customer, I sometimes struggle to identify the freshest produce. What should I look for when buying vegetables directly from farmers?',
      author: 'Priya Sharma',
      authorType: 'customer',
      category: 'buying-guide',
      likes: 18,
      replies: 12,
      createdAt: '2024-01-14',
      tags: ['fresh', 'vegetables', 'quality']
    },
    {
      id: '3',
      title: 'Seasonal crop rotation strategies',
      content: 'Crop rotation is essential for maintaining soil health. Here\'s a comprehensive guide on how to plan your crop rotation for maximum yield...',
      author: 'Dr. Amit Patel',
      authorType: 'expert',
      category: 'farming-tips',
      likes: 35,
      replies: 15,
      createdAt: '2024-01-13',
      tags: ['rotation', 'soil-health', 'planning']
    },
    {
      id: '4',
      title: 'Dealing with pest control naturally',
      content: 'Chemical pesticides can be harmful. I\'ve found several natural methods that work effectively against common pests...',
      author: 'Sunita Devi',
      authorType: 'farmer',
      category: 'pest-control',
      likes: 29,
      replies: 10,
      createdAt: '2024-01-12',
      tags: ['natural', 'pest-control', 'organic']
    },
    {
      id: '5',
      title: 'Setting up a home kitchen garden',
      content: 'For customers interested in growing their own herbs and small vegetables, here\'s a beginner\'s guide to setting up a kitchen garden...',
      author: 'Green Thumb Expert',
      authorType: 'expert',
      category: 'home-gardening',
      likes: 42,
      replies: 20,
      createdAt: '2024-01-11',
      tags: ['kitchen-garden', 'beginner', 'herbs']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: forumPosts.length },
    { id: 'farming-tips', name: 'Farming Tips', count: 2 },
    { id: 'buying-guide', name: 'Buying Guide', count: 1 },
    { id: 'pest-control', name: 'Pest Control', count: 1 },
    { id: 'home-gardening', name: 'Home Gardening', count: 1 },
    { id: 'market-discussion', name: 'Market Discussion', count: 0 },
    { id: 'success-stories', name: 'Success Stories', count: 0 }
  ];

  const filteredPosts = forumPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getAuthorBadge = (authorType: string) => {
    switch (authorType) {
      case 'farmer':
        return 'bg-green-100 text-green-800';
      case 'customer':
        return 'bg-blue-100 text-blue-800';
      case 'expert':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAuthorIcon = (authorType: string) => {
    switch (authorType) {
      case 'farmer':
        return '🌾';
      case 'customer':
        return '🛒';
      case 'expert':
        return '👨‍🔬';
      default:
        return '👤';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Community Forum</h1>
            <p className="text-xl text-green-100">
              Connect, share knowledge, and learn from fellow farmers and customers
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and New Post */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search discussions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              onClick={() => setShowNewPost(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>New Discussion</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-green-100 text-green-800'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-white rounded-lg shadow-sm mt-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Community Stats</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Discussions</span>
                    <span className="font-semibold">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Members</span>
                    <span className="font-semibold">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expert Contributors</span>
                    <span className="font-semibold">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">This Week</span>
                    <span className="font-semibold">12 new posts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Forum Posts */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-green-600 cursor-pointer">
                          {post.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAuthorBadge(post.authorType)}`}>
                              {getAuthorIcon(post.authorType)} {post.authorType}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {post.content}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
                          <Reply className="w-4 h-4" />
                          <span>{post.replies} replies</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span>Join Discussion</span>
                        </button>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No discussions found</h3>
                  <p className="text-gray-600 mb-6">
                    {searchTerm ? 'Try adjusting your search terms' : 'Be the first to start a discussion in this category!'}
                  </p>
                  <button
                    onClick={() => setShowNewPost(true)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Start New Discussion
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* New Post Modal */}
        {showNewPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Start New Discussion</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="What would you like to discuss?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Select a category</option>
                    {categories.slice(1).map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                  <textarea
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Share your thoughts, questions, or experiences..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tags (optional)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Add tags separated by commas (e.g., organic, tips, beginner)"
                  />
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors"
                  >
                    Post Discussion
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowNewPost(false)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 px-4 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityForum;