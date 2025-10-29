
import React from 'react';
import PageHero from '../components/common/PageHero';

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (confirm('Are you sure you want to send this message?')) {
            alert('Thank you for your message! We will get back to you soon.');
            e.currentTarget.reset();
        }
    };
  return (
    <div>
      <PageHero 
        title="Get in Touch"
        subtitle="We're here to answer your questions and help you learn more about our school"
        imageUrl="/images/contact-hero.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                <div className="text-4xl text-[#FFC107] mb-4"><i className="fas fa-map-marker-alt"></i></div>
                <h3 className="text-xl font-bold mb-2 font-['Montserrat']">Visit Us</h3>
                <p className="text-gray-600">Main Road, Kumari,<br/>Purushottampur, 761018,<br/>Ganjam, Odisha, India</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                <div className="text-4xl text-[#FFC107] mb-4"><i className="fas fa-phone"></i></div>
                <h3 className="text-xl font-bold mb-2 font-['Montserrat']">Call Us</h3>
                <p className="text-gray-600">
                    <a href="tel:+919692977727" className="block hover:text-[#FFC107]">+91 9692977727</a>
                    <a href="tel:+919348181404" className="block hover:text-[#FFC107]">+91 9348181404</a>
                </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                <div className="text-4xl text-[#FFC107] mb-4"><i className="fas fa-envelope"></i></div>
                <h3 className="text-xl font-bold mb-2 font-['Montserrat']">Email Us</h3>
                <a href="mailto:schoolsunshineinternational@gmail.com" className="text-gray-600 hover:text-[#FFC107] break-all">schoolsunshineinternational@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 font-['Montserrat']">Send Us a Message</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                 <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFC107] focus:border-[#FFC107]" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFC107] focus:border-[#FFC107]" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFC107] focus:border-[#FFC107]" />
                </div>
                 <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select id="subject" name="subject" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFC107] focus:border-[#FFC107]">
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="academics">Academic Information</option>
                        <option value="other">Other</option>
                    </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFC107] focus:border-[#FFC107]"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#FFC107] text-[#001D3D] font-bold py-3 px-6 rounded-md hover:bg-[#d4a93b] transition-colors duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 font-['Montserrat']">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.5836557350103!2d84.89918879999999!3d19.5165404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a22ab005e907835%3A0x91758fee54bd9111!2sSUNSHINE%20INTERNATIONAL%20SCHOOL!5e0!3m2!1sen!2sin!4v1744714268421!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Montserrat']">Office Hours</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-[#FFC107] mb-4 font-['Montserrat']">Administration Office</h3>
                <ul className="text-gray-600 space-y-2">
                    <li className="flex justify-between border-b pb-1"><span>Monday - Saturday</span> <span>8:00 AM - 2:30 PM</span></li>
                    <li className="flex justify-between"><span>Sunday</span> <span>Holiday</span></li>
                </ul>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-[#FFC107] mb-4 font-['Montserrat']">Admission Office</h3>
                <ul className="text-gray-600 space-y-2">
                    <li className="flex justify-between border-b pb-1"><span>Monday - Saturday</span> <span>9:00 AM - 4:00 PM</span></li>
                    <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                </ul>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-[#FFC107] mb-4 font-['Montserrat']">School Hours</h3>
                <ul className="text-gray-600 space-y-2">
                    <li className="flex justify-between border-b pb-1"><span>Monday - Saturday</span> <span>8:00 AM - 2:30 PM</span></li>
                    <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;