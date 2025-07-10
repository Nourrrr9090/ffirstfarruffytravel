import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Star } from "lucide-react";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { from: "agent", text: "Assalamu alaikum! 👋 Welcome to First Farrufy Travel & Tours. How may we assist you today?" }
  ]);
  const [userInput, setUserInput] = useState("");

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

  const handleSend = () => {
    if (!userInput.trim()) return;

    const newMessages = [...chatMessages, { from: "user", text: userInput }];
    setChatMessages(newMessages);
    setUserInput("");

    setTimeout(() => {
      const response = getFakeResponse(userInput);
      setChatMessages((prev) => [...prev, { from: "agent", text: response }]);
    }, 1200);
  };

  const getFakeResponse = (message: string) => {
    const lower = message.toLowerCase();
    if (lower.includes("umrah")) return "We offer 3, 4, and 5-star Umrah packages starting from ₦2.65M.";
    if (lower.includes("hajj")) return "Our Hajj packages start from ₦8.45M and include visa, accommodation, and transport.";
    if (lower.includes("hello") || lower.includes("hi")) return "Wa alaikum salam! 😊";
    return "Thank you for your message. One of our agents will respond shortly insha'Allah.";
  };

  return (
    <>
      {/* Services Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/HajjjimagessssBG.jpg')" }}>
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-700">Professional travel services you can trust</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                type: "Umrah Packages",
                description: "Year-round Umrah pilgrimage services",
                price: "₦2.650M",
                date: "July to December 2025",
                color: "green",
                image: images.umrah,
              },
              {
                type: "Hajj Packages",
                description: "Complete Hajj pilgrimage packages",
                price: "₦8.450M",
                date: "June 2025",
                color: "red",
                image: images.hajj,
              },
              {
                type: "Domestic Flights",
                description: "Fly easily within Nigeria",
                price: "₦100,000",
                date: "Minna → Abuja → Lagos",
                color: "blue",
                image: images.domestic,
              },
            ].map(({ type, description, price, date, color, image }, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className={`bg-${color}-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    <Plane className={`h-8 w-8 text-${color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{type}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{description}</p>
                  <div className={`bg-${color}-50 p-4 rounded-lg mb-4`}>
                    {type !== "Domestic Flights" && (
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                        <span className="ml-2 text-sm">3 Star Package</span>
                      </div>
                    )}
                    <p className={`text-2xl font-bold text-${color}-700`}>From {price}</p>
                    <p className="text-sm text-gray-600">{date}</p>
                    {type !== "Domestic Flights" && (
                      <p className={`text-xs text-${color}-600 mt-2`}>4 & 5 Star packages available</p>
                    )}
                  </div>
                  <Button className={`w-full bg-${color}-600 hover:bg-${color}-700`} onClick={() => openModal(image)}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flier / Promotion Section */}
<section className="py-20 bg-yellow-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Don't Miss Our Special Offer</h2>
    <p className="text-lg text-gray-600 mb-10">
      Explore our exclusive seasonal deals, limited-time pilgrimage discounts, and special announcements.
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      <img
        src="/images/WhatsApp Image 2025-07-08 at 21.20.17_96f07135afterourpackages.jpg"
        alt="Flier or Offer 1"
        className="rounded-lg shadow-md object-contain w-full md:w-1/2 max-h-[600px]"
      />
      <img
        src="/images/WhatsApp Image 2025-07-08 at 21.21.38_45bcbe91afterourpackages.jpg"
        alt="Flier or Offer 2"
        className="rounded-lg shadow-md object-contain w-full md:w-1/2 max-h-[600px]"
      />
    </div>
  </div>
</section>

{/* Hajj Moments Gallery */}
<section className="py-20 bg-[#f8fafc]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Hajj Moments Gallery</h2>
      <p className="text-lg text-gray-600">
        Memorable moments captured during our customers' Hajj journeys
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        "IMG-20250707-WA0009adddddd.jpg",
        "IMG-20250707-WA0013adddd.jpg",
        "IMG-20250707-WA0025walking.jpg",
        "IMG-20250707-WA0016adddd.jpg",
        "IMG-20250707-WA0023lastt.jpg",
        "hajj01.jpg",
        "hajj02.jpg",
        "hajj03.jpg",
        "hajj04.jpg",
        "hajj05.jpg",
        "hajj06.jpg",
        "hajj07.jpg",
        "hajj08.jpg",
        "hajj09.jpg",
        "hajj10.jpg",
        "hajj11.jpg",
        "hajj12.jpg",
        "hajj13.jpg",
        "hajj14.jpg",
        "hajj15.jpg",
        "hajj16.jpg",
        "hajj17.jpg",
        "hajj18.jpg",
        "hajj19.jpg",
        "hajj20.jpg",
        "hajj21.jpg", // Targeted image
        "hajj22.jpg",
        "hajj23.jpg",
        "hajj24.jpg",
        "hajj25.jpg",
        "hajj26.jpg",
        "hajj27.jpg",
      ].map((img, i) => (
        <img
          key={i}
          src={`/images/${img}`}
          alt={`Hajj moment ${i + 1}`}
          className={`rounded-lg shadow-md w-full ${
            img === "hajj21.jpg"
              ? "object-contain max-h-[400px] bg-white p-2"
              : "object-cover h-64"
          }`}
        />
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
        <img
          key={i}
          src={`/images/${img}`}
          alt={`Team member ${i + 1}`}
          className={`rounded-lg shadow-md w-full bg-white ${
            i === 0 ? "md:col-span-2 h-auto object-contain" : "h-64 object-cover"
          }`}
        />
      ))}
    </div>
  </div>
