import React from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  ArrowRight,
  Play,
  Star,
  Clock,
  UserCheck,
  Building,
  TestTube,
  Trophy
} from 'lucide-react'

// Mock data
const announcements = [
  {
    id: 1,
    title: "Spring Semester Registration Now Open",
    date: "2024-01-15",
    category: "Academic",
    urgent: true
  },
  {
    id: 2,
    title: "Annual Science Fair - March 20th",
    date: "2024-01-14",
    category: "Events",
    urgent: false
  },
  {
    id: 3,
    title: "Parent-Teacher Conference Schedule",
    date: "2024-01-13",
    category: "Parent",
    urgent: false
  }
]

const upcomingEvents = [
  {
    id: 1,
    title: "Open House",
    date: "2024-02-15",
    time: "6:00 PM",
    location: "Main Campus"
  },
  {
    id: 2,
    title: "Spring Sports Tryouts",
    date: "2024-02-20",
    time: "3:30 PM",
    location: "Athletic Center"
  },
  {
    id: 3,
    title: "College Fair",
    date: "2024-02-25",
    time: "7:00 PM",
    location: "Auditorium"
  }
]

const stats = [
  { label: "Students", value: "400+", icon: Users },
  { label: "Faculty", value: "25+", icon: GraduationCap },
  { label: "Programs", value: "20+", icon: BookOpen },
  { label: "Years of Excellence", value: "25+", icon: Award }
]

const features = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Rigorous curriculum designed to prepare students for college and beyond"
  },
  {
    icon: Users,
    title: "Dedicated Faculty",
    description: "Experienced educators committed to student success and growth"
  },
  {
    icon: Award,
    title: "Character Development",
    description: "Focus on leadership, integrity, and social responsibility"
  },
  {
    icon: BookOpen,
    title: "Innovative Programs",
    description: "STEM, arts, athletics, and extracurricular opportunities"
  }
]

export default function Home() {
  return (
    <Layout>
      <div className="pt-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* School Photo */}
              <div className="mb-8 lg:mb-0">
                <img
                  src="/images/school.png"
                  alt="SGVN School"
                  className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
                  style={{ height: "400px", objectFit: "cover" }} // <-- Set desired height here
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Empowering Minds,
                  <span className="block text-blue-300">Building Futures</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  SGVN provides a world-class education that prepares students 
                  for success in college, career, and life. Join our community of learners 
                  and discover your potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Play className="w-5 h-5" />
                    <span>Watch Video</span>
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="text-center"
                      >
                        <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-blue-200">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Announcements Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Announcements */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Announcements</h2>
                    <a href="/news" className="text-blue-600 hover:text-blue-700 font-medium">
                      View All
                    </a>
                  </div>
                  <div className="space-y-4">
                    {announcements.map((announcement) => (
                      <motion.div
                        key={announcement.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="border-l-4 border-blue-600 pl-4 py-3 bg-blue-50 rounded-r-lg"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {announcement.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>{announcement.category}</span>
                              <span>•</span>
                              <span>{new Date(announcement.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          {announcement.urgent && (
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                              Urgent
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Upcoming Events */}
              <div>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a
                      href="/news"
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2"
                    >
                      <span>View All Events</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Sri Gowri Vidya Nikethan?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach to education combines academic rigor with character 
                development, creating well-rounded individuals ready for the challenges ahead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                    <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Take the first step towards your child's future. Apply now and discover 
                the Sri Gowri Vidya Nikethan difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                  onClick={() => window.location.href = '/admissions'}
                >
                  Start Application
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Schedule a Tour
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* School Photos Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Life</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Take a virtual tour of our beautiful campus and see what makes Sri Gowri Vidya Nikethan 
                such a special place to learn and grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Campus Building */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer"
              >
                <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="text-center text-white">
                    <Building className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Main Campus</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-xl flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                    View Details
                  </span>
                </div>
              </motion.div>

              {/* Library */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="text-center text-white">
                    <BookOpen className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Library</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-xl flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                    View Details
                  </span>
                </div>
              </motion.div>

              {/* Science Lab */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group cursor-pointer"
              >
                <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="text-center text-white">
                    <TestTube className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Science Labs</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-xl flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                    View Details
                  </span>
                </div>
              </motion.div>

              {/* Athletic Center */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group cursor-pointer"
              >
                <div className="h-64 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="text-center text-white">
                    <Trophy className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Athletic Center</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-xl flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                    View Details
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Take Virtual Tour
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Have questions about our programs or want to learn more about Sri Gowri Vidya Nikethan? 
                  We're here to help you make the best decision for your child's education.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Call Us</h3>
                      <p className="text-gray-600">+91 9866168295</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Us</h3>
                      <p className="text-gray-600">sgvnhs@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Visit Us</h3>
                      <p className="text-gray-600">Bhavani Nagar,Srungavarapukota ,Andhra Pradesh 535145</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}