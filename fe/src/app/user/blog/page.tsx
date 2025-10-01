"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, ArrowRight, Search, Filter, TrendingUp, Brain, Rocket, Shield, Globe, Award, BookOpen, Eye, MessageSquare, Share2, Tag, ChevronRight, Star, ThumbsUp } from 'lucide-react';

export default function BlogInsightsPage() {
  const [isVisible, setIsVisible] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

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

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI in Healthcare: Transforming Patient Care Through Intelligent Systems",
      excerpt: "Discover how AI-powered virtual assistants and diagnostic tools are revolutionizing healthcare delivery, improving patient outcomes, and reducing operational costs across medical institutions worldwide.",
      content: "Artificial Intelligence is fundamentally transforming healthcare delivery, from diagnostic accuracy to personalized treatment plans. Our AI-powered virtual assistants are helping medical professionals streamline patient interactions, while predictive analytics identify potential health risks before they become critical...",
      category: "healthcare",
      author: "Dr. Sarah Chen",
      authorRole: "Chief Medical AI Advisor",
      publishDate: "2025-09-20",
      readTime: "8 min read",
      views: 1250,
      likes: 89,
      comments: 23,
      featured: true,
      image: "🏥",
      tags: ["Healthcare AI", "Patient Care", "Medical Innovation", "Digital Health"],
      trending: true
    },
    {
      id: 2,
      title: "Rapid Prototyping with AI: From Concept to Production in Days",
      excerpt: "Learn how our AI-powered prototyping solutions are enabling businesses to accelerate innovation cycles, reduce development costs, and bring products to market 50% faster than traditional methods.",
      content: "The traditional product development cycle is being revolutionized by AI-powered prototyping tools. Companies using our rapid prototyping solutions report significant reductions in time-to-market, with some achieving production-ready prototypes in just days rather than months...",
      category: "innovation",
      author: "Mark Rodriguez",
      authorRole: "Head of Product Innovation",
      publishDate: "2025-09-18",
      readTime: "6 min read",
      views: 980,
      likes: 67,
      comments: 18,
      featured: true,
      image: "🚀",
      tags: ["Rapid Prototyping", "Product Development", "AI Innovation", "Time-to-Market"],
      trending: true
    },
    {
      id: 3,
      title: "Enterprise Security in the Age of AI: Building Trust Through Transparency",
      excerpt: "Explore the critical importance of security and compliance in AI systems, and how our enterprise-grade solutions ensure data protection while maintaining peak performance.",
      content: "As AI systems become more prevalent in enterprise environments, security considerations become paramount. Our approach to AI security encompasses end-to-end encryption, compliance with global standards, and transparent AI decision-making processes...",
      category: "security",
      author: "Jennifer Park",
      authorRole: "Security Architecture Lead",
      publishDate: "2025-09-15",
      readTime: "10 min read",
      views: 756,
      likes: 45,
      comments: 12,
      featured: true,
      image: "🛡️",
      tags: ["Enterprise Security", "AI Compliance", "Data Protection", "Trust"],
      trending: false
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Manufacturing 4.0: Predictive Maintenance with AI",
      excerpt: "How AI-powered predictive maintenance is preventing equipment failures and optimizing manufacturing operations.",
      category: "manufacturing",
      author: "David Kumar",
      authorRole: "Industrial AI Specialist",
      publishDate: "2025-09-10",
      readTime: "7 min read",
      views: 623,
      likes: 34,
      comments: 8,
      image: "🏭",
      tags: ["Manufacturing", "Predictive Maintenance", "Industry 4.0"]
    },
    {
      id: 5,
      title: "Retail Revolution: Personalizing Customer Experiences with AI",
      excerpt: "Discover how AI-driven personalization is transforming retail, increasing customer satisfaction and driving sales growth.",
      category: "retail",
      author: "Lisa Thompson",
      authorRole: "Retail AI Consultant",
      publishDate: "2025-09-08",
      readTime: "5 min read",
      views: 445,
      likes: 28,
      comments: 6,
      image: "🛒",
      tags: ["Retail AI", "Personalization", "Customer Experience"]
    },
    {
      id: 6,
      title: "Educational Technology: AI-Powered Adaptive Learning",
      excerpt: "Exploring how adaptive learning platforms are personalizing education and improving student outcomes worldwide.",
      category: "education",
      author: "Prof. Michael Zhang",
      authorRole: "Education Technology Advisor",
      publishDate: "2025-09-05",
      readTime: "9 min read",
      views: 567,
      likes: 41,
      comments: 15,
      image: "📚",
      tags: ["EdTech", "Adaptive Learning", "Student Success"]
    },
    {
      id: 7,
      title: "Financial Services: AI-Driven Risk Assessment and Fraud Detection",
      excerpt: "How financial institutions are leveraging AI for real-time risk assessment and sophisticated fraud prevention.",
      category: "finance",
      author: "Alex Morgan",
      authorRole: "FinTech AI Lead",
      publishDate: "2025-09-03",
      readTime: "6 min read",
      views: 789,
      likes: 56,
      comments: 19,
      image: "💰",
      tags: ["FinTech", "Risk Assessment", "Fraud Detection"]
    },
    {
      id: 8,
      title: "Logistics Optimization: Smart Supply Chain Management",
      excerpt: "Revolutionary AI solutions for supply chain optimization, route planning, and inventory management.",
      category: "logistics",
      author: "Rachel Adams",
      authorRole: "Supply Chain AI Expert",
      publishDate: "2025-09-01",
      readTime: "8 min read",
      views: 334,
      likes: 22,
      comments: 4,
      image: "🚚",
      tags: ["Logistics", "Supply Chain", "Optimization"]
    },
    {
      id: 9,
      title: "The Ethics of AI: Responsible Development and Deployment",
      excerpt: "Examining the ethical considerations in AI development and our commitment to responsible AI practices.",
      category: "ethics",
      author: "Dr. Emily Roberts",
      authorRole: "AI Ethics Officer",
      publishDate: "2025-08-28",
      readTime: "12 min read",
      views: 891,
      likes: 73,
      comments: 31,
      image: "⚖️",
      tags: ["AI Ethics", "Responsible AI", "Governance"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Articles', icon: Globe, color: 'blue' },
    { id: 'healthcare', label: 'Healthcare', icon: Brain, color: 'green' },
    { id: 'innovation', label: 'Innovation', icon: Rocket, color: 'purple' },
    { id: 'security', label: 'Security', icon: Shield, color: 'red' },
    { id: 'manufacturing', label: 'Manufacturing', icon: TrendingUp, color: 'orange' },
    { id: 'retail', label: 'Retail', icon: Award, color: 'pink' },
    { id: 'education', label: 'Education', icon: BookOpen, color: 'indigo' },
    { id: 'finance', label: 'Finance', icon: TrendingUp, color: 'yellow' },
    { id: 'logistics', label: 'Logistics', icon: Globe, color: 'cyan' },
    { id: 'ethics', label: 'AI Ethics', icon: Shield, color: 'gray' }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];
  
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const trendingTopics = [
    "Healthcare AI", "Rapid Prototyping", "Enterprise Security", "Predictive Maintenance",
    "Customer Personalization", "Adaptive Learning", "Risk Assessment", "Supply Chain AI"
  ];

  const PostModal = ({ post, onClose }) => {
    if (!post) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{post.image}</span>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium`}>
                        {post.category}
                      </span>
                      {post.trending && (
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </span>
                      )}
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    <span>{post.views} views</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold ml-4"
              >
                ×
              </button>
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{post.excerpt}</p>
              <div className="text-gray-700 leading-relaxed">
                {post.content && <p>{post.content}</p>}
                <p className="mt-4">
                  This is where the full article content would continue. In a real implementation, 
                  this would be populated with the complete blog post content, including formatted 
                  text, images, code examples, and other media elements.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <ThumbsUp className="w-5 h-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                    <span>{post.comments} comments</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {post.tags && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Insights & Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore the latest trends, insights, and innovations in artificial intelligence. Stay ahead with expert analysis and thought leadership from our AI specialists.
            </p>
          </div>

          {/* Blog Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Articles Published" },
              { number: "50K+", label: "Monthly Readers" },
              { number: "25+", label: "Expert Contributors" },
              { number: "15", label: "Industry Topics" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section id="filters" className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Trending Topics */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 mr-2">Trending:</span>
              {trendingTopics.slice(0, 4).map((topic, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(topic)}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  #{topic}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="featured-articles" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <p className="text-xl text-gray-600">Our most popular and insightful content</p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article 
                key={post.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer ${
                  isVisible['featured-articles'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{post.image}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium`}>
                        {post.category}
                      </span>
                      {post.trending && (
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className="font-medium">{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </span>
                      <span className="flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {post.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        {post.comments}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section id="recent-articles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Recent Insights</h2>
            <p className="text-xl text-gray-600">Stay updated with our latest thoughts and analysis</p>
          </div>

          <div className="space-y-8">
            {filteredPosts.slice(3).map((post, index) => (
              <article 
                key={post.id}
                className={`bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-all duration-300 cursor-pointer ${
                  isVisible['recent-articles'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center text-4xl">
                      {post.image}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium`}>
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.views}
                          </span>
                          <span className="flex items-center">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            {post.likes}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Ahead of AI Innovation
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Subscribe to our insights newsletter and get the latest AI trends, case studies, and expert analysis delivered weekly.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-3 rounded-lg text-gray-900 w-full sm:w-80"
            />
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          
          <p className="text-blue-100 text-sm">
            Join 15,000+ AI professionals • Weekly insights • No spam, ever
          </p>
        </div>
      </section>

      {/* Post Modal */}
      {selectedPost && (
        <PostModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}
    </div>
  );
}