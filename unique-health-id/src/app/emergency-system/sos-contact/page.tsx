'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Users, 
  Plus, 
  Edit, 
  Trash2, 
  Phone,
  Mail,
  User,
  Heart,
  Shield,
  Star,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const SOSContacts = () => {
  const [showAddContact, setShowAddContact] = useState(false);
  const [editingContact, setEditingContact] = useState<string | null>(null);

  const [contacts, setContacts] = useState([
    {
      id: '1',
      name: 'Jane Doe',
      phone: '+1 (555) 123-4567',
      email: 'jane.doe@email.com',
      relationship: 'Spouse',
      priority: 'high',
      isEmergency: true,
      notes: 'Primary emergency contact'
    },
    {
      id: '2',
      name: 'Dr. Sarah Johnson',
      phone: '+1 (555) 987-6543',
      email: 'sarah.johnson@medical.com',
      relationship: 'Primary Doctor',
      priority: 'high',
      isEmergency: true,
      notes: 'Internal Medicine Specialist'
    },
    {
      id: '3',
      name: 'Mike Smith',
      phone: '+1 (555) 456-7890',
      email: 'mike.smith@email.com',
      relationship: 'Brother',
      priority: 'medium',
      isEmergency: false,
      notes: 'Lives nearby'
    },
    {
      id: '4',
      name: 'Emergency Services',
      phone: '911',
      email: '',
      relationship: 'Emergency',
      priority: 'critical',
      isEmergency: true,
      notes: 'Emergency services number'
    }
  ]);

  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    email: '',
    relationship: '',
    priority: 'medium',
    isEmergency: false,
    notes: ''
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical':
        return <AlertTriangle className="w-4 h-4" />;
      case 'high':
        return <Star className="w-4 h-4" />;
      case 'medium':
        return <CheckCircle className="w-4 h-4" />;
      case 'low':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <CheckCircle className="w-4 h-4" />;
    }
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.phone) {
      const contact = {
        ...newContact,
        id: Date.now().toString()
      };
      setContacts([...contacts, contact]);
      setNewContact({
        name: '',
        phone: '',
        email: '',
        relationship: '',
        priority: 'medium',
        isEmergency: false,
        notes: ''
      });
      setShowAddContact(false);
    }
  };

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleToggleEmergency = (id: string) => {
    setContacts(contacts.map(contact => 
      contact.id === id 
        ? { ...contact, isEmergency: !contact.isEmergency }
        : contact
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50">
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center">
                <Users className="w-8 h-8 text-yellow-500 mr-3" />
                SOS Contacts
              </h1>
              <p className="text-lg text-gray-600">
                Manage your emergency contacts and their information
              </p>
            </div>
            <button
              onClick={() => setShowAddContact(true)}
              className="mt-4 md:mt-0 px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-200 flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Contact
            </button>
          </div>
        </div>

        {/* Emergency Contacts Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {contacts.filter(c => c.priority === 'critical').length}
            </h3>
            <p className="text-gray-600">Critical Contacts</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {contacts.filter(c => c.priority === 'high').length}
            </h3>
            <p className="text-gray-600">High Priority</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {contacts.filter(c => c.isEmergency).length}
            </h3>
            <p className="text-gray-600">Emergency Contacts</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{contacts.length}</h3>
            <p className="text-gray-600">Total Contacts</p>
          </div>
        </div>

        {/* Contacts List */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Emergency Contacts</h2>
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 mr-3">
                          {contact.name}
                        </h3>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(contact.priority)} flex items-center`}>
                          {getPriorityIcon(contact.priority)}
                          <span className="ml-1 capitalize">{contact.priority}</span>
                        </div>
                        {contact.isEmergency && (
                          <div className="ml-2 px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                            Emergency
                          </div>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div className="flex items-center text-gray-600">
                          <Phone className="w-4 h-4 mr-2" />
                          <span>{contact.phone}</span>
                        </div>
                        {contact.email && (
                          <div className="flex items-center text-gray-600">
                            <Mail className="w-4 h-4 mr-2" />
                            <span>{contact.email}</span>
                          </div>
                        )}
                        <div className="flex items-center text-gray-600">
                          <Heart className="w-4 h-4 mr-2" />
                          <span>{contact.relationship}</span>
                        </div>
                      </div>
                      
                      {contact.notes && (
                        <p className="text-gray-600 text-sm">{contact.notes}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleToggleEmergency(contact.id)}
                      className={`p-2 rounded-lg transition-colors duration-200 ${
                        contact.isEmergency
                          ? 'bg-red-100 text-red-600 hover:bg-red-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Shield className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                      <Phone className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteContact(contact.id)}
                      className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Contact Modal */}
        {showAddContact && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Add Emergency Contact</h2>
                  <button
                    onClick={() => setShowAddContact(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={newContact.name}
                        onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={newContact.phone}
                        onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={newContact.email}
                        onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Relationship
                      </label>
                      <select
                        value={newContact.relationship}
                        onChange={(e) => setNewContact({...newContact, relationship: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      >
                        <option value="">Select relationship</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Parent">Parent</option>
                        <option value="Child">Child</option>
                        <option value="Sibling">Sibling</option>
                        <option value="Friend">Friend</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Emergency">Emergency</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Priority Level
                      </label>
                      <select
                        value={newContact.priority}
                        onChange={(e) => setNewContact({...newContact, priority: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isEmergency"
                        checked={newContact.isEmergency}
                        onChange={(e) => setNewContact({...newContact, isEmergency: e.target.checked})}
                        className="mr-2"
                      />
                      <label htmlFor="isEmergency" className="text-sm font-medium text-gray-700">
                        Emergency Contact
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Notes
                    </label>
                    <textarea
                      value={newContact.notes}
                      onChange={(e) => setNewContact({...newContact, notes: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Additional notes about this contact..."
                    />
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => setShowAddContact(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddContact}
                    className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-200"
                  >
                    Add Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Safety Tips */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Shield className="w-5 h-5 text-yellow-600 mr-2" />
            Emergency Contact Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Best Practices</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Keep contact information up to date</li>
                <li>• Include at least one local contact</li>
                <li>• Add your doctor's contact information</li>
                <li>• Include family members and close friends</li>
                <li>• Test contact numbers regularly</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Emergency Contact Guidelines</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Set critical contacts for immediate emergencies</li>
                <li>• Include contacts who can make medical decisions</li>
                <li>• Add contacts who know your medical history</li>
                <li>• Include contacts available 24/7</li>
                <li>• Keep backup contact methods</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOSContacts;
