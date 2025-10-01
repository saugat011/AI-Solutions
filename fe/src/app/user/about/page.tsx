"use client";

import React, { useState, useEffect } from 'react';
import { Users, Target, Globe, Award, CheckCircle, ArrowRight, Brain, Zap, Shield, TrendingUp, Building, MapPin, Phone, Mail } from 'lucide-react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Executive Officer",
      image: "/api/placeholder/300/300",
      description: "15+ years in AI research and enterprise software development"
    },
    {
      name: "Marcus Chen",
      role: "Chief Technology Officer",
      image: "/api/placeholder/300/300",
      description: "Former Google AI researcher with expertise in machine learning"
    },
    {
      name: "Lisa Rodriguez",
      role: "Head of Product",
      image: "/api/placeholder/300/300",
      description: "Product strategy expert with background in digital transformation"
    },
    {
      name: "David Thompson",
      role: "Lead Engineer",
      image: "/api/placeholder/300/300",
      description: "Full-stack developer specializing in AI integration"
    }
  ];

  const milestones = [
    { year: "2021", title: "Company Founded", description: "AI-Solutions established in Sunderland" },
    { year: "2022", title: "First Product Launch", description: "AI-powered virtual assistant released" },
    { year: "2023", title: "Global Expansion", description: "Services launched across 50+ countries" },
    { year: "2024", title: "Innovation Award", description: "Winner of AI Innovation Excellence Award" }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with AI technology."
    },
    {
      icon: Users,
      title: "People-Centered",
      description: "Our solutions are designed to empower people and enhance their work experience."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We maintain the highest standards of data protection and security."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're committed to making AI accessible to organizations worldwide."
    }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About AI-Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A Sunderland-based start-up revolutionizing the digital employee experience through innovative AI solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-700 ${
              isVisible.mission ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To innovate, promote, and deliver the future of digital employee experience. We aim to support people at work by providing cutting-edge AI-driven solutions, enabling businesses to thrive globally with a strong focus on making a worldwide impact.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the leading global provider of AI-powered solutions that transform how people work, making advanced AI technology accessible to organizations of all sizes across industries.
                </p>
              </div>
            </div>
            
            <div className={`transform transition-all duration-700 ${
              isVisible.mission ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="bg-blue-600 rounded-2xl p-8 text-white">
                <Award className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">What Sets Us Apart</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-1 mr-3 text-blue-200" />
                    <span>AI-powered virtual assistant that responds to user inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-1 mr-3 text-blue-200" />
                    <span>Affordable AI-based prototyping solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-1 mr-3 text-blue-200" />
                    <span>Rapid and proactive issue resolution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-1 mr-3 text-blue-200" />
                    <span>Accelerated design, engineering, and innovation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section id="values" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section id="timeline" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform transition-all duration-700 ${
                    isVisible.timeline ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans with decades of combined experience in AI and enterprise software
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible.team ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section id="info" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`transform transition-all duration-700 ${
              isVisible.info ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Company Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Building className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
                    <p className="text-gray-600">Sunderland, United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Global Presence</h3>
                    <p className="text-gray-600">Serving customers in 150+ countries worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Team Size</h3>
                    <p className="text-gray-600">50+ dedicated professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Growth</h3>
                    <p className="text-gray-600">500+ companies served, 2M+ hours saved</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transform transition-all duration-700 ${
              isVisible.info ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h3>
                <p className="text-gray-700 mb-8">
                  Discover how AI-Solutions can help your organization leverage the power of artificial intelligence to enhance your digital employee experience and drive innovation.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Free consultation and needs assessment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Custom AI solution development</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">24/7 support and maintenance</span>
                  </div>
                </div>
                
                <button className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                  Contact Our Team
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Be part of the AI revolution. Let's shape the future of work together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="group bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center">
              Schedule a Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}