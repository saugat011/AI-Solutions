"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Users, Globe, Building2, ArrowRight, CheckCircle, AlertCircle, User, Briefcase, HelpCircle, Zap, Brain, Shield, Award } from 'lucide-react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    jobTitle: '',
    inquiryType: '',
    message: '',
    urgency: 'normal',
    preferredContact: 'email'
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

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our AI specialists",
      details: "+44 191 515 2000",
      subDetails: "Mon-Fri, 9:00 AM - 6:00 PM GMT",
      action: "Call Now",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      btnColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed responses to your inquiries",
      details: "contact@ai-solutions.com",
      subDetails: "Response within 24 hours",
      action: "Send Email",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      btnColor: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team instantly",
      details: "Available 24/7",
      subDetails: "Average response time: 2 minutes",
      action: "Start Chat",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      btnColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a personalized consultation",
      details: "30-60 minute sessions",
      subDetails: "Video call or phone available",
      action: "Book Now",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      btnColor: "bg-orange-600 hover:bg-orange-700"
    }
  ];

  const offices = [
    {
      city: "Sunderland (Headquarters)",
      address: "AI-Solutions Innovation Center\n123 Technology Street\nSunderland SR1 1AA\nUnited Kingdom",
      phone: "+44 191 515 2000",
      email: "sunderland@ai-solutions.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      managers: ["Dr. Sarah Chen - Chief Technology Officer", "Mark Rodriguez - Head of Innovation"],
      flag: "🇬🇧"
    },
    {
      city: "London",
      address: "AI-Solutions London Office\n456 Innovation Way\nLondon EC2A 1HQ\nUnited Kingdom",
      phone: "+44 20 7946 0958",
      email: "london@ai-solutions.com",
      hours: "Mon-Fri: 8:30 AM - 6:30 PM",
      managers: ["James Wilson - Regional Director", "Lisa Thompson - Client Relations"],
      flag: "🇬🇧"
    },
    {
      city: "Manchester",
      address: "AI-Solutions Manchester Hub\n789 Digital Plaza\nManchester M1 1AA\nUnited Kingdom",
      phone: "+44 161 123 4567",
      email: "manchester@ai-solutions.com",
      hours: "Mon-Fri: 9:00 AM - 5:30 PM",
      managers: ["David Kumar - Technical Lead", "Rachel Adams - Business Development"],
      flag: "🇬🇧"
    }
  ];

  const inquiryTypes = [
    { value: 'virtual-assistant', label: 'AI-Powered Virtual Assistant', icon: Brain },
    { value: 'prototyping', label: 'Rapid Prototyping Solutions', icon: Zap },
    { value: 'integration', label: 'Custom AI Integration', icon: Award },
    { value: 'security', label: 'Enterprise Security', icon: Shield },
    { value: 'demo', label: 'Schedule Demo', icon: Calendar },
    { value: 'partnership', label: 'Partnership Opportunities', icon: Users },
    { value: 'support', label: 'Technical Support', icon: HelpCircle },
    { value: 'other', label: 'Other Inquiry', icon: MessageSquare }
  ];

  const departments = [
    {
      id: 'sales',
      name: 'Sales & Business Development',
      email: 'sales@ai-solutions.com',
      phone: '+44 191 515 2001',
      description: 'New business inquiries, product demonstrations, and partnership opportunities',
      team: ['James Chen - Sales Director', 'Sarah Park - Business Development Manager']
    },
    {
      id: 'technical',
      name: 'Technical Support',
      email: 'support@ai-solutions.com',
      phone: '+44 191 515 2002',
      description: 'Technical assistance, implementation support, and troubleshooting',
      team: ['Michael Zhang - Technical Support Lead', 'Emma Foster - Solutions Engineer']
    },
    {
      id: 'partnerships',
      name: 'Partnerships & Alliances',
      email: 'partnerships@ai-solutions.com',
      phone: '+44 191 515 2003',
      description: 'Strategic partnerships, integrations, and collaboration opportunities',
      team: ['Alex Morgan - Partnership Director', 'Lisa Wang - Alliance Manager']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        jobTitle: '',
        inquiryType: '',
        message: '',
        urgency: 'normal',
        preferredContact: 'email'
      });
    }, 3000);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Our expert team is here to help you discover the perfect AI solution for your needs.
            </p>
          </div>

          {/* Quick Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className={`w-8 h-8 ${method.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                <p className="font-semibold text-gray-900 mb-1">{method.details}</p>
                <p className="text-xs text-gray-500 mb-4">{method.subDetails}</p>
                <button className={`${method.btnColor} text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`transform transition-all duration-700 ${
              isVisible['contact-form'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                {formSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for contacting AI-Solutions. Our team will review your inquiry and respond within 24 hours.
                    </p>
                    <p className="text-sm text-gray-500">
                      Reference ID: AS-{Date.now().toString().slice(-6)}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="your.email@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+44 123 456 7890"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="United Kingdom"
                          value={formData.country}
                          onChange={(e) => setFormData({...formData, country: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., CTO, IT Director"
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                      >
                        <option value="">Select an option</option>
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <textarea
                        rows={6}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us more about your needs and how we can help..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    {/* Additional Options */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                        <select
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.urgency}
                          onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                        >
                          <option value="low">Low - General inquiry</option>
                          <option value="normal">Normal - Standard response</option>
                          <option value="high">High - Urgent matter</option>
                          <option value="critical">Critical - Immediate attention</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                        <select
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.preferredContact}
                          onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        >
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                          <option value="both">Email and Phone</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className={`transform transition-all duration-700 ${
              isVisible['contact-form'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    We're here to help you harness the power of AI for your business. Whether you need technical support, want to schedule a demo, or have questions about our services, our expert team is ready to assist you.
                  </p>
                </div>

                {/* Headquarters Info */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Building2 className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Headquarters</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                      <div>
                        <p className="text-gray-900 font-medium">AI-Solutions Innovation Center</p>
                        <p className="text-gray-600">Sunderland, United Kingdom</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-gray-600 mr-3" />
                      <p className="text-gray-900">+44 191 515 2000</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-gray-600 mr-3" />
                      <p className="text-gray-900">contact@ai-solutions.com</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-gray-600 mr-3" />
                      <p className="text-gray-900">Mon-Fri: 9:00 AM - 6:00 PM GMT</p>
                    </div>
                  </div>
                </div>

                {/* Department Contacts */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Department Contacts</h3>
                  <div className="space-y-4">
                    {departments.map((dept) => (
                      <div key={dept.id} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{dept.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{dept.description}</p>
                        <div className="flex flex-col space-y-2 text-sm">
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-blue-600">{dept.email}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-gray-700">{dept.phone}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Response Times */}
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Response Times</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">General Inquiries:</span>
                      <span className="font-medium text-gray-900">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Technical Support:</span>
                      <span className="font-medium text-gray-900">Within 4 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sales Inquiries:</span>
                      <span className="font-medium text-gray-900">Within 2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Critical Issues:</span>
                      <span className="font-medium text-red-600">Within 1 hour</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section id="office-locations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Locations</h2>
            <p className="text-xl text-gray-600">Visit us at any of our UK offices</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible['office-locations'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                  <span className="text-3xl">{office.flag}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <p className="text-gray-700 whitespace-pre-line">{office.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <p className="text-gray-700">{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <p className="text-gray-700">{office.email}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <p className="text-gray-700">{office.hours}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Personnel:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {office.managers.map((manager, idx) => (
                      <li key={idx}>{manager}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg transition-colors flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about getting started with AI-Solutions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can I get a response to my inquiry?",
                answer: "We respond to all inquiries within 24 hours for general questions, and within 4 hours for technical support. Sales inquiries typically receive responses within 2 hours during business hours."
              },
              {
                question: "Do I need to provide account details or passwords?",
                answer: "No, you don't need to create accounts or provide passwords to contact us. Our contact forms are designed to collect only the information necessary to help you effectively."
              },
              {
                question: "Can I schedule a demo of your AI solutions?",
                answer: "Absolutely! You can request a personalized demo through our contact form or by calling our sales team directly. Demos are typically scheduled within 48 hours of your request."
              },
              {
                question: "What information should I include in my inquiry?",
                answer: "Please include your name, email, company details, and a description of your specific needs or challenges. The more details you provide, the better we can assist you."
              },
              {
                question: "Do you provide technical support for existing customers?",
                answer: "Yes, we offer comprehensive technical support for all our customers. Use our technical support contact form or call our dedicated support line for assistance."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Don't wait to revolutionize your business with AI. Contact our expert team today and discover how our solutions can drive your success.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Meeting
            </button>
          </div>
          
          <p className="text-blue-100 text-sm mt-6">
            Free consultation • Expert guidance • Personalized solutions
          </p>
        </div>
      </section>
    </div>
  );
}