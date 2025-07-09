import { Plane } from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen"
      style={{ backgroundImage: "url(/images/bgggggg.jpg)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 flex items-center justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <Plane className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
          </div>

          {/* Headings */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 drop-shadow-md">
            Your Next Journey Starts Here
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100 drop-shadow-sm">
            View Hajj & Umrah Packages or Start Your Pilgrimage
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            IATA Certified | Seamless Packages | Spiritual Support
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
