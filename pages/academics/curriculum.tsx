import React from 'react'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  GraduationCap, 
  CheckCircle,
  Award
} from 'lucide-react'

const curriculumAreas = [
  {
    title: "Language Arts",
    description: "Our language arts curriculum develops strong reading, writing, speaking, and listening skills through literature study, writing workshops, and language exploration.",
    topics: [
      "Reading Comprehension",
      "Creative Writing",
      "Grammar & Vocabulary",
      "Public Speaking",
      "Literature Analysis"
    ]
  },
  {
    title: "Mathematics",
    description: "Our mathematics program builds problem-solving skills, mathematical reasoning, and computational fluency through hands-on activities and real-world applications.",
    topics: [
      "Number Sense & Operations",
      "Algebra & Functions",
      "Geometry & Measurement",
      "Data Analysis & Probability",
      "Mathematical Reasoning"
    ]
  },
  {
    title: "Science",
    description: "Our science curriculum fosters inquiry, critical thinking, and scientific literacy through laboratory investigations, research projects, and collaborative problem-solving.",
    topics: [
      "Life Sciences",
      "Physical Sciences",
      "Earth & Space Sciences",
      "Engineering & Technology",
      "Scientific Method"
    ]
  },
  {
    title: "Social Studies",
    description: "Our social studies program develops historical thinking, cultural awareness, and civic responsibility through the study of history, geography, economics, and government.",
    topics: [
      "World History",
      "Geography & Cultures",
      "Civics & Government",
      "Economics",
      "Current Events"
    ]
  }
]

const approaches = [
  {
    title: "Inquiry-Based Learning",
    description: "Students explore concepts through questions, investigation, and discovery rather than direct instruction.",
    icon: BookOpen
  },
  {
    title: "Project-Based Learning",
    description: "Students gain knowledge and skills by working on complex projects that address real-world challenges.",
    icon: GraduationCap
  },
  {
    title: "Differentiated Instruction",
    description: "Teaching is tailored to meet individual student needs, interests, and learning styles.",
    icon: CheckCircle
  },
  {
    title: "Assessment for Learning",
    description: "Ongoing assessment provides feedback to adjust teaching and improve student learning.",
    icon: Award
  }
]

export default function Curriculum() {
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
            <h1 className="text-5xl font-bold mb-6">Our Curriculum</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              At Sri Gowri Vidya Nikethan, our curriculum is designed to inspire a love of learning, 
              develop critical thinking skills, and prepare students for success in a rapidly changing world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Curriculum Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our curriculum is built on the belief that all students can learn and achieve at high levels 
              when provided with challenging content, engaging instruction, and appropriate support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We take a balanced approach that combines traditional academic rigor with 
                progressive teaching methods. Our curriculum is:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Comprehensive</strong> - Addressing academic, social, emotional, and physical development
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Coherent</strong> - Building knowledge and skills systematically across grade levels
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Relevant</strong> - Connecting learning to real-world applications and student interests
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Rigorous</strong> - Setting high expectations and supporting all students to meet them
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-blue-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Curriculum Goals</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our curriculum is designed to help students:
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Think Critically</h4>
                  <p className="text-gray-600">Analyze information, evaluate evidence, and solve complex problems</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Communicate Effectively</h4>
                  <p className="text-gray-600">Express ideas clearly and listen actively in multiple formats</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Collaborate Productively</h4>
                  <p className="text-gray-600">Work effectively with others toward common goals</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Learn Independently</h4>
                  <p className="text-gray-600">Take ownership of learning and develop lifelong learning habits</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Curriculum Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive curriculum includes these core subject areas, each designed 
              to develop essential knowledge and skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculumAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                <div className="space-y-2">
                  {area.topics.map((topic) => (
                    <div key={topic} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approaches */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Teaching Approaches</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our teachers employ a variety of research-based instructional approaches to 
              engage students and maximize learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <approach.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {approach.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {approach.description}
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
              Experience Our Curriculum in Action
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Schedule a visit to see our teachers and students engaged in meaningful learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Schedule a Tour
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Request Information
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}