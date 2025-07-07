import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/image.jpg')" }} // Replace with your image path
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>

      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <Plane className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
            Your Next Journey Starts Here
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-100 drop-shadow-sm">
            View Hajj & Umrah Packages or Start Your Pilgrimage
          </h2>

          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            IATA Certified | Seamless Packages | Spiritual Support
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-full"
            >
              START YOUR PILGRIMAGE
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue text-blue hover:bg-blue hover:text-blue-800 px-8 py-4 text-lg rounded-full"
            >
              BOOK A FLIGHT TODAY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