</section>

{/* Testimonials */}
<section className="py-20 bg-blue-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">What our customers have to say</h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
          text: "Alhamdulillah. This was our third time traveling with them, and they never disappoint. We had an amazing Hajj experience with First Farrufy. The accommodations were close to the Haramain, the guides were knowledgeable, and the entire process was smooth.",
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
        <div
          key={i}
          className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="absolute top-0 left-0 text-8xl text-blue-100 opacity-20 leading-none -mt-4 ml-2">“</div>
          <p className="text-blue-900 text-base leading-relaxed italic mb-6 mt-6 relative z-10">
            {t.text}
          </p>
          <div className="border-t border-blue-200 pt-4 flex items-center gap-3">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=3b82f6&color=fff&rounded=true&size=40`}
              alt={`${t.name} avatar`}
              className="w-10 h-10 rounded-full object-cover border border-blue-200"
            />
            <div>
              <p className="text-lg font-semibold text-blue-700">{t.name}</p>
              <p className="text-sm text-blue-600">{t.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Modal Preview */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Service Detail" className="rounded-md w-full h-auto" />
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <img
            src="/images/whatsapp.jpg"
            alt="WhatsApp"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* WhatsApp Chat Box */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 bg-white border rounded-lg shadow-lg w-80 max-w-full z-50 flex flex-col overflow-hidden">
          <div className="bg-green-600 text-white p-4 font-semibold">
            First Farrufy Support
          </div>
          <div className="flex-1 p-4 overflow-y-auto max-h-96">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`mb-3 ${msg.from === "user" ? "text-right" : "text-left"}`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.from === "user"
                      ? "bg-green-100 text-gray-800"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex border-t p-2">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 outline-none px-2"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="text-green-600 font-semibold px-2" onClick={handleSend}>
              Send
            </button>
          </div>
          <a
            href="https://wa.me/2347013691442?text=Hello%2C%20I%E2%80%99d%20like%20to%20ask%20about%20your%20Hajj%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-100 text-green-700 text-center py-2 hover:bg-green-200 transition-colors"
          >
            Open in WhatsApp ↗
          </a>
        </div>
      )}
    </>
  );
};



export default Services;
