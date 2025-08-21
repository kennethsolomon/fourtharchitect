'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    services: '',
    timeline: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real application, you would send this data to your backend
      console.log('Form submitted:', formData)

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        services: '',
        timeline: '',
        message: '',
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-black mb-8 group"
            >
              <svg
                className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              BACK TO HOME
            </Link>
            <h1 className="text-5xl md:text-6xl font-display mb-6">
              CONTACT <span className="text-fourth-yellow">US</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your architectural vision to life? Let's start the conversation about
              your next project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display mb-8">Start Your Project</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Thank you for your inquiry! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    There was an error submitting your form. Please try again or contact us
                    directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fourth-yellow focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fourth-yellow focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fourth-yellow focus:border-transparent"
                      placeholder="+63 912 345 6789"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Project Location *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fourth-yellow focus:border-transparent"
                    >
                      <option value="">Select project location</option>
                      <option value="sorsogon">Sorsogon City</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="services"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Select Services
                    </label>
                    <select
                      id="services"
                      name="services"
                      value={formData.services}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fourth-yellow focus:border-transparent"
                    >
                      <option value="">Residential</option>
                      <option value="under-2m">Commercial</option>
                      <option value="under-2m">Apartment</option>
                      <option value="under-2m">Interior Fit-Out</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Lot Type
                    </label>
                    <select
                      id="lotType"
                      name="lotType"
                      value={formData.lotType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fourth-yellow focus:border-transparent"
                    >
                      <option value="">Select lot type</option>
                      <option value="immediate">Corner</option>
                      <option value="1-3months">Through</option>
                      <option value="3-6months">End Lot</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="propertyType"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fourth-yellow focus:border-transparent"
                    >
                      <option value="">Residential</option>
                      <option value="under-2m">Master Planning</option>
                      <option value="under-2m">3D Modelling & Renderings</option>
                      <option value="under-2m">Renovation/Remodeling Design</option>
                      <option value="under-2m">Construction Supervision</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fourth-yellow focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Start Immediately</option>
                      <option value="1-3months">1-3 Months</option>
                      <option value="3-6months">3-6 Months</option>
                      <option value="6-12months">6-12 Months</option>
                      <option value="over-1year">Over 1 Year</option>
                      <option value="planning">Still Planning</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Lot Area
                    </label>
                    <input
                      type="text"
                      id="lotArea"
                      name="lotArea"
                      value={formData.lotArea}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fourth-yellow focus:border-transparent"
                      placeholder="100 sqm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="projectBudget"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Project Budget
                    </label>
                    <input
                      type="text"
                      id="projectBudget"
                      name="projectBudget"
                      value={formData.projectBudget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fourth-yellow focus:border-transparent"
                      placeholder="₱100,000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="howSoon"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      How soon?
                    </label>
                    <input
                      type="text"
                      id="howSoon"
                      name="howSoon"
                      value={formData.howSoon}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fourth-yellow focus:border-transparent"
                      placeholder="1-3 Months"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="projectFiles"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Upload Project Files
                    </label>
                    <input
                      type="file"
                      id="projectFiles"
                      name="projectFiles"
                      multiple
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fourth-yellow focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      You can upload multiple files (e.g., images, PDFs, plans).
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Comments
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fourth-yellow focus:border-transparent"
                    placeholder="Tell us about your project vision, requirements, and any specific details you'd like us to know..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-black py-4 px-8 rounded-lg font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Project Inquiry'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-display mb-8">Get In Touch</h2>

              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-lg font-semibold text-fourth-yellow mb-3">Office Address</h3>
                  <p className="text-gray-600">
                    Fourth Architects Studio
                    <br />
                    123 Rizal Street, City Center
                    <br />
                    Sorsogon City, Sorsogon 4700
                    <br />
                    Philippines
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-fourth-yellow mb-3">
                    Contact Information
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <strong>Phone:</strong>{' '}
                      <a
                        href="tel:+639123456789"
                        className="hover:text-fourth-yellow transition-colors"
                      >
                        +63 912 345 6789
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <strong>Email:</strong>{' '}
                      <a
                        href="mailto:office@fourtharchitects.com"
                        className="hover:text-fourth-yellow transition-colors"
                      >
                        office@fourtharchitects.com
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <strong>Projects:</strong>{' '}
                      <a
                        href="mailto:projects@fourtharchitects.com"
                        className="hover:text-fourth-yellow transition-colors"
                      >
                        projects@fourtharchitects.com
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-fourth-yellow mb-3">Office Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>
                      <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM
                    </p>
                    <p>
                      <strong>Saturday:</strong> 9:00 AM - 3:00 PM
                    </p>
                    <p>
                      <strong>Sunday:</strong> By Appointment Only
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-fourth-yellow mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/MArkitekturaph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-fourth-yellow transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-fourth-yellow transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-fourth-yellow transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid gap-4">
                <div className="border border-gray-200 rounded-lg p-6 hover:border-fourth-yellow transition-colors">
                  <h4 className="font-semibold mb-2">New Project Inquiry</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Ready to start your architectural journey?
                  </p>
                  <a
                    href="mailto:projects@fourtharchitects.com"
                    className="text-fourth-yellow hover:underline text-sm font-semibold"
                  >
                    projects@fourtharchitects.com
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:border-fourth-yellow transition-colors">
                  <h4 className="font-semibold mb-2">General Inquiries</h4>
                  <p className="text-gray-600 text-sm mb-3">Questions about our services?</p>
                  <a
                    href="mailto:office@fourtharchitects.com"
                    className="text-fourth-yellow hover:underline text-sm font-semibold"
                  >
                    office@fourtharchitects.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display mb-4">Visit Our Studio</h2>
            <p className="text-gray-600">
              Located in the heart of Sorsogon City, our studio is open for consultations and
              project discussions.
            </p>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[16/9] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.8776665090397!2d124.0082823!3d12.9731635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a53c2f324c55f9%3A0x48e5b0e41d99b287!2sSorsogon%20City%2C%20Sorsogon%2C%20Philippines!5e0!3m2!1sen!2s!4v1629123456789!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fourth Architects Location"
                className="absolute inset-0"
              ></iframe>
            </div>

            <div className="p-6 border-t">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-gray-600 text-sm">
                    123 Rizal Street, City Center
                    <br />
                    Sorsogon City, Sorsogon 4700
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Parking</h4>
                  <p className="text-gray-600 text-sm">
                    Free client parking available
                    <br />
                    Entrance on Rizal Street
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Public Transport</h4>
                  <p className="text-gray-600 text-sm">
                    Accessible by jeepney and tricycle
                    <br />
                    Near public market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display mb-8">FOURTH ARCHITECTS</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-fourth-yellow font-semibold mb-4">E:</h4>
              <a
                href="mailto:office@fourtharchitects.com"
                className="hover:text-fourth-yellow transition-colors"
              >
                office@fourtharchitects.com
              </a>
            </div>

            <div>
              <h4 className="text-fourth-yellow font-semibold mb-4">T:</h4>
              <a href="tel:+639123456789" className="hover:text-fourth-yellow transition-colors">
                +63 912 345 6789 (PH)
              </a>
            </div>

            <div>
              <h4 className="text-fourth-yellow font-semibold mb-4">L:</h4>
              <p className="text-gray-300">Sorsogon City, Sorsogon, Philippines</p>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-8">
            <p>FOURTH ARCHITECTS © 2003-2024</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
