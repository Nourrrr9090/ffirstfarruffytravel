import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50" role="region" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="contact-heading" className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Ready to start your journey? Contact us today</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2"><a href="tel:+2348165711159">+234 8165711159</a></p>
              <p className="text-gray-600"><a href="tel:+2347013691442">+234 7013691442</a></p>
              <p className="text-gray-600"><a href="tel:+2347039053689">+234 7039053689</a></p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 break-word">
                <a href="mailto:firstfarrufytravels@gmail.com">firstfarrufytravels@gmail.com</a>
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="https://maps.google.com/?q=Suite+No.+6,+AL-ASR+PLAZA,+Minna,+Niger+State"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600"
              >
                <p>Suite No. 6, AL-ASR PLAZA</p>
                <p>Adjacent Syringe Roundabout</p>
                <p>General Hospital Road</p>
                <p>Minna, Niger State</p>
              </a>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">Office Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Monday - Friday</p>
              <p className="text-gray-600">8:00 AM - 6:00 PM</p>
              <p className="text-gray-600 mt-2">Saturday</p>
              <p className="text-gray-600">9:00 AM - 4:00 PM</p>
              <p className="text-gray-600 mt-2">Sunday: Closed</p>
            </CardContent>
          </Card>
        </div>
       <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://www.instagram.com/firstfarrufy_travelandtours?igsh=MW9xbzF6cGZnZTd0aA%3D%3D&utm_source=qr"
            aria-label="Follow us on Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <Instagram className="h-8 w-8" />
          </a>
          <a
            href="https://www.facebook.com/share/1At8mR8fgH/?mibextid=wwXIfr"
            aria-label="Follow us on Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <Facebook className="h-8 w-8" />
          </a>
        </div>
        <div className="flex justify-center mt-6">
          <Button asChild>
            <a
              href="https://wa.me/2347013691442"
              aria-label="Book your trip today via WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Trip Today
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;