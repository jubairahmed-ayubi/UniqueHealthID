'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  FileText, 
  Calendar, 
  User, 
  Stethoscope, 
  Pill, 
  Activity,
  Download,
  Eye,
  Edit,
  Plus,
  Search,
  Filter
} from 'lucide-react';

interface MedicalRecord {
  id: string;
  title: string;
  date: string;
  doctor: string;
  type: 'consultation' | 'lab' | 'prescription' | 'vaccination' | 'surgery';
  description: string;
  status: 'active' | 'completed' | 'pending';
  attachments?: string[];
}

const MedicalArchive = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedRecord, setSelectedRecord] = useState<MedicalRecord | null>(null);

  const medicalRecords: MedicalRecord[] = [
    {
      id: '1',
      title: 'Annual Physical Examination',
      date: '2024-01-15',
      doctor: 'Dr. Sarah Johnson',
      type: 'consultation',
      description: 'Complete annual physical examination including blood pressure, heart rate, and general health assessment.',
      status: 'completed',
      attachments: ['blood_test_results.pdf', 'physical_exam_report.pdf']
    },
    {
      id: '2',
      title: 'Blood Test Results',
      date: '2024-01-10',
      doctor: 'Dr. Michael Chen',
      type: 'lab',
      description: 'Complete blood count, cholesterol levels, and diabetes screening results.',
      status: 'completed',
      attachments: ['cbc_results.pdf', 'lipid_panel.pdf']
    },
    {
      id: '3',
      title: 'Prescription - Blood Pressure Medication',
      date: '2024-01-15',
      doctor: 'Dr. Sarah Johnson',
      type: 'prescription',
      description: 'Prescribed Lisinopril 10mg daily for blood pressure management.',
      status: 'active',
      attachments: ['prescription.pdf']
    },
    {
      id: '4',
      title: 'COVID-19 Vaccination',
      date: '2023-12-20',
      doctor: 'Dr. Emily Rodriguez',
      type: 'vaccination',
      description: 'COVID-19 booster vaccination administered.',
      status: 'completed',
      attachments: ['vaccination_card.pdf']
    },
    {
      id: '5',
      title: 'Appendectomy Surgery',
      date: '2023-08-15',
      doctor: 'Dr. James Wilson',
      type: 'surgery',
      description: 'Laparoscopic appendectomy performed successfully.',
      status: 'completed',
      attachments: ['surgery_report.pdf', 'discharge_summary.pdf']
    },
    {
      id: '6',
      title: 'Follow-up Consultation',
      date: '2024-02-20',
      doctor: 'Dr. Sarah Johnson',
      type: 'consultation',
      description: 'Follow-up appointment to review blood pressure medication effectiveness.',
      status: 'pending',
      attachments: []
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'consultation':
        return <Stethoscope className="w-5 h-5" />;
      case 'lab':
        return <Activity className="w-5 h-5" />;
      case 'prescription':
        return <Pill className="w-5 h-5" />;
      case 'vaccination':
        return <Activity className="w-5 h-5" />;
      case 'surgery':
        return <Stethoscope className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'consultation':
        return 'bg-blue-100 text-blue-800';
      case 'lab':
        return 'bg-green-100 text-green-800';
      case 'prescription':
        return 'bg-purple-100 text-purple-800';
      case 'vaccination':
        return 'bg-yellow-100 text-yellow-800';
      case 'surgery':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredRecords = medicalRecords.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || record.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const RecordDetailModal = ({ record, onClose }: { record: MedicalRecord; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{record.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(record.type)}`}>
                {getTypeIcon(record.type)}
                <span className="ml-2 capitalize">{record.type}</span>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(record.status)}`}>
                {record.status}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">{record.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">{record.doctor}</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">{record.description}</p>
            </div>
            
            {record.attachments && record.attachments.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Attachments</h3>
                <div className="space-y-2">
                  {record.attachments.map((attachment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{attachment}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-1 text-blue-600 hover:text-blue-800">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-green-600 hover:text-green-800">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Close
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Edit className="w-4 h-4 inline mr-2" />
              Edit Record
            </button>
          </div>
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
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Medical Archive
          </h1>
          <p className="text-lg text-gray-600">
            Access and manage your complete medical history
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search medical records..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="consultation">Consultation</option>
                <option value="lab">Lab Results</option>
                <option value="prescription">Prescription</option>
                <option value="vaccination">Vaccination</option>
                <option value="surgery">Surgery</option>
              </select>
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              Add Record
            </button>
          </div>
        </div>

        {/* Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecords.map((record) => (
            <div
              key={record.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedRecord(record)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(record.type)} flex items-center`}>
                    {getTypeIcon(record.type)}
                    <span className="ml-2 capitalize">{record.type}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(record.status)}`}>
                    {record.status}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {record.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{record.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    <span className="text-sm">{record.doctor}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {record.description}
                </p>
                
                {record.attachments && record.attachments.length > 0 && (
                  <div className="flex items-center text-blue-600 text-sm">
                    <FileText className="w-4 h-4 mr-1" />
                    <span>{record.attachments.length} attachment(s)</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredRecords.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No medical records found
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || filterType !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Start by adding your first medical record'
              }
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Plus className="w-5 h-5 inline mr-2" />
              Add First Record
            </button>
          </div>
        )}
      </div>

      {/* Record Detail Modal */}
      {selectedRecord && (
        <RecordDetailModal
          record={selectedRecord}
          onClose={() => setSelectedRecord(null)}
        />
      )}
    </div>
  );
};

export default MedicalArchive;
