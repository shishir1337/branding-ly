'use client'

import React, { useState } from 'react'
import { Check } from 'lucide-react'

interface ChecklistItem {
  mainText: string
  secondaryText: string
}

const checklistData: ChecklistItem[] = [
  {
    mainText: '24-hour Response',
    secondaryText: 'We respond to all inquiries promptly'
  },
  {
    mainText: 'Expert Team',
    secondaryText: 'Work with dedicated specialists'
  },
  {
    mainText: 'Confidential',
    secondaryText: 'Full NDA protection available'
  }
]

const serviceOptions = [
  'Marketing Strategy & Planning',
  'Graphic Design & Branding',
  'Web Design & Development',
  'Content Writing',
  'Event Management',
  'Videoshoot & Photography',
  'Video Production & Editing',
  'Printing Solutions'
]

const budgetOptions = [
  'Less than $5K',
  '$5K - $10K',
  '$10K - $20K',
  '$20K - $50K',
  'More than $50K'
]

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  })


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleBudgetChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      budget: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.service || !formData.budget || !formData.message) {
      alert('Please fill in all required fields')
      return
    }
    
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="w-full py-12 sm:py-16 md:py-20" style={{ background: '#F8F8F8' }}>
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Contact Us Title */}
              <h2 
                className="mb-4 sm:mb-6 pl-0 sm:pl-4 lg:pl-8"
                style={{
                  color: 'hsl(23, 100%, 56%)',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 700,
                  fontFamily: 'Geist, sans-serif'
                }}
              >
                CONTACT US
              </h2>

              {/* Main Heading */}
              <h3 
                className="mb-6 sm:mb-8 pl-0 sm:pl-4 lg:pl-8"
                style={{
                  fontFamily: 'Anton, sans-serif',
                  fontSize: 'clamp(32px, 6vw, 63.638px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'clamp(40px, 8vw, 79.547px)',
                  letterSpacing: 'clamp(-0.8px, -0.04vw, -2.25px)',
                //   textTransform: 'uppercase'
                }}
              >
                <span style={{ color: '#000000' }}>
                  Looking for{' '}
                </span>
                <span style={{ color: 'hsl(23, 100%, 56%)' }}>Branding Marketing</span>
                <span style={{ color: '#000000' }}> and More?</span>
              </h3>

              {/* Checklist Items */}
              <div className="space-y-4 sm:space-y-6 pl-0 sm:pl-4 lg:pl-8">
                {checklistData.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div 
                      className="flex-shrink-0 mt-1"
                      style={{
                        color: 'hsl(23, 100%, 56%)'
                      }}
                    >
                      <Check 
                        style={{
                          width: 'clamp(20px, 2.5vw, 24px)',
                          height: 'clamp(20px, 2.5vw, 24px)'
                        }}
                      />
                    </div>
                    <div>
                      <p 
                        className="font-semibold text-black mb-1"
                        style={{
                          fontSize: 'clamp(16px, 2vw, 18px)',
                          fontFamily: 'Geist, sans-serif',
                          lineHeight: '1.4'
                        }}
                      >
                        {item.mainText}
                      </p>
                      <p 
                        className="text-[#898989]"
                        style={{
                          fontSize: 'clamp(14px, 1.8vw, 16px)',
                          fontFamily: 'Geist, sans-serif',
                          lineHeight: '1.6'
                        }}
                      >
                        {item.secondaryText}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex flex-col">
            <form 
              onSubmit={handleSubmit} 
              className="w-full space-y-4 sm:space-y-6 p-6 sm:p-8"
              style={{
                borderRadius: '24px',
                background: '#FFF',
                boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* First Name and Last Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label 
                    htmlFor="firstName"
                    className="block mb-2"
                    style={{
                      color: 'hsl(23, 100%, 56%)',
                      fontSize: 'clamp(12px, 1.5vw, 14px)',
                      fontWeight: 400,
                      fontFamily: 'Anton, sans-serif',
                      textTransform: 'uppercase'
                    }}
                  >
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    required
                    className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[hsl(23,100%,56%)] focus:ring-offset-0"
                    style={{
                      fontSize: 'clamp(14px, 1.8vw, 16px)',
                      fontFamily: 'Geist, sans-serif',
                      borderRadius: '8px',
                      border: '1px solid #D0D5DD',
                      background: '#FFF',
                      boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.05)'
                    }}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="lastName"
                    className="block mb-2"
                    style={{
                      color: 'hsl(23, 100%, 56%)',
                      fontSize: 'clamp(12px, 1.5vw, 14px)',
                      fontWeight: 400,
                      fontFamily: 'Anton, sans-serif',
                      textTransform: 'uppercase'
                    }}
                  >
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    required
                    className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[hsl(23,100%,56%)] focus:ring-offset-0"
                    style={{
                      fontSize: 'clamp(14px, 1.8vw, 16px)',
                      fontFamily: 'Geist, sans-serif',
                      borderRadius: '8px',
                      border: '1px solid #D0D5DD',
                      background: '#FFF',
                      boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.05)'
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label 
                  htmlFor="email"
                  className="block mb-2"
                  style={{
                    color: 'hsl(23, 100%, 56%)',
                    fontSize: 'clamp(12px, 1.5vw, 14px)',
                    fontWeight: 400,
                    fontFamily: 'Anton, sans-serif',
                    textTransform: 'uppercase'
                  }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[hsl(23,100%,56%)] focus:ring-offset-0"
                  style={{
                    fontSize: 'clamp(14px, 1.8vw, 16px)',
                    fontFamily: 'Geist, sans-serif',
                    borderRadius: '8px',
                    border: '1px solid #D0D5DD',
                    background: '#FFF',
                    boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.05)'
                  }}
                />
              </div>

              {/* Service Required */}
              <div>
                <label 
                  htmlFor="service"
                  className="block mb-2"
                  style={{
                    color: 'hsl(23, 100%, 56%)',
                    fontSize: 'clamp(12px, 1.5vw, 14px)',
                    fontWeight: 400,
                    fontFamily: 'Anton, sans-serif',
                    textTransform: 'uppercase'
                  }}
                >
                  SERVICE REQUIRED
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[hsl(23,100%,56%)] focus:ring-offset-0 bg-white"
                  style={{
                    fontSize: 'clamp(14px, 1.8vw, 16px)',
                    fontFamily: 'Geist, sans-serif',
                    borderRadius: '8px',
                    border: '1px solid #D0D5DD',
                    background: '#FFF',
                    boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.05)'
                  }}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Details Budget (Radio buttons styled as buttons) */}
              <div>
                <label 
                  className="block mb-2"
                  style={{
                    color: 'hsl(23, 100%, 56%)',
                    fontSize: 'clamp(12px, 1.5vw, 14px)',
                    fontWeight: 400,
                    fontFamily: 'Anton, sans-serif',
                    textTransform: 'uppercase'
                  }}
                >
                  PROJECT DETAILS
                </label>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {budgetOptions.map((option, index) => (
                    <label
                      key={index}
                      className="cursor-pointer"
                      style={{
                        fontSize: 'clamp(14px, 1.8vw, 16px)',
                        fontFamily: 'Geist, sans-serif'
                      }}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={formData.budget === option}
                        onChange={(e) => handleBudgetChange(e.target.value)}
                        required
                        className="hidden"
                      />
                      <span
                        className="inline-block px-4 py-2 transition-all"
                        style={{
                          borderRadius: '8px',
                          border: formData.budget === option ? '1px solid hsl(23, 100%, 56%)' : '1px solid #D0D5DD',
                          background: formData.budget === option ? 'hsl(23, 100%, 56%)' : '#FFF',
                          color: formData.budget === option ? '#FFF' : '#000000',
                          boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.05)'
                        }}
                      >
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Details Message */}
              <div>
                <label 
                  htmlFor="message"
                  className="block mb-2"
                  style={{
                    color: 'hsl(23, 100%, 56%)',
                    fontSize: 'clamp(12px, 1.5vw, 14px)',
                    fontWeight: 400,
                    fontFamily: 'Anton, sans-serif',
                    textTransform: 'uppercase'
                  }}
                >
                  PROJECT DETAILS
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[hsl(23,100%,56%)] focus:ring-offset-0 resize-none"
                  style={{
                    fontSize: 'clamp(14px, 1.8vw, 16px)',
                    fontFamily: 'Geist, sans-serif',
                    borderRadius: '8px',
                    border: '1px solid #D0D5DD',
                    background: '#FFF',
                    boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.05)'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 text-white font-semibold transition-colors"
                style={{
                  backgroundColor: 'hsl(23, 100%, 56%)',
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                  fontFamily: 'Geist, sans-serif',
                  borderRadius: '12px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(23, 100%, 50%)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(23, 100%, 56%)'
                }}
              >
                Let's Connect
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

