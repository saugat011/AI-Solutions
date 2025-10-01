"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Search, Filter, Download, Trash2, Eye, CheckCircle, Clock, AlertCircle, ArrowUpDown, Calendar, User, Building2, MessageSquare, Star, Archive, MoreVertical, X, ExternalLink, Tag } from 'lucide-react';

export default function AdminDashboard() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      refId: 'AS-847293',
      name: 'Sarah Johnson',
      email: 'sarah.j@techcorp.com',
      phone: '+44 20 7946 1234',
      company: 'TechCorp Industries',
      country: 'United Kingdom',
      jobTitle: 'CTO',
      inquiryType: 'virtual-assistant',
      message: 'We are looking to implement an AI-powered virtual assistant for our customer service department. We handle approximately 5000 customer inquiries per day and need a solution that can handle multiple languages.',
      urgency: 'high',
      preferredContact: 'email',
      status: 'new',
      timestamp: '2025-09-30T10:30:00',
      assignedTo: null,
      tags: ['enterprise', 'high-value'],
      notes: []
    },
    {
      id: 2,
      refId: 'AS-847294',
      name: 'James Wilson',
      email: 'j.wilson@startupventures.io',
      phone: '+44 161 234 5678',
      company: 'Startup Ventures',
      country: 'United Kingdom',
      jobTitle: 'CEO',
      inquiryType: 'demo',
      message: 'I would like to schedule a demo to see your rapid prototyping solutions in action. We are a startup in the fintech space.',
      urgency: 'normal',
      preferredContact: 'phone',
      status: 'pending',
      timestamp: '2025-09-29T14:15:00',
      assignedTo: 'Alex Morgan',
      tags: ['demo', 'fintech'],
      notes: ['Called and left voicemail', 'Follow up on Oct 1st']
    },
    {
      id: 3,
      refId: 'AS-847295',
      name: 'Emma Davis',
      email: 'emma.davis@healthsystems.co.uk',
      phone: '+44 191 555 7890',
      company: 'HealthSystems Ltd',
      country: 'United Kingdom',
      jobTitle: 'IT Director',
      inquiryType: 'security',
      message: 'We need to discuss enterprise security solutions for implementing AI in a healthcare environment. GDPR and data privacy are critical concerns for us.',
      urgency: 'critical',
      preferredContact: 'both',
      status: 'responded',
      timestamp: '2025-09-28T09:45:00',
      assignedTo: 'Michael Zhang',
      tags: ['healthcare', 'security', 'high-priority'],
      notes: ['Initial consultation scheduled for Oct 2nd', 'Sent security whitepaper']
    },
    {
      id: 4,
      refId: 'AS-847296',
      name: 'David Kumar',
      email: 'd.kumar@retailgroup.com',
      phone: '+44 20 8765 4321',
      company: 'RetailGroup International',
      country: 'United Kingdom',
      jobTitle: 'Digital Transformation Lead',
      inquiryType: 'integration',
      message: 'Looking for custom AI integration with our existing CRM and inventory management systems.',
      urgency: 'normal',
      preferredContact: 'email',
      status: 'resolved',
      timestamp: '2025-09-27T16:20:00',
      assignedTo: 'Lisa Wang',
      tags: ['retail', 'integration'],
      notes: ['Project proposal sent', 'Contract signed', 'Implementation started']
    },
   
    
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterUrgency, setFilterUrgency] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  const statusConfig = {
    new: { label: 'New', color: 'bg-blue-100 text-blue-800', icon: AlertCircle },
    pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800', icon: Clock },
    responded: { label: 'Responded', color: 'bg-purple-100 text-purple-800', icon: MessageSquare },
    resolved: { label: 'Resolved', color: 'bg-green-100 text-green-800', icon: CheckCircle }
  };

  const urgencyConfig = {
    low: { label: 'Low', color: 'text-gray-600', badge: 'bg-gray-100' },
    normal: { label: 'Normal', color: 'text-blue-600', badge: 'bg-blue-100' },
    high: { label: 'High', color: 'text-orange-600', badge: 'bg-orange-100' },
    critical: { label: 'Critical', color: 'text-red-600', badge: 'bg-red-100' }
  };

  const inquiryTypeLabels = {
    'virtual-assistant': 'AI Virtual Assistant',
    'prototyping': 'Rapid Prototyping',
    'integration': 'Custom Integration',
    'security': 'Enterprise Security',
    'demo': 'Schedule Demo',
    'partnership': 'Partnership',
    'support': 'Technical Support',
    'other': 'Other'
  };

  const stats = {
    total: messages.length,
    new: messages.filter(m => m.status === 'new').length,
    pending: messages.filter(m => m.status === 'pending').length,
    responded: messages.filter(m => m.status === 'responded').length,
    resolved: messages.filter(m => m.status === 'resolved').length
  };

  const filteredMessages = messages
    .filter(msg => {
      const matchesSearch = 
        msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.refId.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = filterStatus === 'all' || msg.status === filterStatus;
      const matchesUrgency = filterUrgency === 'all' || msg.urgency === filterUrgency;
      
      return matchesSearch && matchesStatus && matchesUrgency;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.timestamp) - new Date(a.timestamp);
      if (sortBy === 'oldest') return new Date(a.timestamp) - new Date(b.timestamp);
      if (sortBy === 'urgency') {
        const urgencyOrder = { critical: 0, high: 1, normal: 2, low: 3 };
        return urgencyOrder[a.urgency] - urgencyOrder[b.urgency];
      }
      return 0;
    });

  const updateMessageStatus = (id, newStatus) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, status: newStatus } : msg
    ));
  };

  const deleteMessage = (id) => {
    if (confirm('Are you sure you want to delete this message?')) {
      setMessages(messages.filter(msg => msg.id !== id));
      setSelectedMessage(null);
    }
  };

  const assignMessage = (id, assignee) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, assignedTo: assignee } : msg
    ));
  };

  const addNote = (id, note) => {
    if (!note.trim()) return;
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, notes: [...msg.notes, note] } : msg
    ));
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const exportToCSV = () => {
    const headers = ['Ref ID', 'Name', 'Email', 'Company', 'Status', 'Urgency', 'Date'];
    const rows = filteredMessages.map(msg => [
      msg.refId,
      msg.name,
      msg.email,
      msg.company,
      msg.status,
      msg.urgency,
      new Date(msg.timestamp).toLocaleDateString()
    ]);
    
    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contact-messages-${Date.now()}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
              <p className="text-sm text-gray-600">Manage and respond to customer inquiries</p>
            </div>
            <button
              onClick={exportToCSV}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </button>
          </div>
        </div>
      </header>

      {/* Stats Dashboard */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        

        {/* Search and Filters */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, email, company, or ref ID..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
           
            
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200 grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="pending">Pending</option>
                  <option value="responded">Responded</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
                <select
                  value={filterUrgency}
                  onChange={(e) => setFilterUrgency(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Urgencies</option>
                  <option value="critical">Critical</option>
                  <option value="high">High</option>
                  <option value="normal">Normal</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-gray-900">
                  Messages ({filteredMessages.length})
                </h2>
              </div>
              <div className="overflow-y-auto max-h-[calc(100vh-400px)]">
                {filteredMessages.map((msg) => {
                  const StatusIcon = statusConfig[msg.status].icon;
                  return (
                    <div
                      key={msg.id}
                      onClick={() => setSelectedMessage(msg)}
                      className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${
                        selectedMessage?.id === msg.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{msg.name}</div>
                          <div className="text-xs text-gray-500">{msg.refId}</div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig[msg.status].color}`}>
                          {statusConfig[msg.status].label}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">{msg.company}</div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className={`font-medium ${urgencyConfig[msg.urgency].color}`}>
                          {urgencyConfig[msg.urgency].label}
                        </span>
                        <span>{formatDate(msg.timestamp)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">{selectedMessage.name}</h2>
                      <div className="text-sm text-gray-600">Reference: {selectedMessage.refId}</div>
                    </div>
                    <button
                      onClick={() => setSelectedMessage(null)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusConfig[selectedMessage.status].color}`}>
                      {statusConfig[selectedMessage.status].label}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${urgencyConfig[selectedMessage.urgency].badge} ${urgencyConfig[selectedMessage.urgency].color}`}>
                      {urgencyConfig[selectedMessage.urgency].label} Priority
                    </span>
                    {selectedMessage.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-2">
                    <select
                      value={selectedMessage.status}
                      onChange={(e) => updateMessageStatus(selectedMessage.id, e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="new">Mark as New</option>
                      <option value="pending">Mark as Pending</option>
                      <option value="responded">Mark as Responded</option>
                      <option value="resolved">Mark as Resolved</option>
                    </select>
                    <button
                      onClick={() => deleteMessage(selectedMessage.id)}
                      className="px-3 py-2 border border-red-300 text-red-600 rounded-lg text-sm hover:bg-red-50 flex items-center"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </button>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="p-6 border-b border-gray-200 bg-gray-50">
                  <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-gray-400 mr-3" />
                      <div>
                        <div className="text-xs text-gray-500">Email</div>
                        <a href={`mailto:${selectedMessage.email}`} className="text-sm text-blue-600 hover:underline">
                          {selectedMessage.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-gray-400 mr-3" />
                      <div>
                        <div className="text-xs text-gray-500">Phone</div>
                        <a href={`tel:${selectedMessage.phone}`} className="text-sm text-blue-600 hover:underline">
                          {selectedMessage.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 text-gray-400 mr-3" />
                      <div>
                        <div className="text-xs text-gray-500">Company</div>
                        <div className="text-sm text-gray-900">{selectedMessage.company}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-3" />
                      <div>
                        <div className="text-xs text-gray-500">Job Title</div>
                        <div className="text-sm text-gray-900">{selectedMessage.jobTitle}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Details */}
                <div className="p-6 border-b border-gray-200">
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-1">Inquiry Type</div>
                    <div className="text-gray-900">{inquiryTypeLabels[selectedMessage.inquiryType]}</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-1">Preferred Contact</div>
                    <div className="text-gray-900 capitalize">{selectedMessage.preferredContact}</div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Message</div>
                    <div className="bg-gray-50 rounded-lg p-4 text-gray-800 leading-relaxed">
                      {selectedMessage.message}
                    </div>
                  </div>
                </div>

                {/* Assignment */}
                

                {/* Notes */}
                

                {/* Timestamp */}
                
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Message Selected</h3>
                <p className="text-gray-600">Select a message from the list to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}