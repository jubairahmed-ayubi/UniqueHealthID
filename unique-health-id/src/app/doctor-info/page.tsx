import Link from 'next/link';
import { 
  ArrowLeft, 
  UserCheck, 
  Calendar, 
  Stethoscope, 
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  GraduationCap
} from 'lucide-react';

const DoctorInfo = () => {
  const doctorProfiles = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Internal Medicine',
      rating: 4.9,
      experience: '15 years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      location: 'Downtown Medical Center',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@medical.com',
      availability: 'Mon-Fri 9AM-5PM',
      education: 'MD, Harvard Medical School',
      certifications: ['Board Certified Internal Medicine', 'Diplomate American Board'],
      nextAvailable: '2024-02-20'
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      rating: 4.8,
      experience: '12 years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      location: 'Heart Care Clinic',
      phone: '+1 (555) 234-5678',
      email: 'michael.chen@heartcare.com',
      availability: 'Mon-Thu 8AM-4PM',
      education: 'MD, Stanford Medical School',
      certifications: ['Board Certified Cardiology', 'Fellow American College of Cardiology'],
      nextAvailable: '2024-02-22'
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      rating: 4.9,
      experience: '10 years',
      image: 'https://images.unsplash.com/photo-1594824388852-eb3c5b1a0c4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      location: 'Children\'s Health Center',
      phone: '+1 (555) 345-6789',
      email: 'emily.rodriguez@childrenshealth.com',
      availability: 'Mon-Fri 9AM-6PM',
      education: 'MD, Johns Hopkins Medical School',
      certifications: ['Board Certified Pediatrics', 'Fellow American Academy of Pediatrics'],
      nextAvailable: '2024-02-18'
    },
    {
      id: '4',
      name: 'Dr. James Wilson',
      specialty: 'General Surgery',
      rating: 4.7,
      experience: '18 years',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      location: 'Surgical Excellence Center',
      phone: '+1 (555) 456-7890',
      email: 'james.wilson@surgical.com',
      availability: 'Mon-Fri 7AM-3PM',
      education: 'MD, Mayo Clinic Medical School',
      certifications: ['Board Certified General Surgery', 'Fellow American College of Surgeons'],
      nextAvailable: '2024-02-25'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Doctor Information
          </h1>
          <p className="text-lg text-gray-600">
            Connect with healthcare professionals and manage your appointments
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link href="/doctor-info/profile" className="group block">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <UserCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Doctor Profiles</h3>
                  <p className="text-gray-600 text-sm">View detailed doctor information and credentials</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/doctor-info/appointment-schedule" className="group block">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Appointment Schedule</h3>
                  <p className="text-gray-600 text-sm">Schedule and manage your appointments</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Featured Doctors */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Healthcare Professionals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorProfiles.map((doctor) => (
              <Link
                key={doctor.id}
                href={`/doctor-info/profile/${doctor.id}`}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 overflow-hidden">
                  <div className="relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold ml-1">{doctor.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {doctor.specialty}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Stethoscope className="w-4 h-4 mr-2" />
                        <span>{doctor.experience}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{doctor.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{doctor.availability}</span>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="flex items-center text-green-700 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Next available: {doctor.nextAvailable}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Healthcare Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">24</h3>
              <p className="text-gray-600">Available Doctors</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">156</h3>
              <p className="text-gray-600">Appointments This Month</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">98%</h3>
              <p className="text-gray-600">Patient Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">12</h3>
              <p className="text-gray-600">Specialties Covered</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">Need Help Finding a Doctor?</h2>
          <p className="text-blue-100 mb-6">
            Our healthcare team is here to help you find the right specialist for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>doctors@uniquehealthid.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
