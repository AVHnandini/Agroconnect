import React, { useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, Calendar, Filter, Download } from 'lucide-react';

interface CropData {
  name: string;
  currentPrice: number;
  previousPrice: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  category: string;
  season: string;
  region: string;
}

const MarketTrends = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7days');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const cropData: CropData[] = [
    {
      name: 'Tomatoes',
      currentPrice: 45,
      previousPrice: 40,
      change: 12.5,
      trend: 'up',
      category: 'vegetables',
      season: 'Winter',
      region: 'Maharashtra'
    },
    {
      name: 'Onions',
      currentPrice: 35,
      previousPrice: 42,
      change: -16.7,
      trend: 'down',
      category: 'vegetables',
      season: 'Winter',
      region: 'Karnataka'
    },
    {
      name: 'Rice',
      currentPrice: 55,
      previousPrice: 53,
      change: 3.8,
      trend: 'up',
      category: 'grains',
      season: 'Monsoon',
      region: 'Punjab'
    },
    {
      name: 'Wheat',
      currentPrice: 48,
      previousPrice: 48,
      change: 0,
      trend: 'stable',
      category: 'grains',
      season: 'Winter',
      region: 'Uttar Pradesh'
    },
    {
      name: 'Apples',
      currentPrice: 120,
      previousPrice: 110,
      change: 9.1,
      trend: 'up',
      category: 'fruits',
      season: 'Winter',
      region: 'Himachal Pradesh'
    },
    {
      name: 'Bananas',
      currentPrice: 60,
      previousPrice: 65,
      change: -7.7,
      trend: 'down',
      category: 'fruits',
      season: 'Year-round',
      region: 'Tamil Nadu'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'grains', name: 'Grains' },
    { id: 'dairy', name: 'Dairy' }
  ];

  const periods = [
    { id: '7days', name: 'Last 7 Days' },
    { id: '30days', name: 'Last 30 Days' },
    { id: '3months', name: 'Last 3 Months' },
    { id: '1year', name: 'Last Year' }
  ];

  const filteredData = cropData.filter(crop => 
    selectedCategory === 'all' || crop.category === selectedCategory
  );

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-5 h-5 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-5 h-5 text-red-500" />;
      default:
        return <BarChart3 className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600 bg-green-50';
      case 'down':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const marketInsights = [
    {
      title: 'Seasonal Demand',
      description: 'Winter vegetables showing strong demand with prices trending upward.',
      impact: 'Positive',
      color: 'green'
    },
    {
      title: 'Weather Impact',
      description: 'Recent rainfall affecting onion prices in major growing regions.',
      impact: 'Negative',
      color: 'red'
    },
    {
      title: 'Export Opportunities',
      description: 'Rice exports showing promising growth in international markets.',
      impact: 'Positive',
      color: 'green'
    },
    {
      title: 'Supply Chain',
      description: 'Improved logistics reducing transportation costs for fruits.',
      impact: 'Positive',
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Market Trends & Analytics</h1>
            <p className="text-xl text-green-100">
              Stay informed with real-time crop prices and market insights
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filters:</span>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {periods.map(period => (
                  <option key={period.id} value={period.id}>
                    {period.name}
                  </option>
                ))}
              </select>
            </div>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export Data</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Price Trends Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Current Market Prices</h2>
                <p className="text-gray-600 mt-1">Prices in ₹ per kg • Updated 2 hours ago</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Crop
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Current Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Change
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Region
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Season
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData.map((crop, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {getTrendIcon(crop.trend)}
                            <span className="ml-3 text-sm font-medium text-gray-900">
                              {crop.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">₹{crop.currentPrice}</div>
                          <div className="text-sm text-gray-500">was ₹{crop.previousPrice}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTrendColor(crop.trend)}`}>
                            {crop.change > 0 ? '+' : ''}{crop.change}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {crop.region}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {crop.season}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Market Insights */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Market Insights</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {marketInsights.map((insight, index) => (
                    <div key={index} className="border-l-4 border-green-400 pl-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          insight.color === 'green' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {insight.impact}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Quick Stats</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Trending Up</span>
                    <span className="font-semibold text-green-600">
                      {filteredData.filter(c => c.trend === 'up').length} crops
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Trending Down</span>
                    <span className="font-semibold text-red-600">
                      {filteredData.filter(c => c.trend === 'down').length} crops
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Stable</span>
                    <span className="font-semibold text-gray-600">
                      {filteredData.filter(c => c.trend === 'stable').length} crops
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average Price</span>
                      <span className="font-semibold text-gray-900">
                        ₹{Math.round(filteredData.reduce((sum, crop) => sum + crop.currentPrice, 0) / filteredData.length)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Alerts */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Price Alerts</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Get notified when crop prices reach your target levels.
                </p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors">
                  Set Price Alert
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Market Analysis */}
        <div className="mt-8 bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Market Analysis</h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Trends</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Winter vegetables showing strong seasonal demand</li>
                  <li>• Export markets driving rice price increases</li>
                  <li>• Weather conditions affecting onion supply chains</li>
                  <li>• Improved logistics reducing fruit transportation costs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Recommendations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Consider diversifying into high-demand winter crops</li>
                  <li>• Monitor weather forecasts for supply planning</li>
                  <li>• Explore direct-to-consumer sales channels</li>
                  <li>• Invest in quality certifications for premium pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTrends;