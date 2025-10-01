"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight, Star, Play, Bookmark, Filter, Search, Globe, Video, Award, TrendingUp, Brain, Rocket, Zap } from 'lucide-react';

export default function EventsPage() {
  const [isVisible, setIsVisible] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsWithId = document.querySelectorAll('[id]');
    elementsWithId.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: "AI Revolution in Healthcare Summit 2025",
      date: "2025-10-15",
      time: "09:00 - 17:00",
      location: "London Tech Center",
      type: "conference",
      category: "healthcare",
      attendees: 500,
      featured: true,
      image: "🏥",
      description: "Explore how AI is transforming patient care, medical research, and healthcare operations. Join leading experts as they demonstrate cutting-edge AI solutions.",
      speakers: ["Dr. Sarah Chen", "Prof. Michael Roberts", "AI Solutions Team"],
      highlights: ["Live AI Diagnostics Demo", "Virtual Patient Care Systems", "Healthcare Data Analytics"],
      price: "Free",
      registration: true
    },
    {
      id: 2,
      title: "Financial AI: Future of Banking",
      date: "2025-10-22",
      time: "14:00 - 18:00",
      location: "Manchester Convention Center",
      type: "workshop",
      category: "finance",
      attendees: 200,
      featured: true,
      image: "💰",
      description: "Discover AI-powered solutions for automated trading, risk assessment, and fraud detection in the financial sector.",
      speakers: ["James Wilson", "Dr. Lisa Park", "Financial AI Experts"],
      highlights: ["Real-time Trading Algorithms", "Fraud Detection Systems", "Risk Management AI"],
      price: "£299",
      registration: true
    },
    {
      id: 3,
      title: "Manufacturing 4.0: Smart Factory Solutions",
      date: "2025-10-28",
      time: "10:00 - 16:00",
      location: "Birmingham Industrial Park",
      type: "demonstration",
      category: "manufacturing",
      attendees: 150,
      featured: false,
      image: "🏭",
      description: "Experience live demonstrations of predictive maintenance systems and quality control AI in manufacturing environments.",
      speakers: ["Engineering Team", "Operations Specialists"],
      highlights: ["Predictive Maintenance Demo", "Quality Control AI", "Production Optimization"],
      price: "£199",
      registration: true
    },
    {
      id: 4,
      title: "Retail Revolution: Personalized Shopping AI",
      date: "2025-11-05",
      time: "13:00 - 17:00",
      location: "Edinburgh Business District",
      type: "webinar",
      category: "retail",
      attendees: 300,
      featured: false,
      image: "🛍️",
      description: "Learn how AI creates personalized shopping experiences and optimizes inventory management for retail businesses.",
      speakers: ["Retail Innovation Team", "Customer Experience Experts"],
      highlights: ["Personalization Engines", "Inventory Optimization", "Customer Analytics"],
      price: "Free",
      registration: true
    },
    {
      id: 5,
      title: "Education Tech: Adaptive Learning Summit",
      date: "2025-11-12",
      time: "09:30 - 15:30",
      location: "Online Event",
      type: "conference",
      category: "education",
      attendees: 1000,
      featured: true,
      image: "🎓",
      description: "Join educators and technologists to explore AI-powered adaptive learning platforms and student support systems.",
      speakers: ["Education Technology Leaders", "AI Learning Specialists"],
      highlights: ["Adaptive Learning Platforms", "Student Support AI", "Educational Analytics"],
      price: "Free",
      registration: true
    },
    {
      id: 6,
      title: "Logistics & Supply Chain AI Innovation",
      date: "2025-11-18",
      time: "11:00 - 16:00",
      location: "Liverpool Logistics Hub",
      type: "workshop",
      category: "logistics",
      attendees: 180,
      featured: false,
      image: "🚚",
      description: "Discover AI solutions for route optimization, supply chain management, and intelligent logistics operations.",
      speakers: ["Supply Chain Experts", "Logistics AI Team"],
      highlights: ["Route Optimization", "Supply Chain AI", "Warehouse Automation"],
      price: "£249",
      registration: true
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: "AI Solutions Global Launch Event",
      date: "2025-09-10",
      location: "Sunderland Innovation Center",
      attendees: 800,
      rating: 4.9,
      highlights: ["Product Launch", "Company Vision", "Future Roadmap"],
      gallery: ["📸", "🎬", "📊", "🎤"]
    },
    {
      id: 8,
      title: "Digital Transformation Workshop Series",
      date: "2025-08-25",
      location: "Newcastle Tech Hub",
      attendees: 300,
      rating: 4.7,
      highlights: ["Digital Strategy", "AI Implementation", "Change Management"],
      gallery: ["💻", "🔧", "📈", "👥"]
    }
  ];

  const eventCategories = [
    { id: 'all', label: 'All Events', icon: Globe },
    { id: 'healthcare', label: 'Healthcare', icon: Brain },
    { id: 'finance', label: 'Finance', icon: TrendingUp },
    { id: 'manufacturing', label: 'Manufacturing', icon: Zap },
    { id: 'retail', label: 'Retail', icon: Rocket },
    { id: 'education', label: 'Education', icon: Award },
    { id: 'logistics', label: 'Logistics', icon: Users }
  ];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const EventRegistrationModal = ({ event, onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      interests: []
    });

    const handleSubmit = () => {
      // Handle form submission
      alert(`Registration submitted for ${event.title}!`);
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-gray-900">Join Event</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
            <p className="text-blue-600 font-semibold mt-1">{event.title}</p>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
              />
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Solutions Events
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join our exclusive events to experience cutting-edge AI solutions, network with industry leaders, and discover the future of digital innovation
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Events This Year" },
              { number: "10,000+", label: "Participants" },
              { number: "4.8", label: "Average Rating" },
              { number: "25", label: "Countries" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section id="filters" className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {eventCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section id="featured-events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Events</h2>
            <p className="text-xl text-gray-600">Don't miss our most anticipated events</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => event.featured).map((event, index) => (
              <div 
                key={event.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${
                  isVisible['featured-events'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl">{event.image}</div>
                    <div className="text-right">
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </div>
                      <div className="text-2xl font-bold text-blue-600">{event.price}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                      {new Date(event.date).toLocaleDateString('en-GB', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 mr-3 text-blue-600" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 mr-3 text-blue-600" />
                      {event.attendees} attendees expected
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Event Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Register Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Events */}
      <section id="upcoming-events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">All Upcoming Events</h2>
            <p className="text-xl text-gray-600">Choose from our comprehensive event calendar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden ${
                  isVisible['upcoming-events'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{event.image}</div>
                    <div className="text-right">
                      <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                        {event.type.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{event.description}</p>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                      {event.location}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-700">
                        <Users className="w-4 h-4 mr-2 text-blue-600" />
                        {event.attendees} expected
                      </div>
                      <div className="font-bold text-blue-600">{event.price}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events Gallery */}
      <section id="past-events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Past Events Showcase</h2>
            <p className="text-xl text-gray-600">Highlights from our successful events</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`bg-white rounded-xl p-8 shadow-lg ${
                  isVisible['past-events'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-yellow-500 mb-1">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      <span className="font-semibold">{event.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">{event.attendees} attended</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Event Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Photo Gallery:</h4>
                  <div className="flex space-x-3">
                    {event.gallery.map((item, idx) => (
                      <div key={idx} className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                  View Full Gallery
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Connected with AI Innovation
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Subscribe to our event newsletter and never miss groundbreaking AI demonstrations and industry insights
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-3 rounded-lg text-gray-900 w-full sm:w-80"
            />
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          
          <p className="text-blue-100 text-sm">
            Join 10,000+ professionals • No spam • Unsubscribe anytime
          </p>
        </div>
      </section>

      {/* Registration Modal */}
      {selectedEvent && (
        <EventRegistrationModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </div>
  );
}