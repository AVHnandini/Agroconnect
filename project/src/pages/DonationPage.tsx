import React, { useState } from 'react';
import { Heart, Users, Handshake, DollarSign, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const DonationPage = () => {
  const [donationType, setDonationType] = useState<'money' | 'volunteer'>('money');
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const impactStories = [
    {
      name: 'Ramesh Kumar',
      location: 'Uttar Pradesh',
      story: 'With community support, I was able to buy quality seeds and organic fertilizers. My crop yield increased by 40% this season.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sunita Devi',
      location: 'Bihar',
      story: 'The financial assistance helped me install a drip irrigation system. Now I can grow vegetables even during dry seasons.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Prakash Patel',
      location: 'Gujarat',
      story: 'Thanks to the community fund, I could afford organic certification for my farm. Now I get better prices for my produce.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const volunteerOpportunities = [
    {
      title: 'Farm Mentorship Program',
      description: 'Guide new farmers with your agricultural expertise and experience.',
      commitment: '2-3 hours per week',
      skills: 'Agricultural knowledge, Communication skills'
    },
    {
      title: 'Digital Literacy Training',
      description: 'Help farmers learn to use digital platforms and mobile apps for farming.',
      commitment: '4-5 hours per month',
      skills: 'Basic computer skills, Patience, Teaching ability'
    },
    {
      title: 'Market Linkage Support',
      description: 'Assist farmers in connecting with buyers and understanding market trends.',
      commitment: '3-4 hours per week',
      skills: 'Market knowledge, Networking, Communication'
    },
    {
      title: 'Quality Assurance',
      description: 'Help verify product quality and assist with certification processes.',
      commitment: '6-8 hours per month',
      skills: 'Quality assessment, Attention to detail'
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {donationType === 'money' ? 'Thank You for Your Donation!' : 'Thank You for Volunteering!'}
          </h2>
          <p className="text-gray-600">
            {donationType === 'money' 
              ? 'Your contribution will make a real difference in supporting farmers.'
              : 'We\'ll contact you soon with volunteer opportunities that match your skills.'
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Support Our Farming Community</h1>
            <p className="text-xl text-green-100 mb-8">
              Your contribution helps farmers access better resources, technology, and fair markets
            </p>
            
            {/* Toggle Buttons */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setDonationType('money')}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  donationType === 'money'
                    ? 'bg-white text-green-600'
                    : 'bg-green-700 text-white hover:bg-green-800'
                }`}
              >
                <DollarSign className="w-5 h-5 inline mr-2" />
                Donate Money
              </button>
              <button
                onClick={() => setDonationType('volunteer')}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  donationType === 'volunteer'
                    ? 'bg-white text-green-600'
                    : 'bg-green-700 text-white hover:bg-green-800'
                }`}
              >
                <Handshake className="w-5 h-5 inline mr-2" />
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {donationType === 'money' ? (
              /* Donation Form */
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>
                  
                  <form onSubmit={handleDonationSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Choose donation amount
                      </label>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                        {predefinedAmounts.map(amount => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => {
                              setDonationAmount(amount.toString());
                              setCustomAmount('');
                            }}
                            className={`p-3 border rounded-lg text-center transition-colors ${
                              donationAmount === amount.toString()
                                ? 'border-green-600 bg-green-50 text-green-600'
                                : 'border-gray-300 hover:border-green-300'
                            }`}
                          >
                            ₹{amount}
                          </button>
                        ))}
                      </div>
                      
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500">₹</span>
                        <input
                          type="number"
                          placeholder="Enter custom amount"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setDonationAmount('');
                          }}
                          className="pl-8 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Share why you want to support farmers..."
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="anonymous"
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
                        Make this donation anonymous
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={!donationAmount && !customAmount}
                      className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                    >
                      Donate ₹{donationAmount || customAmount || '0'}
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              /* Volunteer Form */
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Volunteer With Us</h2>
                  
                  <form onSubmit={handleDonationSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="City, State"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Areas of Interest *
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {volunteerOpportunities.map((opportunity, index) => (
                          <label key={index} className="flex items-center">
                            <input
                              type="checkbox"
                              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-gray-700">{opportunity.title}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Availability
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option value="">Select your availability</option>
                        <option value="weekdays">Weekdays</option>
                        <option value="weekends">Weekends</option>
                        <option value="flexible">Flexible</option>
                        <option value="specific">Specific days (mention in message)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Skills & Experience
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Tell us about your relevant skills, experience, or why you want to volunteer..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                    >
                      Submit Volunteer Application
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Volunteer Opportunities */}
            {donationType === 'volunteer' && (
              <div className="bg-white rounded-lg shadow-sm mt-8">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Volunteer Opportunities</h3>
                  <div className="space-y-6">
                    {volunteerOpportunities.map((opportunity, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">{opportunity.title}</h4>
                        <p className="text-gray-700 mb-3">{opportunity.description}</p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-green-600" />
                            <span><strong>Time Commitment:</strong> {opportunity.commitment}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-blue-600" />
                            <span><strong>Skills Needed:</strong> {opportunity.skills}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Impact Stats */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Impact</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">₹2.5L</div>
                    <div className="text-sm text-gray-600">Total Donations Raised</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">150+</div>
                    <div className="text-sm text-gray-600">Farmers Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">45</div>
                    <div className="text-sm text-gray-600">Active Volunteers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600">25%</div>
                    <div className="text-sm text-gray-600">Average Income Increase</div>
                  </div>
                </div>
              </div>
            </div>

            {/* How Donations Help */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">How Your Donation Helps</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">₹500</h4>
                      <p className="text-sm text-gray-600">Provides quality seeds for 1 acre</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">₹1,000</h4>
                      <p className="text-sm text-gray-600">Funds organic fertilizers for small farm</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <DollarSign className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">₹5,000</h4>
                      <p className="text-sm text-gray-600">Supports irrigation system setup</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <DollarSign className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">₹10,000</h4>
                      <p className="text-sm text-gray-600">Helps with organic certification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">donate@agroconnect.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-gray-700">Mumbai, Maharashtra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-12 bg-white rounded-lg shadow-sm">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {impactStories.map((story, index) => (
                <div key={index} className="text-center">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">{story.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{story.location}</p>
                  <p className="text-gray-700 italic">"{story.story}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;