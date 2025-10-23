"use client"

import Link from "next/link"
import { useState } from "react"
import { X } from "lucide-react"

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    membershipNo: "",
    title: "",
    surname: "",
    otherNames: "",
    alias: "",
    address: "",
    phoneNumber: "",
    email: "",
    stateOfOrigin: "",
    lga: "",
    maritalStatus: "",
    religion: "",
    dateOfBirth: "",
    profession: "",
    businessAddress: "",
    contactPerson: "",
    contactNumber: "",
    nextOfKinName: "",
    nextOfKinAddress: "",
    nextOfKinRelationship: "",
    nextOfKinPhone: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({
          membershipNo: "",
          title: "",
          surname: "",
          otherNames: "",
          alias: "",
          address: "",
          phoneNumber: "",
          email: "",
          stateOfOrigin: "",
          lga: "",
          maritalStatus: "",
          religion: "",
          dateOfBirth: "",
          profession: "",
          businessAddress: "",
          contactPerson: "",
          contactNumber: "",
          nextOfKinName: "",
          nextOfKinAddress: "",
          nextOfKinRelationship: "",
          nextOfKinPhone: ""
        })
        setShowSuccess(true)
      } else {
        setShowSuccess(false)
        alert("Failed to submit application. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setShowSuccess(false)
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/hero2.jpg?height=1080&width=1920)",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-semibold text-secondary uppercase tracking-widest">
              Founded January 1st, 2020
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-white">EMINENT GENTS INTERNATIONAL CLUB</h1>

            <p className="text-lg md:text-xl text-white/90 font-semibold">Great Eminent... Great</p>

            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">Empowerment & Knowledge</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
              <button 
                onClick={() => setIsFormOpen(true)} 
                className="btn-primary"
              >
                Join Us Now
              </button>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Membership Application</h2>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {!showSuccess ? (
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Membership No <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="membershipNo"
                      value={formData.membershipNo}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Title</option>
                      <option value="Mr">Mr</option>
                      <option value="Dr">Dr</option>
                      <option value="Prof">Prof</option>
                      <option value="Chief">Chief</option>
                      <option value="Engr">Engr</option>
                      <option value="Barr">Barr</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Surname <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Other Names <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="otherNames"
                      value={formData.otherNames}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Alias <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="alias"
                      value={formData.alias}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State of Origin <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="stateOfOrigin"
                      value={formData.stateOfOrigin}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      LGA <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lga"
                      value={formData.lga}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Marital Status <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widowed">Widowed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Religion <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="religion"
                      value={formData.religion}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Professional Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Profession <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Person <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business or Office Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="businessAddress"
                    value={formData.businessAddress}
                    onChange={handleInputChange}
                    required
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Next of Kin Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Next of Kin Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name of Next of Kin <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nextOfKinName"
                      value={formData.nextOfKinName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Relationship with Next of Kin <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nextOfKinRelationship"
                      value={formData.nextOfKinRelationship}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address of Next of Kin <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="nextOfKinAddress"
                    value={formData.nextOfKinAddress}
                    onChange={handleInputChange}
                    required
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number of Next of Kin <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="nextOfKinPhone"
                    value={formData.nextOfKinPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 justify-end pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
            ) : (
              <div className="p-12 text-center">
                <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Application Submitted!</h2>
                <p className="text-lg text-gray-600 mb-2">Thank you for applying to join EGIC</p>
                <p className="text-sm text-gray-500 mb-8">We have received your membership application and will review it shortly. You will be contacted via email or phone within 3-5 business days.</p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                  <p className="text-sm text-blue-800">
                    <strong>What's next?</strong><br />
                    Our membership team will review your application and reach out to you with the next steps.
                  </p>
                </div>
                
                <button
                  onClick={() => {
                    setShowSuccess(false)
                    setIsFormOpen(false)
                  }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}