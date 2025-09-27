'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Wind, 
  Plus, 
  TrendingUp, 
  TrendingDown,
  Clock,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Activity,
  Droplets,
  Zap
} from 'lucide-react';

const OxygenRatePage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const oxygenData = [
    { date: '2024-02-15', time: '08:00', value: 98, status: 'normal' },
    { date: '2024-02-15', time: '12:00', value: 97, status: 'normal' },
    { date: '2024-02-15', time: '16:00', value: 99, status: 'normal' },
    { date: '2024-02-15', time: '20:00', value: 98, status: 'normal' },
    { date: '2024-02-16', time: '08:00', value: 97, status: 'normal' },
    { date: '2024-02-16', time: '12:00', value: 98, status: 'normal' },
    { date: '2024-02-16', time: '16:00', value: 99, status: 'normal' },
    { date: '2024-02-16', time: '20:00', value: 98, status: 'normal' },
    { date: '2024-02-17', time: '08:00', value: 98, status: 'normal' },
    { date: '2024-02-17', time: '12:00', value: 97, status: 'normal' },
    { date: '2024-02-17', time: '16:00', value: 99, status: 'normal' },
    { date: '2024-02-17', time: '20:00', value: 98, status: 'normal' }
  ];

  const currentReading = {
    value: 98,
    status: 'normal',
    time: '30 minutes ago',
    trend: 'stable'
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'low':
        return <TrendingDown className="w-5 h-5 text-red-500" />;
      case 'critical':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-green-100 text-green-800';
      case 'low':
        return 'bg-yellow-100 text-yellow-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'normal':
        return 'Normal';
      case 'low':
        return 'Low';
      case 'critical':
        return 'Critical';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
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
                <Wind className="w-8 h-8 text-blue-500 mr-3" />
                Oxygen Rate Monitoring
              </h1>
              <p className="text-lg text-gray-600">
                Track your blood oxygen saturation levels
              </p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
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
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {currentReading.value}%
              </h3>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(currentReading.status)} inline-flex items-center`}>
                {getStatusIcon(currentReading.status)}
                <span className="ml-1">{getStatusText(currentReading.status)}</span>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Oxygen Saturation Ranges</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Normal Range</span>
                  <span className="font-semibold">95% - 100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Mild Hypoxemia</span>
                  <span className="font-semibold">90% - 94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Moderate Hypoxemia</span>
                  <span className="font-semibold">85% - 89%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Severe Hypoxemia</span>
                  <span className="font-semibold">&lt;85%</span>
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
            <h3 className="text-2xl font-bold text-gray-900">98%</h3>
            <p className="text-gray-600">Average SpO2</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">100%</h3>
            <p className="text-gray-600">Highest SpO2</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingDown className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">96%</h3>
            <p className="text-gray-600">Lowest SpO2</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">100%</h3>
            <p className="text-gray-600">Normal Readings</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Oxygen Saturation Trends</h2>
            <div className="flex space-x-2">
              {periods.map((period) => (
                <button
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedPeriod === period.id
                      ? 'bg-blue-600 text-white'
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
              <Wind className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Oxygen Saturation Chart</p>
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
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">SpO2</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {oxygenData.slice(0, 8).map((reading, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-600">{reading.date}</td>
                    <td className="py-3 px-4 text-gray-600">{reading.time}</td>
                    <td className="py-3 px-4 font-semibold text-gray-900">{reading.value}%</td>
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
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Wind className="w-5 h-5 text-blue-600 mr-2" />
            Oxygen Health Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Improving Oxygen Levels</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Practice deep breathing exercises</li>
                <li>• Maintain good posture</li>
                <li>• Stay hydrated</li>
                <li>• Exercise regularly</li>
                <li>• Avoid smoking and secondhand smoke</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">When to Seek Medical Attention</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• SpO2 consistently below 95%</li>
                <li>• SpO2 below 90% at any time</li>
                <li>• Shortness of breath at rest</li>
                <li>• Chest pain or tightness</li>
                <li>• Bluish lips or fingernails</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OxygenRatePage;
