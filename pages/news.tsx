import React, { useState } from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Award, 
  BookOpen,
  Camera,
  ArrowRight,
  Filter,
  Search,
  Star
} from 'lucide-react'

const newsArticles = [
  {
    id: 1,
    title: "Sri Gowri Vidya Nikethan Students Win State Science Competition",
    excerpt: "Our talented students secured first place in the annual state science fair with their innovative renewable energy project.",
    date: "2024-01-15",
    category: "Academic Achievement",
    image: "/images/news/science-competition.jpg",
    featured: true
  },
  {
    id: 2,
    title: "New STEM Center Opens on Campus",
    excerpt: "State-of-the-art facility provides students with cutting-edge technology and hands-on learning opportunities.",
    date: "2024-01-10",
    category: "Campus News",
    image: "/images/news/stem-center.jpg",
    featured: false
  },
  {
    id: 3,
    title: "Football Team Wins Regional Championship",
    excerpt: "Our Eagles football team dominated the regional finals, securing their spot in the state championship.",
    date: "2024-01-08",
    category: "Athletics",
    image: "/images/news/football-championship.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Annual Art Exhibition Showcases Student Talent",
    excerpt: "Over 200 pieces of student artwork were displayed in our annual exhibition, celebrating creativity and artistic expression.",
    date: "2024-01-05",
    category: "Arts & Culture",
    image: "/images/news/art-exhibition.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Community Service Day Brings Together 500+ Volunteers",
    excerpt: "Students, faculty, and families participated in our annual community service day, making a positive impact in our city.",
    date: "2024-01-03",
    category: "Community",
    image: "/images/news/community-service.jpg",
    featured: false
  },
  {
    id: 6,
    title: "College Acceptance Rate Reaches 98%",
    excerpt: "Our graduating class achieved an impressive 98% college acceptance rate, with students heading to top universities nationwide.",
    date: "2024-01-01",
    category: "Academic Achievement",
    image: "/images/news/college-acceptance.jpg",
    featured: false
  }
]

const upcomingEvents = [
  {
    id: 1,
    title: "Open House for Prospective Families",
    date: "2024-02-15",
    time: "6:00 PM - 8:00 PM",
    location: "Main Campus",
    category: "Admissions",
    description: "Join us for an evening of exploration and discovery. Meet our faculty, tour our facilities, and learn about our programs."
  },
  {
    id: 2,
    title: "Spring Sports Tryouts",
    date: "2024-02-20",
    time: "3:30 PM - 5:30 PM",
    location: "Athletic Center",
    category: "Athletics",
    description: "Tryouts for spring sports including soccer, tennis, track & field, and swimming."
  },
  {
    id: 3,
    title: "College Fair",
    date: "2024-02-25",
    time: "7:00 PM - 9:00 PM",
    location: "Auditorium",
    category: "Academic",
    description: "Meet representatives from over 50 colleges and universities to explore your future options."
  },
  {
    id: 4,
    title: "Science Fair",
    date: "2024-03-01",
    time: "9:00 AM - 3:00 PM",
    location: "Science Center",
    category: "Academic",
    description: "Annual science fair showcasing student research projects and scientific innovation."
  },
  {
    id: 5,
    title: "Spring Musical Performance",
    date: "2024-03-15",
    time: "7:00 PM",
    location: "Performing Arts Center",
    category: "Arts",
    description: "Our talented students present this year's spring musical production."
  },
  {
    id: 6,
    title: "Parent-Teacher Conferences",
    date: "2024-03-20",
    time: "4:00 PM - 8:00 PM",
    location: "Various Classrooms",
    category: "Academic",
    description: "Opportunity for parents to meet with teachers and discuss student progress."
  }
]

const photoGalleries = [
  {
    id: 1,
    title: "Homecoming 2023",
    imageCount: 45,
    coverImage: "/images/gallery/homecoming-cover.jpg",
    date: "October 2023"
  },
  {
    id: 2,
    title: "Graduation Ceremony",
    imageCount: 32,
    coverImage: "/images/gallery/graduation-cover.jpg",
    date: "June 2023"
  },
  {
    id: 3,
    title: "Science Fair",
    imageCount: 28,
    coverImage: "/images/gallery/science-fair-cover.jpg",
    date: "February 2023"
  },
  {
    id: 4,
    title: "Sports Championships",
    imageCount: 56,
    coverImage: "/images/gallery/sports-cover.jpg",
    date: "May 2023"
  }
]

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Academic Achievement', 'Campus News', 'Athletics', 'Arts & Culture', 'Community']

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">News & Events</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, upcoming events, and exciting happenings 
              at Sri Gowri Vidya Nikethan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what's happening at Sri Gowri Vidya Nikethan and celebrate our community's achievements.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search news..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar for these important dates and exciting events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
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
        </div>
      </section>

      {/* Photo Galleries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Galleries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Relive special moments and memories through our photo collections.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photoGalleries.map((gallery, index) => (
              <motion.div
                key={gallery.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="h-32 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{gallery.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{gallery.imageCount} photos</span>
                    <span>{gallery.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, event updates, 
              and important announcements directly in your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                />
                <button className="bg-white text-blue-900 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}