import Link from 'next/link';
import { 
  ArrowLeft, 
  Ambulance, 
  AlertTriangle, 
  Users, 
  Phone,
  MapPin,
  Clock,
  Shield,
  Zap,
  Heart,
  Activity
} from 'lucide-react';

const EmergencySystem = () => {
  const emergencyFeatures = [
    {
      title: 'Emergency Ambulance',
      description: 'Call emergency ambulance services',
      icon: Ambulance,
      href: '/emergency-system/ambulance',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      emergency: true
    },
    {
      title: 'SOS Alert',
      description: 'Send emergency SOS alerts to contacts',
      icon: AlertTriangle,
      href: '/emergency-system/sos',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      emergency: true
    },
    {
      title: 'SOS Contacts',
      description: 'Manage emergency contacts',
      icon: Users,
      href: '/emergency-system/sos-contact',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      emergency: false
    }
  ];

  const emergencyNumbers = [
    { name: 'Emergency Services', number: '911', description: 'Police, Fire, Ambulance' },
    { name: 'Poison Control', number: '1-800-222-1222', description: '24/7 Poison Help Line' },
    { name: 'Suicide Prevention', number: '988', description: 'National Suicide Prevention Lifeline' },
    { name: 'Crisis Text Line', number: 'Text HOME to 741741', description: 'Crisis Support via Text' }
  ];

  const quickActions = [
    {
      title: 'Call 911',
      description: 'Emergency services',
      icon: Phone,
      color: 'bg-red-600',
      hoverColor: 'hover:bg-red-700',
      action: 'call'
    },
    {
      title: 'Send SOS',
      description: 'Alert emergency contacts',
      icon: AlertTriangle,
      color: 'bg-orange-600',
      hoverColor: 'hover:bg-orange-700',
      action: 'sos'
    },
    {
      title: 'Share Location',
      description: 'Share your current location',
      icon: MapPin,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      action: 'location'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center">
            <Shield className="w-8 h-8 text-red-500 mr-3" />
            Emergency System
          </h1>
          <p className="text-lg text-gray-600">
            Quick access to emergency services and emergency contacts
          </p>
        </div>

        {/* Emergency Alert Banner */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl shadow-lg p-6 mb-8 text-white">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">Emergency Alert</h2>
          </div>
          <p className="text-red-100 mb-4">
            In case of a medical emergency, call 911 immediately. This system provides additional 
            emergency support and contact management.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call 911 Now
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Send SOS Alert
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.title}
                className={`${action.color} ${action.hoverColor} text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
                  <p className="text-white/90">{action.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Emergency Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="group block"
                >
                  <div className={`${feature.bgColor} ${feature.borderColor} border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      {feature.emergency && (
                        <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                          Emergency
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {feature.description}
                    </p>
                    
                    <div className={`w-full h-1 bg-gradient-to-r ${feature.color.replace('text-', 'from-').replace('-500', '-500')} to-${feature.color.replace('text-', '').replace('-500', '-600')} rounded-full`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Emergency Numbers */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Emergency Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyNumbers.map((number, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">{number.name}</h3>
                  <p className="text-sm text-gray-600">{number.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">{number.number}</p>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Call Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Tips */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Shield className="w-5 h-5 text-blue-600 mr-2" />
            Emergency Safety Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Before an Emergency</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Keep emergency numbers handy</li>
                <li>• Set up emergency contacts in your phone</li>
                <li>• Know your medical conditions and medications</li>
                <li>• Keep important documents accessible</li>
                <li>• Have a first aid kit ready</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">During an Emergency</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Stay calm and assess the situation</li>
                <li>• Call 911 for life-threatening emergencies</li>
                <li>• Provide clear information to dispatchers</li>
                <li>• Follow instructions from emergency personnel</li>
                <li>• Keep yourself and others safe</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Health Status */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Health Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">72</h3>
              <p className="text-gray-600">Heart Rate (BPM)</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Activity className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">98.6°F</h3>
              <p className="text-gray-600">Temperature</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">98%</h3>
              <p className="text-gray-600">Oxygen Level</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Normal</h3>
              <p className="text-gray-600">Overall Status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencySystem;
