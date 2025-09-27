'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  AlertTriangle, 
  Send, 
  Users, 
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  User,
  MessageCircle,
  Shield,
  Zap
} from 'lucide-react';

const SOSAlert = () => {
  const [isSending, setIsSending] = useState(false);
  const [alertSent, setAlertSent] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [customMessage, setCustomMessage] = useState('');

  const emergencyContacts = [
    { id: '1', name: 'Jane Doe', phone: '+1 (555) 123-4567', relationship: 'Spouse', selected: true },
    { id: '2', name: 'Dr. Sarah Johnson', phone: '+1 (555) 987-6543', relationship: 'Primary Doctor', selected: true },
    { id: '3', name: 'Mike Smith', phone: '+1 (555) 456-7890', relationship: 'Brother', selected: false },
    { id: '4', name: 'Emergency Services', phone: '911', relationship: 'Emergency', selected: true }
  ];

  const quickMessages = [
    'I need immediate help!',
    'Medical emergency - please call 911',
    'I am in danger - send help',
    'Accident occurred - need assistance',
    'Health emergency - urgent help needed'
  ];

  const handleSendSOS = () => {
    setIsSending(true);
    // Simulate sending SOS
    setTimeout(() => {
      setIsSending(false);
      setAlertSent(true);
      alert('SOS Alert sent successfully to all selected contacts!');
    }, 3000);
  };

  const toggleContact = (contactId: string) => {
    setSelectedContacts(prev => 
      prev.includes(contactId) 
        ? prev.filter(id => id !== contactId)
        : [...prev, contactId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
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
            <AlertTriangle className="w-8 h-8 text-orange-500 mr-3" />
            SOS Alert
          </h1>
          <p className="text-lg text-gray-600">
            Send emergency alerts to your contacts and emergency services
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl shadow-lg p-6 mb-8 text-white">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">Emergency SOS Alert</h2>
          </div>
          <p className="text-orange-100 mb-4">
            Use this feature to quickly alert your emergency contacts and services 
            about your situation. This will send your location and a message to selected contacts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSendSOS}
              disabled={isSending || alertSent}
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center disabled:opacity-50"
            >
              {isSending ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange-600 mr-2"></div>
                  Sending Alert...
                </>
              ) : alertSent ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Alert Sent
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send SOS Alert
                </>
              )}
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2" />
              Share Location
            </button>
          </div>
        </div>

        {/* Quick Messages */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Emergency Messages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quickMessages.map((message, index) => (
              <button
                key={index}
                onClick={() => setCustomMessage(message)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                  customMessage === message
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <p className="font-medium text-gray-900">{message}</p>
              </button>
            ))}
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custom Message
            </label>
            <textarea
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Type your emergency message here..."
            />
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Emergency Contacts</h2>
          <div className="space-y-3">
            {emergencyContacts.map((contact) => (
              <div
                key={contact.id}
                className={`p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                  selectedContacts.includes(contact.id) || contact.selected
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => toggleContact(contact.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{contact.name}</p>
                      <p className="text-sm text-gray-600">{contact.relationship}</p>
                      <p className="text-sm text-gray-500">{contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {(selectedContacts.includes(contact.id) || contact.selected) && (
                      <CheckCircle className="w-5 h-5 text-orange-500" />
                    )}
                    <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
                      Call
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Location Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Location</h3>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">123 Main Street, Downtown</p>
                  <p className="text-sm text-gray-600">City, State 12345</p>
                  <p className="text-sm text-gray-500">Lat: 40.7128, Lng: -74.0060</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Location Services</h3>
              <div className="space-y-2">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Update Location
                </button>
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                  Share Live Location
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              Emergency Services
            </h3>
            <p className="text-gray-600 mb-4">
              Contact emergency services directly for immediate assistance.
            </p>
            <div className="space-y-2">
              <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
                Call 911
              </button>
              <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200">
                Call Local Police
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
              Communication
            </h3>
            <p className="text-gray-600 mb-4">
              Send messages and updates to your emergency contacts.
            </p>
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Send Update
              </button>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                Broadcast Message
              </button>
            </div>
          </div>
        </div>

        {/* Safety Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">SOS Alert Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What Happens When You Send SOS</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Your location is shared with selected contacts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Emergency message is sent via SMS and email</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Contacts are notified immediately</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Emergency services can be contacted</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notes</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-gray-700">Only use for genuine emergencies</span>
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-gray-700">Keep your emergency contacts updated</span>
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-gray-700">Ensure location services are enabled</span>
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-gray-700">Test the system regularly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOSAlert;
