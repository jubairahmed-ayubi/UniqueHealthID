import Link from 'next/link';
import { 
  ArrowLeft, 
  Heart, 
  Thermometer, 
  Wind, 
  Droplets,
  Activity,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus
} from 'lucide-react';

const HealthMetrics = () => {
  const metrics = [
    {
      title: 'Heart Rate',
      icon: Heart,
      href: '/health-metrics/heart-rate',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      currentValue: '72 BPM',
      status: 'normal',
      trend: 'stable',
      lastUpdated: '2 hours ago',
      unit: 'BPM',
      normalRange: '60-100 BPM'
    },
    {
      title: 'Temperature',
      icon: Thermometer,
      href: '/health-metrics/temperature',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      currentValue: '98.6°F',
      status: 'normal',
      trend: 'stable',
      lastUpdated: '1 hour ago',
      unit: '°F',
      normalRange: '97.8-99.1°F'
    },
    {
      title: 'Oxygen Rate',
      icon: Wind,
      href: '/health-metrics/oxygen-rate',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      currentValue: '98%',
      status: 'normal',
      trend: 'stable',
      lastUpdated: '30 minutes ago',
      unit: '%',
      normalRange: '95-100%'
    },
    {
      title: 'Blood Pressure',
      icon: Droplets,
      href: '/health-metrics/blood-pressure',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      currentValue: '120/80',
      status: 'normal',
      trend: 'stable',
      lastUpdated: '3 hours ago',
      unit: 'mmHg',
      normalRange: '<120/80 mmHg'
    }
  ];

  const recentReadings = [
    {
      metric: 'Heart Rate',
      value: '72 BPM',
      time: '2 hours ago',
      status: 'normal',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      metric: 'Temperature',
      value: '98.6°F',
      time: '1 hour ago',
      status: 'normal',
      icon: Thermometer,
      color: 'text-orange-500'
    },
    {
      metric: 'Blood Pressure',
      value: '120/80',
      time: '3 hours ago',
      status: 'normal',
      icon: Droplets,
      color: 'text-purple-500'
    },
    {
      metric: 'Oxygen Rate',
      value: '98%',
      time: '30 minutes ago',
      status: 'normal',
      icon: Wind,
      color: 'text-blue-500'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'high':
        return <TrendingUp className="w-5 h-5 text-red-500" />;
      case 'low':
        return <TrendingDown className="w-5 h-5 text-blue-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-green-100 text-green-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Health Metrics
              </h1>
              <p className="text-lg text-gray-600">
                Monitor your vital signs and health indicators
              </p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              Add Reading
            </button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Link
                key={metric.title}
                href={metric.href}
                className="group block"
              >
                <div className={`${metric.bgColor} ${metric.borderColor} border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    {getStatusIcon(metric.status)}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {metric.title}
                  </h3>
                  
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-gray-900">
                      {metric.currentValue}
                    </p>
                    <p className="text-sm text-gray-600">
                      Normal: {metric.normalRange}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                      {metric.status}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {metric.lastUpdated}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Health Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Health Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">4</h3>
              <p className="text-gray-600">Normal Readings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">24</h3>
              <p className="text-gray-600">Readings Today</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">7</h3>
              <p className="text-gray-600">Day Streak</p>
            </div>
          </div>
        </div>

        {/* Recent Readings */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Readings</h2>
          <div className="space-y-4">
            {recentReadings.map((reading, index) => {
              const Icon = reading.icon;
              return (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4">
                      <Icon className={`w-5 h-5 ${reading.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{reading.metric}</h3>
                      <p className="text-sm text-gray-600">{reading.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold text-gray-900">
                      {reading.value}
                    </span>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(reading.status)}`}>
                      {reading.status}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Track Your Progress</h3>
            <p className="text-gray-600 mb-4">
              View detailed charts and trends for all your health metrics over time.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              View Charts
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Set Reminders</h3>
            <p className="text-gray-600 mb-4">
              Create reminders to regularly check and record your health metrics.
            </p>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
              Set Reminder
            </button>
          </div>
        </div>

        {/* Emergency Alert */}
        <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
            <h3 className="text-lg font-semibold text-red-800">Emergency Alert</h3>
          </div>
          <p className="text-red-700 mb-4">
            If any of your readings are outside normal ranges or you feel unwell, 
            contact your healthcare provider immediately or use our emergency system.
          </p>
          <div className="flex space-x-3">
            <Link
              href="/emergency-system"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Emergency System
            </Link>
            <Link
              href="/doctor-info"
              className="px-4 py-2 bg-white text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
            >
              Contact Doctor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthMetrics;
