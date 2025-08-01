import React, { useState } from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Calendar, 
  DollarSign, 
  Users, 
  CheckCircle, 
  Clock,
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Star,
  Award,
  GraduationCap
} from 'lucide-react'

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    description: "Complete the online application form with all required information and documents.",
    duration: "30 minutes",
    requirements: ["Personal Information", "Academic Records", "Teacher Recommendations"]
  },
  {
    step: 2,
    title: "Schedule Interview",
    description: "Meet with our admissions team to discuss your child's goals and our programs.",
    duration: "45 minutes",
    requirements: ["Student Interview", "Parent Meeting", "Campus Tour"]
  },
  {
    step: 3,
    title: "Assessment & Testing",
    description: "Complete academic assessments to determine appropriate grade placement.",
    duration: "2 hours",
    requirements: ["Academic Assessment", "Skills Evaluation", "Placement Testing"]
  },
  {
    step: 4,
    title: "Application Review",
    description: "Our admissions committee reviews all materials and makes a decision.",
    duration: "2-3 weeks",
    requirements: ["Committee Review", "Decision Notification", "Acceptance Package"]
  }
]


const financialAid = [
  {
    type: "Merit Scholarships",
    description: "Academic excellence scholarships for outstanding students",
    amount: "Up to 50% tuition",
    requirements: ["High Academic Achievement", "Strong Test Scores", "Leadership Experience"]
  },
  {
    type: "Need-Based Aid",
    description: "Financial assistance based on family income and circumstances",
    amount: "Up to 75% tuition",
    requirements: ["Financial Need", "Complete Application", "Documentation Required"]
  },
  {
    type: "Sibling Discount",
    description: "Reduced tuition for families with multiple children enrolled",
    amount: "10% discount",
    requirements: ["Multiple Children Enrolled", "Full-Time Status"]
  }
]

const requirements = {
  elementary: [
    "Birth certificate or passport",
    "Immunization records",
    "Previous school records (if applicable)",
    "Teacher recommendation form",
    "Parent interview"
  ],
  middle: [
    "All elementary requirements",
    "Standardized test scores",
    "Academic transcripts",
    "Student interview",
    "Writing sample"
  ],
  high: [
    "All middle school requirements",
    "High school transcripts",
    "Standardized test scores (SSAT/ISEE)",
    "Multiple teacher recommendations",
    "Personal statement"
  ]
}

export default function Admissions() {
  const [selectedLevel, setSelectedLevel] = useState('elementary')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    childName: '',
    childGrade: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

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
            <h1 className="text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join our community of learners and discover the Sri Gowri Vidya Nikethan difference. 
              Our admissions process is designed to ensure the best fit for your child and family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process ensures a smooth experience for families 
              while helping us get to know your child and their unique needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-xl p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2">
                    {step.requirements.map((req) => (
                      <li key={req} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Requirements vary by grade level. Select your child's grade to see specific requirements.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Grade Level Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                {Object.keys(requirements).map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-6 py-3 rounded-md font-medium transition-colors ${
                      selectedLevel === level
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)} School
                  </button>
                ))}
              </div>
            </div>

            {/* Requirements List */}
            <motion.div
              key={selectedLevel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} School Requirements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements[selectedLevel as keyof typeof requirements].map((req, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> All documents must be submitted in English or with certified translations. 
                  Additional requirements may apply for international students.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial Aid</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to making quality education accessible to families from diverse 
              backgrounds through our comprehensive financial aid programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financialAid.map((aid, index) => (
              <motion.div
                key={aid.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{aid.type}</h3>
                  <div className="text-2xl font-bold text-green-600">{aid.amount}</div>
                </div>
                <p className="text-gray-600 mb-6 text-center">{aid.description}</p>
                <ul className="space-y-2">
                  {aid.requirements.map((req) => (
                    <li key={req} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Application</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Ready to begin your child's journey at Sri Gowri Vidya Nikethan? Complete the form below 
                and our admissions team will contact you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Child's Name *</label>
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Grade Level *</label>
                    <select
                      name="childGrade"
                      value={formData.childGrade}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Grade</option>
                      <option value="K">Kindergarten</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="3">Grade 3</option>
                      <option value="4">Grade 4</option>
                      <option value="5">Grade 5</option>
                      <option value="6">Grade 6</option>
                      <option value="7">Grade 7</option>
                      <option value="8">Grade 8</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Additional Information</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your child's interests, any special needs, or questions you have..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Questions About Admissions?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our admissions team is here to help you through every step of the process. 
              Contact us for personalized assistance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-blue-200">+91 9866168295</p>
              <p className="text-sm text-blue-300">Mon-Sat, 8AM-5PM</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-200">sgvnhs@gmail.com</p>
              <p className="text-sm text-blue-300">Response within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-200">Bhavani nagar</p>
              <p className="text-sm text-blue-300">Schedule a campus tour</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}