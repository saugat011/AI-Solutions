"use client";

import React, { useState } from 'react';
import { Users, Shield, Key, Mail, Phone, Building, Globe, Calendar, Clock, CheckCircle, XCircle, AlertTriangle, Lock, Unlock, Eye, EyeOff, Search, Filter, Plus, Edit, Trash2, MoreVertical, Activity, UserCheck, UserX, RefreshCw, Download, Upload, Settings } from 'lucide-react';

export default function UserAuthenticationAdmin() {
  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterRole, setFilterRole] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);

  // Sample Users Data
  const [users, setUsers] = useState([
    {
      id: 1,
      userId: "USR-001",
      name: "Dr. Sarah Mitchell",
      email: "sarah.mitchell@medtech.com",
      phone: "+44 7700 900123",
      company: "MedTech Solutions Ltd",
      role: "admin",
      status: "active",
      country: "United Kingdom",
      lastLogin: "2025-09-30T14:30:00",
      createdDate: "2025-01-15",
      loginAttempts: 0,
      twoFactorEnabled: true,
      emailVerified: true,
      passwordChanged: "2025-08-15",
      sessions: 3
    },
    {
      id: 2,
      userId: "USR-002",
      name: "James Chen",
      email: "james.chen@techstart.com",
      phone: "+44 7700 900456",
      company: "TechStart Industries",
      role: "user",
      status: "active",
      country: "United Kingdom",
      lastLogin: "2025-09-29T09:15:00",
      createdDate: "2025-02-20",
      loginAttempts: 0,
      twoFactorEnabled: false,
      emailVerified: true,
      passwordChanged: "2025-07-10",
      sessions: 1
    },
    {
      id: 3,
      userId: "USR-003",
      name: "Maria Rodriguez",
      email: "maria.r@globalbank.com",
      phone: "+34 600 123 456",
      company: "GlobalBank International",
      role: "manager",
      status: "active",
      country: "Spain",
      lastLogin: "2025-09-28T16:45:00",
      createdDate: "2025-03-10",
      loginAttempts: 0,
      twoFactorEnabled: true,
      emailVerified: true,
      passwordChanged: "2025-08-01",
      sessions: 2
    },
    {
      id: 4,
      userId: "USR-004",
      name: "David Park",
      email: "david.park@smartretail.com",
      phone: "+44 7700 900789",
      company: "SmartRetail Group",
      role: "user",
      status: "suspended",
      country: "United Kingdom",
      lastLogin: "2025-09-15T11:20:00",
      createdDate: "2025-04-05",
      loginAttempts: 3,
      twoFactorEnabled: false,
      emailVerified: true,
      passwordChanged: "2025-06-20",
      sessions: 0
    },
    {
      id: 5,
      userId: "USR-005",
      name: "Lisa Wang",
      email: "lisa.wang@logiflow.com",
      phone: "+44 7700 900321",
      company: "LogiFlow Solutions",
      role: "user",
      status: "inactive",
      country: "United Kingdom",
      lastLogin: "2025-08-10T08:30:00",
      createdDate: "2025-05-15",
      loginAttempts: 0,
      twoFactorEnabled: false,
      emailVerified: false,
      passwordChanged: "2025-05-15",
      sessions: 0
    },
    {
      id: 6,
      userId: "USR-006",
      name: "Michael Thompson",
      email: "m.thompson@innovate.co.uk",
      phone: "+44 7700 900654",
      company: "Innovate Technologies",
      role: "manager",
      status: "active",
      country: "United Kingdom",
      lastLogin: "2025-09-30T13:00:00",
      createdDate: "2025-01-20",
      loginAttempts: 0,
      twoFactorEnabled: true,
      emailVerified: true,
      passwordChanged: "2025-09-01",
      sessions: 2
    }
  ]);

  // Sample Activity Logs
  const [activityLogs, setActivityLogs] = useState([
    {
      id: 1,
      userId: "USR-001",
      userName: "Dr. Sarah Mitchell",
      action: "Login",
      description: "Successful login from Chrome on Windows",
      ipAddress: "192.168.1.100",
      location: "London, UK",
      timestamp: "2025-09-30T14:30:00",
      status: "success"
    },
    {
      id: 2,
      userId: "USR-004",
      userName: "David Park",
      action: "Failed Login",
      description: "Failed login attempt - incorrect password",
      ipAddress: "192.168.1.105",
      location: "Manchester, UK",
      timestamp: "2025-09-30T12:15:00",
      status: "failed"
    },
    {
      id: 3,
      userId: "USR-002",
      userName: "James Chen",
      action: "Password Change",
      description: "Password successfully changed",
      ipAddress: "192.168.1.102",
      location: "Birmingham, UK",
      timestamp: "2025-09-29T16:20:00",
      status: "success"
    },
    {
      id: 4,
      userId: "USR-003",
      userName: "Maria Rodriguez",
      action: "2FA Enabled",
      description: "Two-factor authentication enabled",
      ipAddress: "83.45.67.89",
      location: "Madrid, Spain",
      timestamp: "2025-09-29T10:30:00",
      status: "success"
    },
    {
      id: 5,
      userId: "USR-006",
      userName: "Michael Thompson",
      action: "Role Change",
      description: "Role updated from User to Manager",
      ipAddress: "192.168.1.110",
      location: "Edinburgh, UK",
      timestamp: "2025-09-28T14:45:00",
      status: "success"
    }
  ]);

  // Sample Sessions Data
  const [activeSessions, setActiveSessions] = useState([
    {
      id: 1,
      userId: "USR-001",
      userName: "Dr. Sarah Mitchell",
      device: "Chrome on Windows 10",
      ipAddress: "192.168.1.100",
      location: "London, UK",
      startTime: "2025-09-30T14:30:00",
      lastActivity: "2025-09-30T15:45:00",
      status: "active"
    },
    {
      id: 2,
      userId: "USR-002",
      userName: "James Chen",
      device: "Safari on macOS",
      ipAddress: "192.168.1.102",
      location: "Birmingham, UK",
      startTime: "2025-09-29T09:15:00",
      lastActivity: "2025-09-30T11:20:00",
      status: "active"
    },
    {
      id: 3,
      userId: "USR-003",
      userName: "Maria Rodriguez",
      device: "Firefox on Ubuntu",
      ipAddress: "83.45.67.89",
      location: "Madrid, Spain",
      startTime: "2025-09-28T16:45:00",
      lastActivity: "2025-09-30T10:30:00",
      status: "active"
    }
  ]);

  // Analytics Data
  const analytics = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === 'active').length,
    suspendedUsers: users.filter(u => u.status === 'suspended').length,
    inactiveUsers: users.filter(u => u.status === 'inactive').length,
    twoFactorEnabled: users.filter(u => u.twoFactorEnabled).length,
    emailVerified: users.filter(u => u.emailVerified).length,
    activeSessions: activeSessions.length,
    failedLogins: activityLogs.filter(log => log.status === 'failed').length
  };

  const getStatusBadge = (status) => {
    const styles = {
      active: 'bg-green-100 text-green-700',
      inactive: 'bg-gray-100 text-gray-700',
      suspended: 'bg-red-100 text-red-700',
      success: 'bg-green-100 text-green-700',
      failed: 'bg-red-100 text-red-700',
      warning: 'bg-yellow-100 text-yellow-700'
    };
    return styles[status] || 'bg-gray-100 text-gray-700';
  };

  const getRoleBadge = (role) => {
    const styles = {
      admin: 'bg-purple-100 text-purple-700',
      manager: 'bg-blue-100 text-blue-700',
      user: 'bg-gray-100 text-gray-700'
    };
    return styles[role] || 'bg-gray-100 text-gray-700';
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.userId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesStatus && matchesRole;
  });

  const UserModal = ({ user, onClose }) => {
    const [formData, setFormData] = useState(user || {
      name: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      role: 'user',
      status: 'active',
      twoFactorEnabled: false
    });

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-gray-900">
                {user ? 'Edit User' : 'Create New User'}
              </h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role *</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                >
                  <option value="user">User</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status *</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={formData.twoFactorEnabled}
                    onChange={(e) => setFormData({...formData, twoFactorEnabled: e.target.checked})}
                  />
                  <span className="ml-2 text-sm text-gray-700">Enable Two-Factor Authentication</span>
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
                  alert(user ? 'User updated successfully!' : 'User created successfully!');
                  onClose();
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {user ? 'Update User' : 'Create User'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PasswordResetModal = ({ user, onClose }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-md w-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-gray-900">Reset Password</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-1">Reset password for {user?.name}</p>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> User will be required to change password on next login.
              </p>
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
                  if (password === confirmPassword && password.length > 0) {
                    alert('Password reset successfully!');
                    onClose();
                  } else {
                    alert('Passwords do not match or are empty!');
                  }
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'active': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'suspended': return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default: return <XCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const UserRowActions = ({ user }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleAction = (action) => {
      setShowMenu(false);
      switch(action) {
        case 'edit':
          setSelectedUser(user);
          setShowUserModal(true);
          break;
        case 'resetPassword':
          setSelectedUser(user);
          setShowPasswordModal(true);
          break;
        case 'suspend':
          alert(`Suspending user ${user.name}`);
          break;
        case 'delete':
          if (window.confirm(`Are you sure you want to delete user ${user.name}?`)) {
            setUsers(users.filter(u => u.id !== user.id));
          }
          break;
        default:
          break;
      }
    };

    return (
      <div className="relative inline-block text-left">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          aria-expanded={showMenu}
          aria-haspopup="true"
        >
          <MoreVertical className="w-5 h-5" />
        </button>

        {showMenu && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              <button onClick={() => handleAction('edit')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                <Edit className="w-4 h-4 mr-2" /> Edit User
              </button>
              <button onClick={() => handleAction('resetPassword')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                <Key className="w-4 h-4 mr-2" /> Reset Password
              </button>
              <button onClick={() => handleAction('suspend')} className="flex items-center w-full px-4 py-2 text-sm text-yellow-700 hover:bg-yellow-50" role="menuitem">
                <UserX className="w-4 h-4 mr-2" /> Suspend
              </button>
              <button onClick={() => handleAction('delete')} className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50" role="menuitem">
                <Trash2 className="w-4 h-4 mr-2" /> Delete
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  const SessionsTable = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Device/Browser</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">IP Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Activity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {activeSessions.map((session) => (
              <tr key={session.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{session.userName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.device}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.ipAddress}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(session.startTime)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(session.lastActivity)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => alert(`Terminating session for ${session.userName}`)}
                    className="text-red-600 hover:text-red-900 flex items-center text-xs p-2 rounded-lg hover:bg-red-50"
                  >
                    <Unlock className="w-4 h-4 mr-1" /> Terminate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t text-sm text-gray-600">
        Showing {activeSessions.length} active sessions.
      </div>
    </div>
  );

  const ActivityLogsTable = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location/IP</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {activityLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map((log) => (
              <tr key={log.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(log.timestamp)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.userName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.action}</td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{log.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.location} ({log.ipAddress})</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(log.status)}`}>
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t flex justify-between items-center text-sm text-gray-600">
        Showing {activityLogs.length} recent activities.
        <button className="flex items-center text-blue-600 hover:text-blue-800">
          <RefreshCw className="w-4 h-4 mr-1" /> Load More
        </button>
      </div>
    </div>
  );

  const SecuritySettings = () => (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 border-b pb-3">Global Security Policies</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
          <div>
            <div className="flex items-center space-x-2 text-lg font-medium text-gray-900">
              <Key className="w-5 h-5 text-blue-600" />
              <span>Password Expiration Policy</span>
            </div>
            <p className="text-sm text-gray-500 ml-7">Require users to change passwords every 90 days.</p>
          </div>
          <button className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
            Edit Setting
          </button>
        </div>

        <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
          <div>
            <div className="flex items-center space-x-2 text-lg font-medium text-gray-900">
              <Lock className="w-5 h-5 text-red-600" />
              <span>Account Lockout Threshold</span>
            </div>
            <p className="text-sm text-gray-500 ml-7">Accounts lock after 5 failed login attempts for 30 minutes.</p>
          </div>
          <button className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
            Edit Setting
          </button>
        </div>

        <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
          <div>
            <div className="flex items-center space-x-2 text-lg font-medium text-gray-900">
              <Shield className="w-5 h-5 text-purple-600" />
              <span>Mandatory Two-Factor Auth</span>
            </div>
            <p className="text-sm text-gray-500 ml-7">Mandatory 2FA for 'admin' and 'manager' roles.</p>
          </div>
          <button className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
            Edit Setting
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">User Authentication</h1>
              <p className="text-gray-600 mt-1">Manage users, roles, and security</p>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Export Users
              </button>
              <button 
                onClick={() => {
                  setSelectedUser(null);
                  setShowUserModal(true);
                }}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add User
              </button>
            </div>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-600 text-sm font-medium">Total Users</span>
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{analytics.totalUsers}</div>
              <div className="text-xs text-blue-600 mt-1">{analytics.activeUsers} active</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-600 text-sm font-medium">Active Sessions</span>
                <Activity className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{analytics.activeSessions}</div>
              <div className="text-xs text-green-600 mt-1">Live now</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-600 text-sm font-medium">2FA Enabled</span>
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{analytics.twoFactorEnabled}</div>
              <div className="text-xs text-purple-600 mt-1">{Math.round((analytics.twoFactorEnabled / analytics.totalUsers) * 100)}% coverage</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-red-600 text-sm font-medium">Failed Logins</span>
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{analytics.failedLogins}</div>
              <div className="text-xs text-red-600 mt-1">Last 24 hours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Tabs */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 mb-6">
          <button
            onClick={() => setActiveTab('users')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'users'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab('sessions')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'sessions'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Active Sessions
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'activity'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Activity Logs
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'security'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Security Settings
          </button>
        </div>

        {/* Search and Filter */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-lg p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search users by name, email, or ID..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
              >
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="user">User</option>
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-lg shadow">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Login</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Security</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-blue-600">{user.userId}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.company}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{user.email}</div>
                        <div className="text-xs text-gray-500">{user.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleBadge(user.role)}`}>
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(user.status)}
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(user.status)}`}>
                            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span>{formatDate(user.lastLogin)}</span>
                        </div>
                        <div className="text-xs text-gray-400">({user.sessions} active sessions)</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          {user.twoFactorEnabled ? <Shield className="w-4 h-4 text-purple-500" /> : <Shield className="w-4 h-4 text-gray-300" />}
                          <span className="text-xs">{user.twoFactorEnabled ? '2FA On' : '2FA Off'}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {user.emailVerified ? <UserCheck className="w-4 h-4 text-green-500" /> : <UserX className="w-4 h-4 text-red-500" />}
                          <span className="text-xs">{user.emailVerified ? 'Email Verified' : 'Unverified'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-sm font-medium">
                        <UserRowActions user={user} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t text-sm text-gray-600">
                Showing {filteredUsers.length} of {users.length} users.
            </div>
          </div>
        )}

        {/* Active Sessions Tab */}
        {activeTab === 'sessions' && <SessionsTable />}

        {/* Activity Logs Tab */}
        {activeTab === 'activity' && <ActivityLogsTable />}

        {/* Security Settings Tab */}
        {activeTab === 'security' && <SecuritySettings />}

      </div>

      {/* Modals */}
      {showUserModal && (
        <UserModal
          user={selectedUser}
          onClose={() => {
            setShowUserModal(false);
            setSelectedUser(null);
          }}
        />
      )}
      {showPasswordModal && (
        <PasswordResetModal
          user={selectedUser}
          onClose={() => {
            setShowPasswordModal(false);
            setSelectedUser(null);
          }}
        />
      )}
    </div>
  );
}