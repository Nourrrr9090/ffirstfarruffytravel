import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Globe, X, Send, MessageCircle } from "lucide-react";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      from: "agent",
      text: "Assalamu alaikum! Welcome to First Farrufy Travel & Tours. How may we assist you today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const chatEndRef = useRef(null);

  const images = {
    domestic: "/umrah after hajj.jpg",
    hajj: "/images/international hajj basic package.jpg",
    umrah: "/images/umrah package.jpg",
  };

  const openModal = (imageArray: string[]) => {
    setSelectedImages(imageArray);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
    setCurrentImageIndex(0);
  };

  const handleSend = () => {
    if (!userInput.trim()) return;
    const captured = userInput;
    const newMessages = [...chatMessages, { from: "user", text: captured }];
    setChatMessages(newMessages);
    setUserInput("");

    setTimeout(() => {
      const response = getFakeResponse(captured);
      setChatMessages((prev) => [...prev, { from: "agent", text: response }]);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const getFakeResponse = (message) => {
    const lower = message.toLowerCase();
    if (lower.includes("umrah"))
      return "We offer multiple Umrah packages starting from N2.7M.";
    if (lower.includes("hajj"))
      return "Our Hajj packages start from N8.5M.";
    if (lower.includes("china") || lower.includes("visa"))
      return "We process China Business & Tourist Visa within 2 weeks.";
    if (lower.includes("hello") || lower.includes("hi"))
      return "Wa alaikum salam!";
    return "Thank you for your message. One of our agents will respond shortly insha'Allah.";
  };

  useEffect(() => {
    if (isChatOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isChatOpen]);

  const galleryImages = [
    "IMG-20250707-WA0009adddddd.jpg",
    "IMG-20250707-WA0013adddd.jpg",
    "IMG-20250707-WA0025walking.jpg",
    "IMG-20250707-WA0016adddd.jpg",
    "IMG-20250707-WA0023lastt.jpg",
    "hajj01.jpg",  "hajj02.jpg",  "hajj03.jpg",
    "hajj04.jpg",  "hajj05.jpg",  "hajj06.jpg",
    "hajj07.jpg",  "hajj08.jpg",  "hajj09.jpg",
    "hajj10.jpg",  "hajj11.jpg",  "hajj12.jpg",
    "hajj13.jpg",  "hajj14.jpg",  "hajj15.jpg",
    "hajj16.jpg",  "hajj17.jpg",  "hajj18.jpg",
    "hajj19.jpg",  "hajj20.jpg",  "hajj21.jpg",
    "hajj22.jpg",  "hajj23.jpg",  "hajj24.jpg",
    "hajj25.jpg",  "hajj26.jpg",  "hajj27.jpg",
  ];

  const pilgrimagePartnerImages = [
    "WhatsApp Image 2025-07-07 at 23.36.05_fd21828cmeeetus.jpg",
    "WhatsApp Image 2025-07-07 at 23.36.06_a395f8e5meeetourambbb.jpg",
    "WhatsApp Image 2025-07-07 at 23.36.10_0c92dc34brandambassador.jpg",
  ];
const customerGalleryImages = [
"customer1.jpg",
"customer2.jpg",
"customer3.jpg",
"customer4.jpg",
"customer5.jpg",
"customer6.jpg",
"customer7.jpg",
"customer8.jpg",
"customer9.jpg",
"customer10.jpg",
"customer11.jpg",
"customer12.jpg",
"customer13.jpg",
"customer14.jpg",
"customer15.jpg",
];

  const testimonials = [
    {
      text: "This was my first time traveling for Umrah... Jazakumullahu khairan.",
      name: "HAJIYA JAMILA YABO",
      location: "Abuja, Nigeria",
    },
    {
      text: "Their customer service is top-notch... I truly appreciate their professionalism.",
      name: "ALHAJI ABDULGANIYU ABDULRAZAQ AREMU",
      location: "Ilorin, Nigeria",
    },
    {
      text: "Alhamdulillah. This was our third time... We had an amazing Hajj experience.",
      name: "ALH MUKHTARI & HAJIYA RABI KURABAU MAMMAN",
      location: "Katsina, Nigeria",
    },
    {
      text: "Going for Umrah with First Farrufy... May Allah bless them.",
      name: "BARRISTER YARIMA YAKUBU",
      location: "Minna, Nigeria",
    },
    {
      text: "Assalamu alai'kum. Mun sauka lafia lau Alhamdulillah. Hotel din yayi kyau sosai.",
      name: "ALH ALHASSAN SONFADA",
      location: "Lapai, Nigeria",
    },
  ];

  return (
    <>
      {/* Hero Section - Unchanged */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/HajjjimagessssBG.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-700">
              Professional travel services you can trust
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section - Now with single image each */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Packages</h2>
            <p className="text-gray-400">Choose from our trusted travel packages</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Umrah After Hajj */}
            <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 text-white transition-all hover:-translate-y-1">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mb-6">
                  <Plane className="h-10 w-10 text-yellow-400" />
                </div>
                <CardTitle className="text-2xl">Umrah After Hajj</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-8 pb-8">
                <p className="text-gray-400 mb-6">2026 - 3 Star Package</p>
                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <p className="text-3xl font-bold">From &#8358;2.7M</p>
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => openModal(["/images/umrahafterhajj1.jpg"])}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* 2. Umrah Maulud */}
            <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 text-white transition-all hover:-translate-y-1">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mb-6">
                  <Plane className="h-10 w-10 text-yellow-400" />
                </div>
                <CardTitle className="text-2xl">Umrah Maulud 2026</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-8 pb-8">
                <p className="text-gray-400 mb-6">3 Star Package - 1447AH</p>
                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <p className="text-3xl font-bold">From &#8358;2.7M</p>
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => openModal(["/images/umrahmauludnewww.jpeg"])}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* 3. Umrah Nov / Dec */}
            <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 text-white transition-all hover:-translate-y-1">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mb-6">
                  <Plane className="h-10 w-10 text-yellow-400" />
                </div>
                <CardTitle className="text-2xl">Umrah Nov &amp; Dec 2026</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-8 pb-8">
                <p className="text-gray-400 mb-6">3 Star Basic Package</p>
                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <p className="text-3xl font-bold">From &#8358;3.1M</p>
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => openModal(["/images/novanddecumrah26.3.jpg"])}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* 4. Ramadan Umrah */}
            <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 text-white transition-all hover:-translate-y-1">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mb-6">
                  <Plane className="h-10 w-10 text-yellow-400" />
                </div>
                <CardTitle className="text-2xl">Ramadan Umrah</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-8 pb-8">
                <p className="text-gray-400 mb-6">Last 15 Days - 3 Star</p>
                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <p className="text-3xl font-bold">From &#8358;4.9M</p>
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => openModal(["/images/ramadanumrah2027.4.jpg"])}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* 5. Hajj 3 Star */}
            <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 text-white transition-all hover:-translate-y-1">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mb-6">
                  <Plane className="h-10 w-10 text-yellow-400" />
                </div>
                <CardTitle className="text-2xl">Hajj 3 Star Basic</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-8 pb-8">
                <p className="text-gray-400 mb-6">2027 / 1448AH</p>
                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <p className="text-3xl font-bold">From &#8358;8.5M</p>
                </div>
                <Button
                  className="w-full bg-pink-600 hover:bg-pink-700"
                  onClick={() => openModal(["/images/hajjpackage27.jpg"])}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* 6. China Visa */}
            <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 text-white transition-all hover:-translate-y-1">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="h-10 w-10 text-yellow-400" />
                </div>
                <CardTitle className="text-2xl">Business & Tourist Visa</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-8 pb-8">
                <p className="text-gray-400 mb-6">Business &amp; Tourist Visa</p>
                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <p className="text-3xl font-bold">2 Weeks Processing</p>
                </div>
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  onClick={() => openModal(["/images/domesticflightsneww.jpeg"])}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All other sections remain unchanged */}

      {/* Flier Section */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Don&apos;t Miss Our Special Offer
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Explore our exclusive seasonal deals, limited-time pilgrimage discounts,
            and special announcements.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <img
              src="/images/WhatsApp Image 2025-07-08 at 21.20.17_96f07135afterourpackages.jpg"
              alt="Flier 1"
              className="rounded-lg shadow-md object-contain w-full md:w-1/2 max-h-[600px]"
            />
            <img
              src="/images/WhatsApp Image 2025-07-08 at 21.21.38_45bcbe91afterourpackages.jpg"
              alt="Flier 2"
              className="rounded-lg shadow-md object-contain w-full md:w-1/2 max-h-[600px]"
            />
          </div>
        </div>
      </section>
{/* Customer Gallery */}

<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Customer Gallery
      </h2>
      <p className="text-lg text-gray-600">
        Memorable moments from our valued customers
      </p>
    </div>

```
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
  {customerGalleryImages.map((img, i) => (
    <img
      key={i}
      src={`/images/${img}`}
      alt={`Customer ${i + 1}`}
      className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
  ))}
</div>
```

  </div>
</section>

      {/* Hajj Moments Gallery */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Hajj Moments Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Memorable moments captured during our customers&apos; Hajj journeys
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={`/images/${img}`}
                alt={`Hajj moment ${i + 1}`}
                className={[
                  "rounded-lg shadow-md w-full hover:scale-105 transition-transform duration-300",
                  img === "hajj21.jpg"
                    ? "h-auto max-h-[500px] object-contain bg-white p-2"
                    : "object-cover h-64",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Ambassador */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Meet Our Brand Ambassador
            </h2>
            <p className="text-lg text-gray-600">
              A trusted face behind our mission and values
            </p>
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
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Alhaji Nurudeen Isyaku Daza
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                A seasoned traveler, community leader, and passionate advocate for
                spiritual journeys...
              </p>
              <p className="text-gray-600">
                With a deep understanding of the spiritual and emotional significance
                of Hajj and Umrah, he works closely with us with us to ensure that our services not only meet but exceed expectations inspiring confidence in all who travel with us
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilgrimage Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Pilgrimage Partners
            </h2>
            <p className="text-lg text-gray-700">
              At <strong>First Farrufy Travel</strong>, we&apos;re more than a travel
              agency. we're a team of dedicated professionals and passionate believers committed to making your hajj and umrah experience spiritually fulfilling and worry free.

          Get to know the people who make it all possible- including our respected Brand Ambassador, who shares and supports our vision of faith, excellence and service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {pilgrimagePartnerImages.map((img, i) => (
              <img
                key={i}
                src={`/images/${img}`}
                alt={`Partner ${i + 1}`}
                className="rounded-lg shadow-md w-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              What Our Customers Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow"
              >
                <div className="absolute top-0 left-0 text-8xl text-blue-100 opacity-20 leading-none -mt-4 ml-2">
                  &quot;
                </div>
                <p className="text-blue-900 text-base leading-relaxed italic mb-6 mt-6 relative z-10">
                  {t.text}
                </p>
                <div className="border-t border-blue-200 pt-4 flex items-center gap-3">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                      t.name
                    )}&background=3b82f6&color=fff&rounded=true&size=40`}
                    alt={t.name}
                    className="w-10 h-10 rounded-full"
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

      {/* Modal - Single Image (Navigation hidden when only 1 image) */}
      {isModalOpen && selectedImages.length > 0 && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors z-10"
              onClick={closeModal}
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImages[currentImageIndex]}
              alt="Service Detail"
              className="rounded-xl w-full h-auto max-h-[75vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* WhatsApp Chat - Unchanged */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {isChatOpen && (
          <div className="w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
            <div className="bg-green-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    First Farrufy Travel
                  </p>
                  <p className="text-green-100 text-xs">Typically replies instantly</p>
                </div>
              </div>
              <button
                type="button"
                title="Close chat"
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-green-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72 bg-gray-50">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={[
                      "max-w-[75%] rounded-2xl px-3 py-2 text-sm leading-relaxed",
                      msg.from === "user"
                        ? "bg-green-600 text-white rounded-br-sm"
                        : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm",
                    ].join(" ")}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <div className="border-t border-gray-200 p-3 flex gap-2 bg-white">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 outline-none focus:border-green-500 transition-colors"
              />
              <button
                onClick={handleSend}
                className="bg-green-600 hover:bg-green-700 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsChatOpen((prev) => !prev)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
        >
          <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.466.668 4.874 1.938 6.99L2 30l7.234-1.898A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 01-5.832-1.594l-.418-.248-4.294 1.126 1.148-4.18-.272-.43A11.46 11.46 0 014.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.29-8.618c-.344-.172-2.036-1.004-2.352-1.118-.316-.114-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.536-2.766-1.708-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.022-.53.15-.7.154-.154.344-.402.516-.602.172-.2.228-.344.344-.574.114-.23.056-.43-.028-.602-.086-.172-.776-1.872-1.064-2.562-.28-.672-.564-.58-.776-.59-.2-.01-.43-.012-.66-.012s-.602.086-.916.43c-.316.344-1.204 1.176-1.204 2.868s1.232 3.328 1.404 3.558c.172.23 2.426 3.704 5.878 5.194.822.354 1.464.566 1.964.724.824.262 1.574.226 2.168.136.66-.1 2.036-.832 2.322-1.636.288-.802.288-1.49.202-1.634-.086-.144-.316-.228-.66-.4z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Services;