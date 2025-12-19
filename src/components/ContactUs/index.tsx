'use client'

import React, { useState, useEffect } from 'react'
import { CircleCheck, ArrowRight } from 'lucide-react'
import { getClientSideURL } from '@/utilities/getURL'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

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

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formID, setFormID] = useState<number | null>(null)

  // Fetch the Contact Us form ID from Payload CMS
  useEffect(() => {
    const fetchFormID = async () => {
      try {
        // Try to find form by title (exact match first)
        let response = await fetch(`${getClientSideURL()}/api/forms?where[title][equals]=Contact Us`)
        let data = await response.json()
        
        // If not found, try case-insensitive search
        if (!data.docs || data.docs.length === 0) {
          response = await fetch(`${getClientSideURL()}/api/forms`)
          data = await response.json()
          const contactForm = data.docs?.find((form: { title?: string; id?: string | number }) => 
            form.title?.toLowerCase().includes('contact')
          )
          if (contactForm) {
            setFormID(contactForm.id)
            return
          }
        }
        
        if (data.docs && data.docs.length > 0) {
          setFormID(data.docs[0].id)
        } else {
          console.warn('Contact Us form not found. Make sure the form title is "Contact Us" in Payload CMS admin.')
        }
      } catch (err) {
        console.error('Error fetching form:', err)
      }
    }

    fetchFormID()
  }, [])

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.service || !formData.budget || !formData.message) {
      setError('Please fill in all required fields')
      return
    }

    if (!formID) {
      setError('Form configuration error. Please contact support.')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Format data for Payload CMS form submission
      const submissionData = [
        { field: 'firstName', value: formData.firstName },
        { field: 'lastName', value: formData.lastName },
        { field: 'email', value: formData.email },
        { field: 'service', value: formData.service },
        { field: 'budget', value: formData.budget },
        { field: 'message', value: formData.message }
      ]

      const response = await fetch(`${getClientSideURL()}/api/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: formID,
          submissionData: submissionData,
        }),
      })

      const result = await response.json()

      if (response.status >= 400) {
        setIsLoading(false)
        setError(result.errors?.[0]?.message || 'Failed to submit form. Please try again.')
        return
      }

      setIsLoading(false)
      setHasSubmitted(true)
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        budget: '',
        message: ''
      })

      // Show success message for 5 seconds
      setTimeout(() => {
        setHasSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error('Form submission error:', err)
      setIsLoading(false)
      setError('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="w-full py-12 sm:py-16 md:py-20" style={{ background: '#F8F8F8' }}>
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12">
          {/* Left Column */}
          <ScrollReveal direction="right" delay={0.1} duration={0.7} distance={50}>
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
                      <CircleCheck 
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
          </ScrollReveal>

          {/* Right Column - Contact Form */}
          <ScrollReveal direction="left" delay={0.2} duration={0.7} distance={50}>
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
                      fontFamily: 'Anton, sans-serif'
                    }}
                  >
                    First Name <span style={{ color: 'hsl(23, 100%, 56%)' }}>*</span>
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
                      fontFamily: 'Anton, sans-serif'
                    }}
                  >
                    Last Name <span style={{ color: 'hsl(23, 100%, 56%)' }}>*</span>
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
                    fontFamily: 'Anton, sans-serif'
                  }}
                >
                  Email <span style={{ color: 'hsl(23, 100%, 56%)' }}>*</span>
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
                    fontFamily: 'Anton, sans-serif'
                  }}
                >
                  Service Required <span style={{ color: 'hsl(23, 100%, 56%)' }}>*</span>
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
                    fontFamily: 'Anton, sans-serif'
                  }}
                >
                  Project Details <span style={{ color: 'hsl(23, 100%, 56%)' }}>*</span>
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
                    fontFamily: 'Anton, sans-serif'
                  }}
                >
                  Project Details <span style={{ color: 'hsl(23, 100%, 56%)' }}>*</span>
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

              {/* Success Message */}
              {hasSubmitted && (
                <div 
                  className="w-full py-3 px-6 rounded-md text-center"
                  style={{
                    backgroundColor: '#10b981',
                    color: '#fff',
                    fontSize: 'clamp(14px, 1.8vw, 16px)',
                    fontFamily: 'Geist, sans-serif',
                    borderRadius: '12px'
                  }}
                >
                  Thank you! Your message has been submitted successfully.
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div 
                  className="w-full py-3 px-6 rounded-md text-center"
                  style={{
                    backgroundColor: '#ef4444',
                    color: '#fff',
                    fontSize: 'clamp(14px, 1.8vw, 16px)',
                    fontFamily: 'Geist, sans-serif',
                    borderRadius: '12px'
                  }}
                >
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || hasSubmitted}
                className="w-full py-3 px-6 text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  backgroundColor: isLoading || hasSubmitted ? '#9ca3af' : 'hsl(23, 100%, 56%)',
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                  fontFamily: 'Geist, sans-serif',
                  borderRadius: '12px'
                }}
                onMouseEnter={(e) => {
                  if (!isLoading && !hasSubmitted) {
                    e.currentTarget.style.backgroundColor = 'hsl(23, 100%, 50%)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading && !hasSubmitted) {
                    e.currentTarget.style.backgroundColor = 'hsl(23, 100%, 56%)'
                  }
                }}
              >
                {isLoading ? 'Submitting...' : hasSubmitted ? 'Submitted!' : (
                  <>
                    Let&apos;s Connect
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

