import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Star } from "lucide-react";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Placeholder image URLs (replace with your actual image URLs or paths)
  const images = {
    domestic: "/public/images/fly from minna to abuja to lagos.jpg",
    hajj: "/public/images/international hajj basic package.jpg",
    umrah: "/public/images/umrah package.jpg",
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Professional travel services you can trust</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Domestic Flights</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">Regular flights between major Nigerian cities</p>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">Flight Schedule</h4>
                <div className="text-sm space-y-1">
                  <p>Lagos to Minna: 8:00AM</p>
                  <p>Minna to Abuja: 9:30AM</p>
                  <p>Abuja to Minna: 2:00PM</p>
                  <p>Minna to Lagos: 3:00PM</p>
                </div>
                <p className="text-xs text-blue-600 mt-2">Every Monday, Wednesday & Friday</p>
              </div>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700" 
                onClick={() => openModal(images.domestic)}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-xl">Hajj Packages</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Complete Hajj pilgrimage packages</p>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="ml-2 text-sm">Basic Package</span>
                </div>
                <p className="text-2xl font-bold text-red-700">₦8,450M</p>
                <p className="text-sm text-gray-600">1447AH/2026</p>
                <p className="text-xs text-green-600 mt-2">Pay Small Small Option Available</p>
              </div>
              <Button 
                className="w-full bg-red-600 hover:bg-red-700" 
                onClick={() => openModal(images.hajj)}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Umrah Packages</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Year-round Umrah pilgrimage services</p>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="ml-2 text-sm">3 Star Package</span>
                </div>
                <p className="text-2xl font-bold text-green-700">From ₦2.65M</p>
                <p className="text-sm text-gray-600">July to December 2025</p>
                <p className="text-xs text-green-600 mt-2">4 & 5 Star packages available</p>
              </div>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700" 
                onClick={() => openModal(images.umrah)}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Modal for displaying images */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div 
              className="bg-white p-4 rounded-lg max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={closeModal}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage} 
                alt="Service Image" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;