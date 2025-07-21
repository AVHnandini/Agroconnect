import React, { useState } from 'react';
import { FileText, ExternalLink, Calendar, DollarSign, Users, CheckCircle } from 'lucide-react';

interface Scheme {
  id: string;
  title: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  applicationDeadline: string;
  fundingAmount: string;
  category: string;
  status: 'active' | 'upcoming' | 'closed';
  applicationLink: string;
  documents: string[];
}

const SchemesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const schemes: Scheme[] = [
    {
      id: '1',
      title: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
      description: 'Direct income support scheme providing ₹6,000 per year to eligible farmer families in three equal installments.',
      eligibility: [
        'Small and marginal farmers with cultivable land up to 2 hectares',
        'Valid Aadhaar card required',
        'Bank account linked with Aadhaar'
      ],
      benefits: [
        '₹2,000 per installment (3 times a year)',
        'Direct bank transfer',
        'No intermediary involvement'
      ],
      applicationDeadline: '2024-03-31',
      fundingAmount: '₹6,000 per year',
      category: 'financial-support',
      status: 'active',
      applicationLink: 'https://pmkisan.gov.in',
      documents: ['Aadhaar Card', 'Bank Account Details', 'Land Records']
    },
    {
      id: '2',
      title: 'Soil Health Card Scheme',
      description: 'Provides soil health cards to farmers with recommendations on appropriate dosage of nutrients and fertilizers.',
      eligibility: [
        'All farmers across India',
        'Land ownership or cultivation rights required'
      ],
      benefits: [
        'Free soil testing',
        'Customized fertilizer recommendations',
        'Improved crop productivity'
      ],
      applicationDeadline: '2024-06-30',
      fundingAmount: 'Free service',
      category: 'agricultural-support',
      status: 'active',
      applicationLink: 'https://soilhealth.dac.gov.in',
      documents: ['Land Records', 'Farmer ID']
    },
    {
      id: '3',
      title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      description: 'Crop insurance scheme providing financial support to farmers suffering crop loss/damage arising out of unforeseen events.',
      eligibility: [
        'All farmers growing notified crops',
        'Sharecroppers and tenant farmers eligible',
        'Premium payment required'
      ],
      benefits: [
        'Coverage against natural calamities',
        'Low premium rates',
        'Quick settlement of claims'
      ],
      applicationDeadline: '2024-04-15',
      fundingAmount: 'Up to ₹2 lakh per hectare',
      category: 'insurance',
      status: 'active',
      applicationLink: 'https://pmfby.gov.in',
      documents: ['Aadhaar Card', 'Bank Account', 'Land Records', 'Sowing Certificate']
    },
    {
      id: '4',
      title: 'National Agriculture Market (e-NAM)',
      description: 'Online trading platform for agricultural commodities to provide better price discovery and transparent auction process.',
      eligibility: [
        'Registered farmers',
        'Licensed traders',
        'Commission agents'
      ],
      benefits: [
        'Better price realization',
        'Transparent bidding process',
        'Reduced transaction costs'
      ],
      applicationDeadline: 'Ongoing',
      fundingAmount: 'Market-based pricing',
      category: 'market-access',
      status: 'active',
      applicationLink: 'https://enam.gov.in',
      documents: ['Registration Certificate', 'Bank Account Details']
    },
    {
      id: '5',
      title: 'Kisan Credit Card (KCC)',
      description: 'Credit facility for farmers to meet their financial requirements for agricultural and allied activities.',
      eligibility: [
        'Farmers (individual/joint)',
        'Tenant farmers and sharecroppers',
        'Self Help Group members'
      ],
      benefits: [
        'Flexible credit limit',
        'Lower interest rates',
        'Insurance coverage included'
      ],
      applicationDeadline: 'Ongoing',
      fundingAmount: 'Up to ₹3 lakh without collateral',
      category: 'credit-support',
      status: 'active',
      applicationLink: 'https://kcc.gov.in',
      documents: ['Identity Proof', 'Address Proof', 'Land Documents', 'Income Proof']
    },
    {
      id: '6',
      title: 'Organic Farming Promotion Scheme',
      description: 'Support for farmers to adopt organic farming practices and get organic certification.',
      eligibility: [
        'Individual farmers',
        'Farmer groups',
        'Organic farming practitioners'
      ],
      benefits: [
        'Financial assistance for organic inputs',
        'Certification support',
        'Market linkage assistance'
      ],
      applicationDeadline: '2024-05-20',
      fundingAmount: '₹50,000 per hectare',
      category: 'organic-farming',
      status: 'upcoming',
      applicationLink: '#',
      documents: ['Land Records', 'Organic Farming Plan', 'Group Certificate (if applicable)']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'financial-support', name: 'Financial Support' },
    { id: 'agricultural-support', name: 'Agricultural Support' },
    { id: 'insurance', name: 'Insurance' },
    { id: 'market-access', name: 'Market Access' },
    { id: 'credit-support', name: 'Credit Support' },
    { id: 'organic-farming', name: 'Organic Farming' }
  ];

  const statuses = [
    { id: 'all', name: 'All Status' },
    { id: 'active', name: 'Active' },
    { id: 'upcoming', name: 'Upcoming' },
    { id: 'closed', name: 'Closed' }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || scheme.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4" />;
      case 'upcoming':
        return <Calendar className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Government Schemes & Benefits</h1>
            <p className="text-xl text-green-100">
              Discover and apply for government schemes designed to support farmers and agriculture
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-700">Filter by:</span>
              
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
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {statuses.map(status => (
                  <option key={status.id} value={status.id}>
                    {status.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="text-gray-600">
              {filteredSchemes.length} schemes found
            </div>
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSchemes.map(scheme => (
            <div key={scheme.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{scheme.title}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(scheme.status)}`}>
                        {getStatusIcon(scheme.status)}
                        <span className="ml-1 capitalize">{scheme.status}</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{scheme.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Funding Amount</p>
                      <p className="text-sm text-gray-600">{scheme.fundingAmount}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Deadline</p>
                      <p className="text-sm text-gray-600">
                        {scheme.applicationDeadline === 'Ongoing' 
                          ? 'Ongoing' 
                          : new Date(scheme.applicationDeadline).toLocaleDateString()
                        }
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Eligibility Criteria:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {scheme.eligibility.slice(0, 2).map((criteria, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        {criteria}
                      </li>
                    ))}
                    {scheme.eligibility.length > 2 && (
                      <li className="text-green-600 text-sm">
                        +{scheme.eligibility.length - 2} more criteria
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {scheme.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                    {scheme.benefits.length > 2 && (
                      <li className="text-green-600 text-sm ml-6">
                        +{scheme.benefits.length - 2} more benefits
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Required Documents:</h4>
                  <div className="flex flex-wrap gap-2">
                    {scheme.documents.map((doc, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  {scheme.status === 'active' ? (
                    <a
                      href={scheme.applicationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-center transition-colors flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Apply Now</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 bg-gray-300 text-gray-500 py-2 px-4 rounded-md text-center cursor-not-allowed"
                    >
                      {scheme.status === 'upcoming' ? 'Coming Soon' : 'Application Closed'}
                    </button>
                  )}
                  
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No schemes found</h3>
            <p className="text-gray-600">Try adjusting your filter criteria to see more schemes.</p>
          </div>
        )}

        {/* Information Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Apply for Government Schemes</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Process</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                    <span>Check eligibility criteria for the scheme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                    <span>Gather all required documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                    <span>Visit the official website or nearest office</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                    <span>Fill the application form accurately</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">5</span>
                    <span>Submit application with documents</span>
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Tips</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Apply before the deadline to avoid rejection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Keep copies of all submitted documents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Verify information before submission</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Follow up on application status regularly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Contact helpline for any queries</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemesPage;