
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Shield } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Travel Partner
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              First Farrufy Travel & Tours Ltd. is your reliable partner for all travel needs. 
              We are proud to be an IATA Accredited Agent and registered member of NANTA, 
              ensuring the highest standards of service and professionalism.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-lg">IATA Accredited Agent (GoLite)</span>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">Verified</Badge>
              </div>
              
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-lg">NANTA Registered Member</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Certified</Badge>
              </div>
              
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-lg">Nigeria Civil Aviation Authority Licensed</span>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">Licensed</Badge>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">IATA Accreditation</h3>
                    <p className="text-blue-700">International Air Transport Association certified agent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-600 rounded-full p-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900">NANTA Membership</h3>
                    <p className="text-green-700">National Association of Nigeria Travel Agencies member</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/a4df8dd3-143f-42fb-8346-c7eeae06f285.png" 
                alt="IATA Certificate" 
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img 
                src="/lovable-uploads/84e5cfbe-3109-4689-9938-ebdef3cf79d1.png" 
                alt="NANTA Certificate" 
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
