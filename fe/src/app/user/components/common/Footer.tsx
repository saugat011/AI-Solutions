import React from 'react';
import { Brain, Mail, Phone, MapPin, Twitter, Linkedin, Github, Facebook, ArrowRight, Globe, Shield, Award, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/user/about" },
    { name: "Our Services", href: "/user/services" },
    { name: "Events", href: "/user/events" },
    { name: "Blog / Insights", href: "/user/blog" },
    { name: "Contact Us", href: "/user/contact" }
  ];

  const productLinks = [
    { name: "AI Virtual Assistant", href: "/user/services#virtual-assistant" },
    { name: "Rapid Prototyping", href: "/user/services#prototyping" },
    { name: "Custom AI Integration", href: "/user/services#integration" },
    { name: "Analytics & Insights", href: "/user/services#analytics" },
    { name: "Enterprise Security", href: "/user/services#security" },
    { name: "Global Deployment", href: "/user/services#deployment" }
  ];

  const supportLinks = [
    { name: "Documentation", href: "/support/docs" },
    { name: "Help Center", href: "/support/help" },
    { name: "API Reference", href: "/support/api" },
    { name: "Community Forum", href: "/support/community" },
    { name: "Training Resources", href: "/support/training" },
    { name: "System Status", href: "/support/status" }
  ];

  const companyLinks = [
    { name: "About AI-Solutions", href: "/user/about" },
    { name: "Our Team", href: "/user/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Press & Media", href: "/press" },
    { name: "Partner Program", href: "/partners" },
    { name: "Investor Relations", href: "/investors" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Cookie Policy", href: "/legal/cookies" },
    { name: "Data Processing", href: "/legal/data" },
    { name: "Compliance", href: "/legal/compliance" }
  ];

  const industryLinks = [
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Finance", href: "/industries/finance" },
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Retail", href: "/industries/retail" },
    { name: "Education", href: "/industries/education" },
    { name: "Logistics", href: "/industries/logistics" }
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/aisolutions", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/company/ai-solutions", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/ai-solutions", icon: Github },
    { name: "Facebook", href: "https://facebook.com/aisolutions", icon: Facebook }
  ];

  const trustSignals = [
    { icon: Shield, text: "Enterprise Security" },
    { icon: Globe, text: "Global Reach" },
    { icon: Award, text: "Industry Leading" },
    { icon: Clock, text: "24/7 Support" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">AI-Solutions</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Empowering the future of work with intelligent AI solutions. We leverage cutting-edge artificial intelligence to transform digital employee experiences and accelerate innovation across industries.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span>Sunderland Innovation Center, UK</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>+44 191 515 2000</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>contact@ai-solutions.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">AI Solutions</h4>
            <ul className="space-y-3">
              {productLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              {supportLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Secondary Links Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-800">
          {/* Industries */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Industries</h4>
            <div className="grid grid-cols-2 gap-2">
              {industryLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Company</h4>
            <div className="grid grid-cols-2 gap-2">
              {companyLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest AI insights and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-800 rounded-lg">
                <signal.icon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-sm text-gray-400">{signal.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} AI-Solutions. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span>AI-Solutions. All rights reserved.</span>
            </div>
            
            <div className="flex flex-wrap items-center space-x-4 text-sm">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-600">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}