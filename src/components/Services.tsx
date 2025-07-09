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
