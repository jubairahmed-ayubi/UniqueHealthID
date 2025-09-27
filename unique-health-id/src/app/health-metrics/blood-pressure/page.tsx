'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Droplets, 
  Plus, 
  TrendingUp, 
  TrendingDown,
  Clock,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Activity,
  Heart,
  Zap
} from 'lucide-react';

const BloodPressurePage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const bloodPressureData = [
    { date: '2024-02-15', time: '08:00', systolic: 120, diastolic: 80, status: 'normal' },
    { date: '2024-02-15', time: '12:00', systolic: 118, diastolic: 78, status: 'normal' },
    { date: '2024-02-15', time: '16:00', systolic: 125, diastolic: 82, status: 'normal' },
    { date: '2024-02-15', time: '20:00', systolic: 122, diastolic: 79, status: 'normal' },
    { date: '2024-02-16', time: '08:00', systolic: 115, diastolic: 75, status: 'normal' },
    { date: '2024-02-16', time: '12:00', systolic: 130, diastolic: 85, status: 'elevated' },
    { date: '2024-02-16', time: '16:00', systolic: 128, diastolic: 83, status: 'normal' },
    { date: '2024-02-16', time: '20:00', systolic: 120, diastolic: 80, status: 'normal' },
    { date: '2024-02-17', time: '08:00', systolic: 118, diastolic: 76, status: 'normal' },
    { date: '2024-02-17', time: '12:00', systolic: 135, diastolic: 88, status: 'high' },
    { date: '2024-02-17', time: '16:00', systolic: 125, diastolic: 82, status: 'normal' },
    { date: '2024-02-17', time: '20:00', systolic: 122, diastolic: 79, status: 'normal' }
  ];

  const currentReading = {
    systolic: 120,
    diastolic: 80,
    status: 'normal',
    time: '3 hours ago',
    trend: 'stable'
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'elevated':
        return <TrendingUp className="w-5 h-5 text-yellow-500" />;
      case 'high':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'low':
        return <TrendingDown className="w-5 h-5 text-blue-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-green-100 text-green-800';
      case 'elevated':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'normal':
        return 'Normal';
      case 'elevated':
        return 'Elevated';
      case 'high':
        return 'High';
      case 'low':
        return 'Low';
      default:
        return 'Unknown';
    }
  };

  const periods = [
    { id: 'day', label: 'Today' },
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'year', label: 'This Year' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/health-metrics"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Health Metrics
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center">
                <Droplets className="w-8 h-8 text-purple-500 mr-3" />
                Blood Pressure Monitoring
              </h1>
              <p className="text-lg text-gray-600">
                Track your systolic and diastolic blood pressure readings
              </p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              Add Reading
            </button>
          </div>
        </div>

        {/* Current Reading */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Current Reading</h2>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span>{currentReading.time}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {currentReading.systolic}/{currentReading.diastolic}
              </h3>
              <p className="text-sm text-gray-600 mb-2">mmHg</p>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(currentReading.status)} inline-flex items-center`}>
                {getStatusIcon(currentReading.status)}
                <span className="ml-1">{getStatusText(currentReading.status)}</span>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Blood Pressure Categories</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Normal</span>
                  <span className="font-semibold">&lt;120/80 mmHg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Elevated</span>
                  <span className="font-semibold">120-129/&lt;80 mmHg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">High Stage 1</span>
                  <span className="font-semibold">130-139/80-89 mmHg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">High Stage 2</span>
                  <span className="font-semibold">≥140/≥90 mmHg</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">122/79</h3>
            <p className="text-gray-600">Average BP</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">140/95</h3>
            <p className="text-gray-600">Highest BP</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingDown className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">110/70</h3>
            <p className="text-gray-600">Lowest BP</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">85%</h3>
            <p className="text-gray-600">Normal Readings</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Blood Pressure Trends</h2>
            <div className="flex space-x-2">
              {periods.map((period) => (
                <button
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedPeriod === period.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Simple Chart Representation */}
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Droplets className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Blood Pressure Chart</p>
              <p className="text-sm text-gray-500">Interactive chart would be displayed here</p>
            </div>
          </div>
        </div>

        {/* Recent Readings */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Readings</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Time</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Blood Pressure</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {bloodPressureData.slice(0, 8).map((reading, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-600">{reading.date}</td>
                    <td className="py-3 px-4 text-gray-600">{reading.time}</td>
                    <td className="py-3 px-4 font-semibold text-gray-900">{reading.systolic}/{reading.diastolic} mmHg</td>
                    <td className="py-3 px-4">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(reading.status)} inline-flex items-center`}>
                        {getStatusIcon(reading.status)}
                        <span className="ml-1">{getStatusText(reading.status)}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Health Tips */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Droplets className="w-5 h-5 text-purple-600 mr-2" />
            Blood Pressure Health Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Managing Blood Pressure</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Reduce sodium intake</li>
                <li>• Exercise regularly (150 minutes/week)</li>
                <li>• Maintain a healthy weight</li>
                <li>• Limit alcohol consumption</li>
                <li>• Manage stress through relaxation techniques</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">When to Seek Medical Attention</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Systolic pressure ≥180 mmHg</li>
                <li>• Diastolic pressure ≥110 mmHg</li>
                <li>• Severe headache or dizziness</li>
                <li>• Chest pain or shortness of breath</li>
                <li>• Vision changes or confusion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressurePage;
