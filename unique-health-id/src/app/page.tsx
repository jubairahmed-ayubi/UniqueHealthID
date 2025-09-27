import Link from 'next/link';
import { 
  FileText, 
  User, 
  Activity, 
  Phone, 
  Heart, 
  Thermometer, 
  Wind, 
  Droplets,
  Calendar,
  UserCheck,
  Ambulance,
  AlertTriangle,
  Users
} from 'lucide-react';
import BannerSlider from '@/components/BannerSlider';

export default function Home() {
  const mainFeatures = [
    {
      title: 'Medical Archive',
      description: 'Access and manage your complete medical history',
      icon: FileText,
      href: '/medical-archive',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Doctor Info',
      description: 'Connect with healthcare professionals',
      icon: User,
      href: '/doctor-info',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Health Metrics',
      description: 'Monitor your vital signs and health data',
      icon: Activity,
      href: '/health-metrics',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Emergency System',
      description: 'Quick access to emergency services',
      icon: Phone,
      href: '/emergency-system',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    }
  ];

  const healthMetrics = [
    {
      title: 'Heart Rate',
      icon: Heart,
      href: '/health-metrics/heart-rate',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Temperature',
      icon: Thermometer,
      href: '/health-metrics/temperature',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Oxygen Rate',
      icon: Wind,
      href: '/health-metrics/oxygen-rate',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Blood Pressure',
      icon: Droplets,
      href: '/health-metrics/blood-pressure',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const emergencyFeatures = [
    {
      title: 'Emergency Ambulance',
      icon: Ambulance,
      href: '/emergency-system/ambulance',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      title: 'SOS Alert',
      icon: AlertTriangle,
      href: '/emergency-system/sos',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'SOS Contacts',
      icon: Users,
      href: '/emergency-system/sos-contact',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section with Banner Slider */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BannerSlider />
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Health, Your Control
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare management at your fingertips. Track, monitor, and manage your health with our integrated platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="group block"
                >
                  <div className={`${feature.bgColor} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                    <div className={`mt-4 w-full h-1 bg-gradient-to-r ${feature.color} rounded-full`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Health Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Health Metrics Tracking
            </h2>
            <p className="text-lg text-gray-600">
              Monitor your vital signs and health indicators in real-time
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {healthMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <Link
                  key={metric.title}
                  href={metric.href}
                  className="group block"
                >
                  <div className={`${metric.bgColor} rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105`}>
                    <div className={`w-16 h-16 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 ${metric.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {metric.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency System Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emergency Response System
            </h2>
            <p className="text-lg text-gray-600">
              Quick access to emergency services when you need them most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="group block"
                >
                  <div className={`${feature.bgColor} rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.title === 'Emergency Ambulance' && 'Call emergency ambulance services'}
                      {feature.title === 'SOS Alert' && 'Send emergency SOS alerts'}
                      {feature.title === 'SOS Contacts' && 'Manage emergency contacts'}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctor Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Professionals
            </h2>
            <p className="text-lg text-gray-600">
              Connect with your healthcare team and manage appointments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/doctor-info/profile" className="group block">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <UserCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Doctor Profile</h3>
                    <p className="text-gray-600 text-sm">View doctor information and credentials</p>
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
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who trust UniqueHealthID for their healthcare management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              href="/login"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}