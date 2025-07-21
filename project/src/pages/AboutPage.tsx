import React from 'react';
import { Leaf, Users, Target, Heart, Award, Globe } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Anala Venkata Hema Nandini',
      role: 'Founder & CEO',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxIByt_Uu7OKiU_VdjWhC6aetzbc-_q-Ocw&s',
      description: 'Passionate about connecting farmers directly with customers through innovative technology solutions, eliminating middlemen and ensuring fair pricing for everyone.'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Supporting Farmers',
      description: 'We believe in empowering farmers by providing them direct access to customers and fair pricing for their produce.'
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: 'Sustainable Agriculture',
      description: 'Promoting organic and sustainable farming practices that benefit both the environment and consumers.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Community First',
      description: 'Building a strong community of farmers and customers who support each other and local agriculture.'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: 'Quality Assurance',
      description: 'Ensuring the highest quality standards through lab certifications and regular quality checks.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Registered Farmers' },
    { number: '2000+', label: 'Happy Customers' },
    { number: '50+', label: 'Crop Varieties' },
    { number: '95%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="w-16 h-16 text-green-300 mr-4" />
              <h1 className="text-5xl font-bold">About AgroConnect</h1>
            </div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Bridging the gap between farmers and customers through technology, 
              creating a sustainable and fair agricultural ecosystem for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-green-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To eliminate middlemen in the agricultural supply chain and create a direct connection 
                between farmers and customers. We aim to ensure fair pricing for farmers while providing 
                fresh, quality produce to customers at reasonable prices.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Globe className="w-10 h-10 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become India's leading platform for sustainable agriculture, empowering farmers 
                with technology and connecting them directly with conscious consumers who value 
                quality, freshness, and supporting local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Numbers that reflect our commitment to the community</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
          <p className="text-xl text-gray-600">Passionate about transforming agriculture through technology</p>
          </div>
        <div className="flex justify-center">
          <div className="max-w-md">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              AgroConnect was born from a simple observation: farmers were struggling to get fair prices 
              for their produce while customers were paying high prices for the same products. The middlemen 
              were taking a significant cut, leaving both parties unsatisfied.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our founder, Rajesh Kumar, a former agricultural scientist, witnessed this problem firsthand 
              while working with rural farming communities. He realized that technology could bridge this 
              gap and create a win-win situation for everyone involved.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              In 2023, we launched AgroConnect with a mission to create a direct marketplace where farmers 
              could list their produce and customers could buy fresh, quality products at fair prices. 
              Today, we're proud to serve over 500 farmers and 2000+ customers across multiple states.
            </p>
            <p className="text-lg leading-relaxed">
              Our journey has just begun. We're committed to expanding our reach, supporting more farmers, 
              and building a sustainable agricultural ecosystem that benefits everyone in the supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Whether you're a farmer looking to reach more customers or a customer seeking fresh, 
            quality produce, we invite you to be part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join as Farmer
            </a>
            <a
              href="/shop"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Start Shopping
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;