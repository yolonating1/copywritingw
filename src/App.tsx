import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  DollarSign,
  GraduationCap,
  MessageSquare,
  MousePointerClick,
  Star,
  Target,
  Trophy,
  Zap,
  ArrowRight,
  Clock,
  Award
} from 'lucide-react';
import HeadlineAnalyzer from './components/HeadlineAnalyzer';
import TemplateLibrary from './components/TemplateLibrary';

function App() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeToolTab, setActiveToolTab] = useState<'analyzer' | 'templates'>('analyzer');

  const courses = [
    {
      title: "AWAI's Accelerated Program for Six-Figure Copywriting",
      description: "The most comprehensive copywriting course that transforms beginners into high-paid copywriters. Master the art of persuasive writing and launch your lucrative career.",
      link: "https://awai.isrefer.com/go/COP-EA-OD/EA_1895/",
      price: "$497",
      features: ["Industry-leading certification", "Lifetime access to updates", "Real client projects"],
      category: "foundation",
      image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=600",
      badge: "Most Popular"
    },
    {
      title: "Modern Marketing Mastery",
      description: "Learn cutting-edge digital copywriting techniques. Master SEO copywriting, social media content, and email marketing strategies.",
      link: "https://awai.isrefer.com/go/MMW-EA-OD/EA_1895/",
      price: "$397",
      features: ["Latest digital techniques", "Portfolio building", "Expert mentorship"],
      category: "marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "The Barefoot Writer Program",
      description: "Perfect for beginners: Start your copywriting journey with proven techniques. Learn the fundamentals of persuasive writing.",
      link: "https://awai.isrefer.com/go/TBW-EA-OD/EA_1895/",
      price: "$197",
      features: ["Step-by-step guidance", "Practice exercises", "Community support"],
      category: "beginner",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Web Copywriting 2.0",
      description: "Specialize in high-demand web copywriting. Master conversion optimization, UX writing, and digital storytelling.",
      link: "https://awai.isrefer.com/go/WEB-EA-OD/EA_1895/",
      price: "$447",
      features: ["SEO mastery", "Conversion tactics", "UX principles"],
      category: "web",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const faqs = [
    {
      question: "Which copywriting course is best for beginners?",
      answer: "For beginners, we highly recommend The Barefoot Writer Program. It provides comprehensive foundational knowledge and practical exercises to build your copywriting skills from scratch."
    },
    {
      question: "How much can I earn after completing these copywriting courses?",
      answer: "Our graduates typically start earning $25-$35 per hour, with experienced copywriters making $100+ per hour. Many successful students earn six-figure incomes through client work and royalties."
    },
    {
      question: "Are these copywriting courses suitable for remote work?",
      answer: "Yes! All our copywriting courses are designed for remote work success. You'll learn how to find clients, manage projects, and deliver quality work from anywhere in the world."
    },
    {
      question: "How long does it take to complete the copywriting courses?",
      answer: "Course completion times vary: The Barefoot Writer Program takes 4-6 weeks, while AWAI's Accelerated Program can be completed in 3-6 months, depending on your pace."
    },
    {
      question: "Do I get a certificate after completing the copywriting courses?",
      answer: "Yes, all our copywriting courses include professional certificates upon completion. These certificates are recognized by top marketing agencies and businesses worldwide."
    }
  ];

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
              Professional <span className="text-yellow-400">Copywriting Courses</span><br />
              for Career Success
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join over 50,000 successful graduates who've mastered copywriting through our industry-leading courses. Start earning $25-$35+ per hour from home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#courses" 
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Browse Copywriting Courses <ChevronDown className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#instant-opportunity" 
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start Earning Today <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </header>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <p className="text-gray-600">Successful Students</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">97%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$100K+</div>
              <p className="text-gray-600">Average Income</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Opportunity Section */}
      <section id="instant-opportunity" className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 py-2 px-6 rounded-bl-lg font-semibold">
              Limited Time Offer
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Start Earning <span className="text-blue-600">$25-$35 Per Hour</span> Today!
                </h2>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>No Experience Required</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>Full Training Provided</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>Work From Anywhere</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span>Weekly Payments</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 p-6 rounded-xl mb-4">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Limited Spots Available</p>
                </div>
                <a
                  href="https://d95c8xp93dfgwbi9dh2p2h27w6.hop.clickbank.net"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg font-medium"
                >
                  Claim Your Spot Now <Zap className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Copywriting Courses?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Trophy className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
              <p className="text-gray-600">Our copywriting courses are recognized by top companies worldwide.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practical Skills</h3>
              <p className="text-gray-600">Learn real-world copywriting techniques that drive results.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <MessageSquare className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Get guidance from experienced copywriting professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Professional Copywriting Courses</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Choose from our selection of expert-led copywriting courses designed to help you master the art of persuasive writing.
          </p>
          
          {/* Course Filters */}
          <div className="flex justify-center mb-12 space-x-4">
            {['all', 'foundation', 'marketing', 'beginner', 'web'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-0.5 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
                <div className="relative h-48">
                  <img 
                    src={course.image} 
                    alt={`${course.title} - Professional Copywriting Course`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {course.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-yellow-400 text-blue-900 rounded-full text-sm font-bold shadow-lg">
                        {course.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                      {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="mb-6">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center mb-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-blue-600">{course.price}</span>
                      <span className="text-gray-500 ml-2">one-time</span>
                    </div>
                    <a
                      href={course.link}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Enroll Now <MousePointerClick className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Free Copywriting Tools</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Enhance your copywriting skills with our professional tools designed for maximum impact.
          </p>
          
          <div className="flex justify-center mb-8 space-x-4">
            <button
              onClick={() => setActiveToolTab('analyzer')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeToolTab === 'analyzer'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Headline Analyzer
            </button>
            <button
              onClick={() => setActiveToolTab('templates')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeToolTab === 'templates'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Template Library
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            {activeToolTab === 'analyzer' ? <HeadlineAnalyzer /> : <TemplateLibrary />}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Additional Copywriting Resources</h2>
          <div className="text-center">
            <a
              href="https://www.freelancecopywriting.net/articles"
              className="inline-flex items-center px-8 py-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
              <span className="text-xl font-medium">Access Free Copywriting Articles & Resources</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Copywriting Course FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg hover:border-blue-200 transition-colors">
                <button
                  className="w-full py-4 px-6 flex justify-between items-center text-left"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Launch Your Copywriting Career Today
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of successful copywriters who have transformed their careers through our professional copywriting courses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#courses"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all transform hover:-translate-y-0.5"
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              View Copywriting Courses
            </a>
            <a
              href="https://d95c8xp93dfgwbi9dh2p2h27w6.hop.clickbank.net"
              className="inline-flex items-center px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-300 transition-all transform hover:-translate-y-0.5"
            >
              <Star className="mr-2 h-5 w-5" />
              Start Earning Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4">© 2024 CopywritingCourses.com - Professional Copywriting Training</p>
            <p>Transform your writing skills into a profitable copywriting career.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;