"use client";

import React, { useState, useEffect } from 'react';
import { Brain, Rocket, Shield, Zap, TrendingUp, Users, ArrowRight, CheckCircle, Star, Clock, Globe, Award, Play, MessageSquare, Cog, Database } from 'lucide-react';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState({});
  const [activeService, setActiveService] = useState(0);

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

    // Only observe elements that have an id
    const elementsWithId = document.querySelectorAll('[id]');
    elementsWithId.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const mainServices = [
    {
      icon: Brain,
      title: "AI-Powered Virtual Assistant",
      subtitle: "Smart assistants that understand and adapt",
      description: "Our flagship virtual assistant leverages advanced AI to respond instantly to user inquiries, learn from interactions, and provide personalized solutions that improve workplace productivity.",
      features: [
        "Natural language processing",
        "24/7 availability",
        "Multi-language support",
        "Integration with existing systems",
        "Continuous learning capabilities"
      ],
      benefits: [
        "Reduce response time by 80%",
        "Handle 1000+ queries simultaneously",
        "Improve customer satisfaction",
        "Lower operational costs"
      ]
    },
    {
      icon: Rocket,
      title: "Rapid AI Prototyping Solutions",
      subtitle: "From concept to prototype in days, not months",
      description: "Accelerate your innovation cycle with our AI-powered prototyping tools that help you design, test, and iterate solutions faster than ever before.",
      features: [
        "AI-assisted design generation",
        "Automated testing frameworks",
        "Rapid iteration cycles",
        "Cost-effective development",
        "Cross-platform compatibility"
      ],
      benefits: [
        "50% faster time-to-market",
        "Reduce development costs",
        "Minimize project risks",
        "Validate ideas quickly"
      ]
    },
    {
      icon: Cog,
      title: "Custom AI Integration",
      subtitle: "Tailored AI solutions for your business",
      description: "We develop custom AI solutions that integrate seamlessly with your existing workflows, addressing specific challenges unique to your industry and organization.",
      features: [
        "Custom algorithm development",
        "Legacy system integration",
        "Scalable architecture",
        "Industry-specific solutions",
        "Ongoing optimization"
      ],
      benefits: [
        "Improved operational efficiency",
        "Competitive advantage",
        "Enhanced decision-making",
        "Future-proof technology"
      ]
    }
  ];

  const additionalServices = [
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
      icon: Users,
      title: "Training & Support",
      description: "Comprehensive training programs and 24/7 support to ensure successful adoption."
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure data processing and management solutions designed for AI applications."
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Worldwide deployment capabilities with local compliance and support."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization for peak AI system performance."
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", description: "AI solutions for patient care and medical research" },
    { name: "Finance", icon: "💰", description: "Automated trading, risk assessment, and fraud detection" },
    { name: "Manufacturing", icon: "🏭", description: "Predictive maintenance and quality control systems" },
    { name: "Retail", icon: "🛍️", description: "Personalized shopping experiences and inventory optimization" },
    { name: "Education", icon: "🎓", description: "Adaptive learning platforms and student support systems" },
    { name: "Logistics", icon: "🚚", description: "Route optimization and supply chain management" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Analysis",
      description: "We analyze your specific needs and challenges to design the perfect AI solution.",
      icon: MessageSquare
    },
    {
      step: "02", 
      title: "Solution Design",
      description: "Our experts create a detailed implementation plan tailored to your requirements.",
      icon: Cog
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build and rigorously test your AI solution to ensure optimal performance.",
      icon: Rocket
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing support and continuous optimization.",
      icon: Shield
    }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transforming digital employee experiences with cutting-edge AI technology that drives innovation and accelerates growth
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Companies Served" },
              { number: "2M+", label: "Hours Saved" },
              { number: "99.9%", label: "Uptime" },
              { number: "150+", label: "Countries" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section id="main-services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Core AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            {mainServices.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 mx-2 mb-4 font-semibold rounded-t-lg transition-colors ${
                  activeService === index
                    ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`transform transition-all duration-700 ${
                isVisible['main-services'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-6">
                    {React.createElement(mainServices[activeService].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{mainServices[activeService].title}</h3>
                    <p className="text-blue-600 font-semibold">{mainServices[activeService].subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {mainServices[activeService].description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {mainServices[activeService].features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Business Benefits</h4>
                    <ul className="space-y-3">
                      {mainServices[activeService].benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`transform transition-all duration-700 ${
                isVisible['main-services'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h4>
                  <p className="text-gray-600 mb-6">
                    Schedule a personalized demo to see how our {mainServices[activeService].title.toLowerCase()} can transform your business.
                  </p>
                  <div className="space-y-4">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center">
                      <Play className="w-5 h-5 mr-2" />
                      Schedule Demo
                    </button>
                    <button className="w-full border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section id="additional-services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Additional Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support for your AI journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible['additional-services'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  {React.createElement(service.icon, { className: "w-6 h-6 text-blue-600" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Tailored AI solutions for diverse sectors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 ${
                  isVisible.industries ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver AI solutions that work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {React.createElement(step.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div className="text-2xl font-bold text-blue-600 absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-xs">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
            Let's discuss how our AI solutions can address your specific challenges and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="group bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Case Studies
            </button>
          </div>
          
          <p className="text-blue-100 text-sm mt-6">
            Free consultation • Custom solutions • 24/7 support
          </p>
        </div>
      </section>
    </div>
  );
}