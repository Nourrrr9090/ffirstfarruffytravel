import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Star } from "lucide-react";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const images = {
    domestic: "/images/fly from minna to abuja to lagos.jpg",
    hajj: "/images/international hajj basic package.jpg",
    umrah: "/images/umrah package.jpg",
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold text-emerald-800 mb-6">Welcome to Farrufy Travels.</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong className="text-gray-800">At Farrufy Travels, </strong> <br /><br />
              we believe that every journey is more than just a destination; it’s a spiritual experience,
              a moment of reflection, and a step closer to Allah.
              <br /><br />
              Whether you’re embarking on your first Umrah, fulfilling the sacred pillar of Hajj, or exploring Islamic heritage
              sites around the world, we are here to walk with you every step of the way. Our goal is to make your travel not
              just seamless, but meaningful.
              <br /><br />
              With years of trusted experience, a dedicated team, and a deep understanding of the needs of Muslim travelers,
              First Farrufy Travel & Tours has become a name our clients return to again and again. From visa support and
              flight bookings to guided tours and accommodation, we take care of every detail — so you can focus on what truly matters.
              <br /><br />
              Join the First Farrufy family and let us help you travel with ease. <br />
              <strong>Your journey begins here.</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              As a proudly Nigerian company with global reach, we are committed to delivering reliable, high-quality services to pilgrims,
              tourists, and business travelers alike. Whether you're performing Hajj or Umrah, planning your dream vacation,
              or booking local and international flights,{" "}
              <span className="text-emerald-700 font-semibold">First Farrufy</span> is here to serve you.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to make your journey seamless, spiritually fulfilling, and unforgettable — guided by sincerity,
              integrity, and strong Islamic values. Trust us with your next travel experience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Do you desire to change your scenery? Look no further than First Farrufy Travels & Tours.
              We are a leading travel and tour company in Nigeria, holding a distinct position in the aviation industry.
              <br /><br />
              Our team of experienced and committed travel agents are well-versed in the intricacies of travel planning,
              and dedicated to creating unforgettable travel experiences for our esteemed customers.
              <br /><br />
              Let us plan your vacation, book flights for your leisure and official engagements, and facilitate your study visas.
              Book your next travel with First Farrufy Travels & Tours today!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Umrah Package */}
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
                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => openModal(images.umrah)}>
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Hajj Package */}
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
                    <span className="ml-2 text-sm">3 Star Package</span>
                  </div>
                  <p className="text-2xl font-bold text-red-700">From ₦8.450M</p>
                  <p className="text-sm text-gray-600">June 2025</p>
                  <p className="text-xs text-red-600 mt-2">Premium 4 & 5 Star packages also available</p>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700" onClick={() => openModal(images.hajj)}>
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Domestic Flights */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Domestic Flights</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Fly easily within Nigeria</p>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-2xl font-bold text-blue-700">From ₦75,000</p>
                  <p className="text-sm text-gray-600">Minna → Abuja → Lagos</p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => openModal(images.domestic)}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              role="dialog"
              aria-modal="true"
            >
              <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <img src={selectedImage} alt="Service Detail" className="rounded-md w-full h-auto" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Services;
