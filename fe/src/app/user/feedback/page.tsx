"use client";

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, TrendingUp, Users, MessageSquare, Send, CheckCircle, Play, Building2, Globe, Calendar, ThumbsUp, Filter, Search } from 'lucide-react';

export default function FeedbackTestimonialsPage() {
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    rating: 5,
    service: '',
    feedback: '',
    testimonial: '',
    publicUse: false
  });

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

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredTestimonials = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "Chief Technology Officer",
      company: "MedTech Solutions Ltd",
      industry: "Healthcare",
      rating: 5,
      testimonial: "AI-Solutions has completely transformed our patient care delivery system. Their virtual assistant handles over 1,000 patient inquiries daily with 99.7% accuracy, allowing our medical staff to focus on critical care. The ROI was evident within the first month of implementation.",
      project: "AI-Powered Patient Care System",
      results: ["1000+ daily inquiries handled", "99.7% accuracy rate", "40% reduction in response time", "ROI within 1 month"],
      image: "👩‍⚕️",
      featured: true,
      date: "2025-09-15",
      verified: true
    },
    {
      id: 2,
      name: "James Chen",
      role: "Head of Innovation",
      company: "TechStart Industries",
      industry: "Manufacturing",
      rating: 5,
      testimonial: "The rapid prototyping solution from AI-Solutions reduced our product development cycle from 6 months to just 3 weeks. Their AI-powered design tools helped us iterate faster and bring innovative products to market ahead of our competition.",
      project: "Rapid AI Prototyping Implementation",
      results: ["6 months to 3 weeks development cycle", "50% faster time-to-market", "300% increase in prototype iterations", "£2M cost savings annually"],
      image: "👨‍💼",
      featured: true,
      date: "2025-09-10",
      verified: true
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Digital Transformation Director",
      company: "GlobalBank International",
      industry: "Finance",
      rating: 5,
      testimonial: "Their AI-powered risk assessment system has revolutionized our lending decisions. We've seen a 60% reduction in default rates while processing loan applications 10x faster. The fraud detection capabilities have saved us millions.",
      project: "Financial AI Risk Management Suite",
      results: ["60% reduction in default rates", "10x faster loan processing", "£5M fraud prevention savings", "99.8% system uptime"],
      image: "👩‍💻",
      featured: true,
      date: "2025-09-05",
      verified: true
    },
    {
      id: 4,
      name: "David Park",
      role: "Operations Manager",
      company: "SmartRetail Group",
      industry: "Retail",
      rating: 5,
      testimonial: "The personalization engine from AI-Solutions increased our customer engagement by 85% and boosted sales by 42%. Customer satisfaction scores have reached an all-time high, and our inventory optimization has reduced waste by 35%.",
      project: "AI-Driven Customer Personalization",
      results: ["85% increase in engagement", "42% sales boost", "35% waste reduction", "4.8/5 customer satisfaction"],
      image: "🛒",
      featured: true,
      date: "2025-08-28",
      verified: true
    }
  ];

  const customerTestimonials = [
    {
      id: 5,
      name: "Prof. Michael Thompson",
      role: "Vice Chancellor",
      company: "University of Excellence",
      industry: "Education",
      rating: 5,
      testimonial: "The adaptive learning platform has transformed our educational delivery. Student performance has improved by 35%, and our dropout rates have decreased significantly.",
      image: "🎓",
      date: "2025-08-20",
      verified: true
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "Supply Chain Director",
      company: "LogiFlow Solutions",
      industry: "Logistics",
      rating: 4,
      testimonial: "Route optimization AI has reduced our delivery times by 30% and fuel costs by 25%. The predictive maintenance for our fleet has been exceptional.",
      image: "🚚",
      date: "2025-08-15",
      verified: true
    },
    {
      id: 7,
      name: "Robert Kim",
      role: "CTO",
      company: "SecureCloud Inc",
      industry: "Technology",
      rating: 5,
      testimonial: "Their enterprise security AI solution provides unmatched threat detection. We've prevented 15 potential security breaches in the past quarter alone.",
      image: "🔒",
      date: "2025-08-10",
      verified: true
    },
    {
      id: 8,
      name: "Emma Foster",
      role: "Marketing Director",
      company: "Brand Innovators",
      industry: "Marketing",
      rating: 5,
      testimonial: "The AI analytics platform gave us insights we never had before. Our campaign effectiveness improved by 60% and customer acquisition costs dropped by 40%.",
      image: "📊",
      date: "2025-08-05",
      verified: true
    }
  ];

  const industries = [
    { id: 'all', label: 'All Industries', count: 24 },
    { id: 'healthcare', label: 'Healthcare', count: 8 },
    { id: 'finance', label: 'Finance', count: 6 },
    { id: 'manufacturing', label: 'Manufacturing', count: 5 },
    { id: 'retail', label: 'Retail', count: 3 },
    { id: 'education', label: 'Education', count: 2 }
  ];

  const satisfactionMetrics = [
    { label: "Overall Satisfaction", value: "4.9", max: "5.0", percentage: 98 },
    { label: "Implementation Experience", value: "4.8", max: "5.0", percentage: 96 },
    { label: "Support Quality", value: "4.9", max: "5.0", percentage: 98 },
    { label: "Value for Money", value: "4.7", max: "5.0", percentage: 94 }
  ];

  const allTestimonials = [...featuredTestimonials, ...customerTestimonials];
  const filteredTestimonials = selectedFilter === 'all' 
    ? allTestimonials 
    : allTestimonials.filter(t => t.industry?.toLowerCase() === selectedFilter);

  const handleSubmitFeedback = () => {
    // Simulate form submission
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setShowFeedbackForm(false);
      setFeedbackSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        rating: 5,
        service: '',
        feedback: '',
        testimonial: '',
        publicUse: false
      });
    }, 2000);
  };

  const StarRating = ({ rating, large = false }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${large ? 'w-6 h-6' : 'w-5 h-5'} ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const FeedbackModal = () => {
    if (!showFeedbackForm) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            {feedbackSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your feedback has been submitted successfully. We appreciate your input!</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Share Your Feedback</h3>
                  <button
                    onClick={() => setShowFeedbackForm(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Used</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select a service</option>
                      <option value="virtual-assistant">AI-Powered Virtual Assistant</option>
                      <option value="prototyping">Rapid AI Prototyping</option>
                      <option value="integration">Custom AI Integration</option>
                      <option value="analytics">Analytics & Insights</option>
                      <option value="security">Enterprise Security</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Overall Rating</label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setFormData({...formData, rating: star})}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= formData.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            } hover:text-yellow-400 transition-colors`}
                          />
                        </button>
                      ))}
                      <span className="ml-2 text-gray-600">({formData.rating}/5)</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Feedback *</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please share your experience with our AI solutions..."
                      value={formData.feedback}
                      onChange={(e) => setFormData({...formData, feedback: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Testimonial (Optional)</label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Would you like to share a testimonial about your experience?"
                      value={formData.testimonial}
                      onChange={(e) => setFormData({...formData, testimonial: e.target.value})}
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="publicUse"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      checked={formData.publicUse}
                      onChange={(e) => setFormData({...formData, publicUse: e.target.checked})}
                    />
                    <label htmlFor="publicUse" className="ml-2 text-sm text-gray-700">
                      I agree that my feedback and testimonial can be used publicly on AI-Solutions website and marketing materials
                    </label>
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      onClick={() => setShowFeedbackForm(false)}
                      className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmitFeedback}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </>
            )}
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
              Customer Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how AI-Solutions is transforming businesses across industries with innovative AI technology and exceptional customer satisfaction.
            </p>
          </div>

          {/* Satisfaction Metrics */}
          <div className="grid md:grid-cols-4 gap-8">
            {satisfactionMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {metric.value}<span className="text-lg text-gray-500">/{metric.max}</span>
                </div>
                <div className="text-gray-600 mb-3">{metric.label}</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${metric.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section id="featured-testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our most satisfied customers</p>
          </div>

          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-12 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`transform transition-all duration-700 ${
                  isVisible['featured-testimonials'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                  <div className="flex items-center mb-8">
                    <div className="text-6xl mr-6">{featuredTestimonials[currentTestimonial].image}</div>
                    <div>
                      <StarRating rating={featuredTestimonials[currentTestimonial].rating} large={true} />
                      <div className="flex items-center mt-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-sm text-green-600 font-medium">Verified Customer</span>
                      </div>
                    </div>
                  </div>

                  <Quote className="w-12 h-12 text-blue-600 mb-6" />
                  <blockquote className="text-xl text-gray-700 leading-relaxed mb-8">
                    "{featuredTestimonials[currentTestimonial].testimonial}"
                  </blockquote>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {featuredTestimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-blue-600 font-medium">
                          {featuredTestimonials[currentTestimonial].role}
                        </p>
                        <p className="text-gray-600">
                          {featuredTestimonials[currentTestimonial].company}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {featuredTestimonials[currentTestimonial].industry}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`transform transition-all duration-700 ${
                  isVisible['featured-testimonials'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">
                      {featuredTestimonials[currentTestimonial].project}
                    </h4>
                    <div className="space-y-4">
                      <h5 className="font-semibold text-gray-900">Key Results:</h5>
                      <ul className="space-y-3">
                        {featuredTestimonials[currentTestimonial].results.map((result, index) => (
                          <li key={index} className="flex items-center">
                            <TrendingUp className="w-5 h-5 text-green-600 mr-3" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => setCurrentTestimonial(Math.max(0, currentTestimonial - 1))}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                disabled={currentTestimonial === 0}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="flex space-x-2">
                {featuredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentTestimonial(Math.min(featuredTestimonials.length - 1, currentTestimonial + 1))}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                disabled={currentTestimonial === featuredTestimonials.length - 1}
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section id="testimonials-filter" className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <h3 className="text-2xl font-bold text-gray-900">Customer Testimonials</h3>
            
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedFilter(industry.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedFilter === industry.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {industry.label} ({industry.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section id="all-testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible['all-testimonials'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div className="flex items-center space-x-2">
                    <StarRating rating={testimonial.rating} />
                    {testimonial.verified && (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.testimonial}"
                </blockquote>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    {testimonial.industry && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {testimonial.industry}
                      </span>
                    )}
                  </div>
                  <p className="text-blue-600 font-medium text-sm">{testimonial.role}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                    <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                    {testimonial.verified && (
                      <span className="flex items-center">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Share Your Experience
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            We value your feedback and would love to hear about your experience with AI-Solutions. Your insights help us improve and inspire others.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => setShowFeedbackForm(true)}
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Submit Feedback
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule a Call
            </button>
          </div>
          
          <p className="text-blue-100 text-sm mt-6">
            Join 500+ satisfied customers • Your privacy is protected • Feedback helps us improve
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Award, label: "Industry Leader", value: "4.9/5 Rating" },
              { icon: Users, label: "Happy Customers", value: "500+" },
              { icon: Globe, label: "Global Reach", value: "25 Countries" },
              { icon: TrendingUp, label: "Success Rate", value: "98%" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-2xl font-bold text-blue-600">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Modal */}
      <FeedbackModal />
    </div>
  );
}