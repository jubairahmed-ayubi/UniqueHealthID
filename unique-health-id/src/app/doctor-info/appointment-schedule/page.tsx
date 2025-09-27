'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Video, 
  MapPin,
  Phone,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react';

const AppointmentSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showNewAppointment, setShowNewAppointment] = useState(false);

  const appointments = [
    {
      id: '1',
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Internal Medicine',
      date: '2024-02-20',
      time: '10:00 AM',
      type: 'consultation',
      status: 'confirmed',
      location: 'Downtown Medical Center',
      notes: 'Annual physical examination',
      duration: '60 minutes'
    },
    {
      id: '2',
      doctor: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      date: '2024-02-22',
      time: '2:30 PM',
      type: 'video',
      status: 'pending',
      location: 'Video Call',
      notes: 'Follow-up on blood pressure medication',
      duration: '30 minutes'
    },
    {
      id: '3',
      doctor: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      date: '2024-02-18',
      time: '11:15 AM',
      type: 'consultation',
      status: 'completed',
      location: 'Children\'s Health Center',
      notes: 'Vaccination appointment',
      duration: '45 minutes'
    },
    {
      id: '4',
      doctor: 'Dr. James Wilson',
      specialty: 'General Surgery',
      date: '2024-02-25',
      time: '9:00 AM',
      type: 'consultation',
      status: 'confirmed',
      location: 'Surgical Excellence Center',
      notes: 'Pre-surgery consultation',
      duration: '90 minutes'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'video' ? <Video className="w-5 h-5" /> : <User className="w-5 h-5" />;
  };

  const upcomingAppointments = appointments.filter(apt => 
    new Date(apt.date) >= new Date() && apt.status !== 'completed'
  );

  const pastAppointments = appointments.filter(apt => 
    new Date(apt.date) < new Date() || apt.status === 'completed'
  );

  const NewAppointmentModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Schedule New Appointment</h2>
            <button
              onClick={() => setShowNewAppointment(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <XCircle className="w-6 h-6" />
            </button>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Doctor
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Dr. Sarah Johnson - Internal Medicine</option>
                  <option>Dr. Michael Chen - Cardiology</option>
                  <option>Dr. Emily Rodriguez - Pediatrics</option>
                  <option>Dr. James Wilson - General Surgery</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Appointment Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>In-Person Consultation</option>
                  <option>Video Consultation</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>9:00 AM</option>
                  <option>9:30 AM</option>
                  <option>10:00 AM</option>
                  <option>10:30 AM</option>
                  <option>11:00 AM</option>
                  <option>11:30 AM</option>
                  <option>2:00 PM</option>
                  <option>2:30 PM</option>
                  <option>3:00 PM</option>
                  <option>3:30 PM</option>
                  <option>4:00 PM</option>
                  <option>4:30 PM</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Visit
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please describe the reason for your appointment..."
              />
            </div>
            
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setShowNewAppointment(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Schedule Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Appointment Schedule
              </h1>
              <p className="text-lg text-gray-600">
                Manage your healthcare appointments
              </p>
            </div>
            <button
              onClick={() => setShowNewAppointment(true)}
              className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Schedule Appointment
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{upcomingAppointments.length}</h3>
            <p className="text-gray-600">Upcoming</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{pastAppointments.length}</h3>
            <p className="text-gray-600">Completed</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {appointments.filter(apt => apt.status === 'pending').length}
            </h3>
            <p className="text-gray-600">Pending</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Video className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {appointments.filter(apt => apt.type === 'video').length}
            </h3>
            <p className="text-gray-600">Video Calls</p>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Appointments</h2>
          </div>
          <div className="p-6">
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {getTypeIcon(appointment.type)}
                          <h3 className="text-lg font-semibold text-gray-900 ml-2">
                            {appointment.doctor}
                          </h3>
                          <span className="ml-2 text-sm text-gray-600">
                            ({appointment.specialty})
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{appointment.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{appointment.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{appointment.location}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-2">
                          {appointment.notes}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)} flex items-center`}>
                            {getStatusIcon(appointment.status)}
                            <span className="ml-1 capitalize">{appointment.status}</span>
                          </div>
                          <span className="text-sm text-gray-500">
                            Duration: {appointment.duration}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 ml-4">
                        <button className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors duration-200">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No upcoming appointments
                </h3>
                <p className="text-gray-600 mb-4">
                  You don't have any upcoming appointments scheduled.
                </p>
                <button
                  onClick={() => setShowNewAppointment(true)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Schedule Your First Appointment
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Past Appointments */}
        <div className="bg-white rounded-xl shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Past Appointments</h2>
          </div>
          <div className="p-6">
            {pastAppointments.length > 0 ? (
              <div className="space-y-4">
                {pastAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {getTypeIcon(appointment.type)}
                          <h3 className="text-lg font-semibold text-gray-900 ml-2">
                            {appointment.doctor}
                          </h3>
                          <span className="ml-2 text-sm text-gray-600">
                            ({appointment.specialty})
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{appointment.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{appointment.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{appointment.location}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-2">
                          {appointment.notes}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)} flex items-center`}>
                            {getStatusIcon(appointment.status)}
                            <span className="ml-1 capitalize">{appointment.status}</span>
                          </div>
                          <span className="text-sm text-gray-500">
                            Duration: {appointment.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No past appointments
                </h3>
                <p className="text-gray-600">
                  Your completed appointments will appear here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* New Appointment Modal */}
      {showNewAppointment && <NewAppointmentModal />}
    </div>
  );
};

export default AppointmentSchedule;
