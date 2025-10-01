'use client';

import { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Globe,
  Smartphone
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data - replace with actual API calls
const mockData = {
  stats: {
    totalInquiries: 248,
    demoRequests: 89,
    eventParticipants: 156,
    successRate: 78.5
  },
  recentActivity: [
    { id: 1, type: 'demo', customer: 'TechCorp Ltd', time: '2 minutes ago', status: 'pending' },
    { id: 2, type: 'inquiry', customer: 'StartupXYZ', time: '15 minutes ago', status: 'completed' },
    { id: 3, type: 'event', customer: 'Innovation Hub', time: '1 hour ago', status: 'confirmed' },
    { id: 4, type: 'demo', customer: 'Digital Solutions', time: '2 hours ago', status: 'pending' },
    { id: 5, type: 'inquiry', customer: 'AI Ventures', time: '3 hours ago', status: 'in-progress' }
  ],
  chartData: [
    { name: 'Day 1', inquiries: 65, demos: 20, events: 35 },
    { name: 'Day 2', inquiries: 75, demos: 25, events: 40 },
    { name: 'Day 3', inquiries: 85, demos: 30, events: 45 },
    { name: 'Day 4', inquiries: 95, demos: 35, events: 50 },
    { name: 'Day 5', inquiries: 110, demos: 45, events: 55 },
    { name: 'Day 6', inquiries: 125, demos: 50, events: 60 },
    { name: 'Day 7', inquiries: 140, demos: 60, events: 70 }
  ],
  countryData: [
    { country: 'United Kingdom', count: 89, percentage: 35.8 },
    { country: 'United States', count: 67, percentage: 27.0 },
    { country: 'Germany', count: 34, percentage: 13.7 },
    { country: 'France', count: 28, percentage: 11.3 },
    { country: 'Others', count: 30, percentage: 12.1 }
  ]
};

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('7days');
  const [currentUser, setCurrentUser] = useState('Admin');

  const StatCard = ({ title, value, icon: Icon, trend, color = 'blue' }: any) => {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
            {trend && (
              <div className="flex items-center mt-2">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-sm text-green-500">+{trend}% from last week</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-full bg-${color}-100`}>
            <Icon size={24} className={`text-${color}-600`} />
          </div>
        </div>
      </div>
    );
  };

  const ActivityItem = ({ activity }: any) => {
    const getIcon = (type: string) => {
      switch (type) {
        case 'demo': return <Calendar size={16} className="text-blue-500" />;
        case 'inquiry': return <MessageSquare size={16} className="text-green-500" />;
        case 'event': return <Users size={16} className="text-purple-500" />;
        default: return <Clock size={16} className="text-gray-500" />;
      }
    };

    const getStatusBadge = (status: string) => {
      const badges = {
        'pending': 'bg-yellow-100 text-yellow-800',
        'completed': 'bg-green-100 text-green-800',
        'confirmed': 'bg-blue-100 text-blue-800',
        'in-progress': 'bg-purple-100 text-purple-800'
      };
      return badges[status as keyof typeof badges] || 'bg-gray-100 text-gray-800';
    };

    return (
      <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="flex items-center gap-3">
          {getIcon(activity.type)}
          <div>
            <p className="font-medium text-gray-900">{activity.customer}</p>
            <p className="text-sm text-gray-500">{activity.time}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(activity.status)}`}>
          {activity.status}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {currentUser}!</h1>
          <p className="text-gray-600 mt-1">Here's what's happening with AI-Solutions today.</p>
        </div>
        <div className="flex items-center gap-2">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Customer Inquiries"
          value={mockData.stats.totalInquiries}
          icon={MessageSquare}
          trend={12.5}
          color="blue"
        />
        <StatCard
          title="Scheduled Demos"
          value={mockData.stats.demoRequests}
          icon={Calendar}
          trend={8.3}
          color="green"
        />
        <StatCard
          title="Event Participants"
          value={mockData.stats.eventParticipants}
          icon={Users}
          trend={15.7}
          color="purple"
        />
        <StatCard
          title="Success Rate"
          value={`${mockData.stats.successRate}%`}
          icon={TrendingUp}
          trend={3.2}
          color="orange"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Overview</h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={mockData.chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="inquiries" fill="#3b82f6" name="Inquiries" />
              <Bar dataKey="demos" fill="#10b981" name="Demos" />
              <Bar dataKey="events" fill="#8b5cf6" name="Events" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-2">
            {mockData.recentActivity.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
          <button className="w-full mt-4 text-blue-500 hover:text-blue-600 text-sm font-medium">
            View All Activities
          </button>
        </div>
      </div>

      {/* Customer Geography and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Geography */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Globe size={20} />
            Customer Geography
          </h3>
          <div className="space-y-3">
            {mockData.countryData.map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-blue-${500 - index * 100}`}></div>
                  <span className="text-sm font-medium text-gray-700">{country.country}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">{country.count}</span>
                  <span className="text-xs text-gray-400">{country.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <MessageSquare className="text-blue-500 mb-2" size={20} />
              <p className="font-medium text-gray-900">View Inquiries</p>
              <p className="text-xs text-gray-500">Manage customer requests</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <Calendar className="text-green-500 mb-2" size={20} />
              <p className="font-medium text-gray-900">Schedule Demo</p>
              <p className="text-xs text-gray-500">Book new demonstrations</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <BarChart3 className="text-purple-500 mb-2" size={20} />
              <p className="font-medium text-gray-900">View Analytics</p>
              <p className="text-xs text-gray-500">Detailed reports</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <Users className="text-orange-500 mb-2" size={20} />
              <p className="font-medium text-gray-900">Manage Events</p>
              <p className="text-xs text-gray-500">Promotional events</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}