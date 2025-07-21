import React, { useState } from 'react';
import { Plus, Edit, Trash2, Upload, Star, MapPin, Calendar, DollarSign } from 'lucide-react';

interface Crop {
  id: string;
  name: string;
  type: string;
  quantity: number;
  price: number;
  status: 'available' | 'sold' | 'pending';
  image: string;
  certification: string;
  harvestDate: string;
  rating: number;
}

const FarmerDashboard = () => {
  const [crops, setCrops] = useState<Crop[]>([
    {
      id: '1',
      name: 'Organic Tomatoes',
      type: 'Vegetable',
      quantity: 100,
      price: 45,
      status: 'available',
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      certification: 'Organic Certified',
      harvestDate: '2024-01-15',
      rating: 4.8
    },
    {
      id: '2',
      name: 'Fresh Carrots',
      type: 'Vegetable',
      quantity: 50,
      price: 35,
      status: 'pending',
      image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400',
      certification: 'Lab Tested',
      harvestDate: '2024-01-10',
      rating: 4.6
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newCrop, setNewCrop] = useState({
    name: '',
    type: '',
    quantity: 0,
    price: 0,
    certification: '',
    harvestDate: ''
  });

  const handleAddCrop = (e: React.FormEvent) => {
    e.preventDefault();
    const crop: Crop = {
      id: Date.now().toString(),
      ...newCrop,
      status: 'available',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 0
    };
    setCrops([...crops, crop]);
    setNewCrop({ name: '', type: '', quantity: 0, price: 0, certification: '', harvestDate: '' });
    setShowAddForm(false);
  };

  const deleteCrop = (id: string) => {
    setCrops(crops.filter(crop => crop.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'sold': return 'bg-gray-100 text-gray-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const cropSuggestions = [
    { name: 'Wheat', season: 'Winter', region: 'North India', profit: 'High' },
    { name: 'Rice', season: 'Monsoon', region: 'East India', profit: 'Medium' },
    { name: 'Cotton', season: 'Summer', region: 'Central India', profit: 'High' },
    { name: 'Sugarcane', season: 'Year-round', region: 'Maharashtra', profit: 'Very High' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Farmer Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage your crops and track your sales</p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Add New Crop</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹12,450</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Listings</p>
                <p className="text-2xl font-bold text-gray-900">{crops.filter(c => c.status === 'available').length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.7</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Orders</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Crop Listings */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Your Crop Listings</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {crops.map((crop) => (
                    <div key={crop.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-4">
                        <img
                          src={crop.image}
                          alt={crop.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">{crop.name}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(crop.status)}`}>
                              {crop.status}
                            </span>
                          </div>
                          <p className="text-gray-600">{crop.type} • {crop.quantity} kg available</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-lg font-bold text-green-600">₹{crop.price}/kg</span>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600 ml-1">{crop.rating}</span>
                            </div>
                            <span className="text-sm text-gray-500">{crop.certification}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteCrop(crop.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Crop Suggestions */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Crop Suggestions</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {cropSuggestions.map((suggestion, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900">{suggestion.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Season: {suggestion.season}
                      </p>
                      <p className="text-sm text-gray-600">
                        Region: {suggestion.region}
                      </p>
                      <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                        suggestion.profit === 'Very High' ? 'bg-green-100 text-green-800' :
                        suggestion.profit === 'High' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {suggestion.profit} Profit
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Upload className="w-5 h-5 text-blue-600" />
                    <span>Upload Certification</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-600" />
                    <span>View Reviews</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span>Payment History</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add Crop Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Crop</h2>
              <form onSubmit={handleAddCrop} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Crop Name</label>
                  <input
                    type="text"
                    value={newCrop.name}
                    onChange={(e) => setNewCrop({...newCrop, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    value={newCrop.type}
                    onChange={(e) => setNewCrop({...newCrop, type: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">Select type</option>
                    <option value="Vegetable">Vegetable</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Grain">Grain</option>
                    <option value="Dairy">Dairy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity (kg)</label>
                  <input
                    type="number"
                    value={newCrop.quantity}
                    onChange={(e) => setNewCrop({...newCrop, quantity: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price per kg (₹)</label>
                  <input
                    type="number"
                    value={newCrop.price}
                    onChange={(e) => setNewCrop({...newCrop, price: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Certification</label>
                  <input
                    type="text"
                    value={newCrop.certification}
                    onChange={(e) => setNewCrop({...newCrop, certification: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="e.g., Organic Certified"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Harvest Date</label>
                  <input
                    type="date"
                    value={newCrop.harvestDate}
                    onChange={(e) => setNewCrop({...newCrop, harvestDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="flex space-x-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    Add Crop
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md transition-colors"
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

export default FarmerDashboard;