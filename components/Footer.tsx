import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const footerLinks = {
  academics: [
    { name: 'Curriculum', href: '/academics/curriculum' },
    { name: 'Programs', href: '/academics/programs' },
    { name: 'Faculty', href: '/academics/faculty' },
    { name: 'Academic Calendar', href: '/academics/calendar' },
  ],
  admissions: [
    { name: 'Apply Now', href: '/admissions/apply' },
    { name: 'Requirements', href: '/admissions/requirements' },
    { name: 'Financial Aid', href: '/admissions/financial-aid' },
  ],
  studentLife: [
    { name: 'Clubs & Activities', href: '/student-life/clubs' },
    { name: 'Athletics', href: '/student-life/athletics' },
    { name: 'Arts & Culture', href: '/student-life/arts' },
    { name: 'Student Services', href: '/student-life/services' },
  ],
  resources: [
    { name: 'Parent Portal', href: '/parent-portal' },
    { name: 'Student Portal', href: '/student-portal' },
    { name: 'Library', href: '/resources/library' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/excellenceacademy' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/sgvnhs?s=11' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/not_just_sgvn?igsh=bWJsc3FkODBrNnI0&utm_source=qr' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sri-gowri-vidyaniketan-english-medium-high-school-b907b6343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@sgvnhs25?si=awoChZweY9ALFDY1' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* School info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/school-logo.png"
                alt="SGVN Logo"
                className="w-10 h-10 object-contain rounded-lg bg-white"
              />
              <div>
                <h3 className="text-xl font-bold">SGVN</h3>
                <p className="text-gray-400 text-sm">Empowering Minds, Building Futures</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sri Gowri Vidya Nikethan is committed to providing a world-class education that prepares students 
              for success in college, career, and life. Our dedicated faculty and comprehensive programs 
              create an environment where every student can thrive.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Bhavaninagar, Araku-Visakhapatnam Rd, Srungavarapu kota, Andhra Pradesh 535145</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 9866168295</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">sgvnhs@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Academics</h4>
            <ul className="space-y-2">
              {footerLinks.academics.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Admissions</h4>
            <ul className="space-y-2">
              {footerLinks.admissions.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social media */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-3 text-blue-400">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                Subscribe to our newsletter for updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-2 md:mb-0">
              © 2000 Sgvn. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}