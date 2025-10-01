"use client";

import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Search, Filter, Plus, Edit, Trash2, Eye, Download, BarChart3, TrendingUp, DollarSign, CheckCircle, XCircle, AlertCircle, Mail, Phone, Building, Globe, Star, ChevronDown, ChevronUp } from 'lucide-react';

export default function EventManagementAdmin() {
  const [activeTab, setActiveTab] = useState('events');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [expandedRegistration, setExpandedRegistration] = useState(null);

  // Sample Events Data
  const [events, setEvents] = useState([
    {
      id: 1,
      refId: "EV-001",
      title: "AI Revolution in Healthcare Summit 2025",
      date: "2025-10-15",
      time: "09:00 - 17:00",
      location: "London Tech Center",
      type: "conference",
      category: "healthcare",
      status: "upcoming",
      price: "Free",
      capacity: 500,
      registered: 342,
      attended: 0,
      revenue: 0,
      featured: true,
      speakers: ["Dr. Sarah Chen", "Prof. Michael Roberts"],
      createdDate: "2025-08-10"
    },
    {
      id: 2,
      refId: "EV-002",
      title: "Financial AI: Future of Banking",
      date: "2025-10-22",
      time: "14:00 - 18:00",
      location: "Manchester Convention Center",
      type: "workshop",
      category: "finance",
      status: "upcoming",
      price: "£299",
      capacity: 200,
      registered: 178,
      attended: 0,
      revenue: 53222,
      featured: true,
      speakers: ["James Wilson", "Dr. Lisa Park"],
      createdDate: "2025-08-15"
    },
    {
      id: 3,
      refId: "EV-003",
      title: "AI Solutions Global Launch Event",
      date: "2025-09-10",
      time: "10:00 - 16:00",
      location: "Sunderland Innovation Center",
      type: "conference",
      category: "general",
      status: "completed",
      price: "Free",
      capacity: 800,
      registered: 756,
      attended: 689,
      revenue: 0,
      featured: true,
      speakers: ["CEO Team", "Product Leaders"],
      createdDate: "2025-07-01"
    },
    {
      id: 4,
      refId: "EV-004",
      title: "Manufacturing 4.0: Smart Factory Solutions",
      date: "2025-10-28",
      time: "10:00 - 16:00",
      location: "Birmingham Industrial Park",
      type: "demonstration",
      category: "manufacturing",
      status: "upcoming",
      price: "£199",
      capacity: 150,
      registered: 89,
      attended: 0,
      revenue: 17711,
      featured: false,
      speakers: ["Engineering Team"],
      createdDate: "2025-08-20"
    }
  ]);

  // Sample Registrations Data
  const [registrations, setRegistrations] = useState([
    {
      id: 1,
      regId: "REG-001",
      eventId: 1,
      eventTitle: "AI Revolution in Healthcare Summit 2025",
      name: "Dr. Sarah Mitchell",
      email: "sarah.mitchell@medtech.com",
      phone: "+44 7700 900123",
      company: "MedTech Solutions Ltd",
      country: "United Kingdom",
      registrationDate: "2025-09-05",
      status: "confirmed",
      attended: false,
      ticketType: "Free"
    },
    {
      id: 2,
      regId: "REG-002",
      eventId: 2,
      eventTitle: "Financial AI: Future of Banking",
      name: "James Chen",
      email: "james.chen@techstart.com",
      phone: "+44 7700 900456",
      company: "TechStart Industries",
      country: "United Kingdom",
      registrationDate: "2025-09-12",
      status: "confirmed",
      attended: false,
      ticketType: "Paid - £299"
    },
    {
      id: 3,
      regId: "REG-003",
      eventId: 3,
      eventTitle: "AI Solutions Global Launch Event",
      name: "Maria Rodriguez",
      email: "maria.r@globalbank.com",
      phone: "+44 7700 900789",
      company: "GlobalBank International",
      country: "Spain",
      registrationDate: "2025-08-15",
      status: "attended",
      attended: true,
      ticketType: "Free"
    },
    {
      id: 4,
      regId: "REG-004",
      eventId: 1,
      eventTitle: "AI Revolution in Healthcare Summit 2025",
      name: "David Park",
      email: "david.park@smartretail.com",
      phone: "+44 7700 900321",
      company: "SmartRetail Group",
      country: "United Kingdom",
      registrationDate: "2025-09-18",
      status: "cancelled",
      attended: false,
      ticketType: "Free"
    },
    {
      id: 5,
      regId: "REG-005",
      eventId: 2,
      eventTitle: "Financial AI: Future of Banking",
      name: "Lisa Wang",
      email: "lisa.wang@logiflow.com",
      phone: "+44 7700 900654",
      company: "LogiFlow Solutions",
      country: "United Kingdom",
      registrationDate: "2025-09-20",
      status: "confirmed",
      attended: false,
      ticketType: "Paid - £299"
    }
  ]);

  // Analytics Data
  const analytics = {
    totalEvents: events.length,
    upcomingEvents: events.filter(e => e.status === 'upcoming').length,
    completedEvents: events.filter(e => e.status === 'completed').length,
    totalRegistrations: registrations.length,
    confirmedRegistrations: registrations.filter(r => r.status === 'confirmed').length,
    totalRevenue: events.reduce((sum, e) => sum + e.revenue, 0),
    averageAttendance: Math.round(events.filter(e => e.status === 'completed').reduce((sum, e) => sum + (e.attended / e.registered * 100), 0) / events.filter(e => e.status === 'completed').length) || 0
  };

  const getStatusBadge = (status) => {
    const styles = {
      upcoming: 'bg-blue-100 text-blue-700',
      completed: 'bg-green-100 text-green-700',
      cancelled: 'bg-red-100 text-red-700',
      confirmed: 'bg-green-100 text-green-700',
      attended: 'bg-purple-100 text-purple-700'
    };
    return styles[status] || 'bg-gray-100 text-gray-700';
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.refId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || event.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const filteredRegistrations = registrations.filter(reg => {
    const matchesSearch = reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reg.regId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || reg.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const EventModal = ({ event, onClose }) => {
    const [formData, setFormData] = useState(event || {
      title: '',
      date: '',
      time: '',
      location: '',
      type: 'conference',
      category: 'general',
      price: 'Free',
      capacity: 100,
      featured: false,
      speakers: ''
    });

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-gray-900">
                {event ? 'Edit Event' : 'Create New Event'}
              </h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Title *</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time *</label>
                <input
                  type="text"
                  placeholder="09:00 - 17:00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Type *</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="webinar">Webinar</option>
                  <option value="demonstration">Demonstration</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="general">General</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="education">Education</option>
                  <option value="logistics">Logistics</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                <input
                  type="text"
                  placeholder="Free or £299"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Capacity *</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.capacity}
                  onChange={(e) => setFormData({...formData, capacity: parseInt(e.target.value)})}
                />
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={formData.featured}
                    onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                  />
                  <span className="ml-2 text-sm text-gray-700">Feature this event</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(event ? 'Event updated successfully!' : 'Event created successfully!');
                  onClose();
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {event ? 'Update Event' : 'Create Event'}
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
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Event Management</h1>
              <p className="text-gray-600 mt-1">Manage events and registrations</p>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </button>
              <button 
                onClick={() => setShowEventModal(true)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </button>
            </div>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-600 text-sm font-medium">Total Events</span>
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{analytics.totalEvents}</div>
              <div className="text-xs text-blue-600 mt-1">{analytics.upcomingEvents} upcoming</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-600 text-sm font-medium">Registrations</span>
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{analytics.totalRegistrations}</div>
              <div className="text-xs text-green-600 mt-1">{analytics.confirmedRegistrations} confirmed</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-600 text-sm font-medium">Total Revenue</span>
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">£{analytics.totalRevenue.toLocaleString()}</div>
              <div className="text-xs text-purple-600 mt-1">From paid events</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-orange-600 text-sm font-medium">Avg Attendance</span>
                <TrendingUp className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{analytics.averageAttendance}%</div>
              <div className="text-xs text-orange-600 mt-1">Completed events</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Tabs */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 mb-6">
          <button
            onClick={() => setActiveTab('events')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'events'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Events
          </button>
          <button
            onClick={() => setActiveTab('registrations')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'registrations'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Registrations
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'analytics'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Analytics
          </button>
        </div>

        {/* Search and Filter */}
        {(activeTab === 'events' || activeTab === 'registrations') && (
          <div className="bg-white rounded-lg p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab}...`}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                {activeTab === 'events' && (
                  <>
                    <option value="upcoming">Upcoming</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </>
                )}
                {activeTab === 'registrations' && (
                  <>
                    <option value="confirmed">Confirmed</option>
                    <option value="attended">Attended</option>
                    <option value="cancelled">Cancelled</option>
                  </>
                )}
              </select>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="bg-white rounded-lg shadow">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ref ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Registrations</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredEvents.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-blue-600">{event.refId}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{event.title}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {event.type} • {event.category}
                          {event.featured && <span className="ml-2 text-yellow-500">★ Featured</span>}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{new Date(event.date).toLocaleDateString()}</div>
                        <div className="text-xs text-gray-500">{event.time}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{event.location}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{event.registered} / {event.capacity}</div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                          <div 
                            className="bg-blue-600 h-1.5 rounded-full" 
                            style={{width: `${(event.registered / event.capacity) * 100}%`}}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {event.price === 'Free' ? 'Free' : `£${event.revenue.toLocaleString()}`}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(event.status)}`}>
                          {event.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => {
                              setSelectedEvent(event);
                              setShowEventModal(true);
                            }}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Registrations Tab */}
        {activeTab === 'registrations' && (
          <div className="space-y-4">
            {filteredRegistrations.map((reg) => (
              <div key={reg.id} className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-medium text-blue-600">{reg.regId}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(reg.status)}`}>
                          {reg.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{reg.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{reg.eventTitle}</p>
                    </div>
                    <button
                      onClick={() => setExpandedRegistration(expandedRegistration === reg.id ? null : reg.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {expandedRegistration === reg.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {expandedRegistration === reg.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center text-sm">
                          <Mail className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-gray-600">{reg.email}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-gray-600">{reg.phone}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Building className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-gray-600">{reg.company}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Globe className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-gray-600">{reg.country}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-gray-600">Registered: {new Date(reg.registrationDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-gray-600">{reg.ticketType}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 mt-4">
                        <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Mark Attended
                        </button>
                        <button className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors flex items-center">
                          <XCircle className="w-4 h-4 mr-2" />
                          Cancel Registration
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          Send Email
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Overview Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Event Performance</h3>
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Events</span>
                    <span className="text-lg font-bold text-gray-900">{analytics.totalEvents}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Upcoming</span>
                    <span className="text-lg font-bold text-blue-600">{analytics.upcomingEvents}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Completed</span>
                    <span className="text-lg font-bold text-green-600">{analytics.completedEvents}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Registration Stats</h3>
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Registrations</span>
                    <span className="text-lg font-bold text-gray-900">{analytics.totalRegistrations}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Confirmed</span>
                    <span className="text-lg font-bold text-green-600">{analytics.confirmedRegistrations}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Conversion Rate</span>
                    <span className="text-lg font-bold text-purple-600">
                      {Math.round((analytics.confirmedRegistrations / analytics.totalRegistrations) * 100)}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
                  <DollarSign className="w-5 h-5 text-purple-600" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Revenue</span>
                    <span className="text-lg font-bold text-gray-900">£{analytics.totalRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Avg per Event</span>
                    <span className="text-lg font-bold text-purple-600">
                      £{Math.round(analytics.totalRevenue / events.filter(e => e.price !== 'Free').length || 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Paid Events</span>
                    <span className="text-lg font-bold text-blue-600">
                      {events.filter(e => e.price !== 'Free').length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Events */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Top Performing Events</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {events
                    .sort((a, b) => b.registered - a.registered)
                    .slice(0, 5)
                    .map((event, index) => (
                      <div key={event.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{event.title}</div>
                            <div className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">{event.registered} registrations</div>
                          <div className="text-sm text-gray-500">
                            {Math.round((event.registered / event.capacity) * 100)}% capacity
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Events by Category</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {['healthcare', 'finance', 'manufacturing', 'retail', 'education', 'logistics'].map((category) => {
                    const categoryEvents = events.filter(e => e.category === category);
                    const count = categoryEvents.length;
                    const totalRegistrations = categoryEvents.reduce((sum, e) => sum + e.registered, 0);
                    return count > 0 ? (
                      <div key={category} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900 capitalize">{category}</span>
                            <span className="text-sm text-gray-600">{count} events</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{width: `${(count / events.length) * 100}%`}}
                            ></div>
                          </div>
                        </div>
                        <div className="ml-4 text-right">
                          <div className="text-sm font-semibold text-gray-900">{totalRegistrations}</div>
                          <div className="text-xs text-gray-500">registrations</div>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            </div>

            {/* Monthly Trend */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Registration Trend</h3>
              </div>
              <div className="p-6">
                <div className="flex items-end justify-between h-48 space-x-2">
                  {['Jul', 'Aug', 'Sep', 'Oct', 'Nov'].map((month, index) => {
                    const height = Math.random() * 100 + 50;
                    const value = Math.floor(height * 2);
                    return (
                      <div key={month} className="flex-1 flex flex-col items-center">
                        <div className="w-full flex flex-col justify-end items-center h-full">
                          <div className="text-xs font-semibold text-gray-600 mb-1">{value}</div>
                          <div 
                            className="w-full bg-blue-600 rounded-t-lg transition-all hover:bg-blue-700"
                            style={{height: `${height}%`}}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">{month}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Event Modal */}
      {showEventModal && (
        <EventModal 
          event={selectedEvent}
          onClose={() => {
            setShowEventModal(false);
            setSelectedEvent(null);
          }}
        />
      )}
    </div>
  );
}