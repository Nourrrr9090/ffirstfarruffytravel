import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/lovable-uploads/7a812372-300a-4020-8fe1-d4a713a7356b.png" 
                alt="First Farrufy Travel & Tours Logo" 
                className="h-16 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold">FIRST FARRUFY</h3>
                <p className="text-gray-300">TRAVEL & TOURS LTD.</p>
                <p className="text-blue-400 text-sm">...bringing the world to your door step</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for domestic flights, Hajj and Umrah packages. 
              IATA accredited and NANTA registered for your peace of mind.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 rounded-full p-2 hover:bg-blue-700 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="bg-pink-600 rounded-full p-2 hover:bg-pink-700 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Flight Booking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hajj Packages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Umrah Packages</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p>08138310649</p>
                  <p>07013691442</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <p className="text-sm">firstfarrufytravels@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div className="text-sm">
                  <p>Suite No. 6, AL-ASR PLAZA</p>
                  <p>Adjacent Syringe Roundabout</p>
                  <p>General Hospital Road</p>
                  <p>Minna, Niger State</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2025 First Farrufy Travel & Tours Ltd. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>IATA Accredited Agent</span>
            <span>•</span>
            <span>NANTA Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;