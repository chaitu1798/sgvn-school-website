import React from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Award, 
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  Code,
  Palette,
  Music,
  Heart
} from 'lucide-react'

const academicLevels = [
  {
    name: "Elementary School",
    grades: "K-5",
    description: "Building strong foundations in core subjects while fostering curiosity and creativity.",
    features: ["Literacy & Numeracy", "Science Exploration", "Social Studies", "Arts & Music", "Physical Education"]
  },
  {
    name: "Middle School",
    grades: "6-8",
    description: "Transitioning to more advanced coursework with increased independence and critical thinking.",
    features: ["Advanced Mathematics", "Laboratory Sciences", "Language Arts", "World Languages", "Technology"]
  },
  {
    name: "High School",
    grades: "9-10",
    description: "College-preparatory curriculum with specialized tracks and advanced placement opportunities.",
    features: ["AP Courses", "College Counseling", "Career Exploration", "Leadership Development", "Community Service"]
  }
]

const programs = [
  {
    icon: Code,
    title: "STEM Program",
    description: "Comprehensive science, technology, engineering, and mathematics education with hands-on projects.",
    features: ["Robotics", "Computer Science", "Engineering Design", "Advanced Math", "Research Projects"]
  },
  {
    icon: Globe,
    title: "International Baccalaureate",
    description: "Rigorous international curriculum that develops inquiring, knowledgeable, and caring young people.",
    features: ["Global Perspective", "Critical Thinking", "Research Skills", "Community Service", "Multilingualism"]
  },
  {
    icon: Palette,
    title: "Arts & Humanities",
    description: "Creative expression through visual arts, performing arts, and humanities studies.",
    features: ["Visual Arts", "Music Performance", "Theater Arts", "Creative Writing", "Art History"]
  },
  {
    icon: Heart,
    title: "Leadership & Service",
    description: "Developing character, leadership skills, and commitment to community service.",
    features: ["Student Government", "Community Service", "Leadership Training", "Peer Mentoring", "Social Responsibility"]
  }
]

const faculty = [
  {
    name: "Dr. Emily Chen",
    department: "Mathematics",
    education: "Ph.D. Mathematics, MIT",
    experience: "15 years",
    specialties: ["Calculus", "Statistics", "AP Mathematics"]
  },
  {
    name: "Mr. James Wilson",
    department: "Science",
    education: "M.S. Physics, Stanford",
    experience: "12 years",
    specialties: ["Physics", "Chemistry", "STEM Education"]
  },
  {
    name: "Ms. Sarah Martinez",
    department: "English",
    education: "M.A. English Literature, UCLA",
    experience: "10 years",
    specialties: ["Literature", "Creative Writing", "AP English"]
  },
  {
    name: "Dr. Michael Johnson",
    department: "History",
    education: "Ph.D. History, Harvard",
    experience: "18 years",
    specialties: ["World History", "U.S. History", "Political Science"]
  }
]

const academicCalendar = [
  {
    month: "August",
    events: [
      { date: "15", title: "Faculty Professional Development", type: "Staff" },
      { date: "20", title: "New Student Orientation", type: "Students" },
      { date: "25", title: "First Day of Classes", type: "All" }
    ]
  },
  {
    month: "September",
    events: [
      { date: "5", title: "Labor Day Holiday", type: "Holiday" },
      { date: "15", title: "Back to School Night", type: "Parents" },
      { date: "30", title: "Progress Reports", type: "Academic" }
    ]
  },
  {
    month: "October",
    events: [
      { date: "10", title: "Columbus Day Holiday", type: "Holiday" },
      { date: "20", title: "Parent-Teacher Conferences", type: "Parents" },
      { date: "25", title: "Fall Sports Championships", type: "Athletics" }
    ]
  }
]

export default function Academics() {
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
            <h1 className="text-5xl font-bold mb-6">Academics</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive academic program is designed to challenge, inspire, and prepare 
              students for success in college, career, and life. Discover our rigorous curriculum, 
              dedicated faculty, and innovative programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Levels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Levels</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From kindergarten through high school, we provide age-appropriate, challenging 
              curriculum that builds upon previous knowledge and skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {academicLevels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.name}</h3>
                  <div className="text-blue-600 font-semibold text-lg">{level.grades}</div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{level.description}</p>
                <ul className="space-y-2">
                  {level.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative programs provide students with unique opportunities to explore 
              their interests and develop specialized skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <program.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {program.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Faculty</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our dedicated educators who are committed to student success and academic excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.department}</p>
                <p className="text-sm text-gray-600 mb-2">{member.education}</p>
                <p className="text-sm text-gray-500 mb-3">{member.experience} experience</p>
                <div className="space-y-1">
                  {member.specialties.map((specialty) => (
                    <div key={specialty} className="text-xs text-gray-600 bg-white px-2 py-1 rounded">
                      {specialty}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Calendar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about important dates, holidays, and academic events throughout the school year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicCalendar.map((month, index) => (
              <motion.div
                key={month.month}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{month.month}</h3>
                <div className="space-y-4">
                  {month.events.map((event) => (
                    <div key={event.title} className="border-l-4 border-blue-600 pl-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-lg font-semibold text-gray-900">{event.date}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          event.type === 'Holiday' ? 'bg-red-100 text-red-800' :
                          event.type === 'Academic' ? 'bg-blue-100 text-blue-800' :
                          event.type === 'Parents' ? 'bg-green-100 text-green-800' :
                          event.type === 'Students' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                      <p className="text-gray-600">{event.title}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Download Full Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Academic Excellence</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Our commitment to academic excellence is reflected in our students' achievements 
                and our school's recognition as a leader in education.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Award className="w-8 h-8 text-blue-300" />
                  <span className="text-lg">98% College Acceptance Rate</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="w-8 h-8 text-blue-300" />
                  <span className="text-lg">25+ AP Courses Offered</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="w-8 h-8 text-blue-300" />
                  <span className="text-lg">National Merit Scholars</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="w-8 h-8 text-blue-300" />
                  <span className="text-lg">State Championship Teams</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Student Success Stories</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-300 pl-4">
                  <p className="text-blue-100 italic mb-2">
                    "Sri Gowri Vidya Nikethan prepared me not just for college, but for life. The rigorous 
                    academics and supportive environment helped me discover my passion for engineering."
                  </p>
                  <p className="text-sm text-blue-200">- Sarah Chen, MIT '24</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-4">
                  <p className="text-blue-100 italic mb-2">
                    "The teachers here truly care about each student's success. They pushed me to 
                    reach my full potential and supported me every step of the way."
                  </p>
                  <p className="text-sm text-blue-200">- Michael Rodriguez, Stanford '24</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Join Our Academic Community?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how our academic programs can help your child achieve their full potential 
              and prepare for future success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Schedule a Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}