import React, { useState } from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  Building,
  Users,
  Calendar,
  Globe
} from 'lucide-react'

const contactInfo = {
  general: {
    phone: "+91 9866168295",
    email: "sgvnhs@gmail.com",
    address: "Bhavani Nagar(village),Srungavarapukota 535145",
    hours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  departments: [
    {
      name: "Admissions",
      phone: "+91 9866168295",
      email: "sgvnhs@gmail.com",
      hours: "Mon-Fri: 8AM-5PM"
    },
    {
      name: "Student Services",
      phone: "+91 9866168295",
      email: "sgvnhs@gmail.com",
      hours: "Mon-Fri: 8AM-4PM"
    },
    {
      name: "Business Office",
      phone: "(555) 123-4570",
      email: "business@excellenceacademy.edu",
      hours: "Mon-Fri: 8AM-4PM"
    },
    {
      name: "Technology Support",
      phone: "(555) 123-4571",
      email: "techsupport@excellenceacademy.edu",
      hours: "Mon-Fri: 7AM-6PM"
    }
  ]
}

const staffDirectory = [
  {
    name: "Dr. Sarah Johnson",
    position: "Principal",
    email: "sarah.johnson@excellenceacademy.edu",
    phone: "(555) 123-4572",
    department: "Administration"
  },
  {
    name: "Mr. David Chen",
    position: "Vice Principal",
    email: "david.chen@excellenceacademy.edu",
    phone: "(555) 123-4573",
    department: "Administration"
  },
  {
    name: "Ms. Emily Rodriguez",
    position: "Admissions Director",
    email: "emily.rodriguez@excellenceacademy.edu",
    phone: "(555) 123-4574",
    department: "Admissions"
  },
  {
    name: "Mr. James Wilson",
    position: "Student Services Director",
    email: "james.wilson@excellenceacademy.edu",
    phone: "(555) 123-4575",
    department: "Student Services"
  }
]

const officeHours = [
  {
    day: "Monday",
    hours: "8:00 AM - 5:00 PM",
    status: "Open"
  },
  {
    day: "Tuesday",
    hours: "8:00 AM - 5:00 PM",
    status: "Open"
  },
  {
    day: "Wednesday",
    hours: "8:00 AM - 5:00 PM",
    status: "Open"
  },
  {
    day: "Thursday",
    hours: "8:00 AM - 5:00 PM",
    status: "Open"
  },
  {
    day: "Friday",
    hours: "8:00 AM - 5:00 PM",
    status: "Open"
  },
  {
    day: "Saturday",
    hours: "9:00 AM - 4:00 PM",
    status: "Limited"
  },
  {
    day: "Sunday",
    hours: "Closed",
    status: "Closed"
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const { name, email, phone, subject, message, department } = formData;

  // Optional basic validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  const msg =
    ` *Contact Form Submission* %0A` +
    ` *Name:* ${name} %0A` +
    ` *Email:* ${email} %0A` +
    ` *Phone:* ${phone || "N/A"} %0A` +
    ` *Department:* ${department || "General"} %0A` +
    ` *Subject:* ${subject} %0A` +
    ` *Message:* ${message}`;

  const whatsappUrl = `https://wa.me/919866168295?text=${msg}`;

  // Optional: log the message to debug
  console.log("Redirecting to WhatsApp with message:", decodeURIComponent(msg));

  // Redirect to WhatsApp
  window.location.href = whatsappUrl;
};


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
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We're here to help! Get in touch with our team for any questions, 
              concerns, or to schedule a visit to our campus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">{contactInfo.general.phone}</p>
              <p className="text-sm text-gray-500">{contactInfo.general.hours}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">{contactInfo.general.email}</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">{contactInfo.general.address}</p>
              <p className="text-sm text-gray-500">Schedule a campus tour</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Department</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Department</option>
                      <option value="general">General Inquiry</option>
                      <option value="admissions">Admissions</option>
                      <option value="academics">Academics</option>
                      <option value="student-services">Student Services</option>
                      <option value="business">Business Office</option>
                      <option value="technology">Technology Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Map & Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Bhavani Nagar,Srungavarapukota 535145</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">{contactInfo.general.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">{contactInfo.general.hours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Directions</h3>
                    <p className="text-gray-600">
                      Located in the heart of the city, easily accessible by public transportation 
                      and major highways. Free parking available on campus.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need to reach a specific department? Here's how to get in touch with the right team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{dept.name}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{dept.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{dept.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{dept.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Directory */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Staff Directory</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect directly with our leadership team and key staff members.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffDirectory.map((staff, index) => (
              <motion.div
                key={staff.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{staff.name}</h3>
                  <p className="text-blue-600 font-medium">{staff.position}</p>
                  <p className="text-sm text-gray-500">{staff.department}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{staff.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{staff.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Office Hours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your visit with our current office hours and availability.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="space-y-4">
                {officeHours.map((day, index) => (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="font-semibold text-gray-900 w-24">{day.day}</span>
                      <span className="text-gray-600">{day.hours}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      day.status === 'Open' ? 'bg-green-100 text-green-800' :
                      day.status === 'Limited' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {day.status}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> During holidays and school breaks, office hours may vary. 
                  Please call ahead to confirm availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Contact</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              For urgent matters outside of regular office hours, please use our emergency contact line.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-md mx-auto">
              <div className="text-2xl font-bold text-red-600 mb-2">+91 9866168295</div>
              <p className="text-gray-600">24/7 Emergency Hotline</p>
              <p className="text-sm text-gray-500 mt-2">Available for urgent school-related emergencies only</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}