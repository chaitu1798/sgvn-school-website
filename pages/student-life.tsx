import React from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { 
  Users, 
  Trophy, 
  Palette, 
  Music, 
  Heart, 
  BookOpen,
  Camera,
  Globe,
  Code,
  Star,
  Award,
  Calendar
} from 'lucide-react'

const clubs = [
  {
    name: "Student Government",
    description: "Leadership opportunities and student advocacy",
    icon: Users,
    meeting: "Tuesdays, 3:30 PM",
    advisor: "Ms. Johnson"
  },
  {
    name: "Science Club",
    description: "STEM projects and science competitions",
    icon: BookOpen,
    meeting: "Wednesdays, 3:30 PM",
    advisor: "Dr. Chen"
  },
  {
    name: "Art Club",
    description: "Creative expression and artistic development",
    icon: Palette,
    meeting: "Thursdays, 3:30 PM",
    advisor: "Ms. Rodriguez"
  },
  {
    name: "Music Ensemble",
    description: "Band, choir, and musical performances",
    icon: Music,
    meeting: "Fridays, 3:30 PM",
    advisor: "Mr. Wilson"
  },
  {
    name: "Community Service",
    description: "Volunteer work and social responsibility",
    icon: Heart,
    meeting: "Saturdays, 9:00 AM",
    advisor: "Ms. Davis"
  },
  {
    name: "Technology Club",
    description: "Coding, robotics, and digital innovation",
    icon: Code,
    meeting: "Mondays, 3:30 PM",
    advisor: "Mr. Thompson"
  }
]

const sports = [
  {
    name: "Football",
    season: "Fall",
    achievements: ["State Champions 2023", "Regional Finalists 2022"],
    coach: "Coach Martinez"
  },
  {
    name: "Basketball",
    season: "Winter",
    achievements: ["District Champions 2023", "State Semi-Finalists 2022"],
    coach: "Coach Johnson"
  },
  {
    name: "Soccer",
    season: "Spring",
    achievements: ["Regional Champions 2023", "State Finalists 2022"],
    coach: "Coach Rodriguez"
  },
  {
    name: "Track & Field",
    season: "Spring",
    achievements: ["Multiple State Records", "National Qualifiers"],
    coach: "Coach Wilson"
  },
  {
    name: "Swimming",
    season: "Winter",
    achievements: ["State Champions 2023", "National Champions 2022"],
    coach: "Coach Chen"
  },
  {
    name: "Tennis",
    season: "Spring",
    achievements: ["District Champions 2023", "State Finalists 2022"],
    coach: "Coach Davis"
  }
]

const events = [
  {
    name: "Homecoming Week",
    date: "October 15-21",
    description: "A week of school spirit, games, and celebration",
    type: "School Spirit"
  },
  {
    name: "Spring Musical",
    date: "March 15-17",
    description: "Annual theatrical production featuring student talent",
    type: "Arts"
  },
  {
    name: "Science Fair",
    date: "February 28",
    description: "Student research projects and scientific innovation",
    type: "Academic"
  },
  {
    name: "International Day",
    date: "April 12",
    description: "Celebration of cultural diversity and global awareness",
    type: "Cultural"
  }
]

export default function StudentLife() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Student Life</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover the vibrant community that makes Sri Gowri Vidya Nikethan more than just a school. 
              From clubs and sports to arts and community service, there's something for every student.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Clubs & Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join one of our many student organizations and discover your passions, 
              develop leadership skills, and make lifelong friendships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <motion.div
                key={club.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <club.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{club.name}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{club.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{club.meeting}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Advisor: {club.advisor}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Athletics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Athletics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our athletic programs promote teamwork, discipline, and excellence both on and off the field.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sports.map((sport, index) => (
              <motion.div
                key={sport.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{sport.name}</h3>
                  <p className="text-blue-600 font-medium">{sport.season}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Coach: {sport.coach}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Recent Achievements:</p>
                    <ul className="space-y-1">
                      {sport.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Throughout the year, we host special events that bring our community together 
              and create lasting memories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-8 border border-blue-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{event.name}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                <div className="flex items-center space-x-2 text-blue-600 font-medium">
                  <Calendar className="w-5 h-5" />
                  <span>{event.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support services to ensure every student's success 
              and well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Counseling</h3>
              <p className="text-gray-600">Academic, career, and personal counseling services</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Library</h3>
              <p className="text-gray-600">Extensive collection of books and digital resources</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology</h3>
              <p className="text-gray-600">Computer labs and technology support services</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">International</h3>
              <p className="text-gray-600">Support for international students and programs</p>
            </motion.div>
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
              Join Our Community
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to get involved? Explore our clubs, try out for a sports team, 
              or attend one of our special events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View All Clubs
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Sports Tryouts
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}