import Link from 'next/link';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-bold">UniqueHealthID</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your comprehensive healthcare companion. Track your health metrics, 
              manage medical records, and connect with healthcare professionals 
              all in one place.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/medical-archive" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Medical Archive
                </Link>
              </li>
              <li>
                <Link href="/doctor-info" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Doctor Information
                </Link>
              </li>
              <li>
                <Link href="/health-metrics" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Health Metrics
                </Link>
              </li>
              <li>
                <Link href="/emergency-system" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Emergency System
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/health-metrics/heart-rate" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Heart Rate Monitoring
                </Link>
              </li>
              <li>
                <Link href="/health-metrics/temperature" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Temperature Tracking
                </Link>
              </li>
              <li>
                <Link href="/health-metrics/oxygen-rate" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Oxygen Level Monitoring
                </Link>
              </li>
              <li>
                <Link href="/health-metrics/blood-pressure" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blood Pressure Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  123 Healthcare Street<br />
                  Medical City, MC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">info@uniquehealthid.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with love for better healthcare</span>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm mt-4">
            <p>Developed By Jubair Ahmed</p>
            <p>Version 1.0.0</p>
            <p>© 2025 UniqueHealthID. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
