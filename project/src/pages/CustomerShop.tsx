import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingCart, Heart, Truck, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  farmer: string;
  rating: number;
  reviews: number;
  category: string;
  organic: boolean;
  inStock: boolean;
  description: string;
}

const CustomerShop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [wishlist, setWishlist] = useState<string[]>([]);
  
  const { addToCart } = useCart();

  const products: Product[] = [
    {
      id: '1',
      name: 'Organic Tomatoes',
      price: 45,
      originalPrice: 60,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Rajesh Kumar',
      rating: 4.8,
      reviews: 124,
      category: 'vegetables',
      organic: true,
      inStock: true,
      description: 'Fresh organic tomatoes grown without pesticides'
    },
    {
      id: '2',
      name: 'Fresh Carrots',
      price: 35,
      image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Priya Sharma',
      rating: 4.6,
      reviews: 89,
      category: 'vegetables',
      organic: true,
      inStock: true,
      description: 'Crunchy and sweet carrots perfect for cooking'
    },
    {
      id: '3',
      name: 'Organic Honey',
      price: 250,
      originalPrice: 300,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Amit Patel',
      rating: 4.9,
      reviews: 156,
      category: 'organic',
      organic: true,
      inStock: true,
      description: 'Pure raw honey from local beekeepers'
    },
    {
      id: '4',
      name: 'Fresh Milk',
      price: 55,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Sunita Devi',
      rating: 4.7,
      reviews: 203,
      category: 'dairy',
      organic: true,
      inStock: true,
      description: 'Fresh cow milk from grass-fed cows'
    },
    {
      id: '5',
      name: 'Organic Fertilizer',
      price: 120,
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Green Earth Co.',
      rating: 4.5,
      reviews: 67,
      category: 'fertilizers',
      organic: true,
      inStock: true,
      description: 'Natural compost fertilizer for healthy plants'
    },
    {
      id: '6',
      name: 'Fresh Apples',
      price: 80,
      originalPrice: 100,
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Kashmir Orchards',
      rating: 4.8,
      reviews: 145,
      category: 'fruits',
      organic: true,
      inStock: true,
      description: 'Crisp and juicy apples from Kashmir valleys'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'dairy', name: 'Dairy' },
    { id: 'organic', name: 'Organic Products' },
    { id: 'fertilizers', name: 'Fertilizers' }
  ];

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return a.name.localeCompare(b.name);
      }
    });

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      farmer: product.farmer
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Fresh from Farm to Your Table</h1>
            <p className="text-xl text-green-100 mb-8">
              Shop organic, fresh produce directly from local farmers
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-3 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for fresh produce, dairy, organic products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-green-100 text-green-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Features */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Shop With Us?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Quality Assured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-red-600" />
                  <span className="text-sm text-gray-700">Support Farmers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">{filteredProducts.length} products found</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {product.originalPrice && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </div>
                    )}
                    {product.organic && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                        ORGANIC
                      </div>
                    )}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute bottom-2 right-2 p-2 rounded-full transition-colors ${
                        wishlist.includes(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
                      }`}
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">by {product.farmer}</p>
                    <p className="text-sm text-gray-500 mb-3">{product.description}</p>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-green-600">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                        )}
                        <span className="text-sm text-gray-500">/kg</span>
                      </div>
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                        className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerShop;