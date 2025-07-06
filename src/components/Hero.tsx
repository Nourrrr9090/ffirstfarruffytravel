
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <Plane className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            FLIGHT IS STEAMING, PRIMED AND READY TO SOAR
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-200">
            ALL THAT'S MISSING IS YOU
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Your trusted IATA Accredited Agent for international air passenger transportation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-full">
              FLY FROM MINNA TO ABUJA AND LAGOS
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg rounded-full">
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
