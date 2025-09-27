'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Award,
  GraduationCap,
  Stethoscope,
  MessageCircle,
  Video,
  BookOpen,
  Users,
  CheckCircle
} from 'lucide-react';

const DoctorProfile = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const doctor = {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Internal Medicine',
    rating: 4.9,
    reviewCount: 127,
    experience: '15 years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    location: 'Downtown Medical Center',
    address: '123 Medical Plaza, Suite 200, Downtown',
    phone: '+1 (555) 123-4567',
    email: 'sarah.johnson@medical.com',
    availability: 'Mon-Fri 9AM-5PM',
    education: [
      'MD, Harvard Medical School (2009)',
      'Residency in Internal Medicine, Johns Hopkins Hospital (2009-2012)',
      'Fellowship in Preventive Medicine, Mayo Clinic (2012-2013)'
    ],
    certifications: [
      'Board Certified Internal Medicine',
      'Diplomate American Board of Internal Medicine',
      'Certified in Hypertension Management',
      'Advanced Cardiac Life Support (ACLS)'
    ],
    languages: ['English', 'Spanish', 'French'],
    insurance: ['Blue Cross Blue Shield', 'Aetna', 'Cigna', 'UnitedHealth'],
    nextAvailable: '2024-02-20',
    consultationFee: '$200',
    videoConsultationFee: '$150'
  };

  const reviews = [
    {
      id: 1,
      patient: 'John Smith',
      rating: 5,
      date: '2024-01-15',
      comment: 'Dr. Johnson is excellent! She took the time to listen to all my concerns and provided thorough explanations.'
    },
    {
      id: 2,
      patient: 'Maria Garcia',
      rating: 5,
      date: '2024-01-10',
      comment: 'Very professional and caring. The office staff is also very helpful and friendly.'
    },
    {
      id: 3,
      patient: 'Robert Wilson',
      rating: 4,
      date: '2024-01-05',
      comment: 'Great doctor with excellent bedside manner. Highly recommend!'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Stethoscope },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'availability', label: 'Availability', icon: Calendar }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/doctor-info"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Doctor Info
          </Link>
        </div>

        {/* Doctor Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {doctor.name}
                  </h1>
                  <p className="text-xl text-blue-600 font-medium mb-3">
                    {doctor.specialty}
                  </p>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {renderStars(Math.floor(doctor.rating))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {doctor.rating} ({doctor.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">{doctor.consultationFee}</p>
                  <p className="text-gray-600">Consultation Fee</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{doctor.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>{doctor.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>{doctor.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{doctor.availability}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/doctor-info/appointment-schedule"
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center font-semibold"
                >
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Book Appointment
                </Link>
                <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                  <Video className="w-5 h-5 inline mr-2" />
                  Video Consultation
                </button>
                <button className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-semibold">
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                      selectedTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {selectedTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">About Dr. Johnson</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dr. Sarah Johnson is a board-certified internal medicine physician with over 15 years of experience 
                    in providing comprehensive healthcare services. She specializes in preventive medicine, chronic 
                    disease management, and health promotion. Dr. Johnson is known for her patient-centered approach 
                    and commitment to delivering high-quality, personalized care.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Languages Spoken</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((language, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Insurance Accepted</h4>
                    <div className="space-y-2">
                      {doctor.insurance.map((ins, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>{ins}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Education Tab */}
            {selectedTab === 'education' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Education & Training</h3>
                  <div className="space-y-4">
                    {doctor.education.map((edu, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                          <GraduationCap className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{edu}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
                  <div className="space-y-3">
                    {doctor.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center">
                        <Award className="w-5 h-5 text-yellow-500 mr-3" />
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {selectedTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Patient Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      {renderStars(Math.floor(doctor.rating))}
                    </div>
                    <span className="text-gray-600">{doctor.rating} out of 5</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                            <Users className="w-4 h-4 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{review.patient}</p>
                            <div className="flex items-center">
                              {renderStars(review.rating)}
                              <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Availability Tab */}
            {selectedTab === 'availability' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Availability</h3>
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-green-800 font-medium">
                        Next available appointment: {doctor.nextAvailable}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Regular Hours</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday</span>
                        <span className="font-medium">10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Consultation Options</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">In-Person Consultation</p>
                          <p className="text-sm text-gray-600">At clinic location</p>
                        </div>
                        <span className="font-bold text-blue-600">{doctor.consultationFee}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Video Consultation</p>
                          <p className="text-sm text-gray-600">Online video call</p>
                        </div>
                        <span className="font-bold text-green-600">{doctor.videoConsultationFee}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
