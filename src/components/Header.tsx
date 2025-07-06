
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/7a812372-300a-4020-8fe1-d4a713a7356b.png" 
              alt="First Farrufy Travel & Tours Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-navy-900">FIRST FARRUFY</h1>
              <p className="text-sm text-gray-600">TRAVEL & TOURS LTD.</p>
              <p className="text-xs text-blue-600">...bringing the world to your door step</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>08138310649 / 07013691442</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-blue-600" />
              <span>firstfarrufytravels@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
