'use client';

import React, { useState } from 'react';
import { Search, Download, Plus, Edit2, Trash2, Mail, Phone, Building, Calendar, Shield, Lock, X } from 'lucide-react';

export default function UserManagement() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@techcorp.com',
      phone: '+44 161 234 5678',
      company: 'TechCorp Industries',
      role: 'Admin',
      status: 'Active',
      joinDate: '2024-01-15',
      lastLogin: '2 hours ago',
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Lisa Thompson',
      email: 'lisa.t@edulearn.edu',
      phone: '+44 161 876 5432',
      company: 'EduLearn Academy',
      role: 'Manager',
      status: 'Active',
      joinDate: '2024-02-20',
      lastLogin: '1 day ago',
      avatar: 'LT'
    },
    {
      id: 3,
      name: 'James Wilson',
      email: 'james.w@startupventures.com',
      phone: '+44 161 345 9876',
      company: 'Startup Ventures',
      role: 'User',
      status: 'Inactive',
      joinDate: '2023-11-10',
      lastLogin: '2 weeks ago',
      avatar: 'JW'
    },
    {
      id: 4,
      name: 'Emily Chen',
      email: 'emily.c@designstudio.com',
      phone: '+44 161 456 7890',
      company: 'Design Studio',
      role: 'Manager',
      status: 'Active',
      joinDate: '2024-03-05',
      lastLogin: '5 hours ago',
      avatar: 'EC'
    },
    {
      id: 5,
      name: 'Michael Brown',
      email: 'michael.b@consultgroup.com',
      phone: '+44 161 567 8901',
      company: 'Consult Group',
      role: 'User',
      status: 'Pending',
      joinDate: '2024-09-28',
      lastLogin: 'Never',
      avatar: 'MB'
    }
  ]);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: 'User',
    status: 'Active'
  });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) {
      alert('Please fill in required fields (Name and Email)');
      return;
    }

    const nameParts = newUser.name.split(' ');
    const avatar = nameParts.length > 1 
      ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase()
      : newUser.name.substring(0, 2).toUpperCase();

    const user = {
      id: users.length + 1,
      ...newUser,
      avatar,
      joinDate: new Date().toISOString().split('T')[0],
      lastLogin: 'Never'
    };

    setUsers([...users, user]);
    setShowAddModal(false);
    setNewUser({
      name: '',
      email: '',
      phone: '',
      company: '',
      role: 'User',
      status: 'Active'
    });
  };

  const stats = {
    total: users.length,
    active: users.filter(u => u.status === 'Active').length,
    inactive: users.filter(u => u.status === 'Inactive').length,
    pending: users.filter(u => u.status === 'Pending').length
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || user.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Inactive': return 'bg-gray-100 text-gray-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getRoleColor = (role) => {
    switch(role) {
      case 'Admin': return 'bg-purple-100 text-purple-700';
      case 'Manager': return 'bg-blue-100 text-blue-700';
      case 'User': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
            <p className="text-gray-500 mt-1">Manage system users and permissions</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

    

      {/* Search and Filters */}
      <div className="px-8 py-4 flex items-center gap-4">
        <div className="flex-1 relative">
       
         
        </div>
       
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4" />
          Add User
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden px-8 pb-6">
        <div className="h-full flex gap-4">
          {/* User List */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Users ({filteredUsers.length})</h3>
            </div>
            <div className="flex-1 overflow-y-auto">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                    selectedUser?.id === user.id ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {user.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.company}</div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(user.status)}`}>
                            {user.status}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getRoleColor(user.role)}`}>
                            {user.role}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">{user.lastLogin}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Detail Panel */}
          {selectedUser && (
            <div className="w-96 bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                      {selectedUser.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{selectedUser.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(selectedUser.status)}`}>
                          {selectedUser.status}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getRoleColor(selectedUser.role)}`}>
                          {selectedUser.role}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setSelectedUser(null)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact Information</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-xs text-gray-500">Email</div>
                        <div className="text-sm text-blue-600">{selectedUser.email}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-xs text-gray-500">Phone</div>
                        <div className="text-sm text-gray-900">{selectedUser.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-xs text-gray-500">Company</div>
                        <div className="text-sm text-gray-900">{selectedUser.company}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Account Details</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-xs text-gray-500">Role</div>
                        <div className="text-sm text-gray-900">{selectedUser.role}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-xs text-gray-500">Join Date</div>
                        <div className="text-sm text-gray-900">{selectedUser.joinDate}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-xs text-gray-500">Last Login</div>
                        <div className="text-sm text-gray-900">{selectedUser.lastLogin}</div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Add New User</h3>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john.doe@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={newUser.phone}
                  onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+44 161 234 5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  value={newUser.company}
                  onChange={(e) => setNewUser({...newUser, company: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Company Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="User">User</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={newUser.status}
                  onChange={(e) => setNewUser({...newUser, status: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddUser}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}