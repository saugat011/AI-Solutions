"use client";

import React, { useState } from 'react';
import { Search, Filter, Star, CheckCircle, XCircle, Eye, Trash2, Edit, Download, Calendar, Building2, User, Mail, MessageSquare, MoreVertical, ThumbsUp, AlertCircle } from 'lucide-react';

export default function EventFeedbackManagement() {
  const [activeTab, setActiveTab] = useState('testimonials');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    industry: '',
    rating: 5,
    testimonial: '',
    feedback: '',
    service: '',
    publicUse: true
  });

  // Sample testimonials data
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      refId: 'TS-847301',
      name: "Dr. Sarah Mitchell",
      email: "s.mitchell@medtech.com",
      company: "MedTech Solutions Ltd",
      role: "Chief Technology Officer",
      industry: "Healthcare",
      rating: 5,
      testimonial: "AI-Solutions has completely transformed our patient care delivery system. Their virtual assistant handles over 1,000 patient inquiries daily with 99.7% accuracy.",
      feedback: "Excellent service, immediate ROI, highly recommend to other healthcare providers.",
      service: "AI-Powered Virtual Assistant",
      status: "approved",
      publicUse: true,
      verified: true,
      featured: true,
      submittedDate: "2025-09-15",
      responseDate: "2025-09-16"
    },
    {
      id: 2,
      refId: 'TS-847302',
      name: "James Chen",
      email: "j.chen@techstart.com",
      company: "TechStart Industries",
      role: "Head of Innovation",
      industry: "Manufacturing",
      rating: 5,
      testimonial: "The rapid prototyping solution reduced our product development cycle from 6 months to just 3 weeks.",
      feedback: "Outstanding results, great support team, exceeded expectations.",
      service: "Rapid AI Prototyping",
      status: "approved",
      publicUse: true,
      verified: true,
      featured: true,
      submittedDate: "2025-09-10",
      responseDate: "2025-09-11"
    },
    {
      id: 3,
      refId: 'TS-847303',
      name: "Maria Rodriguez",
      email: "m.rodriguez@globalbank.com",
      company: "GlobalBank International",
      role: "Digital Transformation Director",
      industry: "Finance",
      rating: 5,
      testimonial: "Their AI-powered risk assessment system has revolutionized our lending decisions. 60% reduction in default rates.",
      feedback: "Exceptional AI technology, reliable system, great ROI.",
      service: "Financial AI Risk Management",
      status: "pending",
      publicUse: true,
      verified: false,
      featured: false,
      submittedDate: "2025-09-20",
      responseDate: null
    },
    {
      id: 4,
      refId: 'TS-847304',
      name: "David Park",
      email: "d.park@smartretail.com",
      company: "SmartRetail Group",
      role: "Operations Manager",
      industry: "Retail",
      rating: 4,
      testimonial: "The personalization engine increased our customer engagement by 85% and boosted sales by 42%.",
      feedback: "Good product but took longer to implement than expected.",
      service: "AI Customer Personalization",
      status: "pending",
      publicUse: false,
      verified: false,
      featured: false,
      submittedDate: "2025-09-18",
      responseDate: null
    },
    {
      id: 5,
      refId: 'TS-847305',
      name: "Lisa Wang",
      email: "l.wang@logiflow.com",
      company: "LogiFlow Solutions",
      role: "Supply Chain Director",
      industry: "Logistics",
      rating: 4,
      testimonial: "Route optimization AI reduced delivery times by 30% and fuel costs by 25%.",
      feedback: "Very satisfied with the results, minor UI improvements needed.",
      service: "Logistics Optimization",
      status: "approved",
      publicUse: true,
      verified: true,
      featured: false,
      submittedDate: "2025-08-25",
      responseDate: "2025-08-26"
    }
  ]);

  const stats = {
    total: testimonials.length,
    pending: testimonials.filter(t => t.status === 'pending').length,
    approved: testimonials.filter(t => t.status === 'approved').length,
    rejected: testimonials.filter(t => t.status === 'rejected').length,
    avgRating: (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
  };

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesFilter = selectedFilter === 'all' || testimonial.status === selectedFilter;
    const matchesSearch = testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.refId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleStatusChange = (id, newStatus) => {
    setTestimonials(testimonials.map(t => 
      t.id === id ? { ...t, status: newStatus, responseDate: new Date().toISOString().split('T')[0] } : t
    ));
  };

  const handleToggleFeatured = (id) => {
    setTestimonials(testimonials.map(t => 
      t.id === id ? { ...t, featured: !t.featured } : t
    ));
  };

  const handleToggleVerified = (id) => {
    setTestimonials(testimonials.map(t => 
      t.id === id ? { ...t, verified: !t.verified } : t
    ));
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(testimonials.filter(t => t.id !== id));
    }
  };

  const handleAddTestimonial = () => {
    const newId = Math.max(...testimonials.map(t => t.id)) + 1;
    const refId = `TS-${String(847300 + newId).padStart(6, '0')}`;
    
    const testimonialToAdd = {
      id: newId,
      refId: refId,
      ...newTestimonial,
      status: 'pending',
      verified: false,
      featured: false,
      submittedDate: new Date().toISOString().split('T')[0],
      responseDate: null
    };
    
    setTestimonials([testimonialToAdd, ...testimonials]);
    setShowAddModal(false);
    setNewTestimonial({
      name: '',
      email: '',
      company: '',
      role: '',
      industry: '',
      rating: 5,
      testimonial: '',
      feedback: '',
      service: '',
      publicUse: true
    });
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const DetailModal = ({ testimonial, onClose }) => {
    if (!testimonial) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-blue-600 font-medium">{testimonial.refId}</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <XCircle className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Status Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  testimonial.status === 'approved' ? 'bg-green-100 text-green-800' :
                  testimonial.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {testimonial.status.charAt(0).toUpperCase() + testimonial.status.slice(1)}
                </span>
                {testimonial.verified && (
                  <span className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Verified
                  </span>
                )}
                {testimonial.featured && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>
              <StarRating rating={testimonial.rating} />
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <p className="text-gray-900 flex items-center mt-1">
                  <Mail className="w-4 h-4 mr-2 text-gray-400" />
                  {testimonial.email}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Company</label>
                <p className="text-gray-900 flex items-center mt-1">
                  <Building2 className="w-4 h-4 mr-2 text-gray-400" />
                  {testimonial.company}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Role</label>
                <p className="text-gray-900 flex items-center mt-1">
                  <User className="w-4 h-4 mr-2 text-gray-400" />
                  {testimonial.role}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Industry</label>
                <p className="text-gray-900">{testimonial.industry}</p>
              </div>
            </div>

            {/* Service Used */}
            <div>
              <label className="text-sm font-medium text-gray-600">Service Used</label>
              <p className="text-gray-900 bg-gray-50 p-3 rounded-lg mt-1">{testimonial.service}</p>
            </div>

            {/* Testimonial */}
            <div>
              <label className="text-sm font-medium text-gray-600">Testimonial</label>
              <p className="text-gray-900 bg-gray-50 p-4 rounded-lg mt-1 leading-relaxed">
                "{testimonial.testimonial}"
              </p>
            </div>

            {/* Feedback */}
            <div>
              <label className="text-sm font-medium text-gray-600">Additional Feedback</label>
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg mt-1">{testimonial.feedback}</p>
            </div>

            {/* Dates */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Submitted</label>
                <p className="text-gray-900 flex items-center mt-1">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  {new Date(testimonial.submittedDate).toLocaleDateString()}
                </p>
              </div>
              {testimonial.responseDate && (
                <div>
                  <label className="text-sm font-medium text-gray-600">Responded</label>
                  <p className="text-gray-900 flex items-center mt-1">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    {new Date(testimonial.responseDate).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>

            {/* Public Use Permission */}
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <AlertCircle className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-sm text-blue-900">
                {testimonial.publicUse 
                  ? "Customer has given permission for public use" 
                  : "Customer has NOT given permission for public use"}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
              {testimonial.status === 'pending' && (
                <>
                  <button
                    onClick={() => {
                      handleStatusChange(testimonial.id, 'approved');
                      onClose();
                    }}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve
                  </button>
                  <button
                    onClick={() => {
                      handleStatusChange(testimonial.id, 'rejected');
                      onClose();
                    }}
                    className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject
                  </button>
                </>
              )}
              <button
                onClick={() => {
                  handleToggleVerified(testimonial.id);
                }}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {testimonial.verified ? 'Unverify' : 'Mark as Verified'}
              </button>
              <button
                onClick={() => {
                  handleToggleFeatured(testimonial.id);
                }}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                <Star className="w-4 h-4 mr-2" />
                {testimonial.featured ? 'Remove Featured' : 'Mark as Featured'}
              </button>
              <button
                onClick={() => {
                  handleDelete(testimonial.id);
                  onClose();
                }}
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 ml-auto"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AddTestimonialModal = ({ onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Add New Testimonial</h3>
                <p className="text-gray-600 mt-1">Fill in the details to add a new customer testimonial</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <XCircle className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer Name *
                </label>
                <input
                  type="text"
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Dr. Sarah Mitchell"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={newTestimonial.email}
                  onChange={(e) => setNewTestimonial({...newTestimonial, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="email@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  value={newTestimonial.company}
                  onChange={(e) => setNewTestimonial({...newTestimonial, company: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Company Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role *
                </label>
                <input
                  type="text"
                  value={newTestimonial.role}
                  onChange={(e) => setNewTestimonial({...newTestimonial, role: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Job Title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry *
                </label>
                <select
                  value={newTestimonial.industry}
                  onChange={(e) => setNewTestimonial({...newTestimonial, industry: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Industry</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Finance">Finance</option>
                  <option value="Retail">Retail</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Technology">Technology</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating *
                </label>
                <select
                  value={newTestimonial.rating}
                  onChange={(e) => setNewTestimonial({...newTestimonial, rating: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value={5}>5 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={2}>2 Stars</option>
                  <option value={1}>1 Star</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Used *
              </label>
              <input
                type="text"
                value={newTestimonial.service}
                onChange={(e) => setNewTestimonial({...newTestimonial, service: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., AI-Powered Virtual Assistant"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Testimonial *
              </label>
              <textarea
                value={newTestimonial.testimonial}
                onChange={(e) => setNewTestimonial({...newTestimonial, testimonial: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Customer's testimonial..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Feedback
              </label>
              <textarea
                value={newTestimonial.feedback}
                onChange={(e) => setNewTestimonial({...newTestimonial, feedback: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Any additional feedback..."
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="publicUse"
                checked={newTestimonial.publicUse}
                onChange={(e) => setNewTestimonial({...newTestimonial, publicUse: e.target.checked})}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="publicUse" className="ml-2 text-sm text-gray-700">
                Customer has given permission for public use
              </label>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={handleAddTestimonial}
                disabled={!newTestimonial.name || !newTestimonial.email || !newTestimonial.company || !newTestimonial.role || !newTestimonial.industry || !newTestimonial.service || !newTestimonial.testimonial}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Add Testimonial
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Feedback Management</h1>
            <p className="text-gray-600 mt-1">Manage customer testimonials</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </button>
            <button 
              onClick={() => setShowAddModal(true)}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <ThumbsUp className="w-4 h-4 mr-2" />
              Add Testimonial
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, company, or ref ID..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All', color: 'gray' },
              { id: 'pending', label: 'Pending', color: 'yellow' },
              { id: 'approved', label: 'Approved', color: 'green' },
              { id: 'rejected', label: 'Rejected', color: 'red' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFilter === filter.id
                    ? `bg-${filter.color}-600 text-white`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials List */}
      <div className="p-6">
        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ref ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tags
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTestimonials.map((testimonial) => (
                  <tr key={testimonial.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600">{testimonial.refId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{testimonial.company}</div>
                      <div className="text-sm text-gray-500">{testimonial.industry}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StarRating rating={testimonial.rating} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        testimonial.status === 'approved' ? 'bg-green-100 text-green-800' :
                        testimonial.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {testimonial.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-1">
                        {testimonial.verified && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                            Verified
                          </span>
                        )}
                        {testimonial.featured && (
                          <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                            Featured
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(testimonial.submittedDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            setSelectedTestimonial(testimonial);
                            setShowDetailModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        {testimonial.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleStatusChange(testimonial.id, 'approved')}
                              className="text-green-600 hover:text-green-900"
                            >
                              <CheckCircle className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleStatusChange(testimonial.id, 'rejected')}
                              className="text-red-600 hover:text-red-900"
                            >
                              <XCircle className="w-5 h-5" />
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => handleDelete(testimonial.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No testimonials found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {showDetailModal && (
        <DetailModal 
          testimonial={selectedTestimonial}
          onClose={() => {
            setShowDetailModal(false);
            setSelectedTestimonial(null);
          }}
        />
      )}

      {/* Add Testimonial Modal */}
      {showAddModal && (
        <AddTestimonialModal 
          onClose={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
}