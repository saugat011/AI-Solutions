"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Brain, Rocket, Users, Shield, TrendingUp, Star, ArrowRight, Play, CheckCircle, Globe, Award, Clock, Sparkles } from 'lucide-react';
import Footer from './user/components/common/Footer';
import Navbar from './user/components/common/Navbar';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "AI-Solutions transformed our digital workplace with their virtual assistant. Productivity has never been higher!",
      author: "Sarah Chen",
      company: "TechCorp",
      role: "CTO",
      rating: 5
    },
    {
      quote: "Their AI-powered prototyping tools helped us launch our product twice as fast. Highly recommend!",
      author: "Marcus Rodriguez",
      company: "InnovateX",
      role: "Product Manager",
      rating: 5
    },
    {
      quote: "The ROI we've seen from implementing their AI solutions has exceeded all expectations.",
      author: "Lisa Park",
      company: "FutureTech",
      role: "CEO",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Served", icon: Users },
    { number: "2M+", label: "Hours Saved", icon: Clock },
    { number: "99.9%", label: "Uptime", icon: Shield },
    { number: "150+", label: "Countries", icon: Globe }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI Virtual Assistant",
      description: "Smart assistants that respond instantly and adapt to user needs, improving workplace productivity."
    },
    {
      icon: Rocket,
      title: "Rapid Prototyping",
      description: "Affordable AI-powered prototyping tools to test and deliver solutions faster."
    },
    {
      icon: Globe,
      title: "Global Innovation",
      description: "Helping industries worldwide transform their digital employee experience with innovation-driven AI."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with global standards."
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Real-time analytics and actionable insights to optimize your AI implementations."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second response times with our optimized AI infrastructure and global CDN."
    }
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <Navbar/>
      {/* Animated Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="absolute inset-0 bg-white/10"></div>
          {/* Floating particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-200/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-2 mb-8 border border-blue-200">
              <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Introducing AI-Solutions 3.0</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900">
              Empowering the Future of Work with AI
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
              AI-Solutions delivers smart virtual assistants and AI-powered prototyping tools to improve digital employee experiences and drive innovation across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white border-2 border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex justify-center">
              <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transform transition-all duration-700 ${
                  isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose AI-Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI technology meets enterprise-grade reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-500 transform hover:scale-105 ${
                  isVisible.features ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">How We Work</h2>
            <p className="text-xl text-gray-600">Simple, efficient, and results-driven</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We analyze your needs and design a custom AI solution" },
              { step: "02", title: "Development", desc: "Our team builds and tests your AI implementation" },
              { step: "03", title: "Deployment", desc: "We launch your solution and provide ongoing support" }
            ].map((item, index) => (
              <div 
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-6xl font-bold text-blue-100 mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders worldwide</p>
          </div>
          
          <div className="relative">
            <div className="bg-gray-50 rounded-xl p-8 md:p-12 border border-gray-200 min-h-[300px] flex items-center">
              <div className="w-full text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl md:text-3xl text-gray-800 mb-8 font-light italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div>
                    <div className="text-xl font-semibold text-blue-600">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-700 ${
              isVisible.about ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">About AI-Solutions</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                At AI-Solutions, our mission is to innovate, promote, and deliver the future of digital employee experience. We aim to support people at work by providing cutting-edge AI-driven solutions, enabling businesses to thrive globally.
              </p>
              <p className="text-gray-600 mb-8">
                Founded by industry veterans with decades of experience in AI and enterprise software, we're committed to making advanced AI accessible to organizations of all sizes.
              </p>
              <div className="space-y-4">
                {[
                  "Enterprise-grade AI solutions",
                  "24/7 dedicated support",
                  "99.9% uptime guarantee",
                  "SOC 2 Type II certified"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`transform transition-all duration-700 ${
              isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
                <Award className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Industry Recognition</h3>
                <p className="text-blue-100 mb-6">Winner of the 2024 AI Innovation Award and trusted by Fortune 500 companies worldwide.</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Learn More About Us
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of companies already using AI-Solutions to revolutionize their workplace productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="group bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
          
          <p className="text-blue-100 text-sm mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      
     <Footer/>
    </div>
   
  );
  
}