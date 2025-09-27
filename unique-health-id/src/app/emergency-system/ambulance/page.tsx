'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Ambulance, 
  Phone, 
  MapPin, 
  Clock,
  AlertTriangle,
  CheckCircle,
  User,
  Heart,
  Activity,
  Zap,
  Navigation,
  Send
} from 'lucide-react';

const EmergencyAmbulance = () => {
  const [isCalling, setIsCalling] = useState(false);
  const [locationShared, setLocationShared] = useState(false);
  const [emergencyType, setEmergencyType] = useState('');

  const emergencyTypes = [
    { id: 'cardiac', label: 'Cardiac Emergency', icon: Heart, color: 'text-red-500' },
    { id: 'trauma', label: 'Trauma/Injury', icon: AlertTriangle, color: 'text-orange-500' },
    { id: 'respiratory', label: 'Respiratory Emergency', icon: Activity, color: 'text-blue-500' },
    { id: 'stroke', label: 'Stroke', icon: Zap, color: 'text-purple-500' },
    { id: 'other', label: 'Other Emergency', icon: AlertTriangle, color: 'text-gray-500' }
  ];

  const handleEmergencyCall = () => {
    setIsCalling(true);
    // Simulate call process
    setTimeout(() => {
      setIsCalling(false);
      alert('Emergency services have been contacted. Help is on the way!');
    }, 3000);
  };

  const handleShareLocation = () => {
    setLocationShared(true);
    // Simulate location sharing
    setTimeout(() => {
      alert('Your location has been shared with emergency services.');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/emergency-system"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Emergency System
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center">
            <Ambulance className="w-8 h-8 text-red-500 mr-3" />
            Emergency Ambulance
          </h1>
          <p className="text-lg text-gray-600">
            Call emergency ambulance services for immediate medical assistance
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl shadow-lg p-6 mb-8 text-white">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">Medical Emergency</h2>
          </div>
          <p className="text-red-100 mb-4">
            If you or someone else is experiencing a life-threatening medical emergency, 
            call 911 immediately. This system provides additional support and information sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleEmergencyCall}
              disabled={isCalling}
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center disabled:opacity-50"
            >
              {isCalling ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-600 mr-2"></div>
                  Calling...
                </>
              ) : (
                <>
                  <Phone className="w-5 h-5 mr-2" />
                  Call 911 Now
                </>
              )}
            </button>
            <button
              onClick={handleShareLocation}
              disabled={locationShared}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200 flex items-center justify-center disabled:opacity-50"
            >
              <MapPin className="w-5 h-5 mr-2" />
              {locationShared ? 'Location Shared' : 'Share Location'}
            </button>
          </div>
        </div>

        {/* Emergency Type Selection */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Emergency Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergencyTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setEmergencyType(type.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    emergencyType === type.id
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <Icon className={`w-6 h-6 ${type.color} mr-3`} />
                    <span className="font-medium text-gray-900">{type.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Location */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Location</h2>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <p className="font-medium text-gray-900">123 Main Street, Downtown</p>
                <p className="text-sm text-gray-600">City, State 12345</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Update Location
            </button>
          </div>
        </div>

        {/* Emergency Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Emergency Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Patient Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <User className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">John Doe</p>
                    <p className="text-sm text-gray-600">Age: 35, Male</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Medical Conditions</p>
                    <p className="text-sm text-gray-600">Hypertension, Diabetes</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Current Medications</p>
                    <p className="text-sm text-gray-600">Lisinopril, Metformin</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Contacts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Jane Doe (Spouse)</p>
                    <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                  </div>
                  <button className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm">
                    Call
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Dr. Sarah Johnson</p>
                    <p className="text-sm text-gray-600">+1 (555) 987-6543</p>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
                    Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Phone className="w-5 h-5 text-red-600 mr-2" />
              Emergency Services
            </h3>
            <p className="text-gray-600 mb-4">
              Contact emergency services for immediate medical assistance.
            </p>
            <div className="space-y-2">
              <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
                Call 911
              </button>
              <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200">
                Call Local Hospital
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Navigation className="w-5 h-5 text-blue-600 mr-2" />
              Location Services
            </h3>
            <p className="text-gray-600 mb-4">
              Share your location with emergency services and contacts.
            </p>
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Share with EMS
              </button>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                Share with Contacts
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Checklist */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Emergency Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Before Emergency Services Arrive</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Stay calm and assess the situation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Ensure patient is in a safe position</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Check for breathing and pulse</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Gather medical information</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Clear path for emergency personnel</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Information to Provide</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Patient's age and gender</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Current symptoms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Medical history</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Current medications</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Allergies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyAmbulance;
