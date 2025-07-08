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

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional travel services you can trust</p>
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
                    {[...Array(3)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
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
                    {[...Array(3)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                    <span className="ml-2 text-sm">3 Star Package</span>
                  </div>
                  <p className="text-2xl font-bold text-red-700">From ₦5.8M</p>
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
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true">
              <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
                <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl" onClick={closeModal}>
                  &times;
                </button>
                <img src={selectedImage} alt="Service Detail" className="rounded-md w-full h-auto" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Hajj Moments Gallery */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Hajj Moments Gallery</h2>
            <p className="text-lg text-gray-600">Memorable moments captured during our customers' Hajj journeys</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "IMG-20250707-WA0009adddddd.jpg",
              "IMG-20250707-WA0013adddd.jpg",
              "IMG-20250707-WA0025walking.jpg",
              "IMG-20250707-WA0016adddd.jpg",
              "IMG-20250707-WA0018adddd.jpg",
              "IMG-20250707-WA0023lastt.jpg",
            ].map((img, i) => (
              <img key={i} src={`/images/${img}`} alt={`Hajj moment ${i + 1}`} className="rounded-lg shadow-md object-cover w-full h-64" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Customer Testimonials</h2>
            <p className="text-lg text-gray-600">What our customers are saying about us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "This was my first time traveling for Umrah, and I was a bit nervous. But with First Farrufy handling everything—from visa processing to hotel arrangements—I was able to focus on my ibaadah. Jazakumullahu khairan.",
                name: "HAJIYA JAMILA YABO",
                location: "Abuja, Nigeria",
              },
              {
                text: "Their customer service is top-notch. They were patient with all my questions and made sure I was comfortable at every stage of the journey. I truly appreciate their professionalism and Islamic values.",
                name: "ALHAJI ABDULGANIYU ABDULRAZAQ AREMU",
                location: "Ilorin, Nigeria",
              },
              {
                text: "Alhamdulillah. This was our third time traveling with them, and they never disappoint. We had an amazing Hajj experience with First Farrufy. The accommodations were close to the Haramain, the guides were knowledgeable, and the entire process was smooth. We’ve already recommended them to our family.",
                name: "ALH MUKHTARI & HAJIYA RABI KURABAU MAMMAN",
                location: "Katsina, Nigeria",
              },
              {
                text: "Going for Umrah with First Farrufy Travel & Tours was a dream come true. From start to finish, everything was so organized and stress-free. The team was always ready to help, and I felt spiritually uplifted throughout the journey. May Allah bless them for making it easy for us. Amin 🤲🏽",
                name: "BARRISTER YARIMA YAKUBU",
                location: "Minna, Nigeria",
              },
              {
                text: "Assalamu alai'kum. Mun sauka lafia lau Alhamdulillah. Hotel din yayi kyau sosai. Mungode.",
                name: "ALH ALHASSAN SONFADA",
                location: "Lapai, Nigeria",
              },
            ].map((t, i) => (
              <Card key={i} className="p-6 bg-gray-50 shadow-sm">
                <CardContent>
                  <p className="text-gray-700 italic mb-4">“{t.text}”</p>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Ambassador Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Meet Our Brand Ambassador</h2>
            <p className="text-lg text-gray-600">A trusted face behind our mission and values</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
            <div className="w-full md:w-1/2">
              <img
                src="/images/WhatsApp Image 2025-07-07 at 23.36.25_018b2beaddddd.jpg"
                alt="Brand Ambassador"
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Alhaji Nurudeen Isyaku Daza</h3>
              <p className="text-gray-700 text-lg mb-4">
                A seasoned traveler, community leader, and passionate advocate for spiritual journeys,
                Alhaji Nurudeen Isyaku Daza has proudly represented First Farrufy Travel & Tours as our Brand Ambassador
                since 2025.
              </p>
              <p className="text-gray-600">
                With a deep understanding of the spiritual and emotional significance of Hajj and Umrah,
                he works closely with us to ensure that our services not only meet but exceed expectations—
                inspiring confidence in all who travel with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilgrimage Partners */}
      <section className="py-20 mt-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Pilgrimage Partners</h2>
            <p className="text-lg text-gray-700">
              At <strong>First Farrufy Travel</strong>, we’re more than a travel agency. We’re a team of dedicated professionals and passionate believers committed to making your Hajj and Umrah experience spiritually fulfilling and worry-free.
              <br /><br />
              Get to know the people who make it all possible—including our respected Brand Ambassador, who shares and supports our vision of faith, excellence, and service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              "WhatsApp Image 2025-07-07 at 23.36.05_fd21828cmeeetus.jpg",
              "WhatsApp Image 2025-07-07 at 23.36.06_a395f8e5meeetourambbb.jpg",
              "WhatsApp Image 2025-07-07 at 23.36.10_0c92dc34brandambassador.jpg",
            ].map((img, i) => (
              <img key={i} src={`/images/${img}`} alt={`Team member ${i + 1}`} className="rounded-lg shadow-md object-cover w-full h-64" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
